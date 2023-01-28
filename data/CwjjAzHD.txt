def game(s1, s, hod):
    if hod == 4:
        return s1+s>=75
    else:
        if s1+s>=75:
            return False

    if hod % 2 == 1:
        return game(s1+1,s,hod+1) or game(s1,s+1,hod+1) or game(s1*2,s,hod+1) or game(s1,s*2,hod+1)
    elif hod==2:
        return game(s1+1,s, hod+1) and game(s1,s+1, hod+1) and game(s1*2,s, hod+1) and game(s1,s*2, hod+1)
    elif hod == 0:
        return (game(s1+1,s,hod+1) or game(s1+1,s,hod+3)) and (game(s1,s+1,hod+1) or game(s1,s+1,hod+3)) and (game(s1*2,s,hod+1) or game(s1*2,s,hod+3)) and(game(s1,s*2,hod+1) or game(s1,s*2,hod+3))


print('Выигрыш первым ходом:')
for i in range(1, 67):
    if game(8,i,3):
        print(i, end = ' ')

print('\n\nВыигрыш вторым ходом:')
for i in range(1, 67):
    if game(8,i,2):
        print(i, end = ' ')

print('\n\nВыигрыш третьим ходом(ответ на КИМ 20):')
for i in range(1, 67):
    if game(8,i,1):
        print(i, end = ' ')

print('\n\nВыигрыш четвертым, но не вторым ходом(ответ на КИМ 21):')
for i in range(1, 67):
    if game(8,i,0) and not game(8,i,2):
        print(i, end = ' ')
