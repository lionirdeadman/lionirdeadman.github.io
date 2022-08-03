+++
title = "Redesign and rebuilt in Hugo"
date = 2021-08-09
slug_url = true
tags = ["website", "meta", "hugo", "zola", "design", "jsonfeed", "websub", "analytics", "jpeg", "images", "fonts"]
aliases = ["/redesign-and-rebuilt-in-hugo/"]

author = "Lionir Deadman"
author_url = "https://thelion.website/about/"
license_name = "Creative Commons Attribution-ShareAlike 4.0 International"
license_url = "https://creativecommons.org/licenses/by-sa/4.0/"
syndications = {"Mastodon" = "https://fosstodon.org/@lionirdeadman/105454380433782624"}

+++
I did it again, the website's been rebuilt. Let's see what's new.
<!--more-->

### Slightly new theme

I've made the background more distinct from the article and posts because I plan to put symbols of things I like in there (You think this is vague? well, it's for the surprise, silly!). I think it should help give a more personal feel to the site, I hope that comes through whenever I can release that.

I've added a small background to Kuroma's copyright assignement because it's been failing accessibility guidelines and it was bad even for me with... Oh yeah! I put my mermelon avatar a bit too late. It's meant to be me as a mermaid with melon textures. It started mostly as a joke but I think it's pretty lovely and fits the summer (shhh, it's totally not the end of summer and I'm super late at doing the change).

### No more fonts shipped

I've decided to shave off 60kB by not shipping Cantarell anymore. This does result in slightly different rendering between Cantarell, Helvetica and Arial but it keeps the sizing. Shipping Cantarell (or any font) and taking 60% of the bandwidth just isn't worth it.

### Better mobile support

Mobile now has the menu options on the left side rather than a scrolly bit which was kinda just there. I think it looks and works much better this way. I've also made the edges of posts go flush with the screen rather than keeping the border radius on larger displays. I find it pretty satisfying to see it just "click" together.

### JSON Feed

You can now subscribe to a [JSON feed](jsonfeed.org/) [here](/feed.json). It's not currently what my feed button links to because it seems that Superfeedr doesn't want to do WebSub with JSON Feed. I'm not sure what to do about it. But for those on local parsers, feel free to enjoy that.

### WebSub

It just took a year after [mentioning it](/2020-10-21/) but I finally got around to doing it. Now the GitHub action *should* tell Superfeedr (WebSub) provider to push it to feed readers using WebSub rather than polling. This should result in more efficient usage for those using it and also result in people seeing the posts faster so it's a win-win really.

### JPEG trick fallback instead of PNG fallback!

Thanks to the help of [Rph](https://rph.space/), my fallback is no longer a 100+kB PNG! It's now a JPEG! I can hear you already. What about transparency?! Fool, thinking I'd forget that. You can just mask the JPEG with CSS! You'll need some JS to make sure the mask is only applied when the JPEG is loaded which is where Rph helped. So now, I can have a ~22kB JPEG with a ~7kB PNG mask instead of a 110kB PNG! That's a 70% size saving! It's competitive with a WebP! AVIF manages to half it in size so it's still the much better solution.

### JSON source for tracking and about!

Now the tracking and about pages use JSON to generate instead of the config file. This would allow me in the future to make an API request to get the data if I ever want to use tracking sites again. That could be interesting.

### Config file controls header, logo and avatar!

Now, the config file controls the header and logo colours so they're always matching and I don't need to keep multiple copies of the logo! I can also change my avatar everywhere from there. This should mean that the problem earlier of not changing for the summer theme should happen less since it's less of an hassle.

### GoatCounter

I now use GoatCounter alongside Plausible. I might use GoatCounter-only in the future as it is a free option and I unfortuantely can't see myself paying for many services in the near future.

### Conclusion

New stuff but still a meta post. That always happens, doesn't it?
