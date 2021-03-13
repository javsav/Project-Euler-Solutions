// The sum of the squares of the first ten natural numbers is, 385
// The square of the sum of the first ten natural numbers is, 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025-325=2640.
// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
#include <stdio.h>
int sumOfSquares()
{
    int ans = 0;
    int i;
    for (i = 1; i <= 100; i++)
    {
        ans += i * i;
    }
    return ans;
}

int squareOfSums()
{
    int ans = 0;
    int i;
    for (i = 1; i <= 100; i++)
    {
        ans += i;
    }
    return ans * ans;
}

int main(int argc, char const *argv[])
{
    printf("%d", squareOfSums() - sumOfSquares());
    return 0;
}
