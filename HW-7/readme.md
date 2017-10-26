Jerri Royland, 50

[Live Sketch Link](https://jerrifaye.github.io/120-work/HW-7/)


# HW 7 | Describe then Alter the Bouncing Ball

## Description of What the Original Code is Doing

<!--
--This is a Comment Block--

Please describe what the original code is doing.

Why is it working the way it is?
What does each line do?
How can you make the ball change direction?

-->
A ball is created with the pixel width of 40.  It starts out at position 10, 10 and it increments by 1 in both the x and y directions.

In the draw function, the booleans state that if the ball is anywhere between 0 and the width and 0 and the height, then the ball will increment by 3 pixels, which is what multiplying the ball's value by -1 means.  So if the ball is anywhere on the page it will travel at a speed of 3 pixels in both the x and y directions.  And when it reaches the edge by equaling the 0 or the width or height it will turn around and continue the expression, always staying within the bounds of the page.

An ellipse is created with the ball's values tied into the parameters for the ellipse's x and y positions and the ball's size of 40 pixels in both the ellipse's width and height.  The ellipse is filled with white and the default stroke is left.

The last function maps the ball's direction of travel to the mouse press event.  Every time the mouse is pressed the ball's direction will shift by .5 pixels in the x direction and 10 pixels in the y direction which slightly changes the angle and noticeably kicks up the ball's speed.

## How did you alter the sketch?

At first I changed the ball to a sign and create the text question mark and also tried the exclamation mark and ampersand.  I created some boolean statements that changed the background color when the ball reached the edge of the screen.  I created four different colors for each edge.  Then I gave them an alpha so the path of the sign would layer and fade over time.

I incremented the scale value to 3.5 to space out and distinguish the question mark.  It created a lace pattern that was kind of cool if it stayed in a certain path.  But it also traveled at a faster speed with a higher increment and the color changed faster.

I decided I liked the simplicity of the ball and changed it back to the original increment. It created a plaid effect and the colors are easier to see.

I like to watch the colors change between the neutrals and pastels and it's easier to watch at the slower speed.  But it still seems pretty boring.
<!--
Please describe how and why you changed the sketch?
-->
