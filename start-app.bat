@echo off
title My App Launcher
cd /d "%~dp0"

where node >nul 2>nul
if errorlevel 1 (
  echo Node.js is not installed. Opening the download page...
  start https://nodejs.org
  pause
  exit /b
)

if not exist node_modules (
  echo First run: installing dependencies, this can take a few minutes...
  call npm install
  if errorlevel 1 (
    echo npm install failed.
    pause
    exit /b
  )
)

echo Starting the app... your browser will open automatically.
echo Close this window to stop the app.
call npm run dev -- --open
pause
