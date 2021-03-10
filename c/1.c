// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.
#include <stdio.h>

int main(int argc, char const *argv[])
{
    int i = 1;
    int limit = 1000;
    int ans = 0;
    while (i < limit)
    {
        if (i % 3 == 0)
        {
            ans += i;
        }
        else if (i % 5 == 0)
        {
            ans += i;
        }
        i++;
    }
    printf("%d", ans);
    return 0;
}
