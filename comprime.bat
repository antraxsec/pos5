@echo off
setlocal

REM -- Configurar variables
set RUTA_7ZIP=C:\Program Files\7-Zip
set ZIPFILE=backup_site.zip
set LOGFILE=backup_log.txt

REM -- Iniciar el log
echo %date% %time%: Inicio de la compresion > %LOGFILE%

REM -- Usar 7-Zip para comprimir las carpetas y archivos
echo %date% %time%: Comprimiendo archivos... >> %LOGFILE%
"%RUTA_7ZIP%\7z.exe" a -tzip "%ZIPFILE%" app bootstrap config database Modules resources routes storage public\js public\index.php public\mix-manifest.json >> %LOGFILE% 2>&1
if %errorlevel% neq 0 (
  echo ERROR: Fallo al comprimir los archivos. >> %LOGFILE%
  echo Fallo al comprimir los archivos.
  goto end_script
)

echo %date% %time%: Archivo comprimido creado: %ZIPFILE% >> %LOGFILE%
echo Archivo comprimido creado: %ZIPFILE%

:end_script
echo %date% %time%: Script finalizado. Revisa %LOGFILE% para detalles. >> %LOGFILE%
echo Script finalizado. Revisa %LOGFILE% para detalles.
pause

endlocal