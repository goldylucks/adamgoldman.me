export default {
  initialState: {
    name: '',
    age: '',
    goodFeelingsDescription: '',
    foo: '',
  },
  title: 'Trauma Relief',
  description: 'Turn old traumas and bad memories, arguments, and fights into powerful resources',
  nick: 'war in reverse is peace',
  credits: "Source: I've adapted this [tool](/tools/) from Bandler's trauma process, see [Heart of the Mind](http://amzn.to/2xFE4yX) chapter 7 for more info.",
  steps: [
    {
      title: 'Background',
      content: '',
      hasInput: true,
      answers: [
        {
          text: "so how's this going to work Adam?",
        },
      ],
      description: "We all have memories from the past that still affect us in a way that's not useful.\n\nExperiences that seem to pop to our mind uninvited and, even tho you know logically it's over, it still affects you.\n\nSome common examples are:\n\n- childhood traumas\n- arguments you keep running in your mind\n- accidents and graphic scenes\n- fights and people yelling\n\nIn a moment I'll walk you thru a short process but first you're probably wondering ...",
      inputId: 'foo',
      inputPlaceholder: 'I AM FOO',
    },
    {
      title: 'Name ${foo}',
      content: '',
      hasInput: true,
      inputId: 'name',
      inputPlaceholder: 'My name is ...',
      answers: [],
      description: 'Great, now before you pick the first memory to turn around, tell me, what is your name?',
    },
    {
      title: 'Age in past memory',
      content: '',
      hasInput: true,
      inputId: 'age',
      inputPlaceholder: 'In that past memory ${name} was XX years of age ...',
      answers: [],
      description: "Okay ${name},  \nthink about a memory you had in the past, which pops to your mind every now and then, and still makes you feel bad, or in a way you don't want to, and tell me ...\n\nwhat was ${name}'s age in that past memory?",
    },
    {
      title: 'Before and perfectly safe',
      content: '',
      hasInput: false,
      answers: [
        {
          text: 'Done, ready to continue',
        },
      ],
      description: "Now in a moment I'll ask you to freeze the memory in a moment BEFORE anything had happened, so you see ${age} years old ${name} in a still image, perfectly safe like I was before my accident:\n\nMy brother had an accident long ago with his motorcycle, while yours truly here was riding in the back.\n\n(u can imagine how much my father appreciated his son, my brother, having a motorcycle ...)\n\nA few seconds BEFORE the accident, there was no sign of any danger, and both me and my brother were perfectly safe.\n\nSo I want you to see ${age} years old ${name} in a still black & white image, perfectly safe, in a small muted screen far far away, and make the image slightly out of focus and low resolution.\n\nLike in youtube where you select the lowest resolution you know?\n\nDo it now, and let me know when you're done",
    },
    {
      title: 'Fast forwarding cartoons - set the stage',
      content: '',
      hasInput: false,
      answers: [
        {
          text: 'Fast forwarding a cartoon, of course! funny sound',
        },
        {
          text: "Yes I do, let's continue",
        },
      ],
      description: "Now in a moment I'll ask you to see ${age} years old ${name} in the small still picture far far away, fast forward it and freeze it at the end of the memory, after everything is over, and you see ${age} years old ${name} there perfectly safe.\n\nA few seconds before our accident, me and my brother on the bike were just cruisin along, a pretty natural scene.\n\nThen the driver cut us off, there was the moment of the hit, some moments of confusion and stress, and after that we pulled over and exchanged details with the driver.\n\nMy leg wasn't 100% healed yet, but the accident itself was over, and both me and my brother were perfectly safe.\n\nSo I want you to fast forward the past memory to a similar place, in which you can see ${age} years old ${name} after everything that has happened, perfectly safe, in the next neutral or positive moment.\n\nNow, know the sound of fast forwarding a cartoon?",
    },
    {
      title: 'Fast forwarding cartoons - action!',
      content: '',
      hasInput: false,
      answers: [
        {
          text: "Done, let's continue",
        },
        {
          text: 'OK. I fast forwarded the memory, and I see ${age} years old ${name} perfectly safe after the end',
        },
      ],
      description: "Great, so here's what I want you to do:\n\n1. see ${age} years old ${name}, in a small screen far far away, frozen in time, at the beginning of the memory, before anything had happened, perfectly safe\n\n2. Make the image black & white, out of focus a little bit, and decrease the resolution\n\n3. mute the sound\n\n4. fast forward the movie as fast as you can all the way to after everything is over, and you see ${age} years old ${name} in the next neutral or positive moment\n\n5. like a cartoon, hear everything going forward very fast\n\n<br />\n\ndo it now, and let me know when you're done",
    },
    {
      title: 'War in reverse is ... ?',
      content: '',
      hasInput: false,
      answers: [
        {
          text: "haven't thought of that before, it's actually quite interesting ...",
        },
        {
          text: 'yes I have',
        },
      ],
      description: 'Now, as you see ${age} years old ${name} in the small still picture far far away, perfectly safe, after the end, did you ever think what does a war movie turns into, when you run it in reverse?\n\n[diihWjg0lAM](YtEmbedd)\n\nI just heard it in a seminar the other day, and it made perfect sense to me.\n\nThe flames of destruction would package themselves back into bombs, which would return to the plane, which will return to the base and get unpacked.\n\nAll the weapons and ammunition get shipped back to the factories to be dissambeled to raw materials.\n\nSoldiers would go back home, kiss their partners, hug their loved ones.\n\nDid you ever think of that?',
    },
    {
      title: 'Reversing cartoons',
      content: '',
      hasInput: false,
      answers: [
        {
          text: 'Done and done!',
        },
        {
          text: 'I ran the memory in reverse',
        },
        {
          text: 'Did it, that was funky!',
        },
      ],
      description: "now in a moment I'll ask you do to something interesting, and don't do it until I tell you to, ok?\n\nI will want you to step inside the end of the memory, into your own body at ${age} years old, perfectly safe, so you see what you saw at the time, hear what you heard and ...\n\nrun the memory in reverse as fast as you can, all the way to before the beginning, where your perfectly safe again.\n\nso you hear everyone talking backwards, see everything and everyone moving backwards in reverse, as fast as you can.\n\n(yes you guessed it, like a cartoon)\n\nWe gonna do it this way one time, then add some nice decorations :)\n\nSo here are the steps again:\n\n\n1. step inside the end of the memory, into your own body at ${age} years old, perfectly safe\n\n2. see what you saw at the time, hear what you heard\n\n3. run the memory in reverse as fast as you can, hear everyone talking backwards, see everything and moving backwards in reverse, as fast as you can, like a cartoon, all the way to before the beginning, where your perfectly safe again\n\n<br />\n\nClose your eyes and do it now, let me know when you're done",
    },
    {
      title: 'Introducing',
      content: '',
      hasInput: false,
      answers: [
        {
          text: 'Done and done!',
        },
        {
          text: "It's even better with the tune!",
        },
        {
          text: 'Did it, that was funky!',
        },
      ],
      description: "Your back?\n\nGreat!\n\nNow let's make it even better.\n\nI want you to do the same thing, but this time add a nice / funny tune in your mind as you run the memory in reverse.\n\nFor most people circus theme song works magic:\n\n[1D5Sa2Yq-2g](YtEmbedd)\n\nU can use ANYTHING you want that makes you laugh, feel silly, powerful, curious, whatever it is.\n\nSome people like to hear a certain comedian. For others a certain song make them vibrate with inner power.\n\nAnd of course there's always laughter :)\n\n[yLmd0100T9g](YtEmbedd)\n\nPick one that makes you feel the best now and do it again like so:\n\n\n1. step inside the end of the memory, into your own body at ${age} years old, perfectly safe\n\n2. see what you saw at the time, hear what you heard\n\n3. start the circus music or any other tune you picked\n\n4. run the memory in reverse as fast as you can, hear everyone talking backwards (yes you guessed it, like a cartoon), see everything and everyone moving backwards in reverse, as fast as you can, like a cartoon, all the way to before the beginning, where your perfectly safe again\n\n<br />\n\nlet me know when you're done, and you're at the beginning of the memory, perfectly safe",
    },
    {
      title: 'Mind Scrambling',
      content: '',
      hasInput: false,
      answers: [
        {
          text: 'haha that was funny',
        },
        {
          text: 'lol',
        },
        {
          text: "show me the next piece, I'm ready for ...",
        },
      ],
      description: "Back again?\n\nBrilliant!\n\nnow, did you ever think about what's bigger or a tree in twelve different colors?\n\nSilly, I know, I just wanted to distract you from a moment before the next piece :)",
    },
    {
      title: 'Trying in vain',
      content: '',
      hasInput: false,
      answers: [
        {
          text: 'This is great! I feel good!',
        },
        {
          text: 'lol, I actually feel good about this wtf?!',
        },
        {
          text: 'I feel exactly like before',
        },
      ],
      description: "Think about that same old memory from your past and try in vain to feel the same way about it as before.\n\nU might be surprised to find it's not as easy anymore ;)",
    },
    {
      title: 'Good feelings',
      content: '',
      hasInput: true,
      inputId: 'goodFeelingsDescription',
      inputPlaceholder: "I feel good first in my ... and it's like ... and it spreads/flows to ... in the color of ...",
      answers: [],
      description: "and how good do you feel now, as you learn, that you can learn to feel better and better about what it is that used to affect you in a way you no longer wish?\n\n1-10, how good do you feel now?\n\nand notice, it's interesting to notice you can not only notice where in your body you feel the good feeling first,\n\nnow,\n\ncan feel the good feeling flowing next, and when you can feel the good feeling where it feels absolutely the best.\n\nAnd if this feeling had a color, and what color would it have?\n\nDescribe that feeling as vividly as you can",
    },
    {
      title: 'Rejoicing learning',
      content: '',
      hasInput: false,
      answers: [
        {
          text: 'I want to do it again on the same memory!',
          resetInputs: 'goodFeelingsDescription',
          goToStepByTitle: 'Before and perfectly safe',
        },
        {
          text: 'I want to do it again on a different memory!',
          resetInputs: 'goodFeelingsDescription, age',
          goToStepByTitle: 'Age in past memory',
        },
        {
          isFbShare: true,
        },
        {
          text: 'This is great and I want to give back',
          link: '/i-dont-charge-i-accept/',
        },
      ],
      description: "Isn't it cool you can learn so fast? [know others](FB_SHARE) that can enjoy that as well?\n\nor you want to do it again on another memory first?",
    },
  ],
}
