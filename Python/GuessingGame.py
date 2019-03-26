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
def gen_clues():
    

# Game logic

# print(get_guess())
print(gen_number())
