numbers = [10, 20, 15, 30, 35, 15, 20, 35, 60, 10, 35]
seen_numbers = {}

for n in range(len(numbers)):    
    if (numbers[n] in seen_numbers):
        seen_numbers[numbers[n]] += 1
    else:
        seen_numbers[numbers[n]] = 1
        
print(seen_numbers)