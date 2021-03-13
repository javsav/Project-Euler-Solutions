// // The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
// // Find the sum of all the primes below two million.

// // Naiive implementation, correct (at limit == 10) but too slow for limit = 2 million to even complete.

// #include <stdio.h>
// #include "euler.h"

// int main(int argc, char const *argv[])
// {
//     int sum = 2; // preload 2...
//     int i = 3;   // ...and then only do odd numbers
//     int limit = 2000000;
//     while (i < limit)
//     {
//         int x = isPrime(i);
//         if (x == 1)
//         {
//             sum += i;
//         }
//         i += 2;
//     }
//     printf("%d", sum);
//     return 0;
// }
