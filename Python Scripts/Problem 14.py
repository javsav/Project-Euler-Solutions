### Problem 14

#### The following iterative sequence is defined for the set of positive integers:  n → n/2 (n is even) n → 3n + 1 (n is odd)  Using the rule above and starting with 13, we generate the following sequence:  13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1 It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.  Which starting number, under one million, produces the longest chain?  NOTE: Once the chain starts the terms are allowed to go above one million.



def collatz(n):
    col=[n]
    while n>1:
        
        if n % 2 == 0:
            n = n/2
            col.append(n)
        elif n % 2 != 0:
            n = 3*n + 1
            col.append(n)
    return len(col)


#collen=[]
#for y in range (1,1000000):
    #z=collatz(y)
    #collen.append(z)
#print collen
                




def collatz(n):
    col=[n]
    while n>1:
        
        if n % 2 == 0:
            n = n/2
            col.append(n)
        elif n % 2 != 0:
            n = 3*n + 1
            col.append(n)
    return (col)
collatz(837799)




for k in range (1000000):
    if collen[k]==525:
        print k+1
        break


##### Answer: 837799 Completed on Wed, 11 Jun 2014, 13:03 