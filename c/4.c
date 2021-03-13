// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

// Answer:  906609

// isPalindrome
#include <stdio.h>
#include "euler.h"

int main(int argc, char const *argv[])
{
    // upper bounds of 3-digit numbers
    int max = 999;
    // lower bounds of 3-digit numbers
    int min = 100;
    // Answer variable, we can't return on the first palindrome as it is not necessarily the largest
    int maxPalindrome = 0;
    int i = max;
    int j = max;

    while (i >= min)
    {
        // Reset 'j', otherwise we'll only do one iteration of 'i'
        j = max;
        while (j >= min)
        {
            int mult = i * j;
            if (isPalindrome(mult))
            {
                if (mult > maxPalindrome)
                {
                    maxPalindrome = mult;
                }
                // Break out of 'j' loop. Logically we won't get a bigger palindromatic 'mult' value multiplying 'i' by a smaller 'j'
                break;
            }
            j--;
        }
        i--;
    }
    printf("%d", maxPalindrome);
    return 0;
}
