for /f %%i in ("%0") do set curpath=%%~dpi
cd /d %curpath%
java -jar C:\yuicompressor-2.4.7\build\yuicompressor-2.4.7.jar source\date_to_string.js -o source\date_to_string.min.js