
#include <iostream>
#include "BigNumCalc.h"
#include "LinkedList.h"
#include "Node.h"
#include <cstddef>
#include <list>
#include <sstream>
#include <string>
#include <iostream>
int main() {
    BigNumCalc thing;
    std::string number = "0";
    std::list<int> testNum = thing.buildBigNum(number);
    for (int i = 1; i <= 200000; i++) {
        if (i % 2 != 0) {
            long long unsigned int square = i*i;
            std::stringstream ss;
            ss << square;
            std::string tempString = ss.str();
            std::list<int> intermediate = thing.buildBigNum(tempString);
            std::list<int> total = thing.add(testNum, intermediate);
            testNum = total;
            
        } 
    } std::cout << "\n The sum is: \n";
    for (auto num : testNum) {
        std::cout << num;
    } 
    return 0;
}