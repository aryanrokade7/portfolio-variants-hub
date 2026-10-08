# One-Click Main Portfolio Selector for Aryan Rokade (84 Variants)
param(
  [Parameter(Mandatory=$false)]
  [int]$VariantNumber = 0
)

$portfolioDir = $PSScriptRoot
$variantsDir = Join-Path $portfolioDir 'variants'

$variants = @{
  1  = 'variant-01-neo-brutalism.html'
  2  = 'variant-02-apple-minimal.html'
  3  = 'variant-03-editorial-luxury.html'
  4  = 'variant-04-swiss-grid.html'
  5  = 'variant-05-windows-95.html'
  6  = 'variant-06-zen-minimal.html'
  7  = 'variant-07-monochrome-mag.html'
  8  = 'variant-08-nordic-pastel.html'
  9  = 'variant-09-code-editor.html'
  10 = 'variant-10-bauhaus-geometry.html'
  11 = 'variant-11-craft-scrapbook.html'
  12 = 'variant-12-kinetic-poster.html'
  13 = 'variant-13-classic-mac.html'
  14 = 'variant-14-coffee-espresso.html'
  15 = 'variant-15-gameboy-pocket.html'
  16 = 'variant-16-bios-firmware.html'
  17 = 'variant-17-audio-daw.html'
  18 = 'variant-18-figma-editor.html'
  19 = 'variant-19-nextstep-os.html'
  20 = 'variant-20-blender-viewport.html'
  21 = 'variant-21-notion-workspace.html'
  22 = 'variant-22-github-commit.html'
  23 = 'variant-23-cassette-walkman.html'
  24 = 'variant-24-polaroid-gallery.html'
  25 = 'variant-25-discord-workspace.html'
  26 = 'variant-26-arcade-fighter.html'
  27 = 'variant-27-daily-newspaper.html'
  28 = 'variant-28-rpg-character.html'
  29 = 'variant-29-receipt-printer.html'
  30 = 'variant-30-winamp-player.html'
  31 = 'variant-31-metro-transit-map.html'
  32 = 'variant-32-comic-book.html'
  33 = 'variant-33-game-engine-inspector.html'
  34 = 'variant-34-luxury-horology.html'
  35 = 'variant-35-terminal-neovim.html'
  36 = 'variant-36-darkroom-photo.html'
  37 = 'variant-37-linear-issue-tracker.html'
  38 = 'variant-38-steam-library.html'
  39 = 'variant-39-postman-api-docs.html'
  40 = 'variant-40-dribbble-showcase.html'
  41 = 'variant-41-sublime-monokai.html'
  42 = 'variant-42-twitter-tech-feed.html'
  43 = 'variant-43-nes-cartridge.html'
  44 = 'variant-44-slack-workspace.html'
  45 = 'variant-45-retro-pager.html'
  46 = 'variant-46-twitch-streamer-studio.html'
  47 = 'variant-47-bloomberg-trading-terminal.html'
  48 = 'variant-48-visionos-spatial.html'
  49 = 'variant-49-kubernetes-cluster.html'
  50 = 'variant-50-substack-tech-editorial.html'
  51 = 'variant-51-arc-studio-minimal.html'
  52 = 'variant-52-executive-monochrome.html'
  53 = 'variant-53-tokyo-modernist.html'
  54 = 'variant-54-nordic-engineering.html'
  55 = 'variant-55-berlin-type-foundry.html'
  56 = 'variant-56-solaris-ambient.html'
  57 = 'variant-57-kinetic-split-editorial.html'
  58 = 'variant-58-strata-data-sheets.html'
  59 = 'variant-59-atelier-gallery.html'
  60 = 'variant-60-vessel-zenith-minimal.html'
  61 = 'variant-61-florence-atelier-serif.html'
  62 = 'variant-62-zurich-concrete-grid.html'
  63 = 'variant-63-kyoto-tea-ceremony.html'
  64 = 'variant-64-vogue-parisian-editorial.html'
  65 = 'variant-65-copenhagen-soft-oat.html'
  66 = 'variant-66-oxford-scholarly-press.html'
  67 = 'variant-67-basel-bauhaus-columns.html'
  68 = 'variant-68-ryokan-zenith-wabi.html'
  69 = 'variant-69-manhattan-monochrome-broadsheet.html'
  70 = 'variant-70-stockholm-archipelago-mist.html'
  71 = 'variant-71-original-main.html'
  72 = 'variant-72-hud-hologram.html'
  73 = 'variant-73-telegram-dispatch.html'
  74 = 'variant-74-starship-cockpit.html'
  75 = 'variant-75-rotary-switchboard.html'
  76 = 'variant-76-airport-fids.html'
  77 = 'variant-77-vinyl-turntable.html'
  78 = 'variant-78-passport-dossier.html'
  79 = 'variant-79-michelin-menu.html'
  80 = 'variant-80-vintage-typewriter.html'
  81 = 'variant-81-casino-slot-machine.html'
  82 = 'variant-82-illuminated-manuscript.html'
  83 = 'variant-83-neon-vending.html'
  84 = 'variant-84-modular-synth.html'
}

if ($VariantNumber -eq 0 -or -not $variants.ContainsKey($VariantNumber)) {
  Write-Host '==========================================================' -ForegroundColor Cyan
  Write-Host '     Aryan Rokade — Curated Portfolio Selector (84 Active) ' -ForegroundColor Yellow
  Write-Host '==========================================================' -ForegroundColor Cyan
  
  foreach ($key in (1..84)) {
    if ($variants.ContainsKey($key)) {
      $numStr = $key.ToString("D2")
      Write-Host "$numStr. $($variants[$key])"
    }
  }
  Write-Host ''
  $selection = Read-Host 'Enter variant number to make your main portfolio (1-84)'
  $VariantNumber = [int]$selection
}

if ($variants.ContainsKey($VariantNumber)) {
  $targetFile = $variants[$VariantNumber]
  $sourcePath = Join-Path $variantsDir $targetFile
  $destPath = Join-Path $portfolioDir 'index.html'

  if (Test-Path $sourcePath) {
    Copy-Item -Path $sourcePath -Destination $destPath -Force
    Write-Host ''
    Write-Host "Success! Variant #$VariantNumber ($targetFile) is now active as index.html!" -ForegroundColor Green
  } else {
    Write-Host "Error: Could not find $sourcePath" -ForegroundColor Red
  }
} else {
  Write-Host "Invalid variant number: $VariantNumber" -ForegroundColor Red
}
