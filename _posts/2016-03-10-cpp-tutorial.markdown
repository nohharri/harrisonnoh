---
layout: post
title:  "C++ Basics"
date:   2016-04-10 6:07:00 -0500
categories: tutorials
short_description: Concepts from C++
---

<div class="paragraph">
	<h2>Classes</h2>
	A class is a user-defined type to represent a concept in the code of a program.
	<h3>Concrete Types (Classes)</h3>
	Concrete types behave just like built-in types. They are basically a type you can create an instance of. Their represetnation is part of their definition. 
	<h3>Arithmetic Type</h3>
	Integral or floating-point type. Basically any type that is or has a corresponding int value. For example, ints and floats are obviously arithmetic types, but boolean and chars are also arithmetic types, since they can be represented with 1 or 0 and a numerical value, respectively.
	<h3>Container</h3>
	Any object that holds a collection of elements, like a vector.

	<h3>Destructors</h3>
	<pre style="background:#002240;color:#fff"><span style="color:#ffee80">class</span> <span style="color:#fd0">Vector</span> <span style="color:#e1efff">{</span>
private:
double *elem;
int sz;
public:
  //constructor with shorthand
  <span style="color:#fd0">Vector</span><span style="color:#e1efff">(</span>int s<span style="color:#e1efff">)</span>:elem{new double[s]<span style="color:#e1efff">}</span>, sz{s} {
    for(int i = 0; i &lt; s; s++)
      elem[i] = 0;
  }
  <span style="color:#08f;font-style:italic"><span style="color:#e1efff">//</span>destructor, deletes dynamically created array, also called the complement. It will destroy itself when it exits the function block it is created in like a static variable.</span>
  <span style="color:#fd0">~Vector</span><span style="color:#e1efff">(</span><span style="color:#e1efff">)</span> {
    delete[] elem;
  }
}

<span style="color:#ffee80">void</span><span style="color:#e1efff"> </span><span style="color:#fd0">func</span>(int n) {
  Vector <span style="color:#ccc">v</span>(n);
  //use v
} <span style="color:#08f;font-style:italic"><span style="color:#e1efff">//</span>v is destroyed here automatically</span>
</pre>

<h3>Good Practice for using Classes in C++</h3>
If possible, try to avoid naked news and deletes as much as possible. Having the C++ constructor and destructor doing that for us is a much cleaner and safer way of using classes that use dynamically allocated memory.

<h3>Abstract Types</h3>
Abstract types are different from Concrete types because their representation is not from their implementation. This means they don't have a default implementation. It completely insulates a suser from implementation details. This means abstract classes should only have functions that need to be implemented by another class. We can write the function definitions but we cannot implement them in an abstract class.

<h3>Using Virtual Functions</h3>
Virtual functions are used to say that this function can be redefined in a later function.

<h3>Pure Virtual</h3> 
Pure virtual functions means that a function MUST implement this function in an inheriting class. You this with the =0 syntax. A class with a pure virtual function is an abstract class.

<pre style="background:#002240;color:#fff"><span style="color:#ffee80">class</span> <span style="color:#fd0">Vector</span> <span style="color:#e1efff">{</span>
private:
  int size;
public:
  virtual int getSize() const = 0;
<span style="color:#e1efff">}</span>
</pre>

<h3>"const" after Function in Class</h3>
Declaring const in a function declaration means that the function cannot modify any member variables. It is generally good practice to do this in getters and boolean return values. The declaration below means that getSize cannot change the value of size, but it can call it.

<pre style="background:#002240;color:#fff"><span style="color:#ffee80">class</span> <span style="color:#fd0">Vector</span> <span style="color:#e1efff">{</span>
private:
  int size;
public:
  int getSize() const;
<span style="color:#e1efff">}</span>
</pre>

<h3>Inheritence</h3>
Classes can be implemented or inherited where the virtual keyword was used. Let's use Vector as an example which extends Container, which is an abstract class. Below, we see that we are implementing the abstract values from Container. The syntax is seen below where we have access to public member variables. Using :public, we can read this as "is derived from" or "is a subtype of." Remember that private values are only accessible within the class that defines them and nowhere else; not even subclasses that inherit from it.

<pre style="background:#002240;color:#fff"><span style="color:#ffee80">class</span> <span style="color:#fd0">Vector_container</span> : public Container <span style="color:#e1efff">{</span>
private:
  Vector v;
public:
  <span style="color:#fd0">Vector_container</span><span style="color:#e1efff">(</span>int s<span style="color:#e1efff">)</span> <span style="color:#e1efff">:</span> v(s);
  double &amp;operator[](int i) { return v[i]; <span style="color:#e1efff">}</span>
  <span style="color:#ffee80">virtual</span> <span style="color:#ffee80">int</span><span style="color:#e1efff"> </span><span style="color:#fd0">getSize</span>() <span style="color:#ffee80">const</span> { return v.<span style="color:#ffee80"><span style="color:#ffb054">size</span>(</span>); }
}
</pre>

<h3>Virtual Functions and Virtual Table</h3>
How do we know which function to call at runtime? THis is where we use a virtual lookup table. The compiler converts the name of a vritual function into an index into a table of pointers to functions. (Also called the vtbl) Each class that uses the virtual keyword has its own vtable identifying all its virtual functions.

<h3>Class Hierarchies</h3>

<h3>Constructor Inheritence</h3>
Constructors are called when a subclass is defined. They go from the superclass to the subclass. This means the superclass constructor is called first, then the subclass is called second. They will be automatically invoked when the subclass constructor is called. This will default to the constructor. We can use initialization lists if we want to use a constructor with arguments.

<pre style="background:#002240;color:#fff"><span style="color:#ffee80">class</span> <span style="color:#fd0">Foo</span>
<span style="color:#e1efff">{</span>
        public:
        <span style="color:#fd0">Foo</span><span style="color:#e1efff">(</span> int x <span style="color:#e1efff">)</span> 
        {
                std::cout &lt;&lt; "Foo's constructor " 
                          &lt;&lt; "called with " 
                          &lt;&lt; x 
                          &lt;&lt; std::endl; 
        <span style="color:#e1efff">}</span>
};

<span style="color:#ffee80">class</span> <span style="color:#fd0">Bar</span> : public Foo
<span style="color:#e1efff">{</span>
        public:
        <span style="color:#fd0">Bar</span><span style="color:#e1efff">(</span><span style="color:#e1efff">)</span> <span style="color:#e1efff">:</span> Foo( 10 )  // construct the Foo part of Bar
        { 
                std::cout &lt;&lt; "Bar's constructor" &lt;&lt; std::endl; 
        <span style="color:#e1efff">}</span>
};
</pre>

<h3>Destructor Inheritence</h3>
The abstract class should always be virtual. A virtual class is essential for an abstract class because an object of a derived class is usually manipulaed through the interface provided by its abract base class. Destructors are called automatically in the reverse order of construction. Subclass destroyed first, then Superclass destroyed.

<h3>Templates</h3>
Templates can be used to represent things into general types.

<pre style="background:#002240;color:#fff"><span style="color:#ffee80">template</span>&lt;<span style="color:#ffee80">typename</span> T>
<span style="color:#ffee80">class</span> <span style="color:#fd0">Vector</span> <span style="color:#e1efff">{</span>
private:
  T* elem;
  int sz;
public:
  <span style="color:#fd0">Vector</span><span style="color:#e1efff">(</span>int s<span style="color:#e1efff">)</span>;
  ~Vector() { delete []em; <span style="color:#e1efff">}</span>
  T&amp; <span style="color:#ff9d00">operator</span>[](<span style="color:#ffee80">int</span> i) <span style="color:#ffee80">const</span>;
  <span style="color:#ffee80">int</span><span style="color:#e1efff"> </span><span style="color:#fd0">size</span>() <span style="color:#ffee80">const</span> { return sz; }
};
</pre>

<h3>Defining Functions with Templates</h3>

<pre style="background:#002240;color:#fff"><span style="color:#ffee80">template</span>&lt;<span style="color:#ffee80">typename</span> T>
Vector&lt;T>::Vector(<span style="color:#ffee80">int</span> s) {
  //do something
}
</pre>

<h3>Function Objects(Functors)</h3>
Functors are objects that can be called like functions.

<h2>Pointers</h2>


<h2>Hash Table (unordered_map)</h2>
Here we will write a couple viable hash functions within C++.

<h3>What is a hash table?</h3>
A hash table/map is a data structure used to map keys to valus where a hash function is used to compute an index to an array of buckets.
<ul>
	<li>search: O(1) average case, O(N) worst case</li>
	<li>insert: O(1) average case, O(N) worst case</li>
	<li>delete: O(1) average case, O(N) worst case</li>
</ul>

<pre style="background:#002240;color:#fff"><span style="color:#ffee80">class</span> <span style="color:#fd0">HashTable</span> <span style="color:#e1efff">{</span>
private:
  int *map;
  void hash();
public:
  <span style="color:#fd0">HashTable</span><span style="color:#e1efff">(</span>int size<span style="color:#e1efff">)</span> {
    map = new int[size];
  <span style="color:#e1efff">}</span>
  <span style="color:#ffee80">int</span> &amp;<span style="color:#ff9d00">operator</span>[](<span style="color:#ffee80">int</span> i) {
    //hash value
    //check if i is in array
    //if it does, fetch value
    //if it doesn't, add value using insert
  }
  <span style="color:#fd0">~HashTable</span><span style="color:#e1efff">(</span><span style="color:#e1efff">)</span> {
    delete[] map;
  }
}

<span style="color:#ffee80">void</span><span style="color:#e1efff"> </span><span style="color:#fd0">HashTable::hash</span>() {
  //hash function
}
</pre>

<h3>Good Hash Function</h3>
At the <b>bare</b> minimum, a hash function should usually mod the value so it will fit into the array. An example of this would be the key 5. If the array is of size 10, We must do 5 % 10 which is 5 and that will be the hashed index. Let's say we have 23 which is larger than the size of our array. If we run our hash function, we have our index 3, which we will store.

<h3>Using Prime Numbers</h3>
Prime numbers minimize hash collisions.

<h3>Collision Resolution</h3>

<h3>Separate Chaining</h3>
Separate chaining uses linked lists within the array. we insert a new item to the front of the list.
<ul>
	<li><b>Advantages:</b></li>
	<li>Better space utilization, not a lot of overhead</li>
	<li>Simple, easy to implement</li>
	<li>Deletion is easy.</li>
</ul>

<h3>Linear Probing</h3>
Linear probing is very simple. When we have a collision, we basically iterate through the array and push it into the next available space.

<h3>Quadratic Probing</h3>
Quadratic probing is using a more complex collision detection that modifies the hash. A simple example would be hash(x) + f(i) where f is some function as our hash. Let's say our function is multiply i where i starts at 0 by i. If we have a collision where we calculate hash(x) + f(i), then we compute the value again but with the increment of i so in this case, we will use 1 as i. We keep recomputing the hash until there are no longer any collisions.

<h3>Double Hashing</h3>
Double hashing is exactly as it sounds. If we were to hash a value and there is a collision, we then compute a different hash function with the hash. 

</div>