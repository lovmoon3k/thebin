word = str(input())
index = -1
word_counter = 0

while index <= len(word):
    index += 1
    if index >= len(word):
        break
    current_letter = word[index]
    if current_letter == "s" or current_letter == "S":

        index += 1
        if index == len(word):
            break
        current_letter = word[index]
        if current_letter == "a" or current_letter == "A":
            index += 1
            if index == len(word):
                break
            current_letter = word[index]
            if current_letter == "n" or current_letter == "N":
                index += 1
                if index == len(word):
                    break
                current_letter = word[index]
                if current_letter == "d" or current_letter == "D":
                    word_counter += 1
                    continue
                else:
                    index -= 3
                    continue

            else:
                index -= 2
                continue
        elif current_letter == "u" or current_letter == "U":
            index += 1
            if index == len(word):
                break
            current_letter = word[index]
            if current_letter == "n" or current_letter == "N":
                word_counter += 1
            else:
                index -= 2
                continue
        else:
            index -= 1
            continue

    elif current_letter == "w" or current_letter == "W":
        index += 1
        if index == len(word):
            break
        current_letter = word[index]
        if current_letter == "a" or current_letter == "A":
            index += 1
            if index == len(word):
                break
            current_letter = word[index]
            if current_letter == "t" or current_letter == "T":
                index +=1
                if index == len(word):
                    break
                current_letter = word[index]
                if current_letter == "e" or current_letter == "E":
                    index +=1
                    if index == len(word):
                        break
                    current_letter = word[index]
                    if current_letter == "r" or current_letter == "R":
                        word_counter += 1
                        continue
                    else:
                        index -= 4
                        continue
                else:
                    index -= 3
                    continue
            else:
                index -= 2
                continue
        else:
            index -= 1
            continue

    elif current_letter == "f" or current_letter == "F":
        index += 1
        if index == len(word):
            break
        current_letter = word[index]
        if current_letter == "i" or current_letter == "I":
            index += 1
            if index == len(word):
                break
            current_letter = word[index]
            if current_letter == "s" or current_letter == "S":
                    index += 1
                    if index == len(word):
                        break
                    current_letter = word[index]
                    if current_letter == "h" or current_letter == "H":
                        word_counter += 1
                        continue
                    else:
                        index -= 3
            else:
                index -= 2
                continue
        else:
            index -= 1
            continue
    else:
        continue

print(word_counter)