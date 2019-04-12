import re

patterns = ["term1", "term2"]
text = "This text have term1 not other"

for pattern in patterns:
    print("The term is "+pattern)
    if re.search(pattern, text):
        print("Match")
    else:
        print("NO Match")
