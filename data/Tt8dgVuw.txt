@echo off
setlocal EnableDelayedExpansion
::SCRIPT IMPLANTAÇAO IMPRESSORA DE REDE MONO LEXMARK
::CRIE UM ARQUIVO COM NOME DAS MAQUINAS.TXT NA PASTA DO SCRIPT
::COLOQUE O NOME DAS MÁQUINAS NESSE ARQUIVO E RODE O SCRIPT
PUSHD "%dp0%"
SET "IP=IP_IMPRESSORA"
SET "NOMEIP=Lexmark_Empresa_Mono_xx"
::USERIP (USUARIO DE REDE)
SET "USERIP=xxx"
::PASSIP (SENHA DE REDE)
SET "PASSIP=xxx"
SET "DIMP=Lexmark Universal V2 XL"
SET "SCIMP=%WINDIR%\System32\Printing_Admin_Scripts\pt-BR"
::CAMINHO ATALHO SCANNER
::SET "MSCAN=\\MAQUINA\ATALHO\SCAN\Lexmark Scan Center.lnk"
SET "LOGS=MAQUINAS_LOG.TXT"
for /f "delims=*" %%A in (%~dp0maquinas.txt) do ((ping -n 1 %%A 2>nul | findstr "TTL")&&(TITLE CONFIGURANDO A %%A AGUARDE.. 
cscript "%SCIMP%\Prnport.vbs" -a -r %IP% -h %IP% -o lpr -q IP -md -s "%%A" -u "%USERIP%" -w "%PASSIP%" 
cscript "%SCIMP%\Prnmngr.vbs" -t -a -p "%NOMEIP%" -m "%DIMP%" -r "%IP%" -s "%%A" -u "%USERIP%" -w "%PASSIP%"
cscript "%SCIMP%\Prncnfg.vbs" -t -p "%NOMEIP%" +rawonly +queued -s "%%A" -u "%USERIP%" -w "%PASSIP%"
::COPIA ATALHO DO SCANNER PARA DESKTOP PUBLICO
::copy /y "%MSCAN%" "\\%%A\Users\Public\Desktop\Lexmark Scan Center.lnk" 
timeout 1
ECHO %%A,OK>>%~dp0%LOGS%)||( ECHO CONECTANDO A %%A && ECHO FALHA NA CONEXAO %%A & ECHO %%A,FALHA>>%~dp0%LOGS%))
POPD
PAUSE
EXIT