+++
title = "Discord on Flathub : Permissions explained"
date = 2021-08-19
slug_url = true
tags = ["discord", "flatpak", "flatpak", "permissions", "security", "electron"]

author = "Lionir Deadman"
author_url = "https://thelion.website/about/"
license_name = "Creative Commons Attribution-ShareAlike 4.0 International"
license_url = "https://creativecommons.org/licenses/by-sa/4.0/"

+++
I've had many people over time ask me to give the Discord package I maintain on Flathub more access
to the system. I want to go through the permissions it has and why.
<!--more-->

First, I'd like to mention that any permission change will break automatic updates in GNOME Softwares and I expected other
update managers to do the same as to make sure the person using the machine is conscient of the permissions.

### X11 and IPC

```json
        "--share=ipc"
        "--socket=x11"
```

These are needed for Discord to display and perform properly. X11 does allow input recording and screen recording without prompting the person at all
across the X server but that's not really something I can do anything about other than getting GNOME, KDE and co. to start an XWayland server per application. 
It might also be possible to use Xpra but my understanding is that compatibility and performance is not good enough to do that.

### PulseAudio

```json
        "--socket=pulseaudio"
```

PulseAudio gives access to well, audio which Discord needs to play sound when watching videos or being in voice chats.
PulseAudio is a *fairly* safe socket to give but if using the PulseAudio server rather than PipeWire, PulseAudio would allow an application to
load an arbitrary module which can result in remote code execution. There's really nothing I can do that about that either.
        
### Network

```json
        "--share=network"
```

As far as I know, this is a very safe permission to give and is obviously needed because Discord is an online application.
        
### Devices

```json
        "--device=all"
```

This gives access to USB, GPUs and other devices. This is needed to allow hardware acceleration, camera and microphone access for Discord to accomplish
one of its main tasks : Voice and video calls. This may be replaced by `device=dri` for GPU and `org.freedesktop.portal.Device` and/or `org.freedesktop.portal.Camera`
to allow Discord to prompt for camera and microphone access which would be safer as it wouldn't allow discrete usage of either while allowing the functionality. Do note
that `org.freedesktop.portal` is always given so it wouldn't be explicitely given in the manifest as they give prompts before giving access. Furthermore, it requires
work in either Discord or Electron for them to use these portals.
        
### Notifications

```json
        "--talk-name=org.freedesktop.Notifications"
```

This is needed as you might guess to give notifications. [The specification](https://specifications.freedesktop.org/notification-spec/notification-spec-latest.html) 
seems safe enough but it might be possible to exploit although I've not seen that. It should be up to the server to be ready for that.
        
### Minimal file access

```json
        "--filesystem=xdg-videos:ro"
        "--filesystem=xdg-pictures:ro"
        "--filesystem=xdg-download"
```

I currently give access read-only to "Videos", "Pictures" and read-write to "Downloads". Why? I imagine that people might want to share pictures and videos with people.
I also need to give write access to "Downloads" for the download functionality to work.

Reading Videos and Pictures may a risk for privacy but people can remove that if they believe this is an issue and
I'd recommend doing it. There is no security concern regarding that. With regards to Downloads, I expect that people would not put binaries that they run there,
that would be a flaw. I think with that in mind, these are "okay".

Why not the entirety of Home or more? Read-write would become a big security issue because it would allow the application write to your bash or other shell
files which would allow it to escape the sandbox. Read-only may also be an issue because it could allow for the application to steal your private GPG key or
other credentials.

Why not give entirety of Home but remove anything dangerous? I [did try that](https://github.com/flathub/com.discordapp.Discord/pull/137) and it is very ugly.
It is not sustainable and doesn't account for people moving the location of those files.

That's why I strongly believe at this point that Discord backporting [this pull request](https://github.com/electron/electron/pull/19159) or using Electron 14 
when it exits Beta is the preferable option. This will allow me to remove all access to files and allow Discord to ask the system for the file you want to share.
This makes all files opt-in and seamless to be shared without security issues.

### Desktop badges

```json
        "--talk-name=org.kde.StatusNotifierWatcher"
        "--talk-name=com.canonical.AppMenu.Registrar"
        "--talk-name=com.canonical.indicator.application"
        "--talk-name=com.canonical.Unity.LauncherEntry"
```

These are needed for Application badges that Discord gives to tell the person about notifications through the taskbar. The KDE one is well, KDE's and the Canonical
ones are used by Dash-to-* (and Unity, maybe more, not sure) as far as I know. They should be harmless. It's worth noting that while access is there, I've personally not been able to get
this functionality working.

### Conclusion

Hopefully you learned something about Flatpak permissions and why Discord's Flatpak packaged is configured the way it is. I hope this can bring to more fruitful
discussions in the future when issues regarding permissions is brought up.
