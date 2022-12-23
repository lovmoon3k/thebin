current_year = int(input())
print_it = False

while True:
    list = []
    current_year += 1
    current_year = str(current_year)
    for index in range(0, len(current_year)):
        current_digit = current_year[index]
        list.append(current_digit)

    for i in range(0, len(list)):
        current_digit = list[i]
        result = list.count(current_digit)
        if result > 1:
            print_it = False
            break
        else:
            print_it = True

    if print_it == True:
        print(current_year)
        break
    current_year = int(current_year)

