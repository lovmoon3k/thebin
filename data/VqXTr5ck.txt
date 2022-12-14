size = int(input())

car_number = input()

matrix = []

for i in range(size):
    row = input().split(" ")
    matrix.append(row)


def next_car_position(x, y, direction):
    if direction == 'left':
        y =y - 1
        return x, y
    elif direction == 'right':
        y = y + 1
        return x, y
    elif direction == "up":
        x = x - 1
        return x, y
    elif direction == "down":
        x = x + 1
        return x, y


def get_after_tunel_position():
    for j in range(len(matrix)):
        for k in range(len(matrix[j])):
            if matrix[j][k] == "T":
                return j, k


row = 0
col = 0

command = input()
distance = 0


while True:

    if command == "End":
        matrix[row][col] = 'C'
        print(f'Racing car {car_number} DNF.')
        break

    car_row, car_col = next_car_position(row, col, command)

    if matrix[car_row][car_col] == 'F':
        distance += 10
        matrix[car_row][car_col] = 'C'
        print(f'Racing car {car_number} finished the stage!')
        break

    if matrix[car_row][car_col] == ".":
        distance += 10
        row, col = car_row, car_col

    elif matrix[car_row][car_col] == "T":
        matrix[car_row][car_col] = "."

        car_row, car_col = get_after_tunel_position()
        distance += 30
        matrix[car_row][car_col] = "."
        row, col = car_row, car_col

    command = input()

print(f'Distance covered {distance} km.')

for i in matrix:
    print(''.join(i))






