def factorial(n):
    fac=[]
    while n>0:
        fac.append(n)
        n -= 1
  
    mul = 1
    for i in fac:
        mul *= i
    return mul

a = str(factorial(100))

fa = [b for b in a]
x = [int(a) for a in fa]
sum(x)