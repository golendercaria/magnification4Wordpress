# magnification4Wordpress
Visually impaired support plugin for Wordpress

Detail of explanation here : https://nouslesdevs.com/php/text2speech/

Documentation
=============

How it work
-----------
The plugin simply adds three buttons on your page, one is used to zoom when pressed, another is used to unzoom and finally the last is used to get the default zoom.

While it works it is necessary to code the site with em or rem because the plugin will act on the font-size of the html tag.

Required
--------
Wordpress and jQuery (1.12.4 Work)

How to use
----------
1) Add the plugin in your Wordpress
2) Go to extension and activate them
3) In sidebar you can see new menu "m4W Options" go that
4) Add a Container ID, thanks to that you can customize the HTML code in CSS. It's required for working !!
5) Set the zoom factor, 1 does nothing, while 1.1 slightly increases the zoom. It's required for working !!
6) Save...

Render
------
If you load any page you can see the following HTML code :

```html
 <div id="YOUR_CONTAINER_ID">
	 <ul>
		 <li>
		 	<a href="#" class="zoom" data-action="zoom">A<sup>+</sup></a>
		 </li>
		 <li>
		 	<a href="#" class="normal" data-action="normal">A</a>
		 </li>
		 <li>
		 	<a href="#" class="macro" data-action="zoomout">A<sup>-</sup></a>
		 </li>
	 </ul>
 </div>
```

Utilities classes
-----------------
- The zoom is limited by the system, when the maximal or minimal zoom is achieved the class "disable" put itself on the button

What you have to do
-------------------
Customize the render

For example my SASS code :

```scss
$accessibilityFacteurMenu:1.5;
$sizeMenu:60px;
#accessibility{
	position: fixed;
	top:70%;
	right: 0;
	@include transform(translateY(-50%));
	z-index: 10000;
	font-size: $sizeMenu;
	ul{
		@include clearfix();
		list-style-type: none;
		padding: 0;
		margin: 0;
		font-size: inherit;
		li{
			font-size: inherit;
			a{
				margin-top: 1px;
				border: 1px solid #565656;
				text-decoration: none;
				background: #565656;
				color: white;
				height: $sizeMenu;
				width: $sizeMenu;
				text-align: left;
				@include transition(all 0.2s);
				display: block;
				line-height: $sizeMenu - 20px;
				padding: 10px;
				opacity: 0.75;
				&:hover{
					background: black;
					opacity: 1;
				}
				&.macro{
					font-size: $sizeMenu/2/$accessibilityFacteurMenu;  
				}
				&.normal{
					font-size: $sizeMenu/2;
				}
				&.zoom{
					font-size: $sizeMenu/2*$accessibilityFacteurMenu;
				}
				&.disable{
					opacity: 0.2;
					cursor: default;
				}
			}
		}
	}
	
	@media only screen and (max-width: 768px) {
		top:auto;
		bottom: 0;
		@include transform(translateY(0));
		$sizeMenu:40px;
		ul{
			li{
				float: left;

				a{
					margin-top: 0px;
					margin-left: 1px;
					height: $sizeMenu;
					width: $sizeMenu;
					line-height: $sizeMenu - 20px;
					&.macro{
						font-size: $sizeMenu/2/$accessibilityFacteurMenu; 
					}
					&.normal{
						font-size: $sizeMenu/2;
					}
					&.zoom{
						font-size: $sizeMenu/2*$accessibilityFacteurMenu;
					}
				}
			}//end li
		}//end ul
	}
}
```
