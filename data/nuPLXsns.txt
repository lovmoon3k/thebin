print_output = True
while True:
    current_name = str(input())
    if current_name == "Welcome!":
        break
    elif current_name == "Voldemort":
        print("You must not speak of that name!")
        print_output = False
        break
    name_length = len(current_name)
    if name_length < 5:
        print(f'{current_name} goes to Gryffindor.')
    elif name_length == 5:
        print(f'{current_name} goes to Slytherin.')
    elif name_length == 6:
        print(f'{current_name} goes to Ravenclaw.')
    elif name_length > 6:
        print(f'{current_name} goes to Hufflepuff.')

if print_output == True:
    print("Welcome to Hogwarts.")