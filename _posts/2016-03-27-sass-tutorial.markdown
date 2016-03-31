---
layout: post
title:  "Sass Tutorial"
date:   2016-03-27 11:56 -0500
categories: tutorials
short_description: Interview practice.
img: https://blog.farrant.me/content/images/2016/01/sass-monster.png
---

<div class="paragraph">

	<h2>What the heck is Sass?</h2>
	Sass is a CSS preprocessor which is a scripting language that extends CSS allowing developers to write code in one language then compile it into CSS. It helps with large development teams by allowing the user to use inline imports, variables, and nested rules. 
	<h2>Setup</h2>
	First, we have to install Sass using Ruby.

	<pre style="background:#002240;color:#fff">$ sudo gem install sass
</pre>

	We can make our first Sass file:

	<pre style="background:#002240;color:#fff">$ touch style.scss
</pre>

	But the web cannot compile scss files. We must convert .scss to .css and we can do that by running:

	<pre style="background:#002240;color:#fff">$ sass style.scss style.css
</pre>

	

</div>