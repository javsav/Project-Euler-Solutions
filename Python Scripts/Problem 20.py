
# coding: utf-8

# In[27]:

def factorial(n):
    fac=[]
    while n>0:
        fac.append(n)
        n -= 1
  
    mul = 1
    for i in fac:
        mul *= i
    return mul
a = factorial(100)
a
b = str(a)
fa= []
for c in b:
    fa.append(c)

x = [int(a) for a in fa]
sum(x)

