@echo off
for %%i in (*.webp) do (
    cwebp -q 100 "%%i" -resize 375 0 -o "%%~ni.webp"
)