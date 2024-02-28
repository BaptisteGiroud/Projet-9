@echo off
for %%i in (*.png, *.jpeg, *.jpg, *.webp) do (
    cwebp -q 100 -resize 375 0 "%%i" -o "%%~ni.webp"
)