### Problem 10

#### <i>The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.  Find the sum of all the primes below two million. </i>



def isprime(n):
    
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
i=1
pr=[]

while i<=2000000:
    if isprime(i)==True:
        pr.append(i)
    i+=1
d=sum(pr)
print d


#####  Answer:  142913828922  Completed on Mon, 9 Jun 2014, 03:52   