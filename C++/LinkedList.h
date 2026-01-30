#ifndef LINKEDLIST_H
#define LINKEDLIST_H
#include "Node.h"
#include <cstddef>

class LinkedList {

 private:
  int m_size = 0;
  Node* head;
  Node* tail;

 public:
  LinkedList();
  LinkedList(int* array, int len);
  int get(int position);
  void insertPosition(int position, int newNum);
  int begin();
  int end();
  int search(int target);
  void printList();
  bool deletePosition(int position);
  int size();
  void deleteList();
  ~LinkedList();


};

#endif