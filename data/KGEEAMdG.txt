lost_fights_count = int(input())

helmet_price = float(input())
sword_price = float(input())
shield_price = float(input())
armor_price = float(input())

current_lost_battle = 0

helmet_counter = 0
sword_counter = 0
shield_counter = 0
armor_counter = 0

while True:
    current_lost_battle += 1
    if current_lost_battle == lost_fights_count + 1:
        break
    if current_lost_battle % 2 == 0:
        helmet_counter += 1
    if current_lost_battle % 3 == 0:
        sword_counter += 1
    if current_lost_battle % 2 == 0 and current_lost_battle % 3 == 0:
        shield_counter += 1
        if shield_counter % 2 == 0:
            armor_counter += 1

spended_money = helmet_price * helmet_counter + sword_price * sword_counter + shield_price * shield_counter + armor_price * armor_counter
print(f'Gladiator expenses: {spended_money:.2f} aureus')