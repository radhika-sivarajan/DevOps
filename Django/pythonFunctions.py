def countUniqueLetters(str):
    b = dict.fromkeys(str, 0)
    for i in str:
        b[i] += 1
    print (b)
    return

countUniqueLetters( str = "aassdff")
