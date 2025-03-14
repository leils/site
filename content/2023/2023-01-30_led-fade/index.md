---
title: L&I 01 ~ LED Fade
date: "2023-01-30"
description: Interruptable fading LED
tags: ['itp', 'light-and-interactivity']
thumbnail: ./IMG_8764.jpg
tech: ['arduino']
---
I put together a rotary encoder controlled LED. The rotation of the encoder controls the speed at which the fade occurs, and the button-press of the encoder resets that speed to a step of 1. The step can be changed from 0-30. 

This is built on top of the [Sine wave example](https://tigoe.github.io/LightProjects/fading.html) provided.

---

[code on github · leils/itp_spr_2023](https://github.com/leils/itp_spr_2023/tree/main/light/01_fade)

[https://youtu.be/4fgbpwUGFOs](https://youtu.be/4fgbpwUGFOs)

---

I chose to use a rotary encoder because of how satisfying I find the tangible clicking. On my first pass, I ran into some difficulty figuring out how to map an unbound rotating input to this fade; I think more work can be done here to make a more intuitive control. 

Learning & Takeaways:

- Rotary encoders have a very different feeling from potentiometers, and their clicking sensation provides nice feedback when used.
- The Nano IOT 33’s A0 pin is reserved and cannot be used for this kind of analog out (whoops). When trying a linear fade based on the default Arduino example, I found the timing of the fade was funny, and when I was then encountering difficulty setting the pin to an output, I needed to check the pin charts.
- Using the EncoderStepCounter Library, the built-in position value rolls over at 128. Unexpected but not a roadblock, perhaps this position value is more built to track individual rotation changes (ie. one interaction) rather than an overall position number.