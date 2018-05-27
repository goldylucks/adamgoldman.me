/* eslint-disable quotes,quote-props,indent,comma-dangle,no-template-curly-in-string */
const mongoose = require('mongoose')

const { ObjectId } = mongoose.Types

module.exports = {
  "_id": new ObjectId("56f4636ec558e7a529b0b42d"),
    "toolId": new ObjectId("5abe0bc1489aa800047cabac"),
    "user": new ObjectId("56f46358c558e7a529b0b42b"),
    "hiddenFields": [],
    "steps": [
        {
            "title": "Intro",
            "description": "Let me tell you a little bit about how I do things, so you can get a rough idea about the short time we are about to spend together, ok? ",
            "notes": "",
            "type": "radio",
            "inputPlaceholder": "",
            "answers": [
                {
                    "isOther": false,
                    "text": "Short time? Great, love fast results",
                    "isLinkNew": false,
                    "isConcern": false,
                    "concern": ""
                },
                {
                    "isOther": false,
                    "text": "Ok",
                    "isLinkNew": false,
                    "isConcern": false,
                    "concern": ""
                }
            ]
        },
        {
            "title": "This is NOT ...",
            "description": "I know we all had our share of things that did not work, so here's a quick list of what we will NOT be doing \u2026\n\n❌ Therapy (psychoanalysis, gestalt, or any other)  \n❌ Life advice / coaching / counseling  \n❌ Positive affirmations / Mindfulness  \n❌ Diet / Physical Exercise / Medication  \n❌ Reiki, spiritual healing, chakras, meditation, energy healing  \n❌ Breathing exercises  \n❌ Communication with other dimensions or beings  \n❌ Empathy and having someone to talk to  \n❌ Classic NLP / CBT  ",
            "notes": "",
            "type": "radio",
            "inputPlaceholder": "",
            "answers": [
                {
                    "isOther": false,
                    "text": "So what is it Adam?",
                    "isLinkNew": false,
                    "isConcern": false,
                    "concern": ""
                },
                {
                    "isOther": false,
                    "text": "So how is it going to work?",
                    "isLinkNew": false,
                    "isConcern": false,
                    "concern": ""
                }
            ]
        },
        {
            "title": "How's this going to work",
            "description": "${echo}\n\nI\u2019m glad you asked ;)\n\nSo here\u2019s how this is going to work.\n\nI will ask you some questions, some more trivial than others, and offer you things to try.\n\nWhatever works for you, keep, whatever doesn't, file away in the\n\n\"things I've tried and haven't worked for me yet\" drawer.\n\nSounds good?",
            "notes": "I will never impose anything on you. You only answer what you\u2019re comfortable sharing, and only do what you\u2019re comfortable doing.\n\nEverything that we do is reversible, and we are only trying things to understand what works for YOU.\n\nIf at any point you feel uncomfortable, or something that we do isn\u2019t to your liking, just message me, I respond personally to every single message I get.\n\nI rely on your feedback to know how to proceed. Are we together on this? ",
            "type": "radio",
            "inputPlaceholder": "",
            "answers": [
                {
                    "isOther": false,
                    "isLinkNew": false,
                    "isConcern": false,
                    "concern": "",
                    "text": "Yes"
                },
                {
                    "isOther": false,
                    "text": "Sounds good!",
                    "isLinkNew": false,
                    "isConcern": false,
                    "concern": ""
                }
            ]
        },
        {
            "title": "Privacy & content free processes",
            "description": "Most of what we\u2019ll do together is content free, meaning I do NOT need the details of your experience, so you get total privacy. ",
            "notes": "I.e. if there\u2019s a memory that still bothers you, all I need to know is \u201cage 12 - memory of shame with 2 other people\u201d.\n\nOr if there\u2019s a person who talks to you in a tone you don\u2019t like, all I need to know is a letter for reference or a nickname, like \u201cwhen R talks to me in this tone, I get upset\u201d ",
            "type": "radio",
            "inputPlaceholder": "",
            "answers": [
                {
                    "isOther": false,
                    "text": "GOOD. Privacy IS sacred",
                    "isLinkNew": false,
                    "isConcern": false,
                    "concern": ""
                },
                {
                    "isOther": false,
                    "text": "Sounds great!",
                    "isLinkNew": false,
                    "isConcern": false,
                    "concern": ""
                }
            ]
        },
        {
            "title": "Email",
            "description": "What's your personal email?",
            "notes": " I will ONLY use it to send you the responses to these questions in a google document.",
            "type": "short",
            "inputPlaceholder": "",
            "answers": []
        },
        {
            "title": "Time zone",
            "description": "What time zone are you at?",
            "notes": "Use GMT if possible :)",
            "type": "short",
            "inputPlaceholder": "",
            "answers": []
        },
        {
            "title": "Refer",
            "description": "How did you get to me?",
            "notes": "",
            "type": "radio",
            "inputPlaceholder": "",
            "answers": [
                {
                    "isOther": false,
                    "text": "Saw your post on FB",
                    "isLinkNew": false,
                    "isConcern": false,
                    "concern": ""
                },
                {
                    "isOther": false,
                    "text": "Overheard someone talking about you",
                    "isLinkNew": false,
                    "isConcern": false,
                    "concern": ""
                },
                {
                    "isOther": false,
                    "text": "Friend",
                    "isLinkNew": false,
                    "isConcern": false,
                    "concern": ""
                },
                {
                    "isOther": true,
                    "text": "Other",
                    "isLinkNew": false,
                    "isConcern": false,
                    "concern": "",
                    "isReadOnly": true
                }
            ]
        },
        {
            "title": "Problems & outcomes",
            "description": "What are ALL the problems you want to solve, and ALL the outcomes you want to achieve in our short time together? ",
            "notes": "Think of this as a Christmas list. You don\u2019t know what you\u2019re going to get, but might as well go for the gesto, shoot for the moon, and all that :)\n\nI don't need the details, titles for references will do. ",
            "type": "long",
            "inputPlaceholder": "",
            "answers": []
        },
        {
            "title": "Problems & outcomes - time having",
            "description": "${echo}\n\nHow much time have you been having these problems / wanting to achieve these outcomes? ",
            "notes": " There\u2019s a tendency to say \u201call my life\u201d, tho I\u2019d like you to be more specific if possible ",
            "type": "long",
            "inputPlaceholder": "",
            "answers": []
        },
        {
            "title": "Problems & outcomes - time spent",
            "description": "How much time have you spent on these?",
            "notes": " Including all courses you took, therapy sessions, different experts, online research, etc . ",
            "type": "long",
            "inputPlaceholder": "",
            "answers": []
        },
        {
            "title": "Problems & outcomes - money spent",
            "description": "How much money have you spent on these?",
            "notes": "Including all courses you took (online/offline), therapy sessions, different experts, lost work time, etc.",
            "type": "long",
            "inputPlaceholder": "",
            "answers": []
        },
        {
            "title": "Break state",
            "description": "I want to clear your mind before the next question, so do one of two things:\n\n1. Flash your mental screen (like the brightness all the way up on the tv remote)\n\n2. Think of your phone number backwards",
            "notes": "",
            "type": "radio",
            "inputPlaceholder": "",
            "answers": [
                {
                    "isOther": false,
                    "text": "I flashed my screen",
                    "isLinkNew": false,
                    "isConcern": false,
                    "concern": ""
                },
                {
                    "isOther": false,
                    "text": "I ran my phone number backwards",
                    "isLinkNew": false,
                    "isConcern": false,
                    "concern": ""
                }
            ]
        },
        {
            "title": "Earliest memory",
            "description": "Regardless of anything we've talked already, what is the earliest memory that comes to your mind now?",
            "notes": "No need for details, \u201cage 4 playing with toys in living room\u201d will do. Some people have the earliest memory at age 3, some have at age 10. Whatever comes to mind now is great. Rough estimations and ranges are perfectly fine as well. ",
            "type": "long",
            "inputPlaceholder": "",
            "answers": []
        },
        {
            "title": "Earliest memory - feeling",
            "description": "${echo}\n\nAs you think about it now, do you get a good feeling, bad feeling, or neutral?",
            "notes": "It matters more how you feel **now**, as you think about this memory. Matters less how you felt then.",
            "type": "radio",
            "inputPlaceholder": "",
            "answers": [
                {
                    "isOther": false,
                    "text": "Good feeling",
                    "isLinkNew": false,
                    "isConcern": false,
                    "concern": ""
                },
                {
                    "isOther": false,
                    "text": "Bad feeling",
                    "isLinkNew": false,
                    "isConcern": false,
                    "concern": ""
                },
                {
                    "isOther": false,
                    "text": "Neutral/no feeling",
                    "isLinkNew": false,
                    "isConcern": false,
                    "concern": ""
                },
                {
                    "isOther": true,
                    "text": "Other",
                    "isLinkNew": false,
                    "isConcern": false,
                    "concern": "",
                    "isReadOnly": true
                }
            ]
        },
        {
            "title": "Earliest memory - feeling",
            "description": "${echo}\n\nWould you like to improve this feeling, or feel better about the very first memory of your life?",
            "notes": "Either this one, or we can implant a new one before that, so you'll have a positive useful \"entry point\" to your life.\n\nThis is just information gathering, we aren't going to \"do\" anything now. ",
            "type": "radio",
            "inputPlaceholder": "",
            "answers": [
                {
                    "isOther": false,
                    "text": "I'd like to feel better about this memory",
                    "isLinkNew": false,
                    "isConcern": false,
                    "concern": ""
                },
                {
                    "isOther": false,
                    "text": "I'd like to implant a new one before that",
                    "isLinkNew": false,
                    "isConcern": false,
                    "concern": ""
                },
                {
                    "isOther": false,
                    "text": "Naaa, that's fine",
                    "isLinkNew": false,
                    "isConcern": false,
                    "concern": ""
                },
                {
                    "isOther": true,
                    "text": "Other",
                    "isLinkNew": false,
                    "isConcern": false,
                    "concern": "",
                    "isReadOnly": true
                }
            ]
        },
        {
            "title": "Past memories to release - shame",
            "description": "Do you have any memories that you still feel shame about? Or feel shame/embarrassment when you think about them? ",
            "notes": "",
            "type": "radio",
            "inputPlaceholder": "",
            "answers": [
                {
                    "isOther": false,
                    "text": "Yes",
                    "isLinkNew": false,
                    "isConcern": false,
                    "concern": ""
                },
                {
                    "isOther": false,
                    "text": "No",
                    "isLinkNew": false,
                    "isConcern": false,
                    "concern": "",
                    "hasGoToStep": true,
                    "goToStepByNum": "17"
                }
            ]
        },
        {
            "title": "Past memories to release - shame",
            "description": "Make a bullet list of them, just age and titles for reference will do, no need for details",
            "notes": "I.e. \u201cage 5 at home\u201d, \u201cage 12 at school\u201d, etc. Rough estimations and ranges are perfectly fine as well.  If any of these memories have an additional feeling mixed with the shame, state that as well. ",
            "type": "long",
            "inputPlaceholder": "",
            "answers": []
        },
        {
            "title": "Past memories to release - guilt",
            "description": "Do you have any memories that you still feel guilt or regret about? Or feel guilt to think about them? ",
            "notes": "I.e. \u201cage 5 at home\u201d, \u201cage 12 at school\u201d, etc. Rough estimations and ranges are perfectly fine as well.",
            "type": "radio",
            "inputPlaceholder": "",
            "answers": [
                {
                    "isOther": false,
                    "text": "Yes",
                    "isLinkNew": false,
                    "isConcern": false,
                    "concern": ""
                },
                {
                    "isOther": false,
                    "text": "No",
                    "isLinkNew": false,
                    "isConcern": false,
                    "concern": "",
                    "hasGoToStep": true,
                    "goToStepByNum": "19"
                }
            ]
        },
        {
            "title": "Past memories to release - guilt",
            "description": "Make a bullet list of them, just age and titles for reference will do, no need for details.",
            "notes": "I.e. \u201cage 5 at home\u201d, \u201cage 12 at school\u201d, etc. Rough estimations and ranges are perfectly fine as well. \n\nIf any of these memories have an additional feeling mixed with the regret, state that as well. ",
            "type": "long",
            "inputPlaceholder": "",
            "answers": []
        },
        {
            "title": "Past memories to release - anger",
            "description": "**Anger, blame, resentment and forgiveness**\n\nDo you have any memories that you still feel angry or resentful about? Or feel anger to think about them? Anyone you need to forgive about something? (yourself included!) ",
            "notes": " I.e. \u201cage 5 at home\u201d, \u201cage 12 at school\u201d, etc. Rough estimations and ranges are perfectly fine as well.",
            "type": "radio",
            "inputPlaceholder": "",
            "answers": [
                {
                    "isOther": false,
                    "text": "Yes",
                    "isLinkNew": false,
                    "isConcern": false,
                    "concern": ""
                },
                {
                    "isOther": false,
                    "text": "No",
                    "isLinkNew": false,
                    "isConcern": false,
                    "concern": "",
                    "hasGoToStep": true,
                    "goToStepByNum": "21"
                }
            ]
        },
        {
            "title": "Past memories to release - anger",
            "description": "Make a bullet list of them, just age and titles for reference will do, no need for details.",
            "notes": " I.e. \u201cage 5 at home\u201d, \u201cage 12 at school\u201d, etc. Rough estimations and ranges are perfectly fine as well. \n\nIf any of these memories have an additional feeling mixed with the anger, state that as well. ",
            "type": "long",
            "inputPlaceholder": "",
            "answers": []
        },
        {
            "title": "Past memories to release - jealousy",
            "description": "Do you have any memories that you still feel jealous/envious about? Or feel jealousy/envy to think about them? ",
            "notes": "I.e. \u201cage 5 at home\u201d, \u201cage 12 at school\u201d, etc. Rough estimations and ranges are perfectly fine as well.",
            "type": "radio",
            "inputPlaceholder": "",
            "answers": [
                {
                    "isOther": false,
                    "text": "Yes",
                    "isLinkNew": false,
                    "isConcern": false,
                    "concern": ""
                },
                {
                    "isOther": false,
                    "text": "No",
                    "isLinkNew": false,
                    "isConcern": false,
                    "concern": "",
                    "hasGoToStep": true,
                    "goToStepByNum": "23"
                }
            ]
        },
        {
            "title": "Past memories to release - jealousy",
            "description": "Make a bullet list of them, just age and titles for reference will do, no need for details. ",
            "notes": "I.e. \u201cage 5 at home\u201d, \u201cage 12 at school\u201d, etc. Rough estimations and ranges are perfectly fine as well. \n\nIf any of these memories have an additional feeling mixed with the Jealousy, state that as well. ",
            "type": "long",
            "inputPlaceholder": "",
            "answers": []
        },
        {
            "title": "Past memories to release - trauma",
            "description": "Do you have any memories that you still feel trauma or shock about?",
            "notes": "I.e. \u201cage 5 at home\u201d, \u201cage 12 at school\u201d, etc. Rough estimations and ranges are perfectly fine as well. ",
            "type": "radio",
            "inputPlaceholder": "",
            "answers": [
                {
                    "isOther": false,
                    "text": "Yes",
                    "isLinkNew": false,
                    "isConcern": false,
                    "concern": ""
                },
                {
                    "isOther": false,
                    "text": "No",
                    "isLinkNew": false,
                    "isConcern": false,
                    "concern": "",
                    "hasGoToStep": true,
                    "goToStepByNum": "25"
                }
            ]
        },
        {
            "title": "Past memories to release - trauma",
            "description": "Make a bullet list of them, just age and titles for reference will do, no need for details.",
            "notes": "I.e. \u201cage 5 at home\u201d, \u201cage 12 at school\u201d, etc. Rough estimations and ranges are perfectly fine as well. \n\nIf any of these memories have an additional feeling mixed with the trauma, state that as well. ",
            "type": "long",
            "inputPlaceholder": "",
            "answers": []
        },
        {
            "title": "Past memories to release - other",
            "description": "Are there any other past memories that still bother you, that we didn\u2019t cover? ",
            "notes": "",
            "type": "radio",
            "inputPlaceholder": "",
            "answers": [
                {
                    "isOther": false,
                    "text": "Yes",
                    "isLinkNew": false,
                    "isConcern": false,
                    "concern": ""
                },
                {
                    "isOther": false,
                    "text": "No",
                    "isLinkNew": false,
                    "isConcern": false,
                    "concern": "",
                    "hasGoToStep": true,
                    "goToStepByNum": "27"
                }
            ]
        },
        {
            "title": "Past memories to release - other",
            "description": "Make a bullet list of them, just age and titles for reference will do, no need for details.",
            "notes": "I.e. \u201cage 5 at home\u201d, \u201cage 12 at school\u201d, etc. Rough estimations and ranges are perfectly fine as well. \n\nIf any of these memories have an additional feeling mixed with themE, state that as well. ",
            "type": "long",
            "inputPlaceholder": "",
            "answers": []
        },
        {
            "title": "Grief - people",
            "description": "Are there people who are no longer in your life, that you feel sad/emptiness/loss as you think of them? ",
            "notes": " Maybe they are dead, maybe it\u2019s someone you broke up with, or a friend you used to have. ",
            "type": "radio",
            "inputPlaceholder": "",
            "answers": [
                {
                    "isOther": false,
                    "text": "Yes",
                    "isLinkNew": false,
                    "isConcern": false,
                    "concern": ""
                },
                {
                    "isOther": false,
                    "text": "No",
                    "isLinkNew": false,
                    "isConcern": false,
                    "concern": "",
                    "hasGoToStep": true,
                    "goToStepByNum": "29"
                }
            ]
        },
        {
            "title": "Grief - people",
            "description": "Make a bullet list of them, just name, title and age for reference will do, no need for details.",
            "notes": "I.e. \u201cNancy, breakup, 3 years ago\u201d, \u201cage 12, mother died\u201d, \u201cRandy, close friend, moved away last year\u201d. If you don\u2019t want to disclose names, you can use a letter or nickname for reference, i.e. \u201cN\u201d instead of Nancy. Rough estimations and ranges are perfectly fine as well.\n\n**Note**: If there are mixed feelings with the loss, state those as well (i.e. a heated argument you had and feel anger / regret about, or an accident you feel shock about) ",
            "type": "long",
            "inputPlaceholder": "",
            "answers": []
        },
        {
            "title": "Grief - pets",
            "description": "Are there pets who are no longer in your life, that you feel sad/emptiness/loss as you think of them? ",
            "notes": " Maybe they are dead, maybe lost and never found. ",
            "type": "radio",
            "inputPlaceholder": "",
            "answers": [
                {
                    "isOther": false,
                    "text": "Yes",
                    "isLinkNew": false,
                    "isConcern": false,
                    "concern": ""
                },
                {
                    "isOther": false,
                    "text": "No",
                    "isLinkNew": false,
                    "isConcern": false,
                    "concern": "",
                    "hasGoToStep": true,
                    "goToStepByNum": "31"
                }
            ]
        },
        {
            "title": "Grief - pets",
            "description": "Make a bullet list of them, just name, title and age for reference will do, no need for details.",
            "notes": "I.e. \u201cPoodles, died, 3 years ago\u201d, \u201cSkittles, ran away, age 6\u201d. Rough estimations and ranges are perfectly fine as well.\n\n**Note**: If there are mixed feelings with the loss, state those as well (i.e. an accident you feel shock about) ",
            "type": "long",
            "inputPlaceholder": "",
            "answers": []
        },
        {
            "title": "Grief - Items and objects ",
            "description": "Are there items which are no longer in your life, that you feel sad/emptiness/loss as you think of them? ",
            "notes": " Could be a valuable or sentimental item that was broken, lost or you had to give away for some reason. ",
            "type": "radio",
            "inputPlaceholder": "",
            "answers": [
                {
                    "isOther": false,
                    "text": "Yes",
                    "isLinkNew": false,
                    "isConcern": false,
                    "concern": ""
                },
                {
                    "isOther": false,
                    "text": "No",
                    "isLinkNew": false,
                    "isConcern": false,
                    "concern": "",
                    "hasGoToStep": true,
                    "goToStepByNum": "33"
                }
            ]
        },
        {
            "title": "Grief - Items and objects ",
            "description": "Make a bullet list of them, title and age for reference will do, no need for details.",
            "notes": "I.e. \u201cguitar, broken, 3 years ago\u201d, \u201ccar, stolen, age 20\u201d. Rough estimations and ranges are perfectly fine as well.\n\n**Note**: If there are mixed feelings with the loss, state those as well (i.e. guilt about losing a gift from someone) ",
            "type": "long",
            "inputPlaceholder": "",
            "answers": []
        },
        {
            "title": "Grief - Dreams / life goals",
            "description": "Are there any dreams you used to have, that didn't come to happen, that you feel sad/emptiness/loss as you think of them? ",
            "notes": " I.e. \u201cmaking a million dollars by age 25\u201d, \u201cbeing voted prom queen\u201d etc ",
            "type": "radio",
            "inputPlaceholder": "",
            "answers": [
                {
                    "isOther": false,
                    "text": "Yes",
                    "isLinkNew": false,
                    "isConcern": false,
                    "concern": ""
                },
                {
                    "isOther": false,
                    "text": "No",
                    "isLinkNew": false,
                    "isConcern": false,
                    "concern": "",
                    "hasGoToStep": true,
                    "goToStepByNum": "35"
                }
            ]
        },
        {
            "title": "Grief - Dreams / life goals",
            "description": "Make a bullet list of them, just title and age for reference will do, no need for details.",
            "notes": "I.e. \u201cdream of becoming a writer, age 6\u201d, \u201cgraduating college, 4 years ago\u201d. Rough estimations and ranges are perfectly fine as well. ",
            "type": "long",
            "inputPlaceholder": "",
            "answers": []
        },
        {
            "title": "Grief - Activities",
            "description": "Are there any activities you used to do, which you can\u2019t do anymore, that you feel sad/emptiness/loss as you think of them? ",
            "notes": " I.e. if you used to ski but now your knees are too weak for it ",
            "type": "radio",
            "inputPlaceholder": "",
            "answers": [
                {
                    "isOther": false,
                    "text": "Yes",
                    "isLinkNew": false,
                    "isConcern": false,
                    "concern": ""
                },
                {
                    "isOther": false,
                    "text": "No",
                    "isLinkNew": false,
                    "isConcern": false,
                    "concern": "",
                    "hasGoToStep": true,
                    "goToStepByNum": "37"
                }
            ]
        },
        {
            "title": "Grief - Activities",
            "description": "Make a bullet list of them, just title and age for reference will do, no need for details. ",
            "notes": " I.e. \u201csummer camp, age 10\u201d, \u201ctraveling, 2 years ago\u201d. Rough estimations and ranges are perfectly fine as well. ",
            "type": "long",
            "inputPlaceholder": "",
            "answers": []
        },
        {
            "title": "Grief - Locations",
            "description": "Are there any locations that are important to you, that you feel sad/emptiness/loss as you think of them? ",
            "notes": " I.e. A house that was burnt, a town you had to move away from, etc ",
            "type": "radio",
            "inputPlaceholder": "",
            "answers": [
                {
                    "isOther": false,
                    "text": "Yes",
                    "isLinkNew": false,
                    "isConcern": false,
                    "concern": ""
                },
                {
                    "isOther": false,
                    "text": "No",
                    "isLinkNew": false,
                    "isConcern": false,
                    "concern": "",
                    "hasGoToStep": true,
                    "goToStepByNum": "39"
                }
            ]
        },
        {
            "title": "Grief - Locations",
            "description": "Make a bullet list of them, just name, title and age for reference will do, no need for details.",
            "notes": " I.e. \u201cEurope, age 18\u201d, \u201clake, 5 years ago\u201d. Rough estimations and ranges are perfectly fine as well. ",
            "type": "long",
            "inputPlaceholder": "",
            "answers": []
        },
        {
            "title": "Grief - Other",
            "description": "Are there any other losses or feelings of grief we didn't cover?",
            "notes": "",
            "type": "radio",
            "inputPlaceholder": "",
            "answers": [
                {
                    "isOther": false,
                    "text": "Yes",
                    "isLinkNew": false,
                    "isConcern": false,
                    "concern": ""
                },
                {
                    "isOther": false,
                    "text": "No",
                    "isLinkNew": false,
                    "isConcern": false,
                    "concern": "",
                    "hasGoToStep": true,
                    "goToStepByNum": "41"
                }
            ]
        },
        {
            "title": "Grief - Other",
            "description": "Make a bullet list of them, just name, title and age for reference will do, no need for details.",
            "notes": "",
            "type": "long",
            "inputPlaceholder": "",
            "answers": []
        },
        {
            "title": "Allergies",
            "description": "Do you have any allergies you are aware of? Or something you are sensitive to?",
            "notes": "",
            "type": "radio",
            "inputPlaceholder": "",
            "answers": [
                {
                    "isOther": false,
                    "text": "Yes",
                    "isLinkNew": false,
                    "isConcern": false,
                    "concern": ""
                },
                {
                    "isOther": false,
                    "text": "No",
                    "isLinkNew": false,
                    "isConcern": false,
                    "concern": "",
                    "hasGoToStep": true,
                    "goToStepByNum": "43"
                }
            ]
        },
        {
            "title": "Allergies",
            "description": "Make a bullet list of them, and when each started. I don\u2019t need to know what they are, so if it\u2019s private, just a letter or something for reference will do.",
            "notes": "For each of those, what is your first memory that comes to mind now that is related to it in anyway?\n\nWhatever comes to mind, write it, no matter how weird or unrelated it might seem. If it's private, use some word or title for reference. ",
            "type": "long",
            "inputPlaceholder": "",
            "answers": []
        },
        {
            "title": "Physical sensations",
            "description": "Do you have any recurring pains, headaches, or physical inconveniences?",
            "notes": "",
            "type": "radio",
            "inputPlaceholder": "",
            "answers": [
                {
                    "isOther": false,
                    "text": "Yes",
                    "isLinkNew": false,
                    "isConcern": false,
                    "concern": ""
                },
                {
                    "isOther": false,
                    "text": "No",
                    "isLinkNew": false,
                    "isConcern": false,
                    "concern": "",
                    "hasGoToStep": true,
                    "goToStepByNum": "45"
                }
            ]
        },
        {
            "title": "Physical sensations",
            "description": "Make a bullet list of them, and when each started. I don\u2019t need to know what they are, so if it\u2019s private, just a letter or something for reference will do.",
            "notes": "For each of those, what is your first memory that comes to mind now that is related to it in anyway?\n\nWhatever comes to mind, write it, no matter how weird or unrelated it might seem. If it's private, use some word or title for reference. ",
            "type": "long",
            "inputPlaceholder": "",
            "answers": []
        },
        {
            "title": "Negative self talk",
            "description": "Do any of the following sentences bother you to think about or say out loud?",
            "notes": " If you're not sure, say each sentence to yourself, and notice your response. ",
            "type": "checkbox",
            "inputPlaceholder": "",
            "answers": [
                {
                    "isOther": false,
                    "text": "I'm not good enough",
                    "isLinkNew": false,
                    "isConcern": false,
                    "concern": ""
                },
                {
                    "isOther": false,
                    "text": "I can't do it",
                    "isLinkNew": false,
                    "isConcern": false,
                    "concern": ""
                },
                {
                    "isOther": false,
                    "text": "I will always ...",
                    "isLinkNew": false,
                    "isConcern": false,
                    "concern": ""
                },
                {
                    "isOther": false,
                    "text": "I don't deserve ...",
                    "isLinkNew": false,
                    "isConcern": false,
                    "concern": ""
                },
                {
                    "isOther": false,
                    "text": "It's hard for me to ...",
                    "isLinkNew": false,
                    "isConcern": false,
                    "concern": ""
                },
                {
                    "isOther": false,
                    "text": "Making money is hard",
                    "isLinkNew": false,
                    "isConcern": false,
                    "concern": ""
                },
                {
                    "isOther": false,
                    "text": "None of the above",
                    "isLinkNew": false,
                    "isConcern": false,
                    "concern": ""
                },
                {
                    "isOther": true,
                    "text": "Other",
                    "isLinkNew": false,
                    "isConcern": false,
                    "concern": "",
                    "isReadOnly": true
                }
            ]
        },
        {
            "title": "Negative self talk",
            "description": "Do you criticize yourself sometimes in a non useful way?",
            "notes": " Or say to yourself things that aren\u2019t useful? ",
            "type": "radio",
            "inputPlaceholder": "",
            "answers": [
                {
                    "isOther": false,
                    "text": "Yes",
                    "isLinkNew": false,
                    "isConcern": false,
                    "concern": ""
                },
                {
                    "isOther": false,
                    "text": "No",
                    "isLinkNew": false,
                    "isConcern": false,
                    "concern": "",
                    "hasGoToStep": true,
                    "goToStepByNum": "48"
                }
            ]
        },
        {
            "title": "Negative self talk",
            "description": "List all of the ways you criticize yourself, and things you say to yourself which aren't useful.",
            "notes": " If some are private, use some word for reference ",
            "type": "long",
            "inputPlaceholder": "",
            "answers": []
        },
        {
            "title": "Limiting beliefs",
            "description": "Are you aware of any limiting beliefs you have about yourself or the world? ",
            "notes": "Doesn't matter if they are \"true\" or not, just things that you believe in, that you know are limiting you in any way.",
            "type": "radio",
            "inputPlaceholder": "",
            "answers": [
                {
                    "isOther": false,
                    "text": "Yes",
                    "isLinkNew": false,
                    "isConcern": false,
                    "concern": ""
                },
                {
                    "isOther": false,
                    "text": "No",
                    "isLinkNew": false,
                    "isConcern": false,
                    "concern": "",
                    "hasGoToStep": true,
                    "goToStepByNum": "50"
                }
            ]
        },
        {
            "title": "Limiting beliefs",
            "description": "List all of them",
            "notes": "I don't need the actual beliefs. If you don't want to write them down, find a way to refer to them instead.\n\nI.e. instead of \"making money is hard if you're born poor\", you can write \"finances\" ",
            "type": "long",
            "inputPlaceholder": "",
            "answers": []
        },
        {
            "title": "Self concept",
            "description": "Are there things that you think about yourself that you'd like to change? ",
            "notes": "",
            "type": "radio",
            "inputPlaceholder": "",
            "answers": [
                {
                    "isOther": false,
                    "text": "Yes",
                    "isLinkNew": false,
                    "isConcern": false,
                    "concern": ""
                },
                {
                    "isOther": false,
                    "text": "No",
                    "isLinkNew": false,
                    "isConcern": false,
                    "concern": "",
                    "hasGoToStep": true,
                    "goToStepByNum": "52"
                }
            ]
        },
        {
            "title": "Self concept",
            "description": "List all of them",
            "notes": " If some are private, use a word or a letter for reference ",
            "type": "long",
            "inputPlaceholder": "",
            "answers": []
        },
        {
            "title": "Recurring & intrusive thoughts",
            "description": "Do you have any recurring negative thoughts or worries? ",
            "notes": " Or things you \"catch yourself\" thinking too much about? ",
            "type": "radio",
            "inputPlaceholder": "",
            "answers": [
                {
                    "isOther": false,
                    "text": "Yes",
                    "isLinkNew": false,
                    "isConcern": false,
                    "concern": ""
                },
                {
                    "isOther": false,
                    "text": "No",
                    "isLinkNew": false,
                    "isConcern": false,
                    "concern": "",
                    "hasGoToStep": true,
                    "goToStepByNum": "54"
                }
            ]
        },
        {
            "title": "Recurring & intrusive thoughts",
            "description": "List all of them",
            "notes": " If some are private, use a word for reference ",
            "type": "long",
            "inputPlaceholder": "",
            "answers": []
        },
        {
            "title": "Emotions vs logic",
            "description": "Are there things that you logically know they are not true, but emotionally they feel true, and bother or disturb you in a way?",
            "notes": "",
            "type": "radio",
            "inputPlaceholder": "",
            "answers": [
                {
                    "isOther": false,
                    "text": "Yes",
                    "isLinkNew": false,
                    "isConcern": false,
                    "concern": ""
                },
                {
                    "isOther": false,
                    "text": "No",
                    "isLinkNew": false,
                    "isConcern": false,
                    "concern": "",
                    "hasGoToStep": true,
                    "goToStepByNum": "56"
                }
            ]
        },
        {
            "title": "Emotions vs logic",
            "description": "List all of them ",
            "notes": " If some are private, use a word for reference ",
            "type": "long",
            "inputPlaceholder": "",
            "answers": []
        },
        {
            "title": "Triggers",
            "description": "Are there things that trigger a negative response for you?",
            "notes": " A certain sight, behavior, sound, tone of voice, or anything that make you react or feel in a way you don\u2019t like",
            "type": "radio",
            "inputPlaceholder": "",
            "answers": [
                {
                    "isOther": false,
                    "isLinkNew": false,
                    "isConcern": false,
                    "concern": "",
                    "text": "Yes"
                },
                {
                    "isOther": false,
                    "text": "No",
                    "isLinkNew": false,
                    "isConcern": false,
                    "concern": "",
                    "hasGoToStep": true,
                    "goToStepByNum": "58"
                }
            ]
        },
        {
            "title": "Triggers",
            "description": "List all of them",
            "notes": " If some are private, use a word for reference ",
            "type": "long",
            "inputPlaceholder": "",
            "answers": []
        },
        {
            "title": "Habits to release",
            "description": "Do you have any habits that you want to change or remove?",
            "notes": "Nail biting, smoking, binge eating, etc. ",
            "type": "radio",
            "inputPlaceholder": "",
            "answers": [
                {
                    "isOther": false,
                    "text": "Yes",
                    "isLinkNew": false,
                    "isConcern": false,
                    "concern": ""
                },
                {
                    "isOther": false,
                    "text": "No",
                    "isLinkNew": false,
                    "isConcern": false,
                    "concern": "",
                    "hasGoToStep": true,
                    "goToStepByNum": "60"
                }
            ]
        },
        {
            "title": "Habits to release",
            "description": "List all of them",
            "notes": "If some are private, use a word for reference",
            "type": "long",
            "inputPlaceholder": "",
            "answers": []
        },
        {
            "title": "Habits to Install",
            "description": "Do you have any habits that you want to install or cultivate?",
            "notes": "E.g. exercise, meditation, writing, etc",
            "type": "radio",
            "inputPlaceholder": "",
            "answers": [
                {
                    "isOther": false,
                    "text": "Yes",
                    "isLinkNew": false,
                    "isConcern": false,
                    "concern": ""
                },
                {
                    "isOther": false,
                    "text": "No",
                    "isLinkNew": false,
                    "isConcern": false,
                    "concern": "",
                    "hasGoToStep": true,
                    "goToStepByNum": "62"
                }
            ]
        },
        {
            "title": "Habits to Install",
            "description": "List all of them",
            "notes": "If some are private, use a word for reference",
            "type": "long",
            "inputPlaceholder": "",
            "answers": []
        },
        {
            "title": "Qualities to install",
            "description": "Is there a quality you want to have, or something you\u2019d like to be true about you?",
            "notes": " Let\u2019s say you\u2019d like to be a curious person, or to KNOW about yourself that you are patient, or tenacious, powerful, creative, smart, etc.\n\nSome quality that you currently do NOT feel is true for/about you, but you\u2019d like it to be true. (hint: you can have more than one ",
            "type": "radio",
            "inputPlaceholder": "",
            "answers": [
                {
                    "isOther": false,
                    "text": "Yes",
                    "isLinkNew": false,
                    "isConcern": false,
                    "concern": ""
                },
                {
                    "isOther": false,
                    "text": "No",
                    "hasGoToStep": true,
                    "goToStepByNum": "64",
                    "isLinkNew": false,
                    "isConcern": false,
                    "concern": ""
                }
            ]
        },
        {
            "title": "Qualities to install",
            "description": "List all of them",
            "notes": " If it\u2019s private write words or letters for references ",
            "type": "long",
            "inputPlaceholder": "",
            "answers": []
        },
        {
            "title": "Qualities to adopt",
            "description": "Are there people who have a quality or behavior you\u2019d like to adopt or cultivate?",
            "notes": " Could be anyone on this planet. Loved ones, celebrities, and anyone in between ",
            "type": "radio",
            "inputPlaceholder": "",
            "answers": [
                {
                    "isOther": false,
                    "text": "Yes",
                    "isLinkNew": false,
                    "isConcern": false,
                    "concern": ""
                },
                {
                    "isOther": false,
                    "text": "No",
                    "hasGoToStep": true,
                    "goToStepByNum": "66",
                    "isLinkNew": false,
                    "isConcern": false,
                    "concern": ""
                }
            ]
        },
        {
            "title": "Qualities to adopt",
            "description": "Who are them and which behaviors/qualities?",
            "notes": " If it\u2019s private write words or letters for references ",
            "type": "long",
            "inputPlaceholder": "",
            "answers": []
        },
        {
            "title": "Beliefs to build",
            "description": "Are there any beliefs you\u2019d like to build?",
            "notes": " Or things you don\u2019t believe in, which you\u2019d like to? Either about yourself or the world",
            "type": "radio",
            "inputPlaceholder": "",
            "answers": [
                {
                    "isOther": false,
                    "text": "Yes",
                    "isLinkNew": false,
                    "isConcern": false,
                    "concern": ""
                },
                {
                    "isOther": false,
                    "text": "No",
                    "hasGoToStep": true,
                    "goToStepByNum": "68",
                    "isLinkNew": false,
                    "isConcern": false,
                    "concern": ""
                }
            ]
        },
        {
            "title": "Beliefs to build",
            "description": "List all of them",
            "notes": " If it\u2019s private write words for references ",
            "type": "long",
            "inputPlaceholder": "",
            "answers": []
        },
        {
            "title": "Final thoughts & comments",
            "description": "Is there anything else we didn't cover? Something that you think might be relevant?",
            "notes": "",
            "type": "radio",
            "inputPlaceholder": "",
            "answers": [
                {
                    "isOther": false,
                    "text": "Yes",
                    "isLinkNew": false,
                    "isConcern": false,
                    "concern": ""
                },
                {
                    "isOther": false,
                    "text": "No",
                    "hasGoToStep": true,
                    "goToStepByNum": "70",
                    "isLinkNew": false,
                    "isConcern": false,
                    "concern": ""
                }
            ]
        },
        {
            "title": "Final thoughts & comments",
            "description": "Write everything you think might be relevant.",
            "notes": "If you're in doubt, just write it :)",
            "type": "long",
            "inputPlaceholder": "",
            "answers": []
        },
        {
            "title": "Final thoughts & comments",
            "description": "Any questions, comments or thoughts you\u2019d like to share before we begin?",
            "notes": "",
            "type": "radio",
            "inputPlaceholder": "",
            "answers": [
                {
                    "isOther": false,
                    "text": "Yes",
                    "isLinkNew": false,
                    "isConcern": false,
                    "concern": ""
                },
                {
                    "isOther": false,
                    "text": "No",
                    "hasGoToStep": true,
                    "goToStepByNum": "72",
                    "isLinkNew": false,
                    "isConcern": false,
                    "concern": ""
                }
            ]
        },
        {
            "title": "Final thoughts & comments",
            "description": "Write everything you think might be relevant.",
            "notes": "If you're in doubt, just write it :)",
            "type": "long",
            "inputPlaceholder": "",
            "answers": []
        },
        {
            "title": "Life after these changes",
            "description": "How would life be after these changes? How would you be? How much different would your day to day living would be?",
            "notes": "Take a moment to run that in your mind. This is not the time to be modest. It's time to think of your Christmas list, and how life will be if you'll get everything you asked for.",
            "type": "long",
            "inputPlaceholder": "",
            "answers": []
        },
        {
            "title": "Top 5",
            "description": "From all we\u2019ve covered so far, what are the top 5 things, that once resolved/cleared, will bring you the most benefits/value?",
            "notes": " i.e.\n1. Shame at age 7\n2. Guilt at age 13\n3. Limiting beliefs\n4. Trauma at age 21\n5. Grief over my ex ",
            "type": "long",
            "inputPlaceholder": "",
            "answers": []
        },
        {
            "title": "Submit",
            "description": "Click the button below to submit your answers",
            "notes": "",
            "type": "radio",
            "inputPlaceholder": "",
            "answers": [
                {
                    "isOther": false,
                    "text": "Submit",
                    "isLinkNew": true,
                    "linkNew": "https://m.me/adamgoldman.me?ref=after-session-intro-form",
                    "isConcern": false,
                    "concern": ""
                }
            ]
        }
    ],
    "__v": 0,
    "title": "Mind Hacking Session Intro",
    "status": "In Progress",
    "currentStepNum": 73,
    "price": 0,
    "stepsStack": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        19,
        21,
        23,
        25,
        27,
        28,
        29,
        31,
        33,
        35,
        37,
        39,
        41,
        43,
        45,
        46,
        47,
        48,
        49,
        50,
        51,
        52,
        53,
        54,
        55,
        56,
        58,
        59,
        60,
        61,
        62,
        63,
        64,
        65,
        66,
        67,
        68,
        69,
        70,
        72
    ],
    "answerByStep": {
        "0": "Short time? Great, love fast results",
        "1": "So what is it Adam?",
        "2": "Sounds good!",
        "3": "GOOD. Privacy IS sacred",
        "4": "someemail@gmail.com",
        "5": "GMT+2",
        "6": "you got to me :)",
        "7": "solving some problems",
        "8": "5years ",
        "9": "rough estimate: 2-3k hours",
        "10": "around $500 not counting time lost",
        "11": "I ran my phone number backwards",
        "12": "4.5 some scary stuff",
        "13": "Neutral/no feeling",
        "14": "I'd like to feel better about this memory",
        "15": "Yes",
        "16": "10 in the gym",
        "17": "No",
        "18": "",
        "19": "No",
        "20": "",
        "21": "No",
        "22": "",
        "23": "No",
        "24": "",
        "25": "No",
        "26": "",
        "27": "Yes",
        "28": "Breakup 12 years - sadness",
        "29": "No",
        "30": "",
        "31": "No",
        "32": "",
        "33": "No",
        "34": "",
        "35": "No",
        "36": "",
        "37": "No",
        "38": "",
        "39": "No",
        "40": "",
        "41": "No",
        "42": "",
        "43": "No",
        "44": "",
        "45": "It's hard for me to ...",
        "46": "Yes",
        "47": "time management",
        "48": "Yes",
        "49": "I guess I still have about money",
        "50": "Yes",
        "51": "time management,\nself control",
        "52": "Yes",
        "53": "mild worries about the future",
        "54": "Yes",
        "55": "too much emphasis on the wrong thing",
        "56": "No",
        "57": "",
        "58": "Yes",
        "59": "Eating unhealthy",
        "60": "Yes",
        "61": "more Meditation",
        "62": "Yes",
        "63": "I'd love to be more expressive",
        "64": "Yes",
        "65": "gv - authenticity",
        "66": "Yes",
        "67": "Making money is easy",
        "68": "Yes",
        "69": "I might missed some things",
        "70": "No",
        "71": "",
        "72": "Increased level of self-worth",
        "73": "1. bad social experiences - from 11\n2. recurring thoughts",
        "74": "",
        "75": ""
    },
    "createdAt": 1447378736842
}
