#include "Node.h"

Node::Node(int data) : m_data(data) {}

Node::Node() : Node(0) {}

void Node::setData(int data) {
  this->m_data = data;
}

void Node::setNext(Node* next) {
  this->link = next;
}

int Node::data() {
  return this->m_data;
}

Node* Node::next() {
  return this->link;
}