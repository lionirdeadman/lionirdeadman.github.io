+++
title = "PINE64's response is disappointing.."
date = 2022-08-18
slug_url = true
draft = true
tags = ["pine64", "manjaro", "linux", "community", "ramblings"]

author = "Lionir Deadman"
author_url = "https://thelion.website/about/"
license_name = "Creative Commons Attribution-ShareAlike 4.0 International"
license_url = "https://creativecommons.org/licenses/by-sa/4.0/"
+++

Recently, there were [some](https://blog.brixit.nl/why-i-left-pine64/) [posts](https://www.pine64.org/2022/08/18/a-response-to-martijns-blog/) writing about [PINE64](https://en.wikipedia.org/wiki/Pine64) and their involvement in the Linux space which I recommend reading. I wanna say what I think of it and where I come from.
<!--more-->
First, I really want the Linux mobile space to succeed because the space around Android is being poisoned by Google. Even if we do make Android devices which are fully free software, they're still in an ecosystem which refuses to acknowledge them.

So, I think that companies like Purism and PINE64 entering the space is great, however, I've never really liked the approach that PINE64 used. They make the hardware and then essentially let volunteers make it worth using which.. feels not great for people using their devices because the responsibility to make things work fall on volunteers. I think that fundamentally creates a toxic environment for volunteers who want to help.

That said, it seems that PINE64 wanted to somewhat counter that through their Community Editions to give money to distributions. It seems that this was well used for the most part and ended up in these distributions focusing on some upstream work that everyone can benefit from.. except one of them in particular.

It seems that Manjaro was that exception. They would only repackage the upstream work without really contributing much. They also broke certain software by shipping patches that were never meant to be shipped, like ongoing merge/pull requests. They were later [called out by the community indirectly](https://dont-ship.it/) for this practice. One would assume they took a step back and changed how they ship software, right? Unfortunately, they kept the bad practice. 

Maybe that could've been the end of the story - just don't make community editions of Manjaro and keep the culture fostering around PINE64. However, the opposite ended up happening, PINE64 [stopped making community editions](https://www.pine64.org/2021/02/02/the-end-of-community-editions/) and settled on Manjaro.

Honestly, I don't understand why PINE64 thought this was ever a good idea. It went entirely against their community-focused vision of things. I guess this is easy to say in hindsight but choosing anyone of them was likely to just create favouritism and discourage people outside of that favourite.

And that roughly brings us to now, Martijn Braam leaving PINE64 and the responses. It seems that this decision of choosing Manjaro brought them into a place where they had to fight for PINE64 to keep the bootloader open enough that they could still use it with other distributions. That must've felt pretty horrible and rightfully, Braam decided to leave.

PINE64 seeing this seemingly rushed out a response the day after. Was it good enough to restore relations? No, far from it. The language used in it makes me think they were more preoccupied with making people think they did nothing wrong rather than actually listening and addressing these issues.

When the response has language like "we were also convinced", that implies that they were not listening but rather arguing which is evident when they mention "The talks concerning SPI were tense", this kind of environment is not fun. This is how you burnout people who just want to help. PINE64 also mentions that the decision was made because pricing "skyrocketed", however, it seems that this was not [mentioned during those arguments](https://news.ycombinator.com/item?id=32508770).

When the response has language like "a functional Tow-Boot build for the Pinebook Pro wasn’t available at the time of manufacture" to reason out of the need of shipping a bootloader on the Pinebook Pro, it shows to me that there is a lack of care. Why didn't PINE64 work on that? Why doesn't PINE64 care?

When the response has no language that shows they want to change this culture, you know that they were not listening. The only language which vaguely resembles that is when they mention wanting to create "DevZone" which is a bounty system for people to do work... I can't help but feel this system is essentially sending money to people to avoid having more employees to work on these issues.

Overall, this is just really disappointing.
