# Project Euler Problems

"""
Basic While Loop Template:

i = 0 # check if it should be 1 based on problem
while (i < n):
    #do something
    i += 1

"""

"""
Problem 1:
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
"""


"""
Problem 2:
"""
"""
def sum_of_even_values (array):
    new_array = []
    for item in array:
        if item % 2 == 0:
            new_array.append(item)
    print new_array
    sum_values = sum(new_array)
    return sum_values

fib_nums = [1,2]

i = 0

while max(fib_nums) < 4000000:
    a = fib_nums[i] #assign a as the ith index of fib_nums
    b = fib_nums[i + 1] #assign b as the ith + 1 index of fib_nums
    new_num = a + b
    fib_nums.append(new_num)

    i += 1

r = fib_nums[:-1]
print sum_of_even_values(r)
"""
"""
Problem 3
""" """
def prime_array (array):
    array = []
    for item in array:
        if item % 600851475143 == 0:
            array.append(item)
        print array
        
prime_nums = [1,2]
"""
    
"""
i = 0

while max(prime_nums) < 600851475143:
    a = prime_nums[i]
    b = prime_nums[i+1]
    new_num = a + b
    prime_nums.append(new_num)
    i += 1
r = prime_nums[:-1]
print prime_array(r)

"""
"""
array = []
i=1
while i<600851475143:
    if 600851475143 % i == 0:
        array.append(i)
      
    i += 1
print array    
"""

#Project Euler Problem 3
"""
def isprime(n):
    '''check if integer n is a prime'''
    n = abs(int(n))    
    if n < 2:
        return False    
    if n == 2: 
        return True   
    if n % 2 == 0: 
        return False    
    for x in range(3, n, 2):
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
"""

#For loop test
"""
test = []
for x in range(0,100,2):
    if x % 2 == 0:
        test.append(x)
print test

"""

#Project Euler Problem 4
"""
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
"""
# Problem 5
"""
mul = []
i = 99999999
while i<999999999:
    if i % 1 == 0 and i % 2 == 0 and i % 3 == 0 and i % 4 ==0 and i % 5 == 0 and i % 6 == 0 and i % 7 == 0 and i % 8 == 0 and i % 9 == 0 and i % 10 == 0 and i % 11 == 0 and i % 12 == 0 and i % 13 == 0 and i % 14 == 0 and i % 15 == 0 and i % 16 == 0 and i % 17 == 0 and i % 18 == 0 and i % 19 == 0 and i % 20 == 0:
        mul.append(i)
    i += 1
print mul
"""
#Problem 6
"""
sq = []
for x in range(1,101):
    sq.append(x**2)

j=sum(sq)

ssq = []
for y in range (1,101):
    ssq.append(y)
z=sum(ssq)
u=z**2
i=u-j
print i
"""
#Problem 7
"""
def isprime(n):
    '''check if integer n is a prime'''
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

#pr = []
#for x in range (1,1000000):
#    while len(pr)<10002:
#        if isprime(x)==True:
#            pr.append(x)
#a = pr[10001]
#print a

pr = []
for x in range (1,800000):
    if isprime(x)==True:
        pr.append(x)

print pr[10000]
"""
#Problem 8
"""
i=0
dig = [7,3,1,6,7,1,7,6,5,3,1,3,3,0,6,2,4,9,1,9,2,2,5,1,1,9,6,7,4,4,2,6,5,7,4,7,4,2,3,5,5,3,4,9,1,9,4,9,3,4,9,6,9,8,3,5,2,0,3,1,2,7,7,4,5,0,6,3,2,6,2,3,9,5,7,8,3,1,8,0,1,6,9,8,4,8,0,1,8,6,9,4,7,8,8,5,1,8,4,3,8,5,8,6,1,5,6,0,7,8,9,1,1,2,9,4,9,4,9,5,4,5,9,5,0,1,7,3,7,9,5,8,3,3,1,9,5,2,8,5,3,2,0,8,8,0,5,5,1,1,1,2,5,4,0,6,9,8,7,4,7,1,5,8,5,2,3,8,6,3,0,5,0,7,1,5,6,9,3,2,9,0,9,6,3,2,9,5,2,2,7,4,4,3,0,4,3,5,5,7,6,6,8,9,6,6,4,8,9,5,0,4,4,5,2,4,4,5,2,3,1,6,1,7,3,1,8,5,6,4,0,3,0,9,8,7,1,1,1,2,1,7,2,2,3,8,3,1,1,3,6,2,2,2,9,8,9,3,4,2,3,3,8,0,3,0,8,1,3,5,3,3,6,2,7,6,6,1,4,2,8,2,8,0,6,4,4,4,4,8,6,6,4,5,2,3,8,7,4,9,3,0,3,5,8,9,0,7,2,9,6,2,9,0,4,9,1,5,6,0,4,4,0,7,7,2,3,9,0,7,1,3,8,1,0,5,1,5,8,5,9,3,0,7,9,6,0,8,6,6,7,0,1,7,2,4,2,7,1,2,1,8,8,3,9,9,8,7,9,7,9,0,8,7,9,2,2,7,4,9,2,1,9,0,1,6,9,9,7,2,0,8,8,8,0,9,3,7,7,6,6,5,7,2,7,3,3,3,0,0,1,0,5,3,3,6,7,8,8,1,2,2,0,2,3,5,4,2,1,8,0,9,7,5,1,2,5,4,5,4,0,5,9,4,7,5,2,2,4,3,5,2,5,8,4,9,0,7,7,1,1,6,7,0,5,5,6,0,1,3,6,0,4,8,3,9,5,8,6,4,4,6,7,0,6,3,2,4,4,1,5,7,2,2,1,5,5,3,9,7,5,3,6,9,7,8,1,7,9,7,7,8,4,6,1,7,4,0,6,4,9,5,5,1,4,9,2,9,0,8,6,2,5,6,9,3,2,1,9,7,8,4,6,8,6,2,2,4,8,2,8,3,9,7,2,2,4,1,3,7,5,6,5,7,0,5,6,0,5,7,4,9,0,2,6,1,4,0,7,9,7,2,9,6,8,6,5,2,4,1,4,5,3,5,1,0,0,4,7,4,8,2,1,6,6,3,7,0,4,8,4,4,0,3,1,9,9,8,9,0,0,0,8,8,9,5,2,4,3,4,5,0,6,5,8,5,4,1,2,2,7,5,8,8,6,6,6,8,8,1,1,6,4,2,7,1,7,1,4,7,9,9,2,4,4,4,2,9,2,8,2,3,0,8,6,3,4,6,5,6,7,4,8,1,3,9,1,9,1,2,3,1,6,2,8,2,4,5,8,6,1,7,8,6,6,4,5,8,3,5,9,1,2,4,5,6,6,5,2,9,4,7,6,5,4,5,6,8,2,8,4,8,9,1,2,8,8,3,1,4,2,6,0,7,6,9,0,0,4,2,2,4,2,1,9,0,2,2,6,7,1,0,5,5,6,2,6,3,2,1,1,1,1,1,0,9,3,7,0,5,4,4,2,1,7,5,0,6,9,4,1,6,5,8,9,6,0,4,0,8,0,7,1,9,8,4,0,3,8,5,0,9,6,2,4,5,5,4,4,4,3,6,2,9,8,1,2,3,0,9,8,7,8,7,9,9,2,7,2,4,4,2,8,4,9,0,9,1,8,8,8,4,5,8,0,1,5,6,1,6,6,0,9,7,9,1,9,1,3,3,8,7,5,4,9,9,2,0,0,5,2,4,0,6,3,6,8,9,9,1,2,5,6,0,7,1,7,6,0,6,0,5,8,8,6,1,1,6,4,6,7,1,0,9,4,0,5,0,7,7,5,4,1,0,0,2,2,5,6,9,8,3,1,5,5,2,0,0,0,5,5,9,3,5,7,2,9,7,2,5,7,1,6,3,6,2,6,9,5,6,1,8,8,2,6,7,0,4,2,8,2,5,2,4,8,3,6,0,0,8,2,3,2,5,7,5,3,0,4,2,0,7,5,2,9,6,3,4,5,0]
num = []
while i<988:
    a = dig[i] 
    b = dig[i + 1] 
    c = dig[i + 2]
    d = dig[i + 3]
    e = dig[i + 4]
    f = dig[i + 5]
    g = dig[i + 6]
    h = dig[i + 7]
    j = dig[i + 8]
    k = dig[i + 9]
    l = dig[i + 10]
    m = dig[i + 11]
    n = dig[i + 12]

    o = a * b * c * d * e * f * g * h * j * k * l * m * n
    num.append(o)

    i += 1
print sorted(num)
"""
#Problem 9

for a in range (1,500):
	for b in range (1, 500):
		for c in range (1, 500):
			if a+b+c==1000 and c**2==a**2+b**2 and a<b:
			print a
			print b
			print c
			break
print a*b*c