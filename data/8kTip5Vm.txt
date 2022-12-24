import math

group_size = int(input())
days_for_the_adventure = int(input())
earned_coins = 0
days = 0
while True:
    days += 1
    if days == days_for_the_adventure + 1:
        break

    if days % 10 == 0:
        group_size -= 2
    if days % 15 == 0:
        group_size += 5

    earned_coins += (50 - (group_size * 2))

    if days % 3 == 0:
        earned_coins -= (group_size * 3)
    if days % 5 == 0:
        earned_coins += (group_size * 20)
        if days % 3 == 0:
            earned_coins -= (group_size * 2)
coins_per_person = math.floor(earned_coins / group_size)
coins_per_person = math.trunc(coins_per_person)
print(f'{group_size} companions received {coins_per_person} coins each.')