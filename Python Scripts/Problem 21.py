def propdiv(n):
    result = set()
    for x in range(1, int(n ** 0.5) + 1):
        div, mod = divmod(n, x)
        if mod == 0:
            result |= {x, div}
    return sum(result)-n
            
def amicable(n,m):
    if propdiv(n) == m and propdiv(m) == n:
        return True
    
am = []
for a in range (0,10000,2):
    for b in range (0,10000,2):
		if a != b:
			if amicable(a,b) == True:
				print a				
				am.append(a)
				
            
print sum(am)
