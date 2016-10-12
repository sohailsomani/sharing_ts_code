@ECHO OFF
@setlocal

rd /s /q dist

cd module1
call npm install
call gulp
cd ..

cd module2
call npm install
call gulp
cd ..

cd client
call npm install
call bower install
call gulp
cd ..

start dist\index.html

@endlocal