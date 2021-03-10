#include <iostream> // Preprocesser declaration to enable output to stdio
using std::cout; // Without this I'd have to write //std.cout to print, rather than just cout

int main()

{
	int i = 1, sum = 0;
	while (i < 1000)
	
	{
		if (i % 5 == 0) 
		
		{
			sum += i;
		}
		else if (i % 3 == 0)
		{
			sum += i;
		}
		i++;
	}
	cout << sum;
	return 0;
}
		

