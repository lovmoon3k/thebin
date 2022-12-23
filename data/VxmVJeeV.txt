first_string = str(input())
second_string = str(input())

first_list = []
second_list = []
for index in range(0, len(first_string)):
    first_list.append(first_string[index])
    second_list.append(second_string[index])

for xedni in range(0, len(first_string)):
    if first_list[xedni] == second_list[xedni]:
        continue
    else:
        first_list[xedni] = second_list[xedni]
        print(*first_list, sep="")