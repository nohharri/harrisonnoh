---
layout: post
title:  "Threading in Java"
date:   2016-03-11 6:00:00 -0500
categories: tutorials
short_description: 
---

<div class="paragraph">
	<h2>Multithreading</h2>
	Multitasking is the ability of a computer's OS to run several programs concurrently on a single CPU. Multithreading extends this concept by allowing individual programs to perform several tasks concurrently, where each thread is a separate flow of control. Thus, one program can run multiple threads.
	<br>
	<strong>Process:</strong> A process has its own set of variables
	<br>
	<strong>Thread:</strong> Threads share the same data and system resources.

	<h2>Creating a Thread</h2>
	We can create a thread using the Thread class provided in the java.lan package. There are two ways to implement the <span class="link"><a target="_blank" href="https://docs.oracle.com/javase/7/docs/api/java/lang/Thread.html">Thread</a></span> class. 
	<br>
	- By creating a subclass of <span class="link"><a target="_blank" href="https://docs.oracle.com/javase/7/docs/api/java/lang/Thread.html">Thread</a></span>
	<br> 
	- By writing a class that implements the Runnable interface.
	<br>
	
	<h2>Subclassing the Thread class</h2>
	We have to override run(), where the thread will actually run. When run is called, our thread is started. All code that is in the thread must be in run().

	<pre style="background:#002240;color:#fff"><span style="color:#ff9d00">import</span> <span style="color:#ffee80">java.lang.Thread</span>;
	<span style="color:#ffee80">class</span> <span style="color:#fd0">MyClass</span> <span style="color:#ffee80">extends</span> <span style="color:#80fcff;font-style:italic">Thread</span> {
    <span style="color:#08f;font-style:italic"><span style="color:#e1efff">//</span> ...</span>
    <span style="color:#ffee80">public</span> <span style="color:#ffee80">void</span> <span style="color:#fd0">run</span>() {
        <span style="color:#08f;font-style:italic"><span style="color:#e1efff">//</span> All code to be executed within the thread goes here.</span>
    }
	<span style="color:#e1efff">}</span>
	</pre>

	We start our thread by using the start method after insantiating a new thread object.

	<pre style="background:#002240;color:#fff"><span style="color:#ffee80">MyClass</span> a <span style="color:#ff9d00">=</span> <span style="color:#ff9d00">new</span> <span style="color:#ffee80">MyClass</span>()<span style="color:#e1efff">;</span>
	a<span style="color:#ff9d00">.</span>start<span style="color:#e1efff">(</span><span style="color:#e1efff">)</span><span style="color:#e1efff">;</span>
	</pre>

	<h2>Implementing the Runnable Interface</h2>

	When implementing Runnable, a single method must be implemented where we put all code in the thread to be executed within the thread.

	<pre style="background:#002240;color:#fff"><span style="color:#ffee80">class</span> <span style="color:#fd0">MyClass</span> <span style="color:#ffee80">implements</span> <span style="color:#80fcff;font-style:italic">Runnable</span> {
    <span style="color:#ffee80">public</span> <span style="color:#ffee80">void</span> <span style="color:#fd0">run</span>() {
        <span style="color:#08f;font-style:italic"><span style="color:#e1efff">//</span> All code to be executed within the thread goes here.</span>
    }
	<span style="color:#e1efff">}</span>

	</pre>

	<pre style="background:#002240;color:#fff"><span style="color:#ffee80">MyClass</span> a <span style="color:#ff9d00">=</span> <span style="color:#ff9d00">new</span> MyClass<span style="color:#e1efff">;</span>
	<span style="color:#ffee80">Thread</span> t <span style="color:#ff9d00">=</span> <span style="color:#ff9d00">new</span> <span style="color:#ffee80">Thread</span>(a)<span style="color:#e1efff">;</span>
	t<span style="color:#ff9d00">.</span>start<span style="color:#e1efff">(</span><span style="color:#e1efff">)</span><span style="color:#e1efff">;</span>
	</pre>
	</pre>

	<h2>Thread States</h2>
	A thread can be in one of four states during its lifetime:
	<ul>
		<li> new - A thread has been created but not started. This occurs whenever a new object that extends Thread or implements Runnable is created.
		</li>
		<li>runnable - Once start() is invoked, that means the thread is now runnable. In the new state, the thread is not runnable. The code in the run() method can execute whenever the thread receieves CPU time from the OS.
		</li>
		<li>blocked - A thread can be blocked, meaning it will not run. There are four states in which this can occur;
			<ul>
				<li>
					Thread object's own sleep() is invoked. Thread remains blocked until the specified number of milliseconds passes.
				</li>
				<li>
					Thread object calls the wait() of an object (doesn't have to be own). Thread will remain blocked until either the object's notify() method OR notifyAll() method is called from <strong>another</strong> thread.
				</li>
				<li>Thread has blocked of an input/output operation. In this case, the thread reamins blocked until the i/p operation has completed.
				</li>
			</ul>
		</li>
		<li>dead - A thread typically dies when the run() method has finished executing.
		</li>
	</ul>

	<h2>Best Practices - Keeping it Object-Oriented</h2>
	<h3>Using Inheritence</h3>
	When we <strong>extend</strong> a class, we are saying we are making a better or customized thread than one in Java instead of implementing or making a type of thread. This is probably not the case, because we want to say we are using a Thread, not that we are making a specified version of Thread. So using the Thread class for inheritence to only override run() is bad practice.

	<h3>Implementing Runnable - Better Way</h3>
	Java has a class called Runnable, an interface that is used to be implemented when declaring a class that uses multithreading. We want to use Thread's built in run by implementing Runnable's run() method. 


<pre style="background:#002240;color:#fff"><span style="color:#ffee80">public</span> <span style="color:#ffee80">class</span> <span style="color:#fd0">Downloader</span>() {
  <span style="color:#ffee80">public</span> <span style="color:#ffee80">void</span> <span style="color:#fd0">run</span>() {
    <span style="color:#08f;font-style:italic"><span style="color:#e1efff">//</span>implements thread code</span>
  }
<span style="color:#e1efff">}</span>

<span style="color:#ffee80">Downloader</span> d <span style="color:#ff9d00">=</span> <span style="color:#ff9d00">new</span> <span style="color:#ffee80">Downloader</span>()<span style="color:#e1efff">;</span>
<span style="color:#ffee80">Thread</span> t <span style="color:#ff9d00">=</span> <span style="color:#ff9d00">new</span> <span style="color:#ffee80">Thread</span>(d)<span style="color:#e1efff">;</span>
t<span style="color:#ff9d00">.</span>start<span style="color:#e1efff">(</span><span style="color:#e1efff">)</span><span style="color:#e1efff">;</span> <span style="color:#08f;font-style:italic"><span style="color:#e1efff">//</span>start our thread</span>

</pre>


	<h2>Example - The Tortoise and the Hare</h2>
	Threading can be demonstrated using the Tortoise and the Hare story. There are certain steps to that race to show threading where the tortoise and hare are both objects that have their own threads running.
	<ol>
		<li>Totoise and Hare join the race</li>
		<li>Hare sleeps in the middle of the race, thinking it is faster than the tortoise.</li>
		<li>Tortoise continues to move slowly without stopping and wins the race.</li>
	</ol>

</div>
