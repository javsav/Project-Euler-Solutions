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
