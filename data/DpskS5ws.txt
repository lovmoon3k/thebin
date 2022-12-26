names_of_the_gifts = str(input())
names_of_the_gifts = names_of_the_gifts.split()

while True:
    current_command = str(input())
    if current_command == "No Money":
        break
    current_command = current_command.split()
    current_command_real = current_command.pop(0)

    if current_command_real == "OutOfStock":
        gift_name = current_command.pop(0)
        while names_of_the_gifts.count(gift_name) > 0:
            searched_index = names_of_the_gifts.index(gift_name)
            names_of_the_gifts[searched_index] = "None"

    elif current_command_real == "Required":
        gift_name1 = current_command.pop(0)
        index_1 = int(current_command.pop(0))
        if index_1 >= 0 and index_1 < len(names_of_the_gifts):
            names_of_the_gifts[index_1] = gift_name1

    elif current_command_real == "JustInCase":
        gift_name2 = current_command.pop(0)
        names_of_the_gifts.pop(len(names_of_the_gifts) - 1)
        names_of_the_gifts.append(gift_name2)

while names_of_the_gifts.count("None") > 0:
    names_of_the_gifts.remove("None")

print(" ".join(names_of_the_gifts))