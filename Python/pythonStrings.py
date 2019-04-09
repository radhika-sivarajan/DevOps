multiples_gen = (i for i in range(30) if i % 3 == 0)
print(multiples_gen)
# Output: <generator object <genexpr> at 0x7fdaa8e407d8>
for x in multiples_gen:
  print(x)
  # Outputs numbers

squared = {x**2 for x in [1, 1, 2]}
print(squared)
# Output: {1, 4}


squared = [x**2 for x in range(10)]
