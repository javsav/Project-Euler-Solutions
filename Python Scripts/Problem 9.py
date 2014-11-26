### Problem 9

#### <i>A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,  a^2 + b^2 = c^2  For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.  There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product abc. </i>



for a in range (1,500):
    for b in range (1, 500):
        for c in range (1, 500):
            if a+b+c == 1000 and c**2==a**2+b**2 and a<b and b<c:
                d=a*b*c
                print a
                print b
                print c
                print "answer: "
                print d
                break


#####  Answer:  31875000  Completed on Mon, 9 Jun 2014, 03:32 