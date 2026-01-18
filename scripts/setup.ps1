# DashUI Framework - Quick Setup Script for Windows
# Run this script to set up the framework on a new PC

# Ensure script runs from project root directory
$scriptPath = Split-Path -Parent $MyInvocation.MyCommand.Path
$projectRoot = Split-Path -Parent $scriptPath
Set-Location $projectRoot

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  DashUI Framework - Quick Setup" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Project Location: $projectRoot" -ForegroundColor Cyan
Write-Host ""

# Check Node.js version
$nodeVersion = node --version 2>$null
if ($LASTEXITCODE -ne 0) {
    Write-Host "✗ Node.js is not installed!" -ForegroundColor Red
    Write-Host "  Please install Node.js from https://nodejs.org/" -ForegroundColor Red
    exit 1
}

Write-Host "Node.js Version: $nodeVersion" -ForegroundColor Green

# Parse version and check if it's >= 18
$versionNumber = [int]($nodeVersion -replace 'v(\d+)\..*', '$1')
if ($versionNumber -lt 18) {
    Write-Host "⚠️  Warning: Node.js version 18.x or higher is recommended" -ForegroundColor Yellow
    Write-Host "   Current version: $nodeVersion" -ForegroundColor Yellow
    Write-Host ""
}
Write-Host ""

# Check if .env exists
if (Test-Path ".env") {
    Write-Host "✓ .env file already exists." -ForegroundColor Green
} else {
    Write-Host "⚠️  .env file not found!" -ForegroundColor Yellow
    
    if (-Not (Test-Path ".env.example")) {
        Write-Host "✗ CRITICAL: .env.example not found!" -ForegroundColor Red
        Write-Host "  Cannot create .env file. Please restore .env.example or create .env manually." -ForegroundColor Red
        exit 1
    }

    Write-Host "Creating .env from .env.example..." -ForegroundColor Yellow
    Copy-Item ".env.example" ".env"
    Write-Host "✓ .env file created." -ForegroundColor Green
    Write-Host ""
    Write-Host "❗ IMPORTANT: Please edit the new .env file with your credentials." -ForegroundColor Yellow
    
    $edit = Read-Host "Do you want to edit .env now? (y/n)"
    if ($edit -eq "y" -or $edit -eq "Y") {
        notepad .env
    }
}

Write-Host ""
Write-Host "Installing dependencies..." -ForegroundColor Cyan
npm install

if ($LASTEXITCODE -eq 0) {
    Write-Host "✓ Dependencies installed" -ForegroundColor Green
} else {
    Write-Host "✗ Failed to install dependencies" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "Installing Playwright browsers..." -ForegroundColor Cyan
npx playwright install --with-deps chromium

if ($LASTEXITCODE -eq 0) {
    Write-Host "✓ Browsers installed" -ForegroundColor Green
} else {
    Write-Host "✗ Failed to install browsers" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "Verifying setup..." -ForegroundColor Cyan
npm run verify-setup

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Setup Complete!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "  1. Ensure .env is configured correctly" -ForegroundColor White
Write-Host "  2. Run tests: npm test" -ForegroundColor White
Write-Host "  3. Run in UI mode: npm run test:ui" -ForegroundColor White
Write-Host ""
