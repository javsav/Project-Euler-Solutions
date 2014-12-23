import math
def propdiv(n):
    results = []
    for i in xrange(1,int(math.sqrt(n))+1):
        if n%i == 0:
            x = n/i
            results.append(i)
            results.append(x)
    return sum(results)-n
            
def amicable(n,m):
    if propdiv(n) == m and propdiv(m) == n:
        return True
    
am = []
for a in xrange (0,10000,2):
    for b in xrange (0,10000,2):
		if a != b:
			if amicable(a,b) == True:
				print a				
				am.append(a)
				
            
print sum(am)
