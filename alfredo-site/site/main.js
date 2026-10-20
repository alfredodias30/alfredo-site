(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;

  /* ---------- grain texture (generated once, used as CSS var) ---------- */
  {
    const c = document.createElement('canvas');
    c.width = c.height = 180;
    const x = c.getContext('2d');
    const d = x.createImageData(180, 180);
    for (let i = 0; i < d.data.length; i += 4) {
      const r = Math.random(); const v = 255 - r * r * r * 80;
      d.data[i] = d.data[i + 1] = d.data[i + 2] = v;
      d.data[i + 3] = 255;
    }
    x.putImageData(d, 0, 0);
    document.documentElement.style.setProperty('--noise', `url(${c.toDataURL()})`);
  }

  /* ---------- galleries from data-files ("p07_01-14,p08_01-04") ---------- */
  const expand = spec => spec.split(',').flatMap(part => {
    const m = part.trim().match(/^(p\d+)_(\d+)-(\d+)$/);
    if (!m) return [part.trim()];
    const out = [];
    for (let i = +m[2]; i <= +m[3]; i++) out.push(`${m[1]}_${String(i).padStart(2, '0')}`);
    return out;
  });
  const imgTag = (name, alt, i) =>
    `<img src="img/${name}.jpg" alt="${alt} (${i + 1})" loading="lazy" decoding="async" data-zoom>`;

  document.querySelectorAll('[data-files]').forEach(el => {
    const files = expand(el.dataset.files);
    const alt = el.dataset.alt || '';
    const html = files.map((f, i) => imgTag(f, alt, i)).join('');
    if (el.classList.contains('marquee')) {
      // second copy is decorative so the loop is seamless
      const copy = files.map(f => `<img src="img/${f}.jpg" alt="" aria-hidden="true" loading="lazy" decoding="async" data-zoom>`).join('');
      el.innerHTML = `<div class="track">${html}${reduce ? '' : copy}</div>`;
    } else {
      el.innerHTML = html;
    }
  });

  /* ---------- drag-to-scroll strips ---------- */
  document.querySelectorAll('.strip').forEach(s => {
    let down = false, sx = 0, sl = 0, moved = 0;
    s.addEventListener('pointerdown', e => {
      if (e.pointerType !== 'mouse') return;
      down = true; moved = 0; sx = e.clientX; sl = s.scrollLeft;
    });
    window.addEventListener('pointermove', e => {
      if (!down) return;
      const dx = e.clientX - sx;
      moved = Math.max(moved, Math.abs(dx));
      if (moved > 4) s.classList.add('dragging');
      s.scrollLeft = sl - dx;
    });
    window.addEventListener('pointerup', () => {
      if (!down) return;
      down = false;
      requestAnimationFrame(() => s.classList.remove('dragging'));
    });
    s.addEventListener('click', e => { if (moved > 4) { e.stopPropagation(); e.preventDefault(); } }, true);
  });

  /* ---------- spray paint ---------- */
  const sprays = [];
  document.querySelectorAll('.spray-zone').forEach(zone => {
    const cv = zone.querySelector('canvas.spray');
    const ctx = cv.getContext('2d');
    const dark = zone.classList.contains('contact');
    const scale = 0.5; // paint at half-res: soft, cheap
    let w = 0, h = 0, visible = false, last = null, idleT = 0, lastInput = 0;

    const size = () => {
      const r = zone.getBoundingClientRect();
      w = cv.width = Math.max(1, Math.round(r.width * scale));
      h = cv.height = Math.max(1, Math.round(r.height * scale));
    };
    size();
    new ResizeObserver(size).observe(zone);
    new IntersectionObserver(([en]) => { visible = en.isIntersecting; }).observe(zone);

    // pre-rendered spray sprites (soft core + hard mist dots), drawn scaled with alpha
    const sprites = [0, 1, 2, 3].map(() => {
      const c = document.createElement('canvas'), R = 64;
      c.width = c.height = R * 2;
      const x = c.getContext('2d');
      const g = x.createRadialGradient(R, R, 0, R, R, R);
      g.addColorStop(0, 'rgba(62,240,58,1)');
      g.addColorStop(.45, 'rgba(62,240,58,.5)');
      g.addColorStop(1, 'rgba(62,240,58,0)');
      x.fillStyle = g;
      x.fillRect(0, 0, R * 2, R * 2);
      for (let i = 0; i < 70; i++) {
        const ang = Math.random() * 6.283, d = Math.sqrt(Math.random()) * R * .98;
        x.fillStyle = `rgba(62,240,58,${.4 + Math.random() * .6})`;
        x.fillRect(R + Math.cos(ang) * d, R + Math.sin(ang) * d, 1.5, 1.5);
      }
      return c;
    });
    const puffs = [];
    const LIFE = dark ? 2600 : 3600;
    const puff = (x, y, r, a) => {
      puffs.push({ x, y, r, a, t: performance.now(), s: sprites[(Math.random() * 4) | 0] });
      if (puffs.length > 600) puffs.splice(0, puffs.length - 600);
    };

    const stroke = (x, y, pressure = 1) => {
      x *= scale; y *= scale;
      const base = Math.min(w, h) * (dark ? .1 : .085) * pressure;
      if (last) {
        const dx = x - last.x, dy = y - last.y;
        const dist = Math.hypot(dx, dy);
        const steps = Math.min(16, Math.ceil(dist / (base * .3)));
        for (let i = 1; i <= steps; i++) {
          const t = i / steps;
          puff(last.x + dx * t, last.y + dy * t, base * (.8 + Math.random() * .4), .2);
        }
      } else {
        puff(x, y, base, .25);
      }
      last = { x, y };
    };

    const local = e => {
      const r = zone.getBoundingClientRect();
      return [e.clientX - r.left, e.clientY - r.top];
    };
    zone.addEventListener('pointermove', e => {
      if (e.pointerType === 'touch' && e.buttons === 0) return;
      lastInput = performance.now();
      const [x, y] = local(e);
      stroke(x, y);
    });
    zone.addEventListener('pointerleave', () => { last = null; });
    zone.addEventListener('pointerup', () => { last = null; });
    zone.addEventListener('touchmove', e => {
      const t = e.touches[0];
      if (!t) return;
      lastInput = performance.now();
      const r = zone.getBoundingClientRect();
      stroke(t.clientX - r.left, t.clientY - r.top, 1.2);
    }, { passive: true });
    zone.addEventListener('touchend', () => { last = null; });

    sprays.push({
      tick(now) {
        if (!visible) return;
        ctx.clearRect(0, 0, w, h);
        let dead = 0;
        for (const p of puffs) {
          const age = (now - p.t) / LIFE;
          if (age >= 1) { dead++; continue; }
          ctx.globalAlpha = p.a * (1 - age) * (1 - age);
          const r = p.r * (1 + age * .35); // mist spreads as it settles
          ctx.drawImage(p.s, p.x - r, p.y - r, r * 2, r * 2);
        }
        ctx.globalAlpha = 1;
        if (dead) puffs.splice(0, dead);
        // ghost sprayer while nobody is painting, so the page is never static
        if (!reduce && now - lastInput > 2600) {
          idleT += 0.006;
          const gx = (0.5 + 0.42 * Math.sin(idleT * 1.3) * Math.cos(idleT * 0.7)) * w / scale;
          const gy = (0.55 + 0.38 * Math.sin(idleT * 0.9 + 1)) * h / scale;
          if (!this.ghost) { last = null; this.ghost = true; }
          stroke(gx, gy, .8);
        } else if (this.ghost) { this.ghost = false; last = null; }
      }
    });
  });
  if (sprays.length) {
    const loop = now => { sprays.forEach(s => s.tick(now)); requestAnimationFrame(loop); };
    requestAnimationFrame(loop);
  }

  /* ---------- index peek (desktop) ---------- */
  const peek = document.querySelector('.peek');
  if (peek && fine) {
    let tx = 0, ty = 0, px = 0, py = 0, on = false;
    document.querySelectorAll('.idx a[data-peek]').forEach(a => {
      new Image().src = a.dataset.peek;
      a.addEventListener('mouseenter', () => { peek.src = a.dataset.peek; peek.classList.add('on'); on = true; });
      a.addEventListener('mouseleave', () => { peek.classList.remove('on'); on = false; });
    });
    addEventListener('mousemove', e => { tx = e.clientX + 120; ty = e.clientY; });
    const follow = () => {
      px += (tx - px) * .16; py += (ty - py) * .16;
      if (on || peek.classList.contains('on')) peek.style.transform = `translate(${px}px, ${py}px) translate(-50%, -50%) rotate(${(tx - px) * .02 - 3}deg)`;
      requestAnimationFrame(follow);
    };
    follow();
  }

  /* ---------- lightbox ---------- */
  const lb = document.querySelector('.lightbox');
  const lbImg = lb.querySelector('img');
  const lbCap = lb.querySelector('.lb-cap');
  let set = [], idx = 0;
  const show = i => {
    idx = (i + set.length) % set.length;
    const im = set[idx];
    lbImg.src = im.currentSrc || im.src;
    lbImg.alt = im.alt;
    const proj = im.closest('.proj');
    const name = proj ? proj.querySelector('.proj-bar span:last-child').textContent : '';
    lbCap.textContent = `${name} — ${idx + 1} / ${set.length}`;
  };
  document.addEventListener('click', e => {
    const im = e.target.closest('[data-zoom]');
    if (!im || im.closest('.lightbox')) return;
    const scope = im.closest('.proj') || document;
    set = [...scope.querySelectorAll('[data-zoom]')].filter(x => x.getAttribute('aria-hidden') !== 'true');
    let i = set.indexOf(im);
    if (i < 0) { // clicked a marquee duplicate: map back to the original by src
      i = set.findIndex(x => x.src === im.src);
    }
    show(Math.max(0, i));
    lb.showModal();
  });
  lb.querySelector('.lb-close').addEventListener('click', () => lb.close());
  lb.querySelector('.lb-prev').addEventListener('click', () => show(idx - 1));
  lb.querySelector('.lb-next').addEventListener('click', () => show(idx + 1));
  lb.addEventListener('click', e => { if (e.target === lb) lb.close(); });
  lb.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') show(idx + 1);
    if (e.key === 'ArrowLeft') show(idx - 1);
  });

  /* ---------- reveal on scroll ---------- */
  if (!reduce && 'IntersectionObserver' in window) {
    const targets = document.querySelectorAll('.manifesto .big, .disciplines, .index-head, .ch-head h2, .proj-intro, .proj > .display-s, .grid, .id-pair, .gory, .wide, .flyers, .cv-title, .timeline li, .contact h2, .mail');
    const io = new IntersectionObserver(entries => entries.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
    }), { rootMargin: '0px 0px -8% 0px' });
    targets.forEach(t => { t.classList.add('rv'); io.observe(t); });

    const hours = document.querySelector('.hours');
    if (hours) {
      hours.querySelectorAll('li').forEach(li => li.style.setProperty('--grow', 0));
      new IntersectionObserver(([en], o) => {
        if (!en.isIntersecting) return;
        hours.querySelectorAll('li').forEach((li, i) => setTimeout(() => li.style.setProperty('--grow', 1), i * 120));
        o.disconnect();
      }, { threshold: .4 }).observe(hours);
    }
  }

  /* ---------- copy e-mail ---------- */
  document.querySelectorAll('[data-copy]').forEach(b => {
    const label = b.textContent;
    b.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(b.dataset.copy);
        b.textContent = 'E-mail copiado';
      } catch {
        b.textContent = b.dataset.copy;
      }
      setTimeout(() => { b.textContent = label; }, 2200);
    });
  });
})();
