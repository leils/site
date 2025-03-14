---
title: She Hungers
date: "2021-08-27"
description: A 3D printed project about a cat
tags: ["experiment", "fabrication", "interactive"]
thumbnail: ./all_cats.jpg
tech: ["3D printing", "Repurposing"]
---

Earlier this month I moved across the country to attend NYU ITP, the 2-year Interactive Telecommunications Program. This has meant leaving a darling, snuggly cat behind in San Francisco.

To make missing this fuzzy friend a little easier, I made a little timer to simulate her constant need for food.

`vimeo: https://vimeo.com/596205642`

It all started here: ![Picture of a paper cutout in the silhouette of a cat head and jaw, over sketches of a cat head that opens/closes its jaw](./cutout.jpg)

I wanted this piece to:

1. Be **physically interactive**
2. Run **mechanically**, not digitally
3. Have a sense of **whimsy** (which is ... uh ... hard to quantify)

A couple of desired interactions:

- The audience gets to "push down" the nose to reset the timer
- The timer "yells" when it's "hungry"

I tore the core out of a [60 minute focus timer](https://amazon.com/gp/product/B07PRZ5BXS) to see how it works. Turns out, it's almost exactly the same as an egg timer: a series of springs and pendulums, attached to a dial (and a hammer to ring the alarm).

![Image of the internal system in a mechanical timer dial](./egg-timer.jpg)

Lucky for me, the dial was a press-fit onto the mechanism, so I could easily replace it with something custom.

I spent some time learning about 3d printing, using **OnShape** to create the CAD elements, and a **Prusa3d** to print. These are some pretty basic shapes, but they had to be modeled to fit the pre-existing parts on the timer itself.

![CAD of piece to interface with timer dial](./cad.jpg)

It took a few tries to make sure the two pieces mated well; between the tolerances on the print and the errors in my measuring, things needed some adjusting along the way.

![3D Printed piece mounted to timer internals](./test-print.jpg)

Now that the fit seemed snug, I could move on to translating the shape I imagined onto the part itself. I freehanded the shape of the head and placed the mount onto the back.

![CAD of cat's head silhouette facing left, with mount facing the viewer](./cad-head.jpg)

A few iterations later ...

![3D print of cat's head dial and jaw, with mount and cutout for movement](./printed-head.jpg)

A few tweaks, some final touches, and we got ...

### The Final Product

![Image of a timer, the dial is a cat head in profile. The cat faces to the right, its mouth is closed.](./final-product.jpg)

In order to _"feed"_ the cat, you push the nose down, effectively closing the cat's mouth.
30 minutes later, the cat _"yells"_ for more food.

![Image of a timer where the dial is a cat head. The mouth is open to 180 degrees, showing a red panel reading "FEED ME NOW!".](./feed-me.jpg)

And the whole family together:
![Timer and previously printed prototypes together](./all_cats.jpg)
