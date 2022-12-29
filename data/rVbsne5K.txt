$BootMode = bcdedit | Select-String "path.*efi"
if ($null -eq $BootMode) {
    # I think non-uefi is \Windows\System32\winload.exe
    $BootMode = "Legacy"
}else {
    # UEFI is: 
    #path                    \EFI\MICROSOFT\BOOT\BOOTMGFW.EFI
    #path                    \Windows\system32\winload.efi
    $BootMode = "UEFI"
}

Write-Host "Computer is running in $BootMode boot mode."