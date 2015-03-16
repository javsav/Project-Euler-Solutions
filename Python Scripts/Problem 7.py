# By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.  What is the 10 001st prime number?

import itertools
def isprime(n):
    
    n = abs(int(n))    
    if n < 2:
        return 0    
    if n == 2: 
        return 1   
    if n % 2 == 0: 
        return 0    
    for x in range(3, int(n**0.5)+1, 2):
        if n % x == 0:
            return 0
    return 1

length = []
for x in itertools.count():
	if isprime(x) == 1:
		length.append(x)
	if len(length) == 10001:
		print str(length.pop(-1)) + " is the 10,001st prime number"
		break
		