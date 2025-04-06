---
title: Grim Grinning Ghosts
date: "2022-02-01"
description: A spooky serenade
tags: ["itp", "physical computing", "showcase", "fabrication", "interactive"]
thumbnail: ./ggg-hero.png
---

![The scene is mostly black; on a table sits a wooden candle holder with 5 candles visibly on it. Behind it is a transparent screen with 5 ghostly heads hovering on it, over the words "Happy Hauntings!". Behind the transparent screen 2 candles are visible. Between the table and the camera is a person facing away from the camera.](still-3.png)

Inspired by my love for Disney Imagineering, this piece brings a taste of The Haunted Mansion to life. The experience surrounds a piece of floating text behind a wooden candle holder, as well as a set of (LED flameless) candles. As the viewer places candles into the holder, corresponding ghosts appear, singing more and more loudly. Once all candles are placed, the viewer gets a surprise as the ghosts fling those candles back out.  

`https://youtu.be/Jm6Aruuc6bE`

This project was originally conceived for the ITP Halloween Experience event, [where a lower fidelity version was showcased](https://www.leiac.me/2021/2021-10-26_spooky-serenade/). This updated version was moved from a small monitor onto a larger [VNTANA Z Hologram Display](https://www.vntanahologram.com). This allowed for the text and ghosts to "float" in front of the viewer, and appear to be hovering in space when the installation is placed in semi-bright rooms or around other props. Note that this effect is difficult to document and therefore does not appear much in the video above.

Within the candle holder is housed a series of photo resistors used to detect candle placement. Additionally, tiny 5V solenoids are placed underneath each candle and are triggered on the completion event. These solenoids are actually run for only a few milliseconds at 12V in order to get the impact necessary to eject the candles.

![Image of an Asian person with short hare and a red patterned scarf. They are reaching down towards a table with fake candles on it, and looking to the left of the camera. They appear to be startled. In front of them is a candle holder with 3 candles. Behind them is a wall with "The Design Lab" written on it, and a person studying.](still-christina.png)

![A wooden candle holder with 6 fake candles sitting on it. The candle holder is a half-circle, where the face of the circle is the top of the holder. The candles are lit.](still-4.png)

---
## Process Documentation 

Cardboard mockup to test form.
![two cardboard half-circle boxes, one laser cut and one hand-cut](./form_tests.jpg)

Detect-and-eject proof of concept for solenoid plus photo resistor. 
![craft plywood jig for testing angled ejection](./angled_test.jpg)
![back of jig, including hot-glued solenoid](./angled_test_back.jpg)

https://youtu.be/kEDEbDJSnUY

![half-assembled candle holder](./half-assembled.jpg)

---
## Updated April 2023

![minor improvements, including anchoring breadboard, combining power, and providing stability for plug](improvements.jpg)




<sub>The ghosts are a 4k fan-generated video, created for Halloween projections. You can find the [video here on Youtube](https://youtu.be/HECrCf73Jv8).</sub>
