#ifndef NODE_H
#define NODE_H

class Node {

 private:
  int m_data;
  Node* link;

 public:
  Node(int data);
  Node();
  void setData(int data);
  void setNext(Node* next);
  int data();
  Node* next();

};

#endif