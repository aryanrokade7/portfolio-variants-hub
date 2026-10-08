// =======================================================================
// Switcher & Universal Navigation Engine for Aryan Rokade Portfolios
// Features: 84 Variant Directory, Universal Smooth Scroll, Floating Bar.
// (Procedural audio added to interactive game/hardware variants per design)
// =======================================================================

(function () {
  'use strict';

  // 1. REGISTRY OF ALL 84 CURATED PORTFOLIO VARIANTS
  const VARIANTS = [
    { id: '01', file: 'variant-01-neo-brutalism.html', name: '01. Bold Neo-Brutalism' },
    { id: '02', file: 'variant-02-apple-minimal.html', name: '02. Cupertino Clean & Minimal' },
    { id: '03', file: 'variant-03-editorial-luxury.html', name: '03. Luxury Editorial & Serif' },
    { id: '04', file: 'variant-04-swiss-grid.html', name: '04. Swiss International Grid' },
    { id: '05', file: 'variant-05-windows-95.html', name: '05. Retro Windows 95 Desktop' },
    { id: '06', file: 'variant-06-zen-minimal.html', name: '06. Japanese Zen Minimalist' },
    { id: '07', file: 'variant-07-monochrome-mag.html', name: '07. Monochromatic Magazine' },
    { id: '08', file: 'variant-08-nordic-pastel.html', name: '08. Nordic Pastel Minimal' },
    { id: '09', file: 'variant-09-code-editor.html', name: '09. VS Code Editor Studio' },
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
    { id: '28', file: 'variant-28-rpg-character.html', name: '28. Fantasy RPG Character Sheet' },
    { id: '29', file: 'variant-29-receipt-printer.html', name: '29. Retro Thermal Paper Receipt' },
    { id: '30', file: 'variant-30-winamp-player.html', name: '30. Classic 90s Winamp Audio Player' },
    { id: '31', file: 'variant-31-metro-transit-map.html', name: '31. Metro Transit Subway Map' },
    { id: '32', file: 'variant-32-comic-book.html', name: '32. Vintage Graphic Novel Comic Book' },
    { id: '33', file: 'variant-33-game-engine-inspector.html', name: '33. 3D Game Engine Inspector Studio' },
    { id: '34', file: 'variant-34-luxury-horology.html', name: '34. Haute Horlogerie Skeleton Watch' },
    { id: '35', file: 'variant-35-terminal-neovim.html', name: '35. Linux Terminal & Neovim Studio' },
    { id: '36', file: 'variant-36-darkroom-photo.html', name: '36. Analog Darkroom Safelight Lab' },
    { id: '37', file: 'variant-37-linear-issue-tracker.html', name: '37. Linear Agile Sprint Board' },
    { id: '38', file: 'variant-38-steam-library.html', name: '38. Steam Gaming Client Library' },
    { id: '39', file: 'variant-39-postman-api-docs.html', name: '39. Postman REST API Documentation' },
    { id: '40', file: 'variant-40-dribbble-showcase.html', name: '40. Dribbble / Behance Design Studio' },
    { id: '41', file: 'variant-41-sublime-monokai.html', name: '41. Sublime Text Monokai IDE' },
    { id: '42', file: 'variant-42-twitter-tech-feed.html', name: '42. X / Twitter Tech Timeline Feed' },
    { id: '43', file: 'variant-43-nes-cartridge.html', name: '43. 8-Bit Nintendo NES Adventure' },
    { id: '44', file: 'variant-44-slack-workspace.html', name: '44. Slack Enterprise Workspace' },
    { id: '45', file: 'variant-45-retro-pager.html', name: '45. 1990s Alpha Pager Dispatch' },
    { id: '46', file: 'variant-46-twitch-streamer-studio.html', name: '46. Twitch Live Streamer Studio' },
    { id: '47', file: 'variant-47-bloomberg-trading-terminal.html', name: '47. TradingView Financial Terminal' },
    { id: '48', file: 'variant-48-visionos-spatial.html', name: '48. Apple Vision Pro Spatial visionOS' },
    { id: '49', file: 'variant-49-kubernetes-cluster.html', name: '49. Kubernetes & Docker Cloud Dashboard' },
    { id: '50', file: 'variant-50-substack-tech-editorial.html', name: '50. Substack Tech Engineering Journal' },
    { id: '51', file: 'variant-51-arc-studio-minimal.html', name: '51. Arc Studio Architecture' },
    { id: '52', file: 'variant-52-executive-monochrome.html', name: '52. Obsidian Executive Monochrome' },
    { id: '53', file: 'variant-53-tokyo-modernist.html', name: '53. Tokyo Modernist Grid' },
    { id: '54', file: 'variant-54-nordic-engineering.html', name: '54. Nordic Engineering Blueprint' },
    { id: '55', file: 'variant-55-berlin-type-foundry.html', name: '55. Berlin Type Foundry' },
    { id: '56', file: 'variant-56-solaris-ambient.html', name: '56. Solaris Ambient Dark' },
    { id: '57', file: 'variant-57-kinetic-split-editorial.html', name: '57. Kinetic Split Editorial' },
    { id: '58', file: 'variant-58-strata-data-sheets.html', name: '58. Strata Technical Data Sheet' },
    { id: '59', file: 'variant-59-atelier-gallery.html', name: '59. Atelier Design Monograph' },
    { id: '60', file: 'variant-60-vessel-zenith-minimal.html', name: '60. Vessel Zenith Minimal Noir' },
    { id: '61', file: 'variant-61-florence-atelier-serif.html', name: '61. Florence Atelier Serif' },
    { id: '62', file: 'variant-62-zurich-concrete-grid.html', name: '62. Zürich Concrete Grid' },
    { id: '63', file: 'variant-63-kyoto-tea-ceremony.html', name: '63. Kyoto Chado Zen' },
    { id: '64', file: 'variant-64-vogue-parisian-editorial.html', name: '64. Parisian Gazette Monochrome' },
    { id: '65', file: 'variant-65-copenhagen-soft-oat.html', name: '65. Copenhagen Soft Oat' },
    { id: '66', file: 'variant-66-oxford-scholarly-press.html', name: '66. Oxford Scholarly Press' },
    { id: '67', file: 'variant-67-basel-bauhaus-columns.html', name: '67. Basel Modernist Grid' },
    { id: '68', file: 'variant-68-ryokan-zenith-wabi.html', name: '68. Ryokan Charcoal Zen' },
    { id: '69', file: 'variant-69-manhattan-monochrome-broadsheet.html', name: '69. Manhattan Broadsheet Noir' },
    { id: '70', file: 'variant-70-stockholm-archipelago-mist.html', name: '70. Stockholm Archipelago Mist' },
    { id: '71', file: 'variant-71-original-main.html', name: '71. Original Main Portfolio' },
    { id: '72', file: 'variant-72-hud-hologram.html', name: '72. Arc Reactor Hologram HUD' },
    { id: '73', file: 'variant-73-telegram-dispatch.html', name: '73. Western Union Telegram Dispatch' },
    { id: '74', file: 'variant-74-starship-cockpit.html', name: '74. Sci-Fi Starship Flight Deck' },
    { id: '75', file: 'variant-75-rotary-switchboard.html', name: '75. 1950s Rotary Telephone Exchange' },
    { id: '76', file: 'variant-76-airport-fids.html', name: '76. Solari Split-Flap Airport Board' },
    { id: '77', file: 'variant-77-vinyl-turntable.html', name: '77. Audiophile 33 RPM Vinyl Turntable' },
    { id: '78', file: 'variant-78-passport-dossier.html', name: '78. Diplomatic Travel Passport Dossier' },
    { id: '79', file: 'variant-79-michelin-menu.html', name: '79. Michelin 3-Star Gastronomy Menu' },
    { id: '80', file: 'variant-80-vintage-typewriter.html', name: '80. 1930s Remington Typewriter' },
    { id: '81', file: 'variant-81-casino-slot-machine.html', name: '81. Vegas Golden Jackpot Slot Machine' },
    { id: '82', file: 'variant-82-illuminated-manuscript.html', name: '82. Medieval Illuminated Manuscript' },
    { id: '83', file: 'variant-83-neon-vending.html', name: '83. Akihabara Neon Vending Machine' },
    { id: '84', file: 'variant-84-modular-synth.html', name: '84. Eurorack Modular Synth System' }
  ];

  // Check if running inside iframe (e.g., in Variants Hub simulator)
  var inIframe = false;
  try {
    inIframe = (window.self !== window.top);
  } catch (e) {
    inIframe = true;
  }

  const isPreview = window.location.search.includes('preview') || 
                    window.location.hash.includes('preview');

  // 2. UNIVERSAL SMOOTH SCROLLING ENGINE
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
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } catch (err) {}
    }, { passive: false });
  }

  // 3. INTERACTIVE AMBIENT BACKGROUND CANVAS
  function initInteractiveBackground() {
    if (inIframe || isPreview) return;
    if (document.getElementById('ap-interactive-canvas')) return;

    const canvas = document.createElement('canvas');
    canvas.id = 'ap-interactive-canvas';
    document.body.prepend(canvas);

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0, height = 0;
    let mouse = { x: -1000, y: -1000, active: false };

    function isDarkTheme() {
      const docTheme = document.documentElement.getAttribute('data-theme') || document.body.getAttribute('data-theme');
      if (docTheme === 'light') return false;
      const bg = window.getComputedStyle(document.body).backgroundColor;
      if (!bg || bg === 'transparent' || bg.includes('rgba(0, 0, 0, 0)')) return true;
      const rgb = bg.match(/\d+/g);
      if (!rgb || rgb.length < 3) return true;
      const luma = 0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2];
      return luma < 140;
    }

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

    const count = 30;
    const particles = [];
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * (window.innerWidth || 1000),
        y: Math.random() * (window.innerHeight || 800),
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 1.5 + 0.8,
        baseAlpha: Math.random() * 0.35 + 0.15
      });
    }

    function render() {
      if (document.hidden) {
        requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      const dark = isDarkTheme();
      const particleColor = dark ? 'rgba(56, 189, 248, ' : 'rgba(30, 41, 59, ';
      const glowColor = dark ? 'rgba(56, 189, 248, 0.08)' : 'rgba(0, 113, 227, 0.04)';

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

  // Initialize enhancements on DOM ready
  function initEnhancements() {
    initSmoothScrolling();
    initInteractiveBackground();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initEnhancements);
  } else {
    initEnhancements();
  }

  // 4. FLOATING BAR CONTROLLER
  // Suppress floating bar inside iframe OR on the main Variants Hub page OR if preview parameter is passed
  const isHubPage = window.location.pathname.includes('variants-hub') || 
                    document.getElementById('simContainer') !== null ||
                    document.getElementById('tilesGrid') !== null;

  if (inIframe || isHubPage || isPreview) {
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
    <a class="vsb-replicate-btn" href="${(window.location.pathname.includes('/variants/') ? '../' : './')}index.html?replicate=${currentVariant.id}" title="Replicate this style for your own portfolio">
      <span>🎨 Replicate Style</span>
    </a>
    <a class="vsb-hub-link" href="${(window.location.pathname.includes('/variants/') ? '../' : './')}index.html" title="Open Portfolio Showcase Hub">
      <span>⊞ Hub Gallery</span>
    </a>
  `;

  document.body.appendChild(bar);

  // Dropdown event
  document.getElementById('vsbVariantSelector').addEventListener('change', function (e) {
    window.location.href = e.target.value;
  });

  // Keyboard navigation
  window.addEventListener('keydown', function (e) {
    if (['input', 'textarea', 'select'].includes(document.activeElement.tagName.toLowerCase())) return;
    if (e.key === 'ArrowLeft') {
      window.location.href = VARIANTS[prevIndex].file;
    } else if (e.key === 'ArrowRight') {
      window.location.href = VARIANTS[nextIndex].file;
    }
  });

})();
