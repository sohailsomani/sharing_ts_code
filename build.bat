@ECHO OFF
@setlocal

rd /s /q dist

pushd module1 && call gulp && popd
pushd module2 && call gulp && popd
pushd client && call gulp && popd
start dist\index.html

@endlocal