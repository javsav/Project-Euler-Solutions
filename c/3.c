// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

// Answer:  6857

// input type = unsigned long long?
// math.sqrt
// isFactor
// isPrime
#include <stdio.h>
#include "euler.h"

int main(int argc, char const *argv[])
{
    long long in = 600851475143;
    unsigned int i;
    for (i = in - 2; i > 3; i -= 2)
    {
        if (isFactor(i, in))
        {
            if (isPrime(i))
            {
                printf("%d", i);
                return 0;
            }
        }
    }
    return -1;
}
