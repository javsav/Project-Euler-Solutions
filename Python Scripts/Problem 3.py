### Problem 3

#### <i>The prime factors of 13195 are 5, 7, 13 and 29.  What is the largest prime factor of the number 600851475143 ?</i> 


def isprime(n):
    '''check if integer n is a prime'''
    n = abs(int(n))    
    if n < 2:
        return False    
    if n == 2: 
        return True   
    if n % 2 == 0: 
        return False    
    for x in range(3, int((n**0.5)+1), 2):
        if n % x == 0:
            return False
    return True
	

array = []
i=1
while i<775147:
    if 600851475143 % i == 0 and isprime(i)==True:
        array.append(i)
      
    i += 1
print array


##### Answer: 6857