// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
// What is the 10 001st prime number?

#include <stdio.h>
#include "euler.h"

int main(int argc, char const *argv[])
{
    int i;
    int c = 0;
    int nthPrime = 10001;
    while (1)
    {
        int x = isPrime(i);
        if (x == 1)
            c++;
        if (c == nthPrime)
        {
            printf("%d", i);
            return 0;
        }
        i++;
    }

    return 0;
}
