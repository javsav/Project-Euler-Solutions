#include "BigNumCalc.h"
#include <iostream>

std::list<int> BigNumCalc::buildBigNum(std::string numString) {
  std::list<int> bigNumber;
  // Iterate through characters in numString
  for (auto ch = numString.begin(); ch != numString.end(); ++ch) {
    // Skip invalid characters
    if ((*ch < '0' || *ch > '9') && (*ch != '-')) {
      continue;
    }
    // Handle negative numbers
    if (*ch == '-') {
      ch++;
      bigNumber.push_back((*ch - '0') * -1);
      continue;
    }
    // Subtrat ASCII value for zero from character and push to list
    bigNumber.push_back(*ch - '0');
  }

  return bigNumber;
}

std::list<int> BigNumCalc::add(std::list<int> num1, std::list<int> num2) {
  std::list<int> newNumber;
  // Pointers to list with larger/fewer number of digits
  std::list<int>* largerNumber;
  std::list<int>* smallerNumber;

  

  // Handle presence of negative number by calling subtraction function
  bool isNegative = false;
  if (*num1.begin() < 0 && *num2.begin() > 0) {
    *num1.begin() *= -1;
    return BigNumCalc::sub(num2, num1);
  } else if (*num2.begin() < 0 && *num1.begin() > 0) {
    *num2.begin() *= -1;
    return BigNumCalc::sub(num1, num2);
  } else if (*num2.begin() < 0 && *num1.begin() < 0) {
    *num2.begin() *= -1;
    *num1.begin() *= -1;    
    isNegative = true;
  }

  if (num1.size() >= num2.size()) {
    largerNumber = &num1;
    smallerNumber = &num2;
  } else {
    smallerNumber = &num1;
    largerNumber = &num2;
  }

  int ln = largerNumber->size();
  int sn = smallerNumber->size();
  auto lBackPtr = largerNumber->rbegin();
  auto sBackPtr = smallerNumber->rbegin();

  int remainder = 0;
  // Iterate through both lists
  while (sBackPtr != smallerNumber->rend()) {
    // If there is a remainder, add accordingly
    if (remainder) {
      // If result does not cause new remainder
      if ((*lBackPtr + *sBackPtr) + remainder < 10) {
        newNumber.push_front(*lBackPtr + *sBackPtr + remainder);
        remainder--;
      } else {
        // Edge case for last digit remaining of both numbers
        if (ln == 1) {
          newNumber.push_front((*lBackPtr + *sBackPtr + remainder) % 10);
          newNumber.push_front(1);
          ln--;
          break;
        }
        // Result causes new remainder but also uses remainder
        newNumber.push_front((*lBackPtr + *sBackPtr + remainder) % 10);
      }
      // If no remainder, add accordingly
    } else {
      // If result does not cause new remainder
      if ((*lBackPtr + *sBackPtr) < 10) {
        newNumber.push_front(*lBackPtr + *sBackPtr);
      } else {
        // Edge case for final digit of both numbers
        if (ln == 1) {
          newNumber.push_front((*lBackPtr + *sBackPtr) % 10);
          newNumber.push_front(1);
          ln--;
          break;
        }
        // Result causes remainder
        remainder++;
        newNumber.push_front((*lBackPtr + *sBackPtr) % 10);
      }
    }
    // Increment pointers, decrement remaining numbers
    lBackPtr++;
    sBackPtr++;
    ln--;
  }
  // For remaining digits when larger number has more digits than smaller number
  while (ln > 0) {
    // Similar logic to before but without second number
    if (remainder) {
      if ((*lBackPtr + remainder) < 10) {
        newNumber.push_front(*lBackPtr + remainder);
        remainder--;
      } else {
        if (ln == 1) {
          newNumber.push_front((*lBackPtr + remainder) % 10);
          newNumber.push_front(1);
          ln--;
          break;
        }
        newNumber.push_front((*lBackPtr + remainder) % 10);
      }
    } else {
      newNumber.push_front(*lBackPtr);
    }
    ln--;
    lBackPtr++;
  }
  // Handle certain cases of negative numbers
  if (isNegative) {
    *newNumber.begin() *= -1;
  }

  return newNumber;
}

std::list<int> BigNumCalc::sub(std::list<int> num1, std::list<int> num2) {
  std::list<int> newNumber;

  // Return empty list if either number has no digits
  if (num1.size() < 1 || num2.size() < 1) {
    return newNumber;
  }
  bool isNegative = false;

  // Handle presence of negative number by calling addition function
  if (*num1.begin() < 0 && *num2.begin() > 0) {
    *num2.begin() *= -1;
    return BigNumCalc::add(num2, num1);
  } else if (*num2.begin() < 0 && *num1.begin() > 0) {
    *num2.begin() *= -1;
    return BigNumCalc::add(num1, num2);
  } else if (*num2.begin() < 0 && *num1.begin() < 0) {  
    isNegative = true;  
    *num2.begin() *= -1;
    *num1.begin() *= -1;
  }  

  // Pointers for larger and smaller number
  std::list<int>* largerNumber;
  std::list<int>* smallerNumber;
  // Always subtract in the same order, if needed multiply by negative one after
  if (num1.size() >= num2.size()) {
    largerNumber = &num1;
    smallerNumber = &num2;
  } else if (num1.size() < num2.size()) {
    smallerNumber = &num1;
    largerNumber = &num2;
  } else {
    if (*num1.begin() >= *num2.begin()) {
      largerNumber = &num1;
      smallerNumber = &num2;
    } else {
      smallerNumber = &num1;
      largerNumber = &num2;
    }
  }

  int ln = largerNumber->size();
  int sn = smallerNumber->size();

  // Use reverse iterators
  auto lBackPtr = largerNumber->rbegin();
  auto sBackPtr = smallerNumber->rbegin();

  // Number to keep track of units borrowed
  int borrowed = 0;

  // Iterate through both lists until smaller number (or both numbers) end
  while (sBackPtr != smallerNumber->rend()) {
    // Decrement larger number if borrowing
    if (borrowed) {
      if ((*lBackPtr) > 0) {
        (*lBackPtr)--;
        borrowed--;
      } else { 
        *lBackPtr = 9;
      }
    }
    // If result above zero no need to borrow
    if ((*lBackPtr - *sBackPtr) >= 0) {
      newNumber.push_front(*lBackPtr - *sBackPtr);
    // Otherwise need to borrow ten
    } else {
      // Edge case for last digit
      if (ln == 1) {
        newNumber.push_front((*lBackPtr - *sBackPtr));
        ln--;
        break;
      }
      borrowed++;
      newNumber.push_front((*lBackPtr + 10) - *sBackPtr);
    }
    // Increment pointers and decrement numbers remaining in larger number
    lBackPtr++;
    sBackPtr++;
    ln--;
  }
  // For when the larger number has more digits than the smaller
  while (ln > 0) {
    if (borrowed) {
      if ((*lBackPtr) > 0) {
        (*lBackPtr)--;
        borrowed--;
      } else {
        *lBackPtr = 9;
      }
    }
    newNumber.push_front(*lBackPtr);
    ln--;
    lBackPtr++;
  }

  // Remove leading zeroes
  auto digit = newNumber.begin();
  while (*digit == 0) {
    auto temp = digit;
    digit++;
    newNumber.erase(temp);
  }
  // If we subtracted num1 from num2, multiply newNumber by negative one
  if (*largerNumber == num2) {
    *newNumber.begin() = (*newNumber.begin() * -1);
  }

  // Handle certain cases of negative numbers
  if (isNegative) {
    *newNumber.begin() *= -1;
  }

  return newNumber;
}

std::list<int> BigNumCalc::mul(std::list<int> num1, std::list<int> num2) {
  std::list<int> newNumber;

  // Handle negative numbers
  bool isNegative = false;
  if (*num1.begin() < 0) {
    isNegative = true;
    *num1.begin() *= -1;
  }
  // If both numbers are negative set isNegative to false
  if (*num2.begin() < 0) {
    isNegative = (1 - isNegative);
    *num2.begin() *= -1;
  }

  // Return empty list if either number has no digits
  if (num1.size() < 1 || num2.size() < 1) {
    return newNumber;
  }
  // Insert arbitrary zero to allow for summation
  newNumber.push_front(0);

  // Create pointers to point to specify number with more digits
  std::list<int>* largerNumber;
  std::list<int>* smallerNumber;
  
  if (num1.size() >= num2.size()) {
    largerNumber = &num1;
    smallerNumber = &num2;
  } else {
    smallerNumber = &num1;
    largerNumber = &num2;
  }


  int ln = largerNumber->size();
  int sn = smallerNumber->size();

  // Use reverse iterators
  auto lBackPtr = largerNumber->rbegin();
  auto sBackPtr = smallerNumber->rbegin();
  // To sum the individual results of the multiplication
  std::list<int> sum;
  // Variable to add zeroes when performing long multiplication  
  int zeroes = 0;
  // Outer loop is for when the smaller number has multiple digits
  for (int smallerdigit = 0; smallerdigit < sn; smallerdigit++) {
    // Iterate through the digits in the larger number
    while (lBackPtr != largerNumber->rend()) {
      // Multiply each number in the larger number by the current digit in smaller
      int num = ((*lBackPtr) * (*sBackPtr));

      // Push each individual number in the result to the sum list
      if (num == 0) {
        sum.push_front(0);
      } else {
        while (num > 0) {
          sum.push_front(num % 10);
          num /= 10;
        }
      }
      // Add the current iteration (sum) with the total (newNumber)
      newNumber = BigNumCalc::add(sum, newNumber);
      // Clear the sum list and add the required number of zeroes
      sum.clear();
      zeroes++;
      lBackPtr++;
      for (int i = zeroes; i > 0; i--) {
        sum.push_front(0);
      }
    }
    // For multiple digits in the second number add extra zeroes
    sum.clear();
    zeroes = smallerdigit + 1;
    for (int i = zeroes; i > 0; i--) {
      sum.push_front(0);
    }
    // Reset larger number pointer and increment smaller number pointer
    lBackPtr = largerNumber->rbegin();
    sBackPtr++;
  }

  // Apply adjustment for negative number if necessary
  if (isNegative) {
    *newNumber.begin() *= -1;
  }
  
  return newNumber;
}


