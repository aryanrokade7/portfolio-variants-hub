// Switcher Controller for Aryan Rokade Curated Portfolio Showcase
(function () {
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
    { id: '46', file: 'variant-46-vintage-typewriter.html', name: '46. 1930s Remington Typewriter' },
    { id: '47', file: 'variant-47-casino-slot-machine.html', name: '47. Vegas Golden Jackpot Slot' },
    { id: '48', file: 'variant-48-illuminated-manuscript.html', name: '48. Medieval Illuminated Manuscript' },
    { id: '49', file: 'variant-49-neon-vending.html', name: '49. Akihabara Neon Vending Machine' },
    { id: '50', file: 'variant-50-modular-synth.html', name: '50. Eurorack Modular Synth System' }
  ];

  // If loaded inside an iframe (such as the live simulation in variants-hub), do NOT show the floating switcher bar
  var inIframe = false;
  try {
    inIframe = (window.self !== window.top);
  } catch (e) {
    inIframe = true;
  }
  if (inIframe) {
    return;
  }

  // Determine current variant from URL
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
    <a class="vsb-hub-link" href="../variants-hub.html" title="Open Portfolio Showcase Hub">
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
