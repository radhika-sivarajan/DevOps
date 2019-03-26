import random


# Get user guess
def get_guess():
    return list(input("Enter a your guess, a 3 digit number! "))


# Generate random 3 digit number (as list)
def gen_number():
    digits = [str(num) for num in range(10)]
    # Shuffle digit
    random.shuffle(digits)
    # Grab first 3
    return digits[:3]


# Generate clues
def gen_clues(user_guess, random_number):
    if user_guess ==random_number:
        return "Code cracked!!"

    clues = []
    for ind, num in enumerate(user_guess):
        if num == random_number[ind]:
            clues.append("Match")
        elif num in code:
            clues.append("Close")

    if clues == []:
        return "Nope"
    else:
        return clues


# Game logic
print("Welcome to Gussing Game!!")
secret_code = gen_number()
clue_report = []
while clue_report != "Code cracked!!":
    guess = get_guess()
    clue_report = gen_clues(guess, secret_code)
    for clue in clue_report:
        print(clue)
