import math

number_of_snowballs = int(input())
weight_list = []
time_needed_list = []
quality_list = []
calculation_list = []
while True:
    number_of_snowballs -= 1
    if number_of_snowballs == -1:
        break
    weight_of_the_snowball = int(input())
    weight_list.append(weight_of_the_snowball)

    time_needed = int(input())
    time_needed_list.append(time_needed)

    quality_of_the_snowball = int(input())
    quality_list.append(quality_of_the_snowball)

    calculation = (weight_of_the_snowball / time_needed) ** quality_of_the_snowball
    calculation_list.append(calculation)

biggest_number = -99999999999

for index in range(0, len(calculation_list)):
    current_grade = calculation_list[index]
    if current_grade > biggest_number:
        biggest_number = current_grade
searched_index = calculation_list.index(biggest_number)

print(f'{weight_list[searched_index]} : {time_needed_list[searched_index]} = {math.trunc(calculation_list[searched_index])} ({quality_list[searched_index]})')