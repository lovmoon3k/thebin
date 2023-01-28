# or - умный, and - бот

def win(s1,s):
    return s1+s>=75

def first(s1,s):
    return (win(s1+1,s) or win(s1,s+1) or win(s1*2,s) or win(s1,s*2)) and not win(s1,s)

def second(s1,s):
    return first(s1+1,s) and first(s1,s+1) and first(s1*2,s) and first(s1,s*2) and not win(s1,s)

def third(s1,s):
    return (second(s1+1,s) or second(s1,s+1) or second(s1*2,s) or second(s1,s*2)) and not win(s1,s)

def fourth (s1,s):
    return (third(s1+1,s) or first(s1+1,s)) and (third(s1,s+1) or first(s1,s+1)) and (third(s1*2,s) or first(s1*2,s)) and (third(s1,s*2) or first(s1,s*2)) and not win(s1,s)
'''
print('Выигрыш первым ходом:')
for i in range(1, 67):
    if first(8,i):
        print(i, end = ' ')

print('\n\nВыигрыш вторым ходом:')
for i in range(1, 67):
    if second(8,i):
        print(i, end = ' ')
'''

print('\n\nВыигрыш третьим ходом (ответ на КИМ 20):')
for i in range(1, 67):
    if third(8,i):
        print(i, end = ' ')

print('\n\nВыигрыш четвёртым, но не вторым ходом (ответ на КИМ 21):')
for i in range(1, 67):
    if fourth(8,i) and not second(8,i):
        print(i, end = ' ')
