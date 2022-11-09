import random
import time
import pyautogui

time.sleep(5)

def Generate():
    OGCreditCardNum = ""

    for i in range(16):
        OGCreditCardNum += str(random.randint(0, 9))

    return OGCreditCardNum

def Result(status,cc):
    if status == True:
        pyautogui.write(cc)
        pyautogui.press('enter')
        time.sleep(.5)
        return



def ValidatedChecker(OGCreditCardNum):
    CreditCardNum = OGCreditCardNum.replace(" ", "")
    CreditCardNum = OGCreditCardNum.replace("-", "")
    OddDigitSum = 0
    EvenDigitSum = 0
    CreditCardNum = CreditCardNum[::-1]


    for x in CreditCardNum[::2]:
        OddDigitSum += int(x)

    for x in CreditCardNum[1::2]:
        x = int(x)*2
        x = str(x)
        if len(str(x)) == 2:
            x = int(x[0]) + int(x[1])
        EvenDigitSum += int(x)
    if (OddDigitSum + EvenDigitSum) % 10 == 0:
        Result(True,OGCreditCardNum)
    else:
        Result(False,OGCreditCardNum)

    return

while True:
    ValidatedChecker(Generate())

