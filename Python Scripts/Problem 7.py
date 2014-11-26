### Problem 7

#### <i>By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.  What is the 10 001st prime number? </i>


def isprime(n):
    
    n = abs(int(n))    
    if n < 2:
        return False    
    if n == 2: 
        return True   
    if n % 2 == 0: 
        return False    
    for x in range(3, int(n**0.5)+1, 2):
        if n % x == 0:
            return False
    return True
pr = []
for x in range (1,800000):
    if isprime(x)==True:
        pr.append(x)

print pr[10000]


##### Answer:  104743 