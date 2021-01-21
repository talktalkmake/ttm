## Strict Mode

While working at Abcam (the _Amazon of antibodies_, as they call themselves), our development team of around 35 (management, QA, infrastructure, a couple of marketing specialists, and myself—one of two designers) were all reliant on Internet Explorer (IE).

This wasn't quite the dark ages of the malignant, dominant IE**6** but it wasn't far off. Based on our in-house analytics our obligation was to support IE6, IE7, and IE8. IE9 was a luxury. IE10? Forget it. You were dreaming of Mars. Our customers were in no small part government-funded labs with archaic infrastructure that was only going to be replaced when it broke. So there we were, filtering every idea we had through the how-to-make-it-work-in-Six lens, because Six was necessary. I was okay with the situation, I'd just spent a year building websites using the spaghetti forest of Microsoft SharePoint—software intended for use as intranets, never for public websites—with IE6 being _the_ target browser. I knew what I was doing. Even better, with only a single codebase to wrestle with, I could devote myself to mastering its idiosyncrasies rather at a steadier pace than the agency work I'd come from. But something didn't add up.
Using IE on our internal network consistently resulted in use of Quirks Mode:

> In quirks mode, layout emulates nonstandard behavior... This is essential in order to support websites that were built before the widespread adoption of web standards—via [Mozilla](https://developer.mozilla.org/en-US/docs/Web/HTML/Quirks_Mode_and_Standards_Mode)

This was triggered by a network policy to enable (the people in charge of the computers in our building decided to enforce) Compatibility View:

> A compatibility mode is a software mechanism in which a software either emulates an older version of software, or mimics another operating system in order to allow older or incompatible software or files to remain compatible with the computer's newer hardware or software—via [WikiPedia](https://en.wikipedia.org/wiki/Compatibility_mode)

The problem wasn't our necessary support of a legacy web browser, it was that the conditions we were using to test our work were not those our customers experienced. It was like asking Jeep drivers what they thought about their Subaru.
We were inadvertently causing our own problem: building and testing our own website under conditions which were not the same outside our building. It is possible that the dozens of staff all working hard to build the best system possible to sell our products could have continued working under such conditions for years without identifying the problem we created.
I decided to play detective, to investigate the scene of the crime, to ask awkward questions of the witnesses in the room. Off I went to scrutinize the witnesses, first encountering side-eyed annoyance—_what's this about? Why do you care?_—followed by outright displeasure—_just get on with your job, because this isn't it_. They were right; infrastructure was not my job, but I needed to overstep my bounds and eliminate them from my enquiries in order to root out the culprit. And in the end, I discovered the whole story in its gory detail, if not bringing it to justice, making sure it couldn't hurt us again.

### Thirties

Getting older doesn't faze me. Others seem crazed when considering
their forward sprint. My childhood came to a grateful end, I
happily escaped those years fortunate to be in a body that seeks
out and soaks up knowledge.

### Roman Road

A Roman road is a dull piece of brilliant engineering. Driving
straight is a bore, it's no surprise how easily he drifts
carelessly into a glazed stare, one hand limply on the gear stick,
the other held atop the steering wheel by the torque of wheels on
tarmac. A karmic shadow bites at the rear of the car, reaching for
the red bullet tiptoeing the delicate line through the fields.

Clouds racing silently overhead, a duvet come to tuck them in.
It's not just him under the soft canopy, there's a boy no older
than six beside him. A last-minute addition lazily added to the
roster by a tired mother desperate to be alone, or for the boy's
absence. She would have time for the debate inside her head later.
The boy's not supposed to be here.
