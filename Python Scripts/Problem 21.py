def propdiv(n):
    divs = []
    if n % 2 == 0:
        divs.append(n/2)
    for x in range(1,(n/2)-1):
        if n % x == 0:
            divs.append(x)
    return sum(divs)
            
def amicable(n,m):
    if propdiv(n) == m and propdiv(m) == n:
        return True
    
am = []
for a in range (-2,10000,4):
    for b in range (0,10000,4):
		if amicable(a,b) == True:
			print a				
			am.append(a)
				
            
print sum(am)