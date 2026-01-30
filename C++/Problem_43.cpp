// The number, 1406357289, is a 0 to 9 pandigital number because it is made up of each of the digits 0 to 9 in some order, 
// but it also has a rather interesting sub-string divisibility property:
// Let d_1 be the 1st digit, d_2 be the 2nd digit, and so on. In this way, we note the following:
// d_2d_3d_4=406 is divisible by 2
// d_3d_4d_5=063 is divisible by 3
// d_4d_5d_6=635 is divisible by 5
// d_5d_6d_7=357 is divisible by 7
// d_6d_7d_8=572 is divisible by 11
// d_7d_8d_9=728 is divisible by 13
// d_8d_9d_{10}=289 is divisible by 17
// Find the sum of all 0 to 9 pandigital numbers with this property.
#include <string>
#include <sstream>
#include <iostream>
#include <unordered_set>
#include <algorithm>

bool isPandigital(long unsigned int number) {
    int prime_array[8] = {2,3,5,7,11,13,17};
    std::stringstream ss;
    ss << number;
    std::string num = ss.str();
    std::string partial;
    int starting_index = 1;
    int prime_index = 0;
    while (prime_index <= 6) {
        for (int d = starting_index; d < starting_index + 3; d++) {
            partial += num[d];
        }
        int partial_num = 0;
        std::istringstream(partial) >> partial_num;
        if (partial_num % prime_array[prime_index] != 0) {
            return false;
        } else {
            prime_index++;
            starting_index++;
            partial.clear();
        }
        
    }
    std::cout << "\n Pandigital number found: " << number << " !\n";
    return true;
}

long double isPandigitalHelper() {

long double totalSum = 0;

std::string s = "0123456789";
    
    std::stringstream ss;
    long unsigned int number;
    do {
        std::stringstream ss(s);
        ss >> number;
        

        if (isPandigital(number)) {
            totalSum += number;
        };
    } while (std::next_permutation(s.begin(), s.end()));
std::cout << "Total sum" << totalSum << "\n";
return totalSum;
}

int main() {
    isPandigitalHelper();
    return 0;
}

