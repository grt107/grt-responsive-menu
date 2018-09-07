# GRT Responsive Menu
GRT Fixed Responsive Menu - jQuery Plugin

Simple and lightweight fixed responsive menu for your website.

You can check the demo here: [grt107.github.io/grt-responsive-menu/](http://grt107.github.io/grt-responsive-menu/)

# Screenshot:
![Alt text](/screenshot.jpg?raw=true "Demo Screenshot")

# How to use the plugin in your website:
1- Include the bootstrap stylesheet file ```bootstrap.min.css``` inside your ```<head>``` tag

  ```html
  <link rel="stylesheet" href="bootstrap.min.css">
  ```

2- Include the bootstrap javascript file ```bootstrap.min.js``` inside the ```<body>``` tag and after ```jquery.min.js```

  ```html
  <script src="bootstrap.min.js"></script>
  ```

3- Include the plugin stylesheet file ```grt-responsive-menu.css``` inside your ```<head>``` tag

  ```html
  <link rel="stylesheet" href="grt-responsive-menu.css">
  ```

4- Include the plugin javascript file ```grt-responsive-menu.js``` inside the ```<body>``` tag and after ```jquery.min.js```

  ```html
  <script src="grt-responsive-menu.js"></script>
  ```

5- Replace your ```<header>``` with the code below:

  ```html
 	<header>
		<div class="menu-container">
			<div class="row no-margin">
				<div class="col-sm-4 col-xs-6 no-padding">
					<a href="#" class="grt-logo"><img src="logo1.jpg"></a>
				</div>
				<div class="col-sm-8 col-xs-6 no-padding">
				<nav>
				 <ul class="grt-menu">
				  <li class="active"><a href="">Home</a></li>
				  <li><a href="">About</a></li>
				  <li><a href="">Portfolio</a></li>
				  <li><a href="">Blog</a></li>
				  <li class="grt-dropdown"><a>dropdown</a>
				   <ul class="grt-dropdown-list">
				   <li><a href="">Menu 1</a></li>
				   <li><a href="">Menu 2</a></li>
				  <li><a href="">Menu 3</a></li>
				 </ul>
				</li>
				<li><a href="">contact</a></li>								
				</ul>
				</nav>
				</div>
			</div>
		</div>
	</header>
  ```
