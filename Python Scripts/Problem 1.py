### Problem 1

#### <i>If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.      Find the sum of all the multiples of 3 or 5 below 1000.</i> 


i = 1
numbers = []
while (i < 1000):
    if i % 5 == 0:
        numbers.append(i)
    elif i % 3 == 0:
        
        numbers.append(i)
    i += 1

print numbers
print sum(numbers)

print "Jav Rules"

##### Answer: 233168