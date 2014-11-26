### Problem 6

#### <i>The sum of the squares of the first ten natural numbers is,  1^2 + 2^2 + ... + 10^2 = 385  The square of the sum of the first ten natural numbers is,  (1 + 2 + ... + 10)^2 = 55^2 = 3025  Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.  Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.</i> 


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


##### Answer: 25164150