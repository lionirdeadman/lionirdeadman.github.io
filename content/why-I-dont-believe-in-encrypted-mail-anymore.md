+++
title = "Why I don't believe in encrypted mail providers anymore"
date = 2020-12-27
slug_url = true

author = "Lionir Deadman"
author_url = "https://thelion.website/about/"
license_name = "Creative Commons Attribution-ShareAlike 4.0 International"
license_url = "https://creativecommons.org/licenses/by-sa/4.0/"
syndications = {"Tildes" = "https://tildes.net/~tech/u7k/why_i_dont_believe_in_encrypted_mail_providers_anymore", "Mastodon" = "https://fosstodon.org/@lionirdeadman/105454380433782624", "r/privacy" = "https://www.reddit.com/r/privacy/comments/klfxk5/why_i_dont_believe_in_encrypted_mail_providers/"}

+++
Recently, I moved away from [Tutanota](https://tutanota.com) to [Migadu](https://migadu.com). Why would I move away from a provider which provides encryption for all
my emails? It's one of the most important parts of someone's digital life, so, why would I want that unencrypted for my provider to see? Let's get into that.
<!--more-->

## No specification or interopability for the encryption

Usually, the magic [E2EE](https://en.wikipedia.org/wiki/End-to-end_encryption) only works if both recipient and sender use the same provider. If you use anything else,
it just won't work without hassle. If Tutanota, you'll require the other person to follow a link and enter a password and 
be stuck on that Tutanota's web interface which won't be fun for them. In the case of [Protonmail](https://protonmail.com), another encrypted mail provider, you'll need to find OpenPGP keys
and you're basically back to square one. OpenPGP is just too much pain for people to use and do it properly.

In either case, it's not how you move email forward, you're simply injecting proprietary protocols and/or encryption protocols.

## No interopability with the email server in general

Protonmail does have an [IMAP bridge program](https://protonmail.com/bridge/) but that assumes you want to run that on your computer all the time to access your email?!
You also get none of the benefits of their encryption! It's just worse. As for Tutanota, there's just nothing. You use the web interface (which the desktop and mobile
clients also use). I mean, their web interfaces look nice, don't get me wrong but that's not how you move email forward, it's just a pain for anyone
who isn't happy with your clients.

This also means that it's generally painful to move from one provider to the other. Protonmail does not offer any way to export your email for free (!!!!). This
just traps people in their service. The worst part is that they have [a tool](https://protonmail.com/import-export) to let you export your email but you have to pay for it. Tutanota doesn't have any bulk
tools but it's easy enough to just shift-click all the email in the desktop client and export to eml files. It's not ideal but atleast it let me move my email.

(I have asked Protonmail about making these tools available for free because I believe that it may be a GDPR violation. Exporting is not a privilege, it's a right.
I'll update when I get a response.)

## It's not more private nor secure

The truth is your email is not really any more secure for most if not all communications. The copy on the other side is likely not encrypted. The webmail interface
could be poisoned, there's nothing proving that the interface you see is the source code given, they could at any point in time inject something to get your keys. This is something that
could be avoided with third-party implementations or clients which can't be updated in the background but those don't exist for those services. Even if we could prove that
the client was fine, the server could always just keep a plain copy with no issues at all for most email. 

From my time using email, I have actually never email someone with Tutanota's encryption other than myself for testing purposes. Even in that case, the server could still
just keep the metadata of who contacted who and when because it needs to have that information to send the encrypted data.

All these issues just give the user a false sense of privacy and security that simply can't be solved in the current state.

## Conclusion

My conclusion is simple : Don't use encrypted mail providers. Assume everything you say through email can be read. While I do trust my provider not to do so, I
have little reason to think that a government can't and just have to act like it. Use other services for private information, delete information if I don't want it.
