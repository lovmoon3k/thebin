def alg(n):
    s = str(n)
    sum1 = int(s[0]) + int(s[1])
    sum2 = int(s[2]) + int(s[3])

    return str(max(sum1, sum2)) + str(min(sum1, sum2))


for i in range(1000, 10000):
    if alg(i) == "1311":
        print(i)