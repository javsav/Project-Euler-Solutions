# A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.  Find the largest palindrome made from the product of two 3-digit numbers.


def palindrome(n):
    if str(n) == str(n)[::-1]:
        return True
		
max = 0
for i in xrange(100,1000):    
    for a in xrange (100, 1000):
        if palindrome(a * i) == True:            
            if a * i > max:
				max = a * i

print str(max) + " is the largest palindrome made from the product of two 3-digit numbers."	
