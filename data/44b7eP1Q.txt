def fourth(s):
    if s + 2 >= 30 or s + 3 >= 30 or s * 2 >= 30:
        return 1
    return 0


def third(s):
    if s + 2 >= 30 or s + 3 >= 30 or s * 2 >= 30:
        return 0
    return fourth(s + 2) and fourth(s + 3) and fourth(s * 2)


def second(s):
    if s + 2 >= 30 or s + 3 >= 30 or s * 2 >= 30:
        return 1
    return third(s + 2) or third(s + 3) or third(s * 2)


def first(s):
    if s + 2 >= 30 or s + 3 >= 30 or s * 2 >= 30:
        return 0
    return second(s + 2) and second(s + 3) and second(s * 2)


for i in range(30):
    if first(i):
        print(i)
