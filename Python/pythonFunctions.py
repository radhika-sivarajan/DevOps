# 1. Count unique letters in given string

cString ="aassdff"

def countUniqueLetters(str):
    letters = dict.fromkeys(str, 0)
    for i in str:
        letters[i] += 1
    return letters

print (countUniqueLetters(cString))

# *****************************************************

# 2. Check the pattern 123 in the list

myList = [1,1,2,1,2,3]

def array_check(num):
    for i in range(len(num)-2):
        if num[i]==1 and num[i+1]==2 and num[i+2]==3:
            return True
    return False

print(array_check(myList))

# *****************************************************

# 3. Return a new string from given string with every other charactor is removed. hello -> hlo, orange ->oag

myString = "123456789"

def string_conversion(string):
    return(string[::2])

print(string_conversion(myString))

newString = lambda string: string[::2] # With Lamda function
print(newString (myString))

# *****************************************************

# 4. If either of the string (case insenstitive) appear at the very end of other string the return true. weRtd, rtd -> true. aSD, aweasd -> true

string1 = "wtd"
string2 = "aswewTD"

def end_word(a,b):
    a = a.lower()
    b = b.lower()
    if len(a)>len(b) and a.find(b) != -1 and a[-1] == b[-1]:
        return True
    elif len(a)<len(b) and b.find(a) != -1 and a[-1] == b[-1]:
        return True
    return False

print(end_word(string1,string2))
