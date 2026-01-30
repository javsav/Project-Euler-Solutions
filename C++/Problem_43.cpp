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
#include <cstdio>
#include <sstream>
<<<<<<< HEAD

std::pair<int,int> isPandigital(long unsigned int number) {
=======
#include <iostream>
#include <unordered_set>
bool isPandigital(long unsigned int number) {
>>>>>>> 6dcd2c2 (really should read the first line of the description next time :D)
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
<<<<<<< HEAD
        printf("\n Current partial: %d, Current number: %li \n", partial_num, number);
        if (partial_num % prime_array[prime_index] != 0) {
<<<<<<< HEAD
            printf("\n Partial %d was not divisibile by %d \n", partial_num, prime_array[prime_index]);
            return {prime_array[prime_index], starting_index};
=======
            // printf("\n Partial %d was not divisibile by %d \n", partial_num, prime_array[prime_index]);
=======
        printf("\n Current partial: %d \n", partial_num);
        if (partial_num % prime_array[prime_index] != 0) {
            printf("\n Partial %d was not divisibile by %d \n", partial_num, prime_array[prime_index]);
>>>>>>> 0de6c43 (Euler is laughing in his grave)
            return false;
>>>>>>> 6dcd2c2 (really should read the first line of the description next time :D)
        } else {
            printf("\n Partial %d was divisibile by %d \n", partial_num, prime_array[prime_index]);
            prime_index++;
            starting_index++;
            partial.clear();
        }
        
    }
    printf("\n Pandigital number found: %d ! \n", number);
    return {0,0};
}

<<<<<<< HEAD
long double findSum() {

long double totalsum = 0;

for (long unsigned int number = 111111111; number < 999999999; number++) {
    std::pair<int, int> indicator = {0,0};
    std::pair<int,int> isPandigitalNum = isPandigital(number);
    if (isPandigitalNum == indicator) {
        totalsum += number;
    } else {
        std::string additionNumber = "1";
        for (int x = 0; x < 6 - isPandigitalNum.second; x++) {
            additionNumber += "0";
        }
        long int additionNum;
        std::istringstream(additionNumber) >> additionNum;
        number += additionNum;
        
    }
}
printf("\n Total sum is: %li \n", totalsum);
return totalsum;
=======
bool containsOneToNine(long unsigned int num) {
std::unordered_set<char> numbersSet = {'0', '1','2','3','4','5','6','7','8','9'};

std::stringstream ss;
ss << num;
std::string theNumber = ss.str();
for (int i = 0; i < 10; i++) {
    if (numbersSet.count(theNumber[i])) {
        numbersSet.erase(theNumber[i]);
    }
}
if (numbersSet.empty()) {
    std::cout << "\n Number: " << num << " contains zero to nine \n";
    return true;
}
return false;
}

long double isPandigitalHelper() {

long double totalSum = 0;

for (long unsigned int number = 1000000000; number < 9999999999; number++) {
    if (containsOneToNine(number)) {    
        if (isPandigital(number)) {
            totalSum = totalSum + number;
        } 
    }
}
std::cout << "Total sum" << totalSum << "\n";
return totalSum;
}

int main() {
    isPandigitalHelper();
    return 0;
>>>>>>> 6dcd2c2 (really should read the first line of the description next time :D)
}

int main() {
    findSum();
}

