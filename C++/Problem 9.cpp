#include <iostream>

using std::cout; // Without this I'd have to write //std.cout to print, rather than just cout

int main()

{
	int a = 0, b = 0, c = 0, py=1000; // Declaring a, b and c as integers, and py as the max range of the for loops
	
	for (a = 1; a < py / 3; a += 1) // Essentially a for loop in range 1 to 333.3 (step = 1). Since a < b < c, possible max(a) = 1000/3
	
	{
		for (b = a; b < py / 2; b += 1) // For loop in range a to 500 (step = 1). Because a < b, a can be used as the start range of this for loop to decrease execution time. As above, max(b) = 1000/2
		
		{
			c = py - a - b; // Because a + b + c = 1000, c = 1000 - a - b
			
			if (c*c == a*a + b*b) // If statement determines when the values of a^2 + b^2 == c^2 when c is equal to py - a - b

				{
				
				cout << a * b * c; // Printing the multiples for the Euler solution
				
				}
		}
	}
}

