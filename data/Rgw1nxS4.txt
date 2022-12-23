number_of_orders = int(input())
all_sum = 0
while True:
    the_program_should_stop = False
    number_of_orders -= 1
    if number_of_orders == -1:
        break
    price_per_capsule = float(input())
    if price_per_capsule < 0.01 or price_per_capsule > 100:
        the_program_should_stop = True
    days = int(input())
    if days < 1 or days > 31:
        the_program_should_stop = True
    capsules_needed_for_a_day = int(input())
    if capsules_needed_for_a_day < 1 or capsules_needed_for_a_day > 2000:
        the_program_should_stop = True
    if the_program_should_stop == True:
        continue
    result = price_per_capsule * capsules_needed_for_a_day * days
    all_sum += result
    print(f'The price for the coffee is: ${result:.2f}')

print(f'Total: ${all_sum:.2f}')