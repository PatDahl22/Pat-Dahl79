# ─────────────────────────────────────────────────────────────────────────────
# add-fall-larm.ps1
# Kör detta skript från Pat-Dahl79-mappen i PowerShell:
#   cd "C:\Users\nail-\OneDrive\เดสก์ท็อป\Pat-Dahl79"
#   .\add-fall-larm.ps1
# ─────────────────────────────────────────────────────────────────────────────

$source = "C:\Users\nail-\ws\IoT-Fall_Larm\docs\screenshots"
$dest   = "C:\Users\nail-\OneDrive\เดสก์ท็อป\Pat-Dahl79\public\assets\fl"

# 1. Skapa målmapp
Write-Host "Skapar public/assets/fl/ ..." -ForegroundColor Cyan
New-Item -ItemType Directory -Force -Path $dest | Out-Null

# 2. Kopiera screenshots
$images = @(
  "Topology.png",
  "Fall-Larm-C4.png",
  "DBKryptering.png",
  "Komponentdiagram.png",
  "C4Level1.png",
  "C4Level2.png",
  "C4Level3.png",
  "Kopplingsdiagram.png"
)

foreach ($img in $images) {
  $from = Join-Path $source $img
  $to   = Join-Path $dest   $img
  if (Test-Path $from) {
    Copy-Item $from $to -Force
    Write-Host "  ✓ $img" -ForegroundColor Green
  } else {
    Write-Host "  ✗ $img hittades inte" -ForegroundColor Yellow
  }
}

Write-Host ""
Write-Host "Bilderna är klara i public/assets/fl/" -ForegroundColor Green
Write-Host ""
Write-Host "─────────────────────────────────────────────────" -ForegroundColor DarkGray
Write-Host "NÄSTA STEG — gör detta manuellt:" -ForegroundColor White
Write-Host ""
Write-Host "1. Öppna src/data/index.ts i din editor" -ForegroundColor Yellow
Write-Host "   Kopiera innehållet från: fall-larm-project-entry.ts" -ForegroundColor Yellow
Write-Host "   Klistra in det SIST i projects-arrayen (innan den avslutande ])" -ForegroundColor Yellow
Write-Host ""
Write-Host "2. Kör git-kommandon:" -ForegroundColor Yellow
Write-Host "   git add public/assets/fl/ src/data/index.ts" -ForegroundColor Cyan
Write-Host "   git commit -m 'feat: lägg till Fall-Larm IoT-projekt'" -ForegroundColor Cyan
Write-Host "   git push" -ForegroundColor Cyan
Write-Host ""
Write-Host "Klart! Fall-Larm syns på din portfolio." -ForegroundColor Green
