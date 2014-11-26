#Problem 15: Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.

#How many such routes are there through a 20×20 grid?

def factorial(n):
    fac=[]
    while n>0:
        fac.append(n)
        n -= 1
  
    mul = 1
    for i in fac:
        mul *= i
    return mul

    




def choose(n,m):
    i = factorial(n)
    j = factorial(m)
    k = factorial(n-m)
    l = i/(j*k)
    return l




def lattice(n,m):
#Determines the number of routes from the top left to the bottom right corner of a m*n grid/lattice whilst only moving down or right
    i = choose((2*m),n)
    return str(i)




lattice(20,20)

#Answer: 137846528820



