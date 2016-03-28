---
layout: post
title:  "String and Array Interview Questions"
date:   2016-02-24 12:41:00 -0500
categories: tutorials
short_description: Interview practice.
---

<div class='paragraph'>
	String and array problems are interchangable when it comes to algorithms.
	<h2>Things to take note of:</h2>
	<ol>
		<li>There is almost always a quick optimization.</li>

	</ol>
	<h2>Implement an algorithm to determine if a string has all unique characters.</h2>
	The first thing to ask is if you are using ASCII or Unicode. There are only 256 possible characters, so if we are looking for a string with only unique characters, we don't have to check for more. We are making a the string behave like a hash map. A quick optimization is to check if your string is longer than 256 characters. Then we know for sure that it cannot be unique due to the pigeonhole principle.

	<pre style="background:#002240;color:#fff">
//O(n) time and O(1) extra space
<span style="color:#ffee80">bool</span><span style="color:#e1efff"> </span><span style="color:#fd0">isUnique</span>(string s) {
    if(s.<span style="color:#ffee80"><span style="color:#ffb054">length</span>(</span>) > 256)
      return false;
      
    bool charSet[256];
    
    //instantiate array
    for(int i = 0; i &lt; 256; i++) {
        charSet[i] = false;
    }
      
    for(int i = 0; i &lt; s.<span style="color:#ffee80"><span style="color:#ffb054">length</span>(</span>); i++) {
        if(charSet[s[i]])
            return false;
        else
            charSet[s[i]] = true;
    }
    return true;
}
</pre>

<h2>Reverse a string.</h2>
A quick optimization we can do is pass by reference instead of passing by value. Another quick optimization is returning the string if the length is 0 or 1 because we know the reverse of 'a' is just 'a'. Instead of reverse being a string, we can make it void and add a ampersand to our parameter. We can easily do this operation by iterating through a string backwards and saving it in another value. That will take O(n) time and O(n) space. 

<pre style="background:#002240;color:#fff"><span style="color:#ffee80">void</span><span style="color:#e1efff"> </span><span style="color:#fd0">reverse</span>(string &amp;s) {
    if(s.<span style="color:#ffee80"><span style="color:#ffb054">length</span>(</span>) &lt;= 1)
        return;
    
    int left = 0;
    int right = s.<span style="color:#ffee80"><span style="color:#ffb054">length</span>(</span>) - 1;
    while(left &lt; right) {
        //swap
        char temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        left++;
        right--;
    }
}
</pre>

<h2>Check if two strings have identical character counts.</h2>
You can quickly optimize this by checking if the lengths are the same. If not, return false.

<pre style="background:#002240;color:#fff"><span style="color:#08f;font-style:italic"><span style="color:#e1efff">//</span>O(n) time and O(1) space</span>
<span style="color:#ffee80">bool</span><span style="color:#e1efff"> </span><span style="color:#fd0">identicalCharacterCounts</span>(string first, string second) {
    if(first.<span style="color:#ffee80"><span style="color:#ffb054">length</span>(</span>) != second.<span style="color:#ffee80"><span style="color:#ffb054">length</span>(</span>))
        return false;
      
    int letters[256];
    
    //instantiate array
    for(int i = 0; i &lt; 256; i++)
        letters[256] = 0;
    
    for(int i = 0; i &lt; first.<span style="color:#ffee80"><span style="color:#ffb054">length</span>(</span>); i++)
        letters[first[i]]++;
        
    for(int i = 0; i &lt; second.<span style="color:#ffee80"><span style="color:#ffb054">length</span>(</span>); i++) {
        if(letters[second[i]]) {
            letters[second[i]]--;
            if(letters[second[i]] &lt; 0)
                return false;
        }
    }
    return true;
}
</pre>

<h2>Move all zeroes to the end of an array.</h2>
There are two things you really need to notice and take advantage of in this solution. First of all, we have to do this in-place. We are using an array and we don't want to do this with extra memory. We can obviously count every zero within the array and allocate a new array with the non-zeroes at the front and zeroes at the back. The things we need to take advantage of:
<br>The things being 'moved' to the back are all zeroes. Because they are the same value, we don't actually need to swap anything. We can replace the zeroes with the value next to them by keeping track of the non-zero positions and moving them down until there are no zeroes. Then we can use this count variable and put the zeroes at the end.
<br>
<pre style="background:#002240;color:#fff"><span style="color:#08f;font-style:italic"><span style="color:#e1efff">//</span>move 1 back to end, speed</span>
<span style="color:#08f;font-style:italic"><span style="color:#e1efff">//</span>O(n) time and O(n) space</span>
<span style="color:#ffee80">void</span><span style="color:#e1efff"> </span><span style="color:#fd0">moveZeroes</span>(int array[], int size) {
    int counter = 0;
    
    for(int i = 0; i &lt; size; i++) {
        if(array[i] != 0) {
            array[counter] = array[i];
            counter++;
        }
    }
    
    //set everything to 0
    while(counter &lt; size) {
        array[counter] = 0;
    }
}
</pre>

<h2>Check if one string is a palindrome of another.</h2>
</div>