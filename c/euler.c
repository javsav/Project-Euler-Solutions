#include <string.h>
#include <stdio.h>
#include "euler.h"

int recursive_fibonacci(int n)
{
    if (n < 2)
        return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

int fibonacci(int n)
{
    return recursive_fibonacci(n);
}

int isPrime(unsigned int n)
{
    int i = 2;
    if (n < 2)
        return 0;
    if (n == 2)
        return 1;
    while (i < n)
    {
        if (n % i == 0)
            return 0;
        i++;
    }
    return 1;
}

int isFactor(int n, long long div)
{
    return div % n == 0;
}

int isPalindrome(int n)
{
    char str[50];
    snprintf(str, 50, "%d", n);
    int len = (int)strlen(str) - 1;
    int i;
    for (i = 0; i <= len / 2; i++)
    {
        if (str[i] != str[len - i])
        {
            return 0;
        }
    }
    return 1;
}

int greatestCommonDivisor(int a, int b)
{
    if (b == 0)
        return a;
    return greatestCommonDivisor(b, a % b);
}

int leastCommonMultiple(int a, int b)
{
    return a * b / greatestCommonDivisor(a, b);
}