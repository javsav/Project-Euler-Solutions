## Problem 4

#### <i> A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.  Find the largest palindrome made from the product of two 3-digit numbers. </i>


def palindrome(n):
    if str(n) == str(n)[::-1]:
        return True
pal = []
i=100
while i<1000:    
    for a in range (100, 1000):
        if palindrome(a * i) == True:
            
            pal.append(a * i)
    i += 1

print sorted(pal)


##### Answer: 906609