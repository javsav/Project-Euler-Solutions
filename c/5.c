// // 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// // What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

// // Answer:  232792560

// // least common multiple of 1..20, can we start from 11..20?
// // According to Wikipedia, lcm(a,b) = a * b | gcd(a, b)
// // So we need a greatest common divisor function, and lets try iterating backwards from the max value

// // INCOMPLETE!!!
// #include <stdio.h>
// #include "euler.h"

// int main(int argc, char const *argv[])
// {
//     int ans;
//     int start = 20;
//     int stop = 11;
//     int i;
//     int j = 1;
//     for (i = start; i >= stop + 1; i--)
//     {
//         printf("lcm(%d, %d) = %d\n", start, i - 1, leastCommonMultiple(start, i - 1));
//     }
//     return 0;
// }
