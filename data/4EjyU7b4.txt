input_list = (str(input())).split("#")
amount_of_water = int(input())
amount_of_effort = 0
put_out_cells = []
amount_of_fire = 0

for index in range(0, len(input_list)):
    current_input = (input_list[index]).split(" = ")
    current_type_of_fire = current_input[0]
    current_value = int(current_input[1])

    if current_type_of_fire == "High":
        if current_value >= 81 and current_value <= 125:
            if amount_of_water - current_value >= 0:
                amount_of_water -= current_value
                amount_of_effort += ((current_value / 100) * 25)
                put_out_cells.append(str(current_value))
                amount_of_fire += current_value

    elif current_type_of_fire == "Medium":
        if current_value >= 51 and current_value <= 80:
            if amount_of_water - current_value >= 0:
                amount_of_water -= current_value
                amount_of_effort += ((current_value / 100) * 25)
                put_out_cells.append(str(current_value))
                amount_of_fire += current_value

    elif current_type_of_fire == "Low":
        if current_value >= 1 and current_value <= 50:
            if amount_of_water - current_value >= 0:
                amount_of_water -= current_value
                amount_of_effort += ((current_value / 100) * 25)
                put_out_cells.append(str(current_value))
                amount_of_fire += current_value

print("Cells:")
for i in range(0, len(put_out_cells)):
    current_cell = put_out_cells[i]
    print(f' - {current_cell}')
print(f'Effort: {amount_of_effort:.2f}')
print(f'Total Fire: {amount_of_fire}')