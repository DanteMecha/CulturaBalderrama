param(
  [string]$Source = 'images',
  [string]$Dest = 'images/thumbs',
  [string]$Filter = 'Contenido_*.jpeg',
  [int]$Width = 1200,
  [long]$Quality = 82
)

# Generates grid thumbnails. Originals stay untouched and are the ones used by
# the photo viewer in contenido.html.

$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Drawing

$root = Split-Path -Parent $PSScriptRoot
$src = Join-Path $root $Source
$dst = Join-Path $root $Dest

if (-not (Test-Path -LiteralPath $src)) { throw "Missing folder: $src" }
New-Item -ItemType Directory -Path $dst -Force | Out-Null

$codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() |
  Where-Object { $_.MimeType -eq 'image/jpeg' }

$total = 0
$count = 0

foreach ($file in Get-ChildItem -LiteralPath $src -Filter $Filter -File | Sort-Object Name) {
  $out = Join-Path $dst ($file.BaseName + '.jpg')

  if ((Test-Path -LiteralPath $out) -and ((Get-Item -LiteralPath $out).Length -gt 0)) {
    Write-Host ("skip  {0} (already exists)" -f $out)
    continue
  }

  $img = [System.Drawing.Image]::FromFile($file.FullName)
  try {
    $ratio = $Width / $img.Width
    if ($ratio -gt 1) { $ratio = 1 }
    $w = [int][math]::Round($img.Width * $ratio)
    $h = [int][math]::Round($img.Height * $ratio)

    $thumb = New-Object System.Drawing.Bitmap $w, $h
    try {
      $g = [System.Drawing.Graphics]::FromImage($thumb)
      try {
        $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
        $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
        $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
        $g.DrawImage($img, 0, 0, $w, $h)
      }
      finally { $g.Dispose() }

      $params = New-Object System.Drawing.Imaging.EncoderParameters 1
      $params.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, $Quality)
      $thumb.Save($out, $codec, $params)
      $params.Dispose()
    }
    finally { $thumb.Dispose() }
  }
  finally { $img.Dispose() }

  $kb = [math]::Round((Get-Item -LiteralPath $out).Length / 1KB, 0)
  $total += $kb
  $count++
  Write-Host ("ok    {0}  {1}x{2}  {3} KB" -f $out, $w, $h, $kb)
}

Write-Host ""
Write-Host ("{0} thumbnails generated - {1} KB total" -f $count, $total)