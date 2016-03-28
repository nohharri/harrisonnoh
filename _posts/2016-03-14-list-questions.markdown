---
layout: post
title:  "Linked List Interview Questions"
date:   2016-03-14 2:50:00 -0500
categories: tutorials
short_description: 
---

<div class="paragraph">

  Here I've compiled a short list of every linked list question you could possibly get in order to understand how to solve it. This was made for myself to study but anyone is welcome to use it! All solutions are written in C++.

	<h2>Reverse a Linked List</h2>

  Current keeps track of the current point in the list. Previous is a reference to the previous element so we have a reference to what will be pointed to when the list is reversed. The next also acts the same way to the next. You can see we always start with next then switch the value we're performing the operation on. Next goes to curr->next, curr->next goes to prev, and so on. We start and end with next.
	
<pre style="background:#002240;color:#fff">

  //O(n) time and O(1) space
  void<span style="color:#e1efff"> </span><span style="color:#fd0">reverse</span>(Node *head) {
  Node* prev = nullptr;
  Node *curr = head; 
  Node *next; 
  while(curr) {
    next = curr->next;
    curr->next = prev;
    prev = curr;
    curr = next;
  }
  head = prev;
}
</pre>

  <h2>Check to see if a Linked List is a Palindrome</h2>

<pre style="background:#002240;color:#fff">

  //O(n) time and O(1) space
  <span style="color:#ffee80">bool</span><span style="color:#e1efff"> </span><span style="color:#fd0">isPalindrome</span>(Node *head) {

  bool isOdd;

  if(<span style="color:#ffee80"><span style="color:#ffb054">size</span>(</span>) &lt; = 1)
    return true;

  //isodd
  if(<span style="color:#ffee80"><span style="color:#ffb054">size</span>(</span>) % 2 == 1)
    isOdd = true;

  //get middle
  int middle =<span style="color:#ffee80"><span style="color:#e1efff"> </span>size(</span>) / 2;
  int counter = 0;
  Node* back = head;
  while(counter &lt; middle) {
     back = back->next;
     counter++;
  }

  if(isOdd) {
    back = back->next;
  }

  //reverse
  Node* prev = nullptr;
  Node* next;
  while(back) {
    next = back->next;
    back->next = prev;
    prev = back;
    back = next;
  }
  //back is now tail
  back = prev;

  counter = 0;
  Node *curr = head;
  while(counter &lt; middle) {
    if(curr->data != back->data)
      return false;
    counter++;   
  }
  return true;
}
</pre>

<h2>Check if Linked List is Circular</h2>

<pre style="background:#002240;color:#fff"><span style="color:#ffee80">bool</span><span style="color:#e1efff"> </span><span style="color:#fd0">isCircular</span>(Node* head) {
  Node* curr = head;

  while(curr) {
    if(!curr->next)
      return false;
    curr = curr->next;
    if(curr == head)
      return true;
  }
}
</pre>

<h2>Check if Linked List has a Cycle</h2>

This means the list does not terminate and there could be a list that loops back into the list. We can no longer check the head because our tail pointer doesn't necessarily have to end at the head. We can do this by using two pointers. One will advance faster than the other. If there is a cycle, a pointer will eventually 

<pre style="background:#002240;color:#fff"><span style="color:#ffee80">bool</span><span style="color:#e1efff"> </span><span style="color:#fd0">hasCycle</span>(Node* head) {
  Node *slow = head;
  Node *fast = head->next;

  while(true) {
    if(!fast || !fast->next)
      return false;
    else if(fast == slow || fast->next == slow)
      return true;
    else {
      slow = slow->next;
      fast = fast->next-next;
    }
  }
  return false;
}
</pre>

<h2>Remove Duplicates in an Unsorted List.</h2>


</div>