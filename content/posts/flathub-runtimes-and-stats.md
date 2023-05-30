+++
title = "Flathub, runtimes and stats."
date = 2021-06-23
slug_url = true
tags = ["flathub", "flatpak", "contributions", "security", "projects", "fp-build", "fp-stats"]
aliases = ["/flathub-runtimes-and-stats/"]

author = "Lionir Deadman"
author_url = "https://lionir.ca/about/"
license_name = "Creative Commons Attribution-ShareAlike 4.0 International"
license_url = "https://creativecommons.org/licenses/by-sa/4.0/"
syndications = {"Tildes" = "https://tildes.net/~tech/xdi/flathub_runtimes_and_stats", "Mastodon" = "https://fosstodon.org/@lionirdeadman/105454380433782624", "r/flatpak" = "https://www.reddit.com/r/flatpak/comments/o7gwc2/flathub_runtimes_and_stats/", "r/linux" = "https://www.reddit.com/r/linux/comments/o7gvn6/flathub_runtimes_and_stats/"}

+++
In the past month, I've started contributing to Flathub to update runtimes as to reduce the amount of applications using EOL runtimes. In this adventure, I've made some small projects and some great progress towards reducing the amount of applications using EOL runtimes.
<!--more-->

### Some definitions

Flathub.org is a repository for Flatpak packages.

Flatpaks are sandboxed Linux packages which work across different Linux distributions.

Runtimes are a set of libraries which most if not all applications will need to use. Flatpaks run on top of one runtime to cover most of their library needs.

EOL means End of Life so in this context, it means they won't get bugfixes or security updates. This can expose vulnerabilities in the applications themselves.

### Progress around EOL runtimes

I started because I felt too many applications were using EOL runtimes. At that time, I estimate that around 20% of Flathub applications used EOL runtimes; I say this because my work was able to halve that number, and I upgraded about 80 packages.

I wish I had made stats from back then to be able to give more concrete information but a look at my Github can give a rough idea. I contributed to 80 repositories which should mean I've probably updated around 80 applications so they are no longer using EOL runtimes (along with some quality of life improvements like updating libraries and the application itself more often than not). I still have 43 open pull requests which most should also be about updating runtimes. In total, that means I've contributed to around 10% of applications on Flathub which is.. pretty great!

I managed to kill off all applications using the very old `org.freedesktop.Platform//1.6` although there's still some applications using the GNOME and KDE equivalents. Some are quite hard to move over because of unsupported dependencies like mono4 or gstreamer 0.10 or they rely on mozjs-68 or just other dependencies which aren't easy to move over to new runtimes.

### Common problems while updating the runtime

So, you want to update every application to use the newest runtime to get all the bugfixes and all of the security fixes, right? Why not do it automatically? Well, some common problems when trying to update the runtime and which can't be automated : 

- Missing 128x128 icon - Flathub wants them because small blurry icons are not very pleasant to use in store applications or in the Flathub web interface.

- Appstream metadata breaks specification - This XML file contains information about the application : the rating, the name, screenshots, descriptions and basically everything you can see in a page for an application. Sometimes, it doesn't follow specification.

- Dconf permissions - Previously, applications were given read and write access to the full config store. In newer runtimes, glib handles this so the permission should be removed in favour of migrating the host settings using `--metadata=X-DConf=migrate-path=`.

- Compilation errors - Most often, old software wasn't tested on newer vala or newer gcc so it results
in build errors.

- Patches - Often, people will keep patches to fix the previously mentioned issues. In result, the patches can grow invalid as the application is updated which requires more manual work.

### fp-build

To help myself find problems before I try to make a pull request and see it fail, I've made [fp-build](https://github.com/lionirdeadman/fp-build) to have things like checking for 128x128 icons, to check appstream is valid, to use `--sandbox` and `--bundle-sources` which are used in Flathub and may create inconsistent situations between someone building the application on their machine versus what flathub does. It's also easier to type out which is a minor improvement. It also shares the downloads and repo so it should use less space than if you were to simply have a repo and downloads in each project folder. I like it. 

There's improvements which I want to have like [flatpak-external-data-checker](https://github.com/flathub/flatpak-external-data-checker) to check for updates if it has the data to check it. I'd like it to handle nested manifest, make it auto-find the manifest, make it initialize the git submodules without keeping them at the repo-stage for testing. I need to teach it about symlinks otherwise it might fail an icon or appstream check which it shouldn't.

### fp-stats

[fp-stats](https://github.com/lionirdeadman/fp-stats) was made to track advancements made in the EOL runtime space but also potentially in the future find common problems such as not using the ffmpeg-full extension which ensures that people get the latest ffmpeg. I think it can also provide meaningful data to maintainers to see whether or not applications using EOL runtimes are properly being upgraded overtime and at what speed.

The data generated by fp-stats used to be created by me at the end of the day but that was slightly annoying to do so I've made a GitHub action to automatically build those for me every hour making it more accurate and less work for me to do. It was a bit of pain to set up and I needed quite a bit of help from people to make it work but well, it works and it's great.

I'd like it to have graphs rather than simply the raw data in the future but chart.js is really not something I'm familiar with it so I'd like help to do that. I'd also like to have lists in a web interface of applications using EOL runtimes by order of how outdated and also more temporary lists such as the ffmpeg one.

### Conclusion

Overall, I think that this was fun and it's something I like to do. It's a bit boring but it's also  relaxing and fulfilling. At least, outside of the times I want to pull my hair out because nothing is working, heh.

I want to thank everyone who helped me update things, reviewed pull requests, helped me fix and improve the python scripts, shell script or just generally supported me in this. If you have any questions, want to help me or need some help, feel free to contact me. ❤️
