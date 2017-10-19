### Jerri Royland 51

["Algorithmic Sketch"](https://jerrifaye.github.io/120-work/hw-6/)

# HW-6

#### *Project*
I struggled with ideas for this project and decided I wanted to do a rain animation.  I really like how rain is animated in 2D animations.

#### *Progress*
I knew I needed to use *random* to create multiple lines across the page so I first set the x1,y1 point for random and anywhere on the page and constrained the second point to stagger a few points right of it with a length of 100.  I duplicated it and changed the angle of the new rain to angle a little left.  It was a bit too scattered so I changed one of the rain objects so the x1 point stayed at zero and then gave it a random length from 50 to 250.  This covered the page and gave a better illusion of rain falling.

The next step was to create rain drops and I knew I wanted to map them to appear at the bottom half of the page with their size mapped to the y value.

As a last detail with a big effect, I set the rgb values to random and gave both the rain and drops their random values.  I played with the values until there was a mix of magenta, chartreuse, blue and violet.

#### *Issues*
It was at first difficult to map and constrain values.  But I figured it out and was able to achieve the right illusion.  I wasn't quite sure where to use the math operators.  Add/subtract and division came in use but I didn't know what to do with multiply and modulo.

#### *Outcome*
I was able to create what I set out to do but when I was finally done this morning I realized too late that I hadn't actually created an algorithmic sketch.  I set the background in the draw function so it would continually refresh the page like an animation.  So it's actually an animation, not a design that builds on the same page over time.  I didn't realize this when I decided on rain because I was too focused on the random, mapping and constraining.  Now it makes sense that it was difficult to find a useful place for the math operators because they would have been the main functions in an algorithm.

Poop.
