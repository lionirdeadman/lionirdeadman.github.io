+++
title = "CSS : prefers-contrast and prefers-reduced-motion"
date = 2021-09-04
slug_url = true
tags = ["meta", "css", "accessibility", "micro"]

author = "Lionir Deadman"
author_url = "https://thelion.website/about/"
license_name = "Creative Commons Attribution-ShareAlike 4.0 International"
license_url = "https://creativecommons.org/licenses/by-sa/4.0/"

+++

Today I implemented prefers-contrast and prefers-reduced-motion.
<!--more-->
I just felt like working on the styling today so I implemented [prefers-contrast](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-contrast)
and [prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion).

I essentially made sure that all text was one color and the background another. I made sure to take into account where I used contrast to give meaning
by replacing it with borders. Overall, I think this is an improvement to what browsers do what Windows does with [forced-colors](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/forced-colors),
I've not seen how MacOS handles this.

I'd encourage people to do this for people who are reading their site. Of course, this is not a replacement for following accessibility guidelines!

I hope it can be useful to people. It was fun to make it.
