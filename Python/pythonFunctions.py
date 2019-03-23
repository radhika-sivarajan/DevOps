# 1. Count unique letters in given string

c_string ="aassdff"

def count_unique_letters(str):
    letters = dict.fromkeys(str, 0)
    for i in str:
        letters[i] += 1
    return letters

print (count_unique_letters(c_string))

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
    newString = ""
    for i in range(len(string)):
        if i%2 == 0:
            newString += string[i]
    return(newString)

print(string_conversion(myString))

# With Lamda function and string slicing
newString = lambda string: string[::2]
print(newString (myString))

# *****************************************************

# 4. If either of the string (case insenstitive) appear at the very end of other string the return true. weRtd, rtd -> true. aSD, aweasd -> true

string1 = "wtd"
string2 = "aswewTD"

def end_word(a,b):
    a = a.lower()
    b = b.lower()

    # Using endswith function
    # return (b.endswith(a) or a.endswith(b))

    # Using string splicing, indexing and comparison
    # return a[-(len(b)):] == b or b[-(len(a)):] == a

    if len(a)>len(b) and a.find(b) != -1 and a[-1] == b[-1]:
        return True
    elif len(a)<len(b) and b.find(a) != -1 and a[-1] == b[-1]:
        return True
    return False

print(end_word(string1,string2))

# *****************************************************

# 5. Return string with every char repeated once. aBc -> aaBBcc, Q45 -> QQ4455
string3 = "dfreasxa333fer--wedwe"

def repeat_char(string):
    newString = ""
    for i in string:
        newString +=  i + i
    return newString

print(repeat_char(string3))

# *****************************************************

# 6. How many even inters in the array

int_list = [1,4,61,7,81]
evens_count= len(filter(lambda num: num%2==0, int_list))
print(evens_count)

# *****************************************************

# 7. Sum of 3 numbers except teens 13-19 (sans 15 and 16)

numList = [14, 15, 16]

def fix_teen(n):
    if n in [13,14,17,18,19]:
        return 0
    return n

def no_teen_sum(list):
    sum = 0
    for i in list:
        sum += fix_teen(i)
    return sum

print(no_teen_sum(numList))
