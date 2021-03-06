max = 1000 # a + b + c = 1000
for a in 1..max/3 # Essentially a for loop in range 1 to 333.3 (step = 1). Since a < b < c and a + b + c = 1000, possible max(a) = 1000/3
	for b in a..max/2 # For loop in range a to 500 (step = 1). Because a < b, a can be used as the start range of this for loop to decrease execution time. As above, max(b) = 1000/2
	c = max - a - b # Because a + b + c = 1000, c = 1000 - a - b
		if c**2 == a**2 + b**2 # If statement determines when the values of a^2 + b^2 == c^2 when c is equal to max - a - b
			puts a*b*c # Printing the multiples of a*b*c for the Euler solution
		end
	end
end
