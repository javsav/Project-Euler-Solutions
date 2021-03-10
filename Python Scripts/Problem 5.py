# 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.  What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

import itertools
nums = [x for x in xrange(1,21)] # Creates an array of the integers 1-20

for j in itertools.count(20,20): # Infinite loop starting from 20 with increment/step of 20
	if [j % x for x in nums] == [0 for x in xrange(1,21)]: # Comparing when modulo of j in the array of 1-20 is equal to 0 for each integer (using an array of 20 zeroes)
		break
	
print str(j) + " is the smallest positive number divisible by all the numbers from 1 to 20."

