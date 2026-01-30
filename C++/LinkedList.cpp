#include "LinkedList.h"
#include <iostream>

LinkedList::LinkedList() {
  // Construct with single value of 0 by default
  Node* newNode = new Node;
  this->head = newNode;
  this->tail = newNode;
  newNode->setNext(nullptr);
  m_size++;

}
// Construct from array
LinkedList::LinkedList(int* array, int len) {
  // Create head from first array item
  Node* head = new Node(array[0]);
  this->head = head;
  Node* tempNext = head;
  m_size++;
  // Iterate through second to last element of array and add to list
  for (int i = 1; i < len; i++) {    
    Node* newNode = new Node(array[i]);
    tempNext->setNext(newNode);
    tempNext = newNode;
    m_size++;  
    if (i == len - 1) {
      this->tail = newNode;
      newNode->setNext(nullptr);
    }
  }

} 
// Return item at position
int LinkedList::get(int position) {
  // If out of range return max for int
  if (position > m_size || position < 1) {
    return __INT32_MAX__;
  }
  
  // Otherwise, iterate until position is reached and return data
  int count = 1;
  Node* iterator = head;

  while (count < position) {
    iterator = iterator->next();
    count++;
  }

  return iterator->data();
}

// Insert node at specified position
void LinkedList::insertPosition(int position, int newNum) {  
  // If <= 1 insert at head
  if (position <= 1) {
    Node* newNode = new Node(newNum);
    newNode->setNext(this->head);
    this->head = newNode;
    this->m_size++;
  // If >= size insert at tail
  } else if (position >= this->m_size) {
    position = this->m_size;
    Node* newNode = new Node(newNum);
    this->tail->setNext(newNode);
    newNode->setNext(nullptr);
    this->tail = newNode;
    this->m_size++;
  // Else, iterate until specified position
  } else {
    int count = 1;
    Node* iterator = head;
    Node* beforeInsert;

    while (count < position) { 
      // Create temporary pointer to position before insertion spot   
      if (count == position - 1) {
        beforeInsert = iterator;
      }

      iterator = iterator->next();
      count++;    
    }

    // Insert new node and link previous and subsequent node appropriately
    Node* newNode = new Node(newNum);
    beforeInsert->setNext(newNode);
    newNode->setNext(iterator);

    // Increment size
    this->m_size++;

  }
}

// Returns data value at head
int LinkedList::begin() {
return head->data();
}

// Returns data value at tail
int LinkedList::end() {
return tail->data();
}

// Returns index of specific target or -1 if not found
int LinkedList::search(int target) {
  int index = 1;
  for (auto i = this->head; i != nullptr; i = i->next()) {
    if (i->data() == target) {
      return index;
    }
    index++;
  }
 return -1;
}

// Print list within square brackets separated by spaces
void LinkedList::printList() {
  std::cout << "[";
  for (auto i = this->head; i != nullptr; i = i->next()) {
    if (i == this->tail) {
      std::cout << i->data();
    } else {
      std::cout << i->data() << " ";
    }
  }
  std::cout << "]\n";
}

// Delete specified position
bool LinkedList::deletePosition(int position) {

  // Return false if position out of bounds
  if (position <= 0 || position > m_size) {
    return false;
  }

  // Handle edge case (deleting at first position)
  if (position == 1) {
    Node* tempHead = this->head;
    this->head = this->head->next();
    delete tempHead;
    this->m_size--;
    return true;
  }

  int count = 1;
  Node* iterator = head;
  // To store the node prior to the deletion position
  Node* beforeDelete;
  // Iterate through list
  while (count < position) {
    // Save node prior to deletion
    if (count == position - 1) {
        beforeDelete = iterator;
    }
    iterator = iterator->next();
    count++;    
  }
  // Save node after deletion spot
  Node* tempNext = iterator->next();
  // Link node prior to deletion to node after deletion
  beforeDelete->setNext(tempNext);
  // Delete specified node
  delete iterator;
  // Update tail if necessary
  if (position == m_size) {
    this->tail = beforeDelete;
  }
  // Decrement size
  this->m_size--;
  return true;
}

// Return size of list
int LinkedList::size() {
  return this->m_size;
}

// Destructor
LinkedList::~LinkedList() {
  // Call delete function
  LinkedList::deleteList();
}

// Deletes linked list from heap
void LinkedList::deleteList() { 
  Node* iterator = this->head;
  Node* tempNext;
  while (iterator != nullptr) {
    tempNext = iterator->next();
    delete iterator;
    iterator = tempNext;
  }
  this->m_size = 0;
  this->head = nullptr; 
  this->tail = nullptr;  
}