### Problem 12

#### The sequence of triangle numbers is generated by adding the natural numbers. So the 7th triangle number would be 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28. The first ten terms would be:  1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...  Let us list the factors of the first seven triangle numbers:   1: 1  3: 1,3  6: 1,2,3,6 10: 1,2,5,10 15: 1,3,5,15 21: 1,3,7,21 28: 1,2,4,7,14,28  We can see that 28 is the first triangle number to have over five divisors.  What is the value of the first triangle number to have over five hundred divisors? 



def num_factors(n):
    '''returns number of factors of n'''
    return len(set(reduce(list.__add__, 
                ([i, n//i] for i in range(1, int(n**0.5) + 1) if n % i == 0))))
        
        
def tri(n):
    '''finds the triangle numbers from 1 to n '''
    triangle=[]        
    i=0
    for n in range (1,(n+1)):
        i=n+i
        triangle.append(i)
    print "triangle numbers: "
    print triangle

tri(7)
        
def tri2(n):
    '''finds the lowest triangle number from 1 to n with 500 divisors'''
    triangle2=[]
        
    i=0
    for n in range (1,(n+1)):
        i=n+i
        if num_factors(i)>=500:
            triangle2.append(i)
            break
    print "answer: "
    print triangle2
    
tri2(100000)


#####  Answer:  76576500  Completed on Tue, 10 Jun 2014, 12:23   