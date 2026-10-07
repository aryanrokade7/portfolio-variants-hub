// =======================================================================
// Switcher & Universal Interactive Engine for Aryan Rokade Portfolios
// Features: 50 Variant Directory, Web Audio API Micro-Haptics, Smooth Scroll,
//           Adaptive Custom Cursor & Interactive Ambient Particle Canvas.
// =======================================================================

(function () {
  'use strict';

  // 1. REGISTRY OF ALL 50 CURATED PORTFOLIO VARIANTS
  const VARIANTS = [
    { id: '01', file: 'variant-01-neo-brutalism.html', name: '01. Bold Neo-Brutalism' },
    { id: '02', file: 'variant-02-apple-minimal.html', name: '02. Cupertino Clean & Minimal' },
    { id: '03', file: 'variant-03-editorial-luxury.html', name: '03. Luxury Editorial & Serif' },
    { id: '04', file: 'variant-04-swiss-grid.html', name: '04. Swiss International Grid' },
    { id: '05', file: 'variant-05-windows-95.html', name: '05. Retro Windows 95 Desktop' },
    { id: '06', file: 'variant-06-zen-minimal.html', name: '06. Japanese Zen Minimalist' },
    { id: '07', file: 'variant-07-monochrome-mag.html', name: '07. Monochromatic Magazine' },
    { id: '08', file: 'variant-08-nordic-pastel.html', name: '08. Nordic Pastel Minimal' },
    { id: '09', file: 'variant-09-code-editor.html', name: '09. IDE Code Editor Studio' },
    { id: '10', file: 'variant-10-bauhaus-geometry.html', name: '10. Bauhaus Constructivism' },
    { id: '11', file: 'variant-11-craft-scrapbook.html', name: '11. Dark Craft Pinboard' },
    { id: '12', file: 'variant-12-kinetic-poster.html', name: '12. Kinetic Typographic Poster' },
    { id: '13', file: 'variant-13-classic-mac.html', name: '13. Classic Mac 1984 System 7' },
    { id: '14', file: 'variant-14-coffee-espresso.html', name: '14. Artisan Espresso Roast' },
    { id: '15', file: 'variant-15-gameboy-pocket.html', name: '15. Game Boy Pocket Handheld' },
    { id: '16', file: 'variant-16-bios-firmware.html', name: '16. BIOS / UEFI Setup Utility' },
    { id: '17', file: 'variant-17-audio-daw.html', name: '17. Spotify & DAW Studio Player' },
    { id: '18', file: 'variant-18-figma-editor.html', name: '18. Figma Vector Canvas Editor' },
    { id: '19', file: 'variant-19-nextstep-os.html', name: '19. Steve Jobs NeXTSTEP 1989' },
    { id: '20', file: 'variant-20-blender-viewport.html', name: '20. Blender 3D Viewport Studio' },
    { id: '21', file: 'variant-21-notion-workspace.html', name: '21. Notion & Obsidian Workspace' },
    { id: '22', file: 'variant-22-github-commit.html', name: '22. GitHub Dark Git Profile' },
    { id: '23', file: 'variant-23-cassette-walkman.html', name: '23. Retro Sony Walkman Cassette' },
    { id: '24', file: 'variant-24-polaroid-gallery.html', name: '24. Polaroid Instant Photo Gallery' },
    { id: '25', file: 'variant-25-discord-workspace.html', name: '25. Discord Dev Community Server' },
    { id: '26', file: 'variant-26-arcade-fighter.html', name: '26. 16-Bit Arcade Fighter Select' },
    { id: '27', file: 'variant-27-daily-newspaper.html', name: '27. Vintage Broadsheet Newspaper' },
    { id: '28', file: 'variant-28-rpg-character.html', name: '28. Fantasy RPG Quest & Character Sheet' },
    { id: '29', file: 'variant-29-receipt-printer.html', name: '29. Retro Thermal Paper Receipt' },
    { id: '30', file: 'variant-30-winamp-player.html', name: '30. Classic 90s Winamp Audio Player' },
    { id: '31', file: 'variant-31-metro-transit-map.html', name: '31. Metro Transit Subway Map' },
    { id: '32', file: 'variant-32-comic-book.html', name: '32. Vintage Graphic Novel Comic Book' },
    { id: '33', file: 'variant-33-game-engine-inspector.html', name: '33. 3D Game Engine Inspector Studio' },
    { id: '34', file: 'variant-34-luxury-horology.html', name: '34. Haute Horlogerie Skeleton Watch' },
    { id: '35', file: 'variant-35-hud-hologram.html', name: '35. Holographic Arc Reactor HUD' },
    { id: '36', file: 'variant-36-darkroom-photo.html', name: '36. Analog Darkroom Safelight Lab' },
    { id: '37', file: 'variant-37-telegram-dispatch.html', name: '37. Western Union Vintage Telegram' },
    { id: '38', file: 'variant-38-starship-cockpit.html', name: '38. Sci-Fi Starship Flight Deck' },
    { id: '39', file: 'variant-39-rotary-switchboard.html', name: '39. 1950s Rotary Telephone Exchange' },
    { id: '40', file: 'variant-40-airport-fids.html', name: '40. Solari Split-Flap Airport Board' },
    { id: '41', file: 'variant-41-vinyl-turntable.html', name: '41. Audiophile 33 RPM Vinyl Turntable' },
    { id: '42', file: 'variant-42-passport-dossier.html', name: '42. Diplomatic Travel Passport Dossier' },
    { id: '43', file: 'variant-43-nes-cartridge.html', name: '43. 8-Bit Nintendo NES Adventure' },
    { id: '44', file: 'variant-44-michelin-menu.html', name: '44. Michelin 3-Star Gastronomy Menu' },
    { id: '45', file: 'variant-45-retro-pager.html', name: '45. 1990s Motorola Alpha Pager' },
    { id: '46', file: 'vintage-typewriter.html', name: '46. 1930s Remington Typewriter' },
    { id: '47', file: 'variant-47-casino-slot-machine.html', name: '47. Vegas Golden Jackpot Slot' },
    { id: '48', file: 'variant-48-illuminated-manuscript.html', name: '48. Medieval Illuminated Manuscript' },
    { id: '49', file: 'variant-49-neon-vending.html', name: '49. Akihabara Neon Vending Machine' },
    { id: '50', file: 'variant-50-modular-synth.html', name: '50. Eurorack Modular Synth System' }
  ];
  // Correct file 46 name mapping
  VARIANTS[45].file = 'variant-46-vintage-typewriter.html';

  // Check if running inside iframe (e.g., in Variants Hub simulator)
  var inIframe = false;
  try {
    inIframe = (window.self !== window.top);
  } catch (e) {
    inIframe = true;
  }

  // 2. WEB AUDIO API MICRO-HAPTICS ENGINE
  const APAudio = (function () {
    let ctx = null;
    let enabled = localStorage.getItem('ap-sound-muted') !== 'true';
    let lastHoverTime = 0;

    function getContext() {
      if (!ctx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) ctx = new AudioCtx();
      }
      if (ctx && ctx.state === 'suspended') {
        ctx.resume().catch(() => {});
      }
      return ctx;
    }

    // Unlock audio context on initial user action
    function unlock() {
      const c = getContext();
      if (c && c.state === 'suspended') {
        c.resume().catch(() => {});
      }
    }
    ['click', 'pointerdown', 'keydown', 'scroll'].forEach(evt => {
      window.addEventListener(evt, unlock, { once: true, passive: true });
    });

    function playHover() {
      if (!enabled) return;
      const now = performance.now();
      if (now - lastHoverTime < 65) return; // Debounce rapid hover
      lastHoverTime = now;

      try {
        const c = getContext();
        if (!c) return;
        const osc = c.createOscillator();
        const gain = c.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(1400, c.currentTime);
        osc.frequency.exponentialRampToValueAtTime(800, c.currentTime + 0.035);
        gain.gain.setValueAtTime(0.018, c.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + 0.035);
        osc.connect(gain);
        gain.connect(c.destination);
        osc.start();
        osc.stop(c.currentTime + 0.04);
      } catch (e) {}
    }

    function playClick() {
      if (!enabled) return;
      try {
        const c = getContext();
        if (!c) return;
        const osc = c.createOscillator();
        const gain = c.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(440, c.currentTime);
        osc.frequency.exponentialRampToValueAtTime(180, c.currentTime + 0.05);
        gain.gain.setValueAtTime(0.04, c.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + 0.055);
        osc.connect(gain);
        gain.connect(c.destination);
        osc.start();
        osc.stop(c.currentTime + 0.06);
      } catch (e) {}
    }

    function toggleMute() {
      enabled = !enabled;
      localStorage.setItem('ap-sound-muted', (!enabled).toString());
      if (enabled) playClick();
      return enabled;
    }

    function isMuted() {
      return !enabled;
    }

    return { playHover, playClick, toggleMute, isMuted };
  })();

  // 3. UNIVERSAL SMOOTH SCROLLING ENGINE
  function initSmoothScrolling() {
    document.addEventListener('click', function (e) {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      if (!href || href === '#' || href.length < 2) return;
      try {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          APAudio.playClick();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } catch (err) {}
    }, { passive: false });
  }

  // 4. ADAPTIVE CUSTOM CURSOR ENGINE
  function initCustomCursor() {
    // Only enable on pointer-capable desktop devices
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    const dot = document.createElement('div');
    dot.className = 'ap-cursor-dot ap-cursor-hidden';
    const ring = document.createElement('div');
    ring.className = 'ap-cursor-ring ap-cursor-hidden';
    document.body.appendChild(dot);
    document.body.appendChild(ring);

    let mouseX = -100, mouseY = -100;
    let ringX = -100, ringY = -100;
    let isVisible = false;

    window.addEventListener('pointermove', function (e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) {
        isVisible = true;
        dot.classList.remove('ap-cursor-hidden');
        ring.classList.remove('ap-cursor-hidden');
        ringX = mouseX;
        ringY = mouseY;
      }
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
    }, { passive: true });

    document.addEventListener('mouseleave', function () {
      isVisible = false;
      dot.classList.add('ap-cursor-hidden');
      ring.classList.add('ap-cursor-hidden');
    });

    document.addEventListener('mouseenter', function () {
      isVisible = true;
      dot.classList.remove('ap-cursor-hidden');
      ring.classList.remove('ap-cursor-hidden');
    });

    // Smooth cursor follower physics animation
    function updateCursor() {
      if (isVisible) {
        ringX += (mouseX - ringX) * 0.22;
        ringY += (mouseY - ringY) * 0.22;
        ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      }
      requestAnimationFrame(updateCursor);
    }
    requestAnimationFrame(updateCursor);

    // Interactive element hover & click delegation
    const interactiveSelector = 'a, button, input, select, textarea, [role="button"], .card, .btn, .item, .chip-btn, .action-btn, .variant-tile, [onclick]';

    document.addEventListener('pointerover', function (e) {
      if (e.target && e.target.closest(interactiveSelector)) {
        ring.classList.add('hovering');
        APAudio.playHover();
      }
    }, { passive: true });

    document.addEventListener('pointerout', function (e) {
      if (e.target && e.target.closest(interactiveSelector)) {
        ring.classList.remove('hovering');
      }
    }, { passive: true });

    document.addEventListener('pointerdown', function (e) {
      ring.classList.add('clicking');
      APAudio.playClick();

      // Click ripple wave
      const ripple = document.createElement('div');
      ripple.className = 'ap-click-ripple';
      ripple.style.left = e.clientX + 'px';
      ripple.style.top = e.clientY + 'px';
      document.body.appendChild(ripple);
      setTimeout(() => ripple.remove(), 450);
    }, { passive: true });

    document.addEventListener('pointerup', function () {
      ring.classList.remove('clicking');
    }, { passive: true });
  }

  // 5. INTERACTIVE AMBIENT BACKGROUND CANVAS
  function initInteractiveBackground() {
    const canvas = document.createElement('canvas');
    canvas.id = 'ap-interactive-canvas';
    document.body.prepend(canvas);

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0, height = 0;
    let mouse = { x: -500, y: -500, active: false };

    // Detect background luminance to pick harmonious particle color
    function isDarkTheme() {
      const bg = window.getComputedStyle(document.body).backgroundColor;
      if (!bg || bg === 'transparent') return true;
      const rgb = bg.match(/\d+/g);
      if (!rgb || rgb.length < 3) return true;
      const luma = 0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2];
      return luma < 128;
    }

    const dark = isDarkTheme();
    const particleColor = dark ? 'rgba(56, 189, 248, ' : 'rgba(30, 41, 59, ';
    const glowColor = dark ? 'rgba(56, 189, 248, 0.08)' : 'rgba(0, 0, 0, 0.03)';

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize, { passive: true });

    window.addEventListener('pointermove', function (e) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    }, { passive: true });

    document.addEventListener('mouseleave', function () {
      mouse.active = false;
    });

    // Particle nodes
    const count = 30;
    const particles = [];
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * (width || window.innerWidth),
        y: Math.random() * (height || window.innerHeight),
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 1.6 + 0.8,
        baseAlpha: Math.random() * 0.35 + 0.15
      });
    }

    function render() {
      if (document.hidden) {
        requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // Mouse ambient illumination glow
      if (mouse.active) {
        const grad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 180);
        grad.addColorStop(0, glowColor);
        grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 180, 0, Math.PI * 2);
        ctx.fill();
      }

      // Update & render particles
      for (let i = 0; i < count; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        else if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        else if (p.y > height) p.y = 0;

        // Mouse gentle repulsion
        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 110 && dist > 0) {
            const force = (110 - dist) / 110 * 0.8;
            p.x += (dx / dist) * force;
            p.y += (dy / dist) * force;
          }
        }

        ctx.fillStyle = particleColor + p.baseAlpha + ')';
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        // Connect nearby particles
        for (let j = i + 1; j < count; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 85) {
            const lineAlpha = (1 - dist / 85) * (dark ? 0.12 : 0.06);
            ctx.strokeStyle = particleColor + lineAlpha + ')';
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
  }

  // Initialize interactive enhancements on DOM ready
  function initEnhancements() {
    initSmoothScrolling();
    initCustomCursor();
    initInteractiveBackground();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initEnhancements);
  } else {
    initEnhancements();
  }

  // 6. FLOATING BAR CONTROLLER
  // Suppress floating bar inside iframe OR on the main Variants Hub page
  const isHubPage = window.location.pathname.includes('variants-hub') || 
                    document.getElementById('simContainer') !== null ||
                    document.getElementById('tilesGrid') !== null;

  if (inIframe || isHubPage) {
    return;
  }

  const currentPath = window.location.pathname;
  let currentIndex = VARIANTS.findIndex(v => currentPath.endsWith(v.file));
  if (currentIndex === -1) currentIndex = 0;
  const currentVariant = VARIANTS[currentIndex];

  const prevIndex = (currentIndex - 1 + VARIANTS.length) % VARIANTS.length;
  const nextIndex = (currentIndex + 1) % VARIANTS.length;

  const bar = document.createElement('div');
  bar.id = 'variant-switcher-bar';
  bar.innerHTML = `
    <div class="vsb-badge">
      <span class="vsb-pulse"></span>
      <span>VARIANT #${currentVariant.id} (${currentIndex + 1}/${VARIANTS.length})</span>
    </div>
    <div class="vsb-nav-btns">
      <a class="vsb-btn" href="${VARIANTS[prevIndex].file}" title="Previous Variant (Press ←)" aria-label="Previous Variant">◀</a>
      <select class="vsb-select" id="vsbVariantSelector" aria-label="Select Variant">
        ${VARIANTS.map((v, i) => `<option value="${v.file}" ${i === currentIndex ? 'selected' : ''}>${v.name}</option>`).join('')}
      </select>
      <a class="vsb-btn" href="${VARIANTS[nextIndex].file}" title="Next Variant (Press →)" aria-label="Next Variant">▶</a>
    </div>
    <button class="vsb-audio-btn" id="vsbAudioToggle" title="Toggle Sound Micro-Haptics" aria-label="Toggle Sound">
      ${APAudio.isMuted() ? '🔇' : '🔊'}
    </button>
    <a class="vsb-hub-link" href="../variants-hub.html" title="Open Portfolio Showcase Hub">
      <span>⊞ Hub Gallery</span>
    </a>
  `;

  document.body.appendChild(bar);

  // Dropdown event
  document.getElementById('vsbVariantSelector').addEventListener('change', function (e) {
    APAudio.playClick();
    window.location.href = e.target.value;
  });

  // Sound toggle button
  document.getElementById('vsbAudioToggle').addEventListener('click', function () {
    const isNowMuted = !APAudio.toggleMute();
    this.innerText = isNowMuted ? '🔇' : '🔊';
  });

  // Keyboard navigation
  window.addEventListener('keydown', function (e) {
    if (['input', 'textarea', 'select'].includes(document.activeElement.tagName.toLowerCase())) return;
    if (e.key === 'ArrowLeft') {
      APAudio.playClick();
      window.location.href = VARIANTS[prevIndex].file;
    } else if (e.key === 'ArrowRight') {
      APAudio.playClick();
      window.location.href = VARIANTS[nextIndex].file;
    }
  });

})();
