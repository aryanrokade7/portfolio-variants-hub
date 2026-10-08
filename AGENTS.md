# 🤖 AGENTS.md — AI & Developer Architecture Guide for Portfolio-Variants-Hub

> **Master Reference Manual for AI Agents, LLMs, and Human Engineers**  
> *Repository:* `aryanrokade7/portfolio-variants-hub`  
> *Author & Subject:* **Aryan Rokade** (Full Stack Developer & AI Engineer)  
> *Last Updated:* October 2026

---

## 1. Executive Summary & Purpose

`Portfolio-Variants-Hub` is a production-grade, zero-build-step portfolio laboratory comprising **84 distinct portfolio architectures, interactive design archetypes, and an Apple-grade Showcase Hub & Multi-Device Simulator**.

The project serves a dual purpose:
1. **The Showcase Hub (`index.html`):** An interactive central hub featuring a real-time multi-device iframe simulator (Desktop, Tablet, Mobile), instant fuzzy search, category filtering (Flagship, Minimal, Editorial, Developer, Creative, Retro, Gaming), a horizontal scrollable card gallery, and a template source exporter.
2. **The 84 Curated Standalone Portfolios (`variants/variant-01-*.html` to `variant-84-*.html`):** Fully functional, standalone developer portfolios spanning minimalist, editorial, skeuomorphic, IDE, OS, retro console, and futuristic HUD archetypes.
3. **The Switcher Engine (`switcher.js` + `switcher.css`):** An injected floating navigation pill that allows users to traverse sequentially between all 84 variants with keyboard shortcuts (`ArrowLeft` / `ArrowRight`), dropdown selection, and direct return to the Hub.
4. **The Promotion Automation (`set-main-portfolio.ps1`):** A PowerShell utility enabling the one-click selection and promotion of any variant into the root `index.html` as Aryan's primary live portfolio.

---

## 2. Directory Structure & File Map

```
Portfolio-Variants-Hub/
├── index.html                     # The PortfolioForge Showcase Hub & Simulator (Master catalog)
├── style.css                      # Design tokens and styles for Variant 71 (Original production)
├── switcher.css                   # Floating switcher pill stylesheet (Universal navigation)
├── switcher.js                    # Universal switcher logic (keyboard nav, smooth scroll, iframe detection)
├── lenis.min.js                   # Smooth momentum scroll library (Lenis)
├── Aryan_Rokade_Resume.pdf        # Aryan's official resume
├── aryan-rokade.jpg               # Aryan's profile portrait image
├── set-main-portfolio.ps1         # One-click CLI promoter to set any variant as root index.html
├── README.md                      # GitHub showcase documentation & variant directory
├── AGENTS.md                      # [THIS FILE] AI Agent & Developer Reference Guide
├── previews/                      # High-resolution card snapshots for all 84 variants (variant-01.jpg -> 84.jpg)
└── variants/                      # 84 Standalone Portfolio Variants & mirrored assets
    ├── switcher.css               # Mirror copy for relative path resolution within /variants/
    ├── switcher.js                # Mirror copy for relative path resolution within /variants/
    ├── style.css                  # Mirror copy for Variant 71 within /variants/
    ├── lenis.min.js               # Mirror copy for smooth scroll within /variants/
    ├── previews/                  # Mirror copy of card previews
    ├── Aryan_Rokade_Resume.pdf    # Mirror copy of resume
    ├── aryan-rokade.jpg           # Mirror copy of portrait
    ├── variant-01-neo-brutalism.html
    ├── variant-02-apple-minimal.html
    ├── ...
    └── variant-84-modular-synth.html
```

---

## 3. Strict Invariants: What MUST Be Kept Intact

Whenever modifying, refactoring, or extending this repository, the AI Agent **MUST** preserve the following inviolable rules:

### 3.1. The 4-Way Registry Synchronization Law (CRITICAL)
The metadata of the 84 variants (numbers `#01`–`#84`, filenames, titles, and categories) is tightly synchronized across **four distinct locations**. Any change to variant numbering, renaming, addition, or removal **MUST** be performed synchronously in all four locations:

1. **`variants/switcher.js` AND root `switcher.js`:**  
   The `const VARIANTS = [...]` array (lines 11–96).
2. **`index.html`:**  
   - The `const VARIANTS_DATA = [...]` JSON registry.
   - The 84 individual `<article class="variant-card" ...>` DOM nodes in `#mainCardsGrid`.
   - The category counter badges and filter chips.
3. **`set-main-portfolio.ps1`:**  
   The `$variants = @{ 1 = '...'; ... 84 = '...' }` PowerShell hash map.
4. **`README.md`:**  
   The Markdown summary tables listing `#01` to `#84`.

> ⚠️ **Warning:** Mismatched arrays between `switcher.js` and `index.html` will cause the iframe simulator or the switcher floating bar to throw `404 Not Found` or skip variants during keyboard cycling!

---

### 3.2. Aryan Rokade's Factual Profile Data
All variants represent the professional portfolio of **Aryan Rokade**. Never overwrite this factual information with placeholder lorem ipsum or fictional developer identities:

| Data Field | Factual Value |
|---|---|
| **Full Name** | Aryan Rokade |
| **Role** | Full Stack Developer & AI Engineer / Computer Engineering Student |
| **Education** | B.E. in Information Technology, Vidyavardhini's College of Engineering and Technology (VCET), Mumbai University (2023–2027) |
| **Email** | `aryanrokade416@gmail.com` |
| **Phone** | `+91 85912 24192` |
| **Location** | Mumbai, Maharashtra, India |
| **GitHub** | `https://github.com/aryanrokade7` |
| **LinkedIn** | `https://www.linkedin.com/in/aryan-rokade-git-aryanrokade7/` |
| **Resume Asset** | `Aryan_Rokade_Resume.pdf` (or `../Aryan_Rokade_Resume.pdf`) |
| **Headshot Asset** | `aryan-rokade.jpg` (or `../aryan-rokade.jpg`) |
| **Top Hackathon Award**| 🏆 **2nd Position**, Techblitz National Hackathon (Emergency Healthcare Dispatch) |
| **Work Experience** | Web Development Intern at **Octanet Services Pvt. Ltd.** |

#### The Four Core Featured Projects:
1. **VyaparFlow (Full-Stack Inventory & GST Invoicing SaaS):**  
   *Tech:* Next.js, Node.js, Express, PostgreSQL, Prisma, Tailwind CSS, Razorpay.  
   *Details:* Multi-tenant business management, automated GST calculation, PDF invoices, role-based access.
2. **CyberSentinel (Real-Time Network Threat Monitoring):**  
   *Tech:* Python, Scapy, FastAPI, WebSockets, Next.js, Recharts.  
   *Details:* Sub-millisecond packet sniffer, ARP spoofing detection, SYN flood DoS alerting, interactive security telemetry.
3. **Saturn Finance (Decentralized Crypto Portfolio & Gas Analytics):**  
   *Tech:* React, TypeScript, Ethers.js, Tailwind CSS, CoinGecko API.  
   *Details:* Multi-wallet net worth tracking, live Ethereum gas fee heatmaps, ERC-20 token metrics.
3. **MRI Brain Tumor Detection (Deep Learning Diagnostic U-Net):**  
   *Tech:* PyTorch, TensorFlow / Keras, OpenCV, FastAPI, Docker.  
   *Details:* 95%+ validation accuracy, MRI image tumor segmentation mask generation, medical diagnostic inference.

---

### 3.3. Dual Serving Context & Relative Path Invariance
Variants exist inside `/variants/`, but can also be copied directly to the root as `index.html` via `set-main-portfolio.ps1`.
- **In `/variants/variant-XX.html`:**  
  Asset calls look like `switcher.css`, `switcher.js`, `aryan-rokade.jpg`, and `Aryan_Rokade_Resume.pdf`.
- **In root `index.html` (if swapped):**  
  Asset calls look identical because the assets are duplicated in both root and `/variants/`.
- **Defensive Image Handling:**  
  Always include fallback attributes on user photos:  
  `onerror="if(!this.dataset.retry){this.dataset.retry='1';this.src='aryan-rokade.jpg';}"`

---

### 3.4. Switcher Isolation, Iframe & Preview Query Suppression
`switcher.js` is included in all 84 variants. It automatically determines its runtime environment:
```javascript
var inIframe = false;
try {
  inIframe = (window.self !== window.top);
} catch (e) {
  inIframe = true;
}

const isPreview = window.location.search.includes('preview') || 
                  window.location.hash.includes('preview');

const isHubPage = window.location.pathname.includes('variants-hub') || 
                  document.getElementById('simContainer') !== null ||
                  document.getElementById('tilesGrid') !== null;

if (inIframe || isHubPage || isPreview) {
  return; // Suppress floating switcher bar inside simulator, Hub, or snapshot previews
}
```
**Do NOT remove this suppression.** Without it, every variant rendered in the Hub's iframe preview will render a duplicate nested floating switcher bar inside the simulator window, and automated screenshots will capture the switcher bar across hero sections.

---

### 3.5. Zero-Build Vanilla Stack (No Bundler Requirement)
- The entire project must run with static serving (`npx serve .` or Python `http.server` or GitHub Pages).
- Do not introduce Vite, Webpack, Babel, or NPM compile steps into existing variant files.
- All styles and scripts in variants should remain self-contained HTML/CSS/JS with Google Fonts / CDN links.

---

### 3.6. Clean Switcher Experience (No Global Intrusive Overlays)
Global custom cursor rings, forced global audio clicks, and noisy particle canvas overlays were intentionally removed from `switcher.js`.  
- **Do NOT add global audio or global custom cursor followers to `switcher.js`.**
- Audio and bespoke cursors belong strictly to specific, thematic variants that require them (e.g. Game Boy, Winamp, Eurorack Synth, Arcade Fighter).

---

### 3.7. Mandatory Rule: Synchronize & Update AGENTS.md After Every Change (CRITICAL)
Whenever an AI agent, LLM, or human engineer makes **ANY** change, addition, deletion, styling update, or architectural modification in this repository:
- **You MUST update `AGENTS.md` immediately to reflect the latest state of the project.**
- Keep file directories, variant registries, preview asset mappings, behavioral invariants, and design patterns accurate and up-to-date.
- Never complete a task or hand back execution without verifying that `AGENTS.md` mirrors the latest codebase reality.

---

## 4. Complete Directory of All 84 Variants

The 84 variants are divided into **7 aesthetic categories**:

| Category | Count | Aesthetic Description |
|---|---|---|
| **🌟 Flagship** | 5 | Apple-minimal, Neo-brutalist, Swiss international, and production Vercel archetypes. |
| **🌿 Minimal** | 15 | Scandinavian, Japanese Zen, monochrome executive, and architectural blueprints. |
| **📰 Editorial** | 17 | High-fashion serif typography, newspapers, academic journals, and tasting menus. |
| **💻 Developer** | 9 | VS Code, Neovim, Sublime Text, GitHub commit matrix, Linear, Postman, Slack, Kubernetes. |
| **🎨 Creative** | 21 | DAW studio, Figma canvas, Blender 3D, metro transit, synthesizers, sci-fi HUDs. |
| **🕹️ Retro** | 10 | Windows 95, Mac 1984, BIOS setup, NeXTSTEP, Walkman cassette, 90s pager, typewriter. |
| **🎮 Gaming** | 7 | Game Boy Pocket, 16-bit arcade select, RPG character sheet, Winamp, NES, Vegas slots. |

### Complete Mapping Index (#01–#84):

```
#01 [flagship]  : variant-01-neo-brutalism.html         - Bold Neo-Brutalism (Canary yellow, 3.5px black borders)
#02 [flagship]  : variant-02-apple-minimal.html          - Cupertino Clean & Minimal (SF Pro typography, frosted glass)
#03 [flagship]  : variant-03-editorial-luxury.html       - Luxury Editorial & Serif (Vogue/Kinfolk typography)
#04 [flagship]  : variant-04-swiss-grid.html             - Swiss International Grid (Rigid 12-col grid, red rules)
#05 [retro]     : variant-05-windows-95.html             - Retro Windows 95 Desktop (Teal background, Start bar, bevels)
#06 [minimal]   : variant-06-zen-minimal.html            - Japanese Zen Minimalist (Sumi-e ink, washi paper, kanji)
#07 [editorial] : variant-07-monochrome-mag.html         - Monochromatic Magazine (High-contrast B&W print columns)
#08 [minimal]   : variant-08-nordic-pastel.html          - Nordic Pastel Minimal (Powder blue, lavender, Scandinavian)
#09 [developer] : variant-09-code-editor.html            - VS Code Editor Studio (File tree, tabs, breadcrumbs, statusbar)
#10 [editorial] : variant-10-bauhaus-geometry.html       - Bauhaus Constructivism (Primary red/blue/yellow, diagonals)
#11 [creative]  : variant-11-craft-scrapbook.html        - Dark Craft Pinboard (Corkboard, taped polaroids, sticky notes)
#12 [editorial] : variant-12-kinetic-poster.html         - Kinetic Typographic Poster (Marquee banners, massive type)
#13 [retro]     : variant-13-classic-mac.html            - Classic Mac 1984 System 7 (1-bit pixel art, Chicago font)
#14 [editorial] : variant-14-coffee-espresso.html        - Artisan Espresso Roast (Warm crema, dark mocha roastery)
#15 [gaming]    : variant-15-gameboy-pocket.html         - Game Boy Pocket Handheld (4-shade green LCD, Web Audio synth)
#16 [retro]     : variant-16-bios-firmware.html          - BIOS / UEFI Setup Utility (Aptio blue screen, memory POST)
#17 [creative]  : variant-17-audio-daw.html              - Spotify & DAW Studio Player (Waveform audio, beat meters)
#18 [creative]  : variant-18-figma-editor.html           - Figma Vector Canvas Editor (Dark canvas, Pen tool, layer list)
#19 [retro]     : variant-19-nextstep-os.html            - Steve Jobs NeXTSTEP 1989 (3D beveled NeXT dock, PostScript)
#20 [creative]  : variant-20-blender-viewport.html       - Blender 3D Viewport Studio (Interactive wireframe cube, XYZ gizmo)
#21 [developer] : variant-21-notion-workspace.html       - Notion & Obsidian Workspace (Sidebar page tree, toggle callouts)
#22 [developer] : variant-22-github-commit.html          - GitHub Dark Git Profile (Commit heatmap, pinned repos)
#23 [retro]     : variant-23-cassette-walkman.html       - Retro Sony Walkman Cassette (Rotating tape reels, audio player)
#24 [editorial] : variant-24-polaroid-gallery.html       - Polaroid Instant Photo Gallery (Developing film snapshots)
#25 [creative]  : variant-25-discord-workspace.html      - Discord Dev Community Server (Voice channels, chat bubbles, bot embeds)
#26 [gaming]    : variant-26-arcade-fighter.html         - 16-Bit Arcade Fighter Select (Capcom style, health bars, FIGHT!)
#27 [editorial] : variant-27-daily-newspaper.html        - Vintage Broadsheet Newspaper (The Aryan Chronicle, print columns)
#28 [gaming]    : variant-28-rpg-character.html          - Fantasy RPG Character Sheet (HP/MP gauges, inventory slots, quest log)
#29 [retro]     : variant-29-receipt-printer.html        - Retro Thermal Paper Receipt (POS receipt roll, jagged edge, barcode)
#30 [gaming]    : variant-30-winamp-player.html          - Classic 90s Winamp Audio Player (Winamp 2.91 skin, spectrum analyzer)
#31 [creative]  : variant-31-metro-transit-map.html      - Metro Transit Subway Map (Vignelli transit lines, interchange stops)
#32 [creative]  : variant-32-comic-book.html             - Vintage Graphic Novel Comic Book (Ben-Day dots, speech bubbles, action bursts)
#33 [creative]  : variant-33-game-engine-inspector.html  - 3D Game Engine Inspector Studio (Unity/Unreal tree, C# script inspector)
#34 [creative]  : variant-34-luxury-horology.html        - Haute Horlogerie Skeleton Watch (Visible gear trains, tourbillon)
#35 [developer] : variant-35-terminal-neovim.html        - Linux Terminal & Neovim Studio (ZSH cyan prompt, Neovim statusline)
#36 [creative]  : variant-36-darkroom-photo.html         - Analog Darkroom Safelight Lab (Red safelight, chemical developing bath)
#37 [developer] : variant-37-linear-issue-tracker.html   - Linear Agile Sprint Board (Kanban sprint lanes, priority badges)
#38 [gaming]    : variant-38-steam-library.html          - Steam Gaming Client Library (Steam dark blue UI, PLAY button)
#39 [developer] : variant-39-postman-api-docs.html       - Postman REST API Documentation (HTTP method pills, JSON responses)
#40 [creative]  : variant-40-dribbble-showcase.html      - Dribbble / Behance Design Studio (Visual shot cards, view counters, likes)
#41 [developer] : variant-41-sublime-monokai.html        - Sublime Text Monokai IDE (Monokai syntax colors, minimap)
#42 [creative]  : variant-42-twitter-tech-feed.html      - X / Twitter Tech Timeline Feed (Verified badge, threaded posts)
#43 [gaming]    : variant-43-nes-cartridge.html          - 8-Bit Nintendo NES Adventure (Pixel brick platforms, chiptune audio)
#44 [developer] : variant-44-slack-workspace.html        - Slack Enterprise Workspace (Slack sidebar, channel list, emoji)
#45 [retro]     : variant-45-retro-pager.html            - 1990s Alpha Pager Dispatch (Molded plastic beeper, LCD dot matrix)
#46 [creative]  : variant-46-twitch-streamer-studio.html - Twitch Live Streamer Studio (LIVE broadcast dashboard, chat stream)
#47 [creative]  : variant-47-bloomberg-trading-terminal.html - TradingView Financial Terminal (Candlestick charts, ticker tape)
#48 [creative]  : variant-48-visionos-spatial.html       - Apple Vision Pro Spatial visionOS (Refractive glass, 3D floating depth)
#49 [developer] : variant-49-kubernetes-cluster.html     - Kubernetes & Docker Cloud Dashboard (Pod health telemetry, memory meters)
#50 [editorial] : variant-50-substack-tech-editorial.html- Substack Tech Engineering Journal (Creamy editorial paper, serif essays)
#51 [minimal]   : variant-51-arc-studio-minimal.html     - Arc Studio Architecture (Architectural gridlines, coordinate tags)
#52 [minimal]   : variant-52-executive-monochrome.html   - Obsidian Executive Monochrome (Pitch black matte, silver foil)
#53 [minimal]   : variant-53-tokyo-modernist.html        - Tokyo Modernist Grid (Ginza poster, Japanese katakana typography)
#54 [minimal]   : variant-54-nordic-engineering.html     - Nordic Engineering Blueprint (Cyan CAD drafting blueprint)
#55 [minimal]   : variant-55-berlin-type-foundry.html    - Berlin Type Foundry (Specimen type sheet, oversized glyphs)
#56 [minimal]   : variant-56-solaris-ambient.html        - Solaris Ambient Dark (Cosmic twilight, violet and teal gradients)
#57 [editorial] : variant-57-kinetic-split-editorial.html- Kinetic Split Editorial (Dual-contrast monochrome split screen)
#58 [editorial] : variant-58-strata-data-sheets.html     - Strata Technical Data Sheet (Industrial specification matrix, serials)
#59 [editorial] : variant-59-atelier-gallery.html        - Atelier Design Monograph (Gallery exhibition catalogue, picture frames)
#60 [minimal]   : variant-60-vessel-zenith-minimal.html  - Vessel Zenith Minimal Noir (Pure void black, 8% opacity dividers)
#61 [editorial] : variant-61-florence-atelier-serif.html - Florence Atelier Serif (Tuscan terracotta, olive, Bodoni type)
#62 [minimal]   : variant-62-zurich-concrete-grid.html   - Zürich Concrete Grid (Swiss architectural brutalism, safety orange)
#63 [minimal]   : variant-63-kyoto-tea-ceremony.html     - Kyoto Chado Zen (Matcha green, bamboo slats, serene tranquility)
#64 [editorial] : variant-64-vogue-parisian-editorial.html- Parisian Gazette Monochrome (Haute couture broadsheet, delicate serif)
#65 [minimal]   : variant-65-copenhagen-soft-oat.html    - Copenhagen Soft Oat (Danish soft oat cream, rounded geometry)
#66 [editorial] : variant-66-oxford-scholarly-press.html - Oxford Scholarly Press (Deep navy blue, gold crest foil, footnotes)
#67 [minimal]   : variant-67-basel-bauhaus-columns.html  - Basel Modernist Grid (Swiss tri-column rhythm, cobalt blue)
#68 [minimal]   : variant-68-ryokan-zenith-wabi.html     - Ryokan Charcoal Zen (Charcoal textures, cedar wood, amber lantern)
#69 [editorial] : variant-69-manhattan-monochrome-broadsheet.html - Manhattan Broadsheet Noir (Dark mode Wall Street gazette)
#70 [minimal]   : variant-70-stockholm-archipelago-mist.html - Stockholm Archipelago Mist (Baltic navy, sea mist grey)
#71 [flagship]  : variant-71-original-main.html          - Original Main Portfolio (Official live production portfolio)
#72 [creative]  : variant-72-hud-hologram.html           - Arc Reactor Hologram HUD (Iron Man Jarvis sci-fi diagnostics)
#73 [retro]     : variant-73-telegram-dispatch.html      - Western Union Telegram Dispatch (1890s telegraph paper, Morse code)
#74 [creative]  : variant-74-starship-cockpit.html       - Sci-Fi Starship Flight Deck (Warp core animation, interstellar map)
#75 [retro]     : variant-75-rotary-switchboard.html     - 1950s Rotary Telephone Exchange (Bell System pulse rotary, patch cords)
#76 [creative]  : variant-76-airport-fids.html           - Solari Split-Flap Airport Board (Mechanical tumbling flap board)
#77 [creative]  : variant-77-vinyl-turntable.html        - Audiophile 33 RPM Vinyl Turntable (Spinning vinyl record, tonearm scrub)
#78 [editorial] : variant-78-passport-dossier.html       - Diplomatic Travel Passport Dossier (Embossed coat of arms, visas, MRZ)
#79 [editorial] : variant-79-michelin-menu.html          - Michelin 3-Star Gastronomy Menu (Tasting menu courses, sommelier pairings)
#80 [retro]     : variant-80-vintage-typewriter.html     - 1930s Remington Typewriter (Mechanical strike hammers, return chime)
#81 [gaming]    : variant-81-casino-slot-machine.html    - Vegas Golden Jackpot Slot Machine (3-reel spinning slots, pull lever)
#82 [editorial] : variant-82-illuminated-manuscript.html - Medieval Illuminated Manuscript (14th-century gilded vellum, wax seal)
#83 [creative]  : variant-83-neon-vending.html           - Akihabara Neon Vending Machine (Tokyo cyberpunk drink vending, can drop)
#84 [creative]  : variant-84-modular-synth.html          - Eurorack Modular Synth System (Patch cables, knobs, Web Audio oscillator)
```

---

## 5. Architectural Deep-Dive: Hub & Switcher

### 5.1. The Hub & Simulator Engine (`index.html`)
The hub at the root directory operates as a central design gallery and sandbox:
- **Responsive Iframe Sandbox:**  
  `<div class="sim-iframe-viewport" id="simViewport"><iframe id="simIframe" src="variants/variant-01-neo-brutalism.html"></iframe></div>`
- **Device Emulation Widths:**  
  Desktop: `100%`, Tablet: `768px`, Mobile: `390px` via `.seg-btn` controls.
- **Fullscreen Theater Mode:**  
  Toggled with `toggleFullscreenTheater()` or the `Escape` key.
- **Template Code Exporter Modal (`#templateModal`):**  
  Uses `fetch('variants/' + v.file)` to extract the raw HTML of any selected variant and copies it directly to the user's clipboard or triggers a local file download.
- **Live Search & Category Filter:**  
  Functions `setFilter(cat, btn)` and `filterCards()` filter the gallery DOM by title, description, and `data-cat` attributes in real time.

### 5.2. The Switcher Controller (`switcher.js`)
Injected into every variant, the switcher provides:
- **DOM Injection:** Renders `<div id="variant-switcher-bar">` fixed at the bottom center of the screen (`z-index: 999999`).
- **Keyboard Trapping:** Listens for `ArrowLeft` (previous variant) and `ArrowRight` (next variant), safely skipping keyboard triggers if the user has an `<input>`, `<textarea>`, or `<select>` focused.
- **Universal Anchor Smoothing:** Intercepts `a[href^="#"]` clicks and smoothly scrolls to `#work`, `#about`, `#contact`, etc.

### 5.3. Procedural Audio Synthesis In Themed Variants
Hardware-inspired variants (such as Game Boy #15, NES #43, Walkman #23, Pager #45, Solari Board #76, Modular Synth #84) feature **procedural Web Audio API synthesis** instead of bulky MP3 assets:
- Uses `audioCtx.createOscillator()` with square, sawtooth, or triangle waveforms.
- Employs `exponentialRampToValueAtTime()` for volume envelopes.
- Generates procedural noise buffers for mechanical clicks, relays, and paper tears.
- Respects mobile autoplay policies by unlocking `audioCtx` upon the first user interaction (`click`, `keydown`, `touchstart`).
- Provides on-screen mute/unmute toggles (e.g. `[🔊 SOUND ON]`).

### 5.4. High-Resolution Card Snapshot Previews & Enhanced Horizontal Reel
Every card in `index.html` showcases a genuine, high-resolution starting snapshot of the respective portfolio variant:
- **Expanded Card Sizing:** Cards are sized at `350px` width with a `215px` preview frame, `15px 16px` internal padding, and `1.04rem` headings for visual prominence.
- **Preview Optimization:** Rendered as crisp 640x400 JPEGs (`previews/variant-XX.jpg`) inside `.card-preview-canvas` with hover zoom transitions and chrome title bars.
- **Mouse Wheel Horizontal Translation:** `#mainCardsGrid` features an intelligent wheel listener that normalizes `e.deltaMode` (38x multiplier for line mode, clientWidth for page mode, 1.25x for pixel mode). It seamlessly translates vertical mouse wheel scrolling into horizontal track panning while releasing the wheel event when the start or end of the track is reached.
- **Interactive Drag-to-Scroll:** Implements smooth mouse drag-and-drop panning (`cursor: grab`, switching to `grabbing` during active drag) with automatic click-suppression after drag maneuvers.
- **Trackpad & Arrow Controls:** Supports multi-touch swipe, keyboard bracket keys `[` / `]`, and dual navigation arrows advancing by `740px` (~2 cards) per step.

### 5.5. Style Replicator & Personalization Studio
The Hub features a 4-tab **Style Replicator & Customizer Studio** modal (`#templateModal`) allowing any engineer or designer to adopt any of the 84 aesthetic archetypes for their personal portfolio:
1. **🎨 Replicate With My Info Tab:**
   - **Form Fields:** Full Name, Role/Headline, Email, Location, GitHub URL, LinkedIn URL, Featured Projects 1 & 2 (names and taglines), and optional custom avatar URL.
   - **⚡ Auto-Fill Sample Data:** 1-click test profile populator for quick interactive evaluation.
   - **🚀 Test Live in Simulator:** Generates a dynamic HTML document in-memory using `Blob` and `URL.createObjectURL()`, injects a `<base href="...">` tag for seamless asset loading, loads directly into `#simIframe`, and brings the multi-device simulator into view with an active reset button (`↺ Reset`).
   - **⤓ Export My Portfolio (.html):** Triggers client-side browser download of the customized, single-file HTML file with all personal credentials substituted and external switcher toolbars cleanly removed.
   - **📋 Copy Custom HTML:** Copies the customized source code directly to the clipboard.
2. **🤖 AI Style Prompt Tab:**
   - Dynamically compiles a rich prompt for **Cursor**, **Claude**, **ChatGPT**, or **Antigravity** containing the archetype's exact palette tokens, typography, layout philosophy, and user's profile to assist in generating additional pages or framework components.
3. **⚡ Raw Template Tab:**
   - Provides direct access to the original unedited variant source file and download link.
4. **🎯 Design Tokens & CSS Tab:**
   - Displays visual color chips (base, accent) with HEX codes and an exportable `:root { ... }` CSS custom properties snippet.
5. **Universal Deep-Linking (`?replicate=XX`):**
   - Injected into every variant's floating switcher pill via the `🎨 Replicate Style` button (`.vsb-replicate-btn`). Clicking it immediately opens `index.html?replicate=XX`, focuses the simulator, and presents the studio pre-loaded with that variant.

### 5.6. Sleek Action-Embedded Strip Footer (`.hub-footer-strip`)
The previous multi-paragraph footer was replaced with a compact, Apple-grade frosted action strip:
- **Brand & Metadata (Left):** Pulsating live status indicator (`.footer-brand-dot`), brand label `PortfolioForge / Aryan Rokade`, and `84 Archetypes` count pill.
- **Embedded Action Pills (Right):** Icon-embedded buttons for instant interaction:
  - 🖥️ **Simulator:** Quick smooth scroll to `#simContainer`.
  - 🎨 **Archetypes:** Quick smooth scroll to `#mainCardsGrid`.
  - ⚡ **Replicate:** Opens the Style Replicator Studio for the currently selected variant.
  - 📖 **Guide:** Opens the modal documentation walkthrough.
  - ⭐ **GitHub:** Direct link to repository with star icon.
  - ↑ **Top:** Smooth scroll to top of page.

---

## 6. How to Make Safe Changes & Enhancements

### 6.1. Workflow for Adding a New Variant (#85+)
If you are tasked with adding a new portfolio variant:
1. **Create the Variant File:**  
   Save it as `variants/variant-85-[name].html`. Ensure it links to `switcher.css` and imports `<script src="switcher.js"></script>` before `</body>`.
2. **Update `variants/switcher.js` & root `switcher.js`:**  
   Add `{ id: '85', file: 'variant-85-[name].html', name: '85. [Title]' }` to the `VARIANTS` array.
3. **Update `set-main-portfolio.ps1`:**  
   Add `85 = 'variant-85-[name].html'` to the `$variants` hash table.
4. **Update `index.html`:**  
   - Add the metadata object to `VARIANTS_DATA`.
   - Add a `<article class="variant-card" data-cat="[cat]" data-id="85" ...>` element in `#mainCardsGrid` with its preview image tag.
   - Update the category counters if applicable.
5. **Generate Preview Snapshot:**  
   Capture a 1200x800 snapshot with `?preview=1`, resize to 640x400 JPEG, and save as `previews/variant-85.jpg` (mirrored in `variants/previews/`).
6. **Update `README.md`:**  
   Add entry #85 to the summary table.
7. **Update `AGENTS.md` (Mandatory):**  
   Record the new variant in the directory mapping and update the variant count.

### 6.2. Workflow for Enhancing an Existing Variant
When improving the visual fidelity or responsiveness of an existing variant:
- **Keep Structure Intact:** Maintain sections for Hero/Intro, Experience/Projects, Skills/Tech, and Contact.
- **Maintain Contrast & Typography:** Use Google Fonts (e.g., Space Grotesk, Syne, Inter, JetBrains Mono, Outfit, Playfair Display) that match the designated archetype.
- **Micro-Interactions:** Enhance hover states, card elevations, glassmorphic sheen, or button active transforms.
- **Test In Mobile Viewport:** Ensure elements do not cause horizontal layout overflow (`overflow-x: hidden` on root containers where appropriate).
- **Update AGENTS.md (Mandatory):** Document any significant feature enhancements or design improvements.

### 6.3. Updating Aryan Rokade's Personal Information
If Aryan updates his resume, email, or projects:
- Replace `Aryan_Rokade_Resume.pdf` in **both** root and `/variants/`.
- Replace `aryan-rokade.jpg` in **both** root and `/variants/`.
- When modifying project cards across variants, preserve the core tech stacks and impact metrics of **VyaparFlow**, **CyberSentinel**, **Saturn Finance**, and **MRI Brain Tumor Detection**.
- **Update `AGENTS.md`:** Update Section 3.2 with the updated profile credentials.

---

## 7. Verification & QA Checklist

Before completing any AI coding task or submitting changes to this repository, verify:

- [ ] **No 404s:** All variants load properly in `/variants/variant-XX-*.html`.
- [ ] **Switcher Bar Visibility:** Standalone variants show the floating bottom navigation bar; the bar is **hidden** when viewed inside the Hub simulator iframe or with `?preview=1`.
- [ ] **Keyboard Navigation:** Pressing `ArrowLeft` and `ArrowRight` navigates smoothly between neighboring variants.
- [ ] **Hub Search & Filter:** Searching in `index.html` filters cards instantly without JS console errors.
- [ ] **Card Previews Verified:** All 84 cards in `index.html` display authentic `previews/variant-XX.jpg` snapshots and scale smoothly on hover.
- [ ] **Style Replicator Studio:** Modal opens with 4 functioning tabs (`Replicate With My Info`, `AI Style Prompt`, `Raw Template`, `Design Tokens & CSS`).
- [ ] **Live Personalization Test:** Clicking "🚀 Test Live in Simulator" dynamically loads customized Blob HTML into `#simIframe` and displays the reset button (`↺ Reset`).
- [ ] **Personalized Export:** Clicking "⤓ Export My Portfolio (.html)" downloads a clean, customized single-file HTML page with switcher bars stripped.
- [ ] **Universal Replicate Link:** Switcher bar contains `🎨 Replicate Style` button linking to `index.html?replicate=XX`.
- [ ] **Zero Console Errors:** Verify in developer tools that no undefined variables, unhandled audio context errors, or unhandled null DOM references exist.
- [ ] **Mobile Responsiveness:** All variants scale properly on viewports down to 360px width.
- [ ] **AGENTS.md Updated (CRITICAL):** Verify that `AGENTS.md` is fully synchronized with all changes made in this session.
