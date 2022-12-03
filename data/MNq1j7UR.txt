ZX Spectrum BASIC
REPEAT UNTIL:
325 REPEAT j
330   INPUT "ENTER NUMBER: ";N
335   IF N="10" THEN PRINT "Congrats":LET j=1
345 UNTIL j=1

REPEAT Translates to :
325 FOR j = 0 TO 1 STEP 0 : REM REPEAT
330   INPUT "ENTER NUMBER: ";N
335   IF N="10" THEN PRINT "Congrats":LET j=1
345 NEXT j : REM UNTIL
___________________________________________
WHILE UNTIL:
325 While j < 1
330   INPUT "ENTER NUMBER: ";N
335   IF N="10" THEN PRINT "Congrats":LET j=1
345 EndWhile

WHILE Translates to :
325 FOR i = NOT( j < 1 ) TO 0.5 STEP 0 : REM While
330 INPUT "ENTER NUMBER: ";N
335 IF N="10" THEN PRINT "Congrats":LET j=1
340 LET i = NOT ( j<1 )
345 NEXT i : REM ENDWhile