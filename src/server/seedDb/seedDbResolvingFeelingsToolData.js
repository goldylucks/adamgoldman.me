/* eslint-disable */
export default { 
    "url" : "resolving-feelings", 
    "isRtl" : false, 
    "hiddenFields" : [

    ], 
    "steps" : [
        {
            "title" : "Feeling to release", 
            "description" : "Which feeling would you like to release with me today?", 
            "type" : "radio", 
            "inputPlaceholder" : "", 
            "answers" : [
                {
                    "text" : "Anger", 
                    "isLinkNew" : false
                }, 
                {
                    "text" : "Shame", 
                    "isLinkNew" : false
                }, 
                {
                    "text" : "Guilt", 
                    "isLinkNew" : false
                }, 
                {
                    "text" : "Regret", 
                    "isLinkNew" : false
                }, 
                {
                    "text" : "Frustration", 
                    "isLinkNew" : false
                }, 
                {
                    "text" : "Jealousy", 
                    "isLinkNew" : false
                }, 
                {
                    "text" : "Envy", 
                    "isLinkNew" : false
                }, 
                {
                    "text" : "Insult", 
                    "isLinkNew" : false
                }, 
                {
                    "text" : "Hopelessness", 
                    "isLinkNew" : false
                }, 
                {
                    "text" : "Sadness", 
                    "isLinkNew" : false
                }, 
                {
                    "text" : "resentment", 
                    "isLinkNew" : false
                }
            ]
        }, 
        {
            "title" : "Eliciting ${s0} - background", 
            "description" : "In all your years on this odd planet, you had some experiences that you felt ${s0} about, some more than others, correct?", 
            "type" : "radio", 
            "inputPlaceholder" : "", 
            "answers" : [
                {
                    "text" : "Correct", 
                    "isLinkNew" : false
                }, 
                {
                    "text" : "Some more than others, yes", 
                    "isLinkNew" : false
                }
            ]
        }, 
        {
            "title" : "Eliciting ${s0} - the chosen one", 
            "description" : "***“One? I have plenty!”***\n\nGreat! So the change would be more impactful for you. Pick the one that still bothers you the most, or still has the most “sting” to it.", 
            "type" : "radio", 
            "inputPlaceholder" : "", 
            "answers" : [
                {
                    "text" : "Not sure if it’s the strongest one, but I got one", 
                    "isLinkNew" : false
                }, 
                {
                    "text" : "Got one, let's continue", 
                    "isLinkNew" : false
                }
            ]
        }, 
        {
            "title" : "Eliciting ${s0} - description", 
            "description" : "As you think of that now, notice what image comes to mind, and describe it to me a little bit\n\nI don’t need the details, just a title for reference would do, i.e. “Fight with a friend two years ago”", 
            "type" : "short", 
            "inputPlaceholder" : "The title of the image is ...", 
            "answers" : [

            ]
        }, 
        {
            "title" : "Eliciting ${s0}", 
            "description" : "***“${echo}”***\n\nOK, we’ll call that the “cue”. Now you can put that cue experience aside for now, we’ll use it soon.", 
            "type" : "radio", 
            "inputPlaceholder" : "OK, I've put it aside", 
            "answers" : [
                {
                    "text" : "OK, I've put it aside", 
                    "isLinkNew" : false
                }, 
                {
                    "text" : "I've set it aside, what's next?", 
                    "isLinkNew" : false
                }
            ]
        }, 
        {
            "title" : "Corrective action", 
            "description" : "Is there some corrective action you can take to “improve the situation” or “make amends”, or what’s left is just to release the emotion/feeling of ${s0}?\n\n Maybe you already did this, or there’s nothing else to physically “do”, and you know logically it’s “over”, and what’s left is for your emotions to sort of catch up with your logic. ", 
            "type" : "radio", 
            "inputPlaceholder" : "", 
            "answers" : [
                {
                    "text" : "There is something I can do", 
                    "isLinkNew" : false
                }, 
                {
                    "text" : "I just want to release the feeling", 
                    "isLinkNew" : false, 
                    "hasGoToStep" : true, 
                    "goToStepByNum" : "9"
                }
            ]
        }, 
        {
            "title" : "Corrective action - thing", 
            "description" : "***“There is something I can do”***\n\nGreat, what is it?\n\n I don’t need the details, just a title for reference will do, i.e. “talk to my friend”", 
            "type" : "short", 
            "inputPlaceholder" : "I can ...", 
            "answers" : [

            ]
        }, 
        {
            "title" : "Corrective action - time", 
            "description" : "***“${echo}”***\n\nAnd when would be an appropriate time to take this corrective action?", 
            "type" : "short", 
            "inputPlaceholder" : "", 
            "answers" : [

            ]
        }, 
        {
            "title" : "Corrective action - future pacing", 
            "description" : "Run that in your mind now, doing that corrective action:\n*“${s6}”*\n\nIn that time:\n*“${s7}”*\n\nAnd notice what do you feel experiencing it", 
            "type" : "radio", 
            "inputPlaceholder" : "", 
            "answers" : [
                {
                    "isOther" : false, 
                    "text" : "I feel MUCH better", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : ""
                }, 
                {
                    "isOther" : false, 
                    "text" : "I feel better", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : ""
                }, 
                {
                    "isOther" : false, 
                    "text" : "I don’t feel a change in this step", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : ""
                }, 
                {
                    "isOther" : false, 
                    "text" : "I want to make some adjustments", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : ""
                }, 
                {
                    "isOther" : false, 
                    "text" : "I feel worse", 
                    "isLinkNew" : false, 
                    "isConcern" : true, 
                    "concern" : "feel worse"
                }
            ]
        }, 
        {
            "title" : "Eliciting resource", 
            "description" : "Now think of something that you used to feel ${s0} about in the past, but as you think of it now, it’s ok, and you are at peace with it.\n\nSomething that used to bother you in a similar way, but now as you think of it it’s like *“eh, no biggie / it’s in the past / etc”*. Come people like to call it “resolved ${s0}” ", 
            "type" : "radio", 
            "inputPlaceholder" : "", 
            "answers" : [
                {
                    "text" : "OK, I got one now", 
                    "isLinkNew" : false, 
                    "hasGoToStep" : true, 
                    "goToStepByNum" : "11"
                }, 
                {
                    "text" : "Nothing comes to mind", 
                    "isLinkNew" : false
                }
            ]
        }, 
        {
            "title" : "Eliciting resource - give yourself a break", 
            "description" : "***“Nothing comes to mind”***\n\nUsually this happens because people set the bar too high, like looking for that one grandiose past experience of ${s0}, which is now resolved. So give yourself a little break ;)\n\nAnd go for something smaller / less significant. Think back through your early days, the different episodes in your life, different places you’ve been, things you’ve done, people you’ve met, relationships you had, activities you’ve done.\n\nRemember everything we do is reversible, we are just exploring, and we can always do this again with a different experience. Whatever comes to mind now, go with it. At the end, if you won’t come to a full resolution, we’ll talk about it. Promise :) ", 
            "type" : "radio", 
            "inputPlaceholder" : "", 
            "answers" : [
                {
                    "text" : "OK, I got one now", 
                    "isLinkNew" : false
                }, 
                {
                    "text" : "Gave myself a break, now I got one", 
                    "isLinkNew" : false
                }
            ]
        }, 
        {
            "title" : "Eliciting resource - description", 
            "description" : "Good, and as you think of that now, notice what image comes to mind, and describe it to me a little bit.\n\n I don’t need the details, just a title for reference would do, i.e. “age 11 at sports class” ", 
            "type" : "short", 
            "inputPlaceholder" : "", 
            "answers" : [

            ]
        }, 
        {
            "title" : "Eliciting resource - validating", 
            "description" : "***\"${echo}\"***\n\nAnd as you think about that now, you can remember feeling ${s0} about it, but it’s okay now?\n\nIt’s in the past, you have come to terms with it, etc ", 
            "type" : "radio", 
            "inputPlaceholder" : "", 
            "answers" : [
                {
                    "text" : "Yes", 
                    "isLinkNew" : false
                }, 
                {
                    "text" : "Actually, let me choose another one", 
                    "isLinkNew" : false, 
                    "hasGoToStep" : true, 
                    "goToStepByNum" : "9"
                }
            ]
        }, 
        {
            "title" : "Eliciting resource", 
            "description" : "OK, we’ll call this the “resource”. It’s going to come in handy real soon", 
            "type" : "radio", 
            "inputPlaceholder" : "", 
            "answers" : [
                {
                    "text" : "OK, that's the resource, gotcha", 
                    "isLinkNew" : false
                }, 
                {
                    "text" : "OK, let's continue", 
                    "isLinkNew" : false
                }
            ]
        }, 
        {
            "title" : "Congruence check", 
            "description" : "So you have the resource:\n*“${s11}”*\n\nAnd the cue:\n*“${s3}”*\n\nDo you have any objections to experience the cue, in the same way you experience the resource?\n\nI.e. with more peace/resolution, coming to terms with it, etc\n\n**Note**: we will cover safety mechanisms for the future after we’ll transform/soften this experience, to make sure you know how to better avoid this situation in the future.", 
            "type" : "radio", 
            "inputPlaceholder" : "", 
            "answers" : [
                {
                    "text" : "Objections? of course not!", 
                    "isLinkNew" : false
                }, 
                {
                    "text" : "I would LOVE to experience the cue like that", 
                    "isLinkNew" : false
                }, 
                {
                    "text" : "Let me pick another resource", 
                    "isLinkNew" : false, 
                    "hasGoToStep" : true, 
                    "goToStepByNum" : "9"
                }, 
                {
                    "text" : "Yes I have an objection", 
                    "isLinkNew" : false, 
                    "isConcern" : true
                }
            ]
        }, 
        {
            "title" : "Congruence check", 
            "description" : "***“${echo}”***\n\nGreat. That’s usually the case, let’s proceed then", 
            "type" : "radio", 
            "inputPlaceholder" : "", 
            "answers" : [
                {
                    "text" : "Let's proceed", 
                    "isLinkNew" : false
                }, 
                {
                    "text" : "On with the show!", 
                    "isLinkNew" : false
                }, 
                {
                    "text" : "I'm ready for a resolution", 
                    "isLinkNew" : false
                }
            ]
        }, 
        {
            "title" : "Content distortions - self", 
            "description" : "As you look at the cue experience:\n*“${s3}”*\n\nAre you in regular life size in that experience?\n\nSometimes people would see themselves smaller or larger than life size in experiences like these, or they would be smaller / larger than life size.", 
            "type" : "radio", 
            "inputPlaceholder" : "", 
            "answers" : [
                {
                    "text" : "I'm life size", 
                    "isLinkNew" : false, 
                    "hasGoToStep" : true, 
                    "goToStepByNum" : "18"
                }, 
                {
                    "text" : "I'm bigger than life size", 
                    "isLinkNew" : false
                }, 
                {
                    "text" : "I'm smaller than life size", 
                    "isLinkNew" : false
                }
            ]
        }, 
        {
            "title" : "Content distortions", 
            "description" : "***\"${echo}\"***\n\nOK, now notice what happens as you allow yourself to get back to regular life size", 
            "type" : "radio", 
            "inputPlaceholder" : "", 
            "answers" : [
                {
                    "isOther" : false, 
                    "text" : "I feel MUCH better", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : ""
                }, 
                {
                    "isOther" : false, 
                    "text" : "I feel better", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : ""
                }, 
                {
                    "isOther" : false, 
                    "text" : "I don’t feel a change in this step", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : ""
                }, 
                {
                    "isOther" : false, 
                    "text" : "I feel worse", 
                    "isLinkNew" : false, 
                    "isConcern" : true, 
                    "concern" : "feel worse"
                }
            ]
        }, 
        {
            "title" : "Content distortions - others", 
            "description" : "If there are other people in that experience, are they in regular life size?", 
            "type" : "radio", 
            "inputPlaceholder" : "", 
            "answers" : [
                {
                    "isOther" : false, 
                    "text" : "There's no one else", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : "", 
                    "hasGoToStep" : true, 
                    "goToStepByNum" : "20"
                }, 
                {
                    "isOther" : false, 
                    "text" : "There are others, they are life size", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : "", 
                    "hasGoToStep" : true, 
                    "goToStepByNum" : "20"
                }, 
                {
                    "isOther" : false, 
                    "text" : "There are others, they are bigger than life size", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : ""
                }, 
                {
                    "isOther" : false, 
                    "text" : "There are others, they are smaller than life size", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : ""
                }
            ]
        }, 
        {
            "title" : "Content distortions - others", 
            "description" : "***“${echo}”***\n\nOK, now notice what happens as you allow whoever is involved, to get back to regular life size", 
            "type" : "radio", 
            "inputPlaceholder" : "", 
            "answers" : [
                {
                    "isOther" : false, 
                    "text" : "I feel MUCH better", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : ""
                }, 
                {
                    "isOther" : false, 
                    "text" : "I feel better", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : ""
                }, 
                {
                    "isOther" : false, 
                    "text" : "I don’t feel a change in this step", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : ""
                }, 
                {
                    "isOther" : false, 
                    "text" : "I feel worse", 
                    "isLinkNew" : false, 
                    "isConcern" : true, 
                    "concern" : "feel worse"
                }
            ]
        }, 
        {
            "title" : "Content distortions - misc", 
            "description" : "Are there any other content distortions you notice?\n\nMaybe someone has no cloth on, or has a blank spot on them, or something similar.", 
            "type" : "radio", 
            "inputPlaceholder" : "", 
            "answers" : [
                {
                    "isOther" : false, 
                    "text" : "I don’t notice any other distortions", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : "", 
                    "hasGoToStep" : true, 
                    "goToStepByNum" : "22"
                }, 
                {
                    "isOther" : false, 
                    "text" : "There are more distortions I notice", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : ""
                }
            ]
        }, 
        {
            "title" : "Content distortions - misc", 
            "description" : "Great observation, now notice what happens as you allow those distortions to disappear, so you see the image in its appropriate form", 
            "type" : "radio", 
            "inputPlaceholder" : "", 
            "answers" : [
                {
                    "isOther" : false, 
                    "text" : "I feel MUCH better", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : ""
                }, 
                {
                    "isOther" : false, 
                    "text" : "I feel better", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : ""
                }, 
                {
                    "isOther" : false, 
                    "text" : "I don’t feel a change in this step", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : ""
                }, 
                {
                    "isOther" : false, 
                    "text" : "I feel worse", 
                    "isLinkNew" : false, 
                    "isConcern" : true, 
                    "concern" : "feel worse"
                }
            ]
        }, 
        {
            "title" : "Contrastive Analysis", 
            "description" : "Now as you think about both of these at the same time:\n\n**The resource:**\n${s11}\n\n**And the cue:**\n${s3}\n\nAttend to the differences in how you see, hear, and experience them in your mind.\n\nAs you go back and forth between the two a few times, notice the visual, auditory, and tactile differences between the way you experience them.\n\nWhat are the main differences you see, hear, and feel between the two? Write down all differences you can already notice.", 
            "type" : "long", 
            "inputPlaceholder" : "The differences I already notice are ...", 
            "answers" : [

            ]
        }, 
        {
            "title" : "Contrastive Analysis - location & distance", 
            "description" : "Now check, as you look at the resource image and the cue image, are the images in the same place in your physical space?\n\nFor example you might see one image further away to your left, while the the other will be closer and to your right.", 
            "type" : "radio", 
            "inputPlaceholder" : "", 
            "answers" : [
                {
                    "isOther" : false, 
                    "text" : "One image is closer than the other", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : "", 
                    "hasGoToStep" : true, 
                    "goToStepByNum" : "25"
                }, 
                {
                    "isOther" : false, 
                    "text" : "One image is higher than the other", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : "", 
                    "hasGoToStep" : true, 
                    "goToStepByNum" : "25"
                }, 
                {
                    "isOther" : false, 
                    "text" : "One image is more to my right and the other to my left", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : "", 
                    "hasGoToStep" : true, 
                    "goToStepByNum" : "25"
                }, 
                {
                    "isOther" : false, 
                    "text" : "One image is more in front of me than the other", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : "", 
                    "hasGoToStep" : true, 
                    "goToStepByNum" : "25"
                }, 
                {
                    "isOther" : false, 
                    "text" : "The images are in the exact same place", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : ""
                }, 
                {
                    "isOther" : true, 
                    "text" : "Other", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : "", 
                    "hasGoToStep" : true, 
                    "goToStepByNum" : "25"
                }
            ]
        }, 
        {
            "title" : "Contrastive Analysis - location & distance", 
            "description" : "***“The images are in the exact same place”***\n\nWhile it does happen that the images are in the same place and distance to begin with, it is very rare, so I just want to be thorough here, with your permission.\n\nI want you to look again at the **resource image** again:\n*${s11}*\n\nThen at the **cue image** again:\n*${s3}*\n\nAnd go back and forth between the two a few times. Then close your eyes and point at the location you see each of them.\n\nAre you pointing to the **exact same place**, and the images are the **exact same distance** from you?", 
            "type" : "radio", 
            "inputPlaceholder" : "", 
            "answers" : [
                {
                    "isOther" : false, 
                    "text" : "I’m pointing to the exact same place", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : "", 
                    "hasGoToStep" : true, 
                    "goToStepByNum" : "26"
                }, 
                {
                    "isOther" : false, 
                    "text" : "I’m pointing to two different places", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : ""
                }
            ]
        }, 
        {
            "title" : "Mapping Across - location & distance", 
            "description" : "Now notice what happens as you allow the cue image, to slide to the same location of the resource image.\n\nSo you see both images in the same location and distance from you.", 
            "type" : "radio", 
            "inputPlaceholder" : "", 
            "answers" : [
                {
                    "isOther" : false, 
                    "text" : "I feel MUCH better", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : ""
                }, 
                {
                    "isOther" : false, 
                    "text" : "I feel better", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : ""
                }, 
                {
                    "isOther" : false, 
                    "text" : "I don’t feel a change in this step", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : ""
                }, 
                {
                    "isOther" : false, 
                    "text" : "I feel worse", 
                    "isLinkNew" : false, 
                    "isConcern" : true, 
                    "concern" : "feel worse"
                }
            ]
        }, 
        {
            "title" : "Mapping Across - brightness / dimness", 
            "description" : "Next notice what happens as you allow the cue image to become as bright (or as dim) as the resource image.\n\nSo you see both images in the same brightness/dimness.", 
            "type" : "radio", 
            "inputPlaceholder" : "", 
            "answers" : [
                {
                    "isOther" : false, 
                    "text" : "I feel MUCH better", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : ""
                }, 
                {
                    "isOther" : false, 
                    "text" : "I feel better", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : ""
                }, 
                {
                    "isOther" : false, 
                    "text" : "I don’t feel a change in this step", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : ""
                }, 
                {
                    "isOther" : false, 
                    "text" : "I feel worse", 
                    "isLinkNew" : false, 
                    "isConcern" : true, 
                    "concern" : "feel worse"
                }
            ]
        }, 
        {
            "title" : "Mapping Across - depth(3d)", 
            "description" : "Now notice what happens as you allow the cue image to become as deep/flat as the resource image.\n\nSo you see both images in the same depth.", 
            "type" : "radio", 
            "inputPlaceholder" : "", 
            "answers" : [
                {
                    "isOther" : false, 
                    "text" : "I feel MUCH better", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : ""
                }, 
                {
                    "isOther" : false, 
                    "text" : "I feel better", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : ""
                }, 
                {
                    "isOther" : false, 
                    "text" : "I don’t feel a change in this step", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : ""
                }, 
                {
                    "isOther" : false, 
                    "text" : "I feel worse", 
                    "isLinkNew" : false, 
                    "isConcern" : true, 
                    "concern" : "feel worse"
                }
            ]
        }, 
        {
            "title" : "Mapping Across - vividness & focus", 
            "description" : "Next notice what happens as you allow the cue image to become as vivid and focused as the resource image.\n\nSo you see both images in the same vividness & focus.", 
            "type" : "radio", 
            "inputPlaceholder" : "", 
            "answers" : [
                {
                    "isOther" : false, 
                    "text" : "I feel MUCH better", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : ""
                }, 
                {
                    "isOther" : false, 
                    "text" : "I feel better", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : ""
                }, 
                {
                    "isOther" : false, 
                    "text" : "I don’t feel a change in this step", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : ""
                }, 
                {
                    "isOther" : false, 
                    "text" : "I feel worse", 
                    "isLinkNew" : false, 
                    "isConcern" : true, 
                    "concern" : "feel worse"
                }
            ]
        }, 
        {
            "title" : "Mapping Across - sound", 
            "description" : "Do any of the images have sound?\n\nVoice, background noises, music, or any type of sound.", 
            "type" : "radio", 
            "inputPlaceholder" : "", 
            "answers" : [
                {
                    "isOther" : false, 
                    "text" : "Both have sound", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : ""
                }, 
                {
                    "isOther" : false, 
                    "text" : "Neither have sound", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : "", 
                    "hasGoToStep" : true, 
                    "goToStepByNum" : "33"
                }, 
                {
                    "isOther" : false, 
                    "text" : "Cue does, resource doesn't", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : "", 
                    "hasGoToStep" : true, 
                    "goToStepByNum" : "31"
                }, 
                {
                    "isOther" : false, 
                    "text" : "Resource has, cue doesn't", 
                    "isLinkNew" : false, 
                    "isConcern" : true, 
                    "concern" : "feel worse", 
                    "hasGoToStep" : true, 
                    "goToStepByNum" : "32"
                }
            ]
        }, 
        {
            "title" : "Mapping Across - sound", 
            "description" : "***“Both have sound”***\n\nNotice what happens as you allow the sound of the cue image, to become like the sound of the resource image.\n\nSo you hear both of them in the same way. Same sound quality, tempo, tone, volume, direction, etc", 
            "type" : "radio", 
            "inputPlaceholder" : "", 
            "answers" : [
                {
                    "isOther" : false, 
                    "text" : "I feel MUCH better", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : ""
                }, 
                {
                    "isOther" : false, 
                    "text" : "I feel better", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : ""
                }, 
                {
                    "isOther" : false, 
                    "text" : "I don’t feel a change in this step", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : ""
                }, 
                {
                    "isOther" : false, 
                    "text" : "I feel worse", 
                    "isLinkNew" : false, 
                    "isConcern" : true, 
                    "concern" : "feel worse"
                }
            ]
        }, 
        {
            "title" : "Mapping Across - sound", 
            "description" : "***“Cue does, resource doesn't”***\n\nNotice what happens as you allow the cue image to become muted as well.\n\nLike in a tv remote, as you press the “mute” button, or the “decrease volume” all the way to zero.", 
            "type" : "radio", 
            "inputPlaceholder" : "", 
            "answers" : [
                {
                    "isOther" : false, 
                    "text" : "I feel MUCH better", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : "", 
                    "hasGoToStep" : true, 
                    "goToStepByNum" : "33"
                }, 
                {
                    "isOther" : false, 
                    "text" : "I feel better", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : "", 
                    "hasGoToStep" : true, 
                    "goToStepByNum" : "33"
                }, 
                {
                    "isOther" : false, 
                    "text" : "I don’t feel a change in this step", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : "", 
                    "hasGoToStep" : true, 
                    "goToStepByNum" : "33"
                }, 
                {
                    "isOther" : false, 
                    "text" : "I feel worse", 
                    "isLinkNew" : false, 
                    "isConcern" : true, 
                    "concern" : "feel worse"
                }
            ]
        }, 
        {
            "title" : "Mapping Across - sound", 
            "description" : "***“Resource has, cue doesn't”***\n\nNotice what happens as you turn on the sound in the cue image, and allow it to become like the sound of the resource image.\n\nLike in a tv remote, as you press the “mute/unmute” button, or the “increase volume” all the way to zero. So you hear both of them in the same way. Same sound quality, tempo, tone, direction, etc", 
            "type" : "radio", 
            "inputPlaceholder" : "", 
            "answers" : [
                {
                    "isOther" : false, 
                    "text" : "I feel MUCH better", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : ""
                }, 
                {
                    "isOther" : false, 
                    "text" : "I feel better", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : ""
                }, 
                {
                    "isOther" : false, 
                    "text" : "I don’t feel a change in this step", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : ""
                }, 
                {
                    "isOther" : false, 
                    "text" : "I feel worse", 
                    "isLinkNew" : false, 
                    "isConcern" : true, 
                    "concern" : "feel worse"
                }
            ]
        }, 
        {
            "title" : "Mapping Across - tactile / touch", 
            "description" : "Do any of the images have tactile sensations or a sense of touch?\n\nI.e. you feel someone’s touch, something touching your skin, etc", 
            "type" : "radio", 
            "inputPlaceholder" : "", 
            "answers" : [
                {
                    "isOther" : false, 
                    "text" : "Both have tactile", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : ""
                }, 
                {
                    "isOther" : false, 
                    "text" : "Neither have tactile", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : "", 
                    "hasGoToStep" : true, 
                    "goToStepByNum" : "37"
                }, 
                {
                    "isOther" : false, 
                    "text" : "Cue does, resource doesn't", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : "", 
                    "hasGoToStep" : true, 
                    "goToStepByNum" : "35"
                }, 
                {
                    "isOther" : false, 
                    "text" : "Resource has, cue doesn't", 
                    "isLinkNew" : false, 
                    "isConcern" : true, 
                    "concern" : "feel worse", 
                    "hasGoToStep" : true, 
                    "goToStepByNum" : "36"
                }
            ]
        }, 
        {
            "title" : "Mapping Across - tactile / touch", 
            "description" : "***“Both have tactile”***\n\nNotice what happens as you allow the tactile sensations of the cue image, to become like the tactile sensations of the resource image.\n\nSo you feel the touch in both of them in the same way. Same texture, temperature, softness/stiffness, etc ", 
            "type" : "radio", 
            "inputPlaceholder" : "", 
            "answers" : [
                {
                    "isOther" : false, 
                    "text" : "I feel MUCH better", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : "", 
                    "hasGoToStep" : true, 
                    "goToStepByNum" : "37"
                }, 
                {
                    "isOther" : false, 
                    "text" : "I feel better", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : "", 
                    "hasGoToStep" : true, 
                    "goToStepByNum" : "37"
                }, 
                {
                    "isOther" : false, 
                    "text" : "I don’t feel a change in this step", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : "", 
                    "hasGoToStep" : true, 
                    "goToStepByNum" : "37"
                }, 
                {
                    "isOther" : false, 
                    "text" : "I feel worse", 
                    "isLinkNew" : false, 
                    "isConcern" : true, 
                    "concern" : "feel worse"
                }
            ]
        }, 
        {
            "title" : "Mapping Across - tactile / touch", 
            "description" : "***“Cue does, resource doesn't”***\n\nNotice what happens as you allow the tactile sensation of the cue image to drain away, and become touchless/tactiless as well.", 
            "type" : "radio", 
            "inputPlaceholder" : "", 
            "answers" : [
                {
                    "isOther" : false, 
                    "text" : "I feel MUCH better", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : "", 
                    "hasGoToStep" : true, 
                    "goToStepByNum" : "37"
                }, 
                {
                    "isOther" : false, 
                    "text" : "I feel better", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : "", 
                    "hasGoToStep" : true, 
                    "goToStepByNum" : "37"
                }, 
                {
                    "isOther" : false, 
                    "text" : "I don’t feel a change in this step", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : "", 
                    "hasGoToStep" : true, 
                    "goToStepByNum" : "37"
                }, 
                {
                    "isOther" : false, 
                    "text" : "I feel worse", 
                    "isLinkNew" : false, 
                    "isConcern" : true, 
                    "concern" : "feel worse"
                }
            ]
        }, 
        {
            "title" : "Mapping Across - tactile / touch", 
            "description" : "***“Resource has, cue doesn't”***\n\nNotice what happens as you start feeling the sense of touch in the cue image, and allow it to become like the sense of touch in the resource image.\n\nSo you feel the touch in both of them in the same way. Same texture, temperature, softness/stiffness, etc ", 
            "type" : "radio", 
            "inputPlaceholder" : "", 
            "answers" : [
                {
                    "isOther" : false, 
                    "text" : "I feel MUCH better", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : ""
                }, 
                {
                    "isOther" : false, 
                    "text" : "I feel better", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : ""
                }, 
                {
                    "isOther" : false, 
                    "text" : "I don’t feel a change in this step", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : ""
                }, 
                {
                    "isOther" : false, 
                    "text" : "I feel worse", 
                    "isLinkNew" : false, 
                    "isConcern" : true, 
                    "concern" : "feel worse"
                }
            ]
        }, 
        {
            "title" : "Mapping Across - remaining differences", 
            "description" : "Remaining differences\n\nNow go back and forth between both images and scan for remaining differences.\n\nIs there anything else in the way you experience the resource, which you'd like to apply to the cue?\n\n**Resource:**\n*\"${s11}\"*\n\n**Cue:**\n*\"${s3}\"*", 
            "type" : "radio", 
            "inputPlaceholder" : "", 
            "answers" : [
                {
                    "isOther" : false, 
                    "text" : "I don't notice any remaining differences", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : "", 
                    "hasGoToStep" : true, 
                    "goToStepByNum" : "40"
                }, 
                {
                    "isOther" : false, 
                    "text" : "I notice some differences I want to apply", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : ""
                }, 
                {
                    "isOther" : false, 
                    "text" : "I notice some differences I don't want to apply", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : "", 
                    "hasGoToStep" : true, 
                    "goToStepByNum" : "40"
                }
            ]
        }, 
        {
            "title" : "Mapping Across - remaining differences", 
            "description" : "***“I noticed some differences I want to apply”***\n\nGood observation, what remaining differences do you notice?", 
            "type" : "long", 
            "inputPlaceholder" : "", 
            "answers" : [

            ]
        }, 
        {
            "title" : "Mapping Across - remaining differences", 
            "description" : "***${echo}***\n\nApply them as well now and notice what happens", 
            "type" : "radio", 
            "inputPlaceholder" : "", 
            "answers" : [
                {
                    "isOther" : false, 
                    "text" : "I feel MUCH better", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : ""
                }, 
                {
                    "isOther" : false, 
                    "text" : "I feel better", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : ""
                }, 
                {
                    "isOther" : false, 
                    "text" : "I don’t feel a change in this step", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : ""
                }, 
                {
                    "isOther" : false, 
                    "text" : "I feel worse", 
                    "isLinkNew" : false, 
                    "isConcern" : true, 
                    "concern" : "feel worse"
                }
            ]
        }, 
        {
            "title" : "Increasing peace & acceptance - color", 
            "description" : "As you think of this experience you just transformed now:\n\n*${s3}*\n\nTry making it B&W/grayscale, and decrease the colorfulness, and notice how much it increases the peace and acceptance", 
            "type" : "radio", 
            "inputPlaceholder" : "", 
            "answers" : [
                {
                    "isOther" : false, 
                    "text" : "I feel MUCH better", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : ""
                }, 
                {
                    "isOther" : false, 
                    "text" : "I feel better", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : ""
                }, 
                {
                    "isOther" : false, 
                    "text" : "I don’t feel a change in this step", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : ""
                }, 
                {
                    "isOther" : false, 
                    "text" : "I feel worse", 
                    "isLinkNew" : false, 
                    "isConcern" : true, 
                    "concern" : "feel worse"
                }
            ]
        }, 
        {
            "title" : "Increasing peace & acceptance - Fading out", 
            "description" : "Now try fading it out a bit, and notice how much increases the peace and acceptance\n\nAllow it to fade out completely, then start fading it in, so you find your sweet spot.", 
            "type" : "radio", 
            "inputPlaceholder" : "", 
            "answers" : [
                {
                    "isOther" : false, 
                    "text" : "I feel MUCH better", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : ""
                }, 
                {
                    "isOther" : false, 
                    "text" : "I feel better", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : ""
                }, 
                {
                    "isOther" : false, 
                    "text" : "I don’t feel a change in this step", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : ""
                }, 
                {
                    "isOther" : false, 
                    "text" : "I feel worse", 
                    "isLinkNew" : false, 
                    "isConcern" : true, 
                    "concern" : "feel worse"
                }
            ]
        }, 
        {
            "title" : "Increasing peace & acceptance - Transparency", 
            "description" : "Now try fading it out a bit, and notice how much it increases the peace and acceptance\n\nAllow it to fade out completely, then start fading it in, so you find your sweet spot.", 
            "type" : "radio", 
            "inputPlaceholder" : "", 
            "answers" : [
                {
                    "isOther" : false, 
                    "text" : "I feel MUCH better", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : ""
                }, 
                {
                    "isOther" : false, 
                    "text" : "I feel better", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : ""
                }, 
                {
                    "isOther" : false, 
                    "text" : "I don’t feel a change in this step", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : ""
                }, 
                {
                    "isOther" : false, 
                    "text" : "I feel worse", 
                    "isLinkNew" : false, 
                    "isConcern" : true, 
                    "concern" : "feel worse"
                }
            ]
        }, 
        {
            "title" : "Increasing peace & acceptance - Zoom out", 
            "description" : "Next try “zooming out” the experience. The image itself would still be at the same plane, and the same distance from you, but the content of the images would zoom out.\n\nIt sometimes helps to think of a camera or taking a photo with your smartphone. You can zoom out the camera, so the screen is still in the same distance from you, but the image on the screen is zoomed out.", 
            "type" : "radio", 
            "inputPlaceholder" : "", 
            "answers" : [
                {
                    "isOther" : false, 
                    "text" : "I feel MUCH better", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : ""
                }, 
                {
                    "isOther" : false, 
                    "text" : "I feel better", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : ""
                }, 
                {
                    "isOther" : false, 
                    "text" : "I don’t feel a change in this step", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : ""
                }, 
                {
                    "isOther" : false, 
                    "text" : "I feel worse", 
                    "isLinkNew" : false, 
                    "isConcern" : true, 
                    "concern" : "feel worse"
                }
            ]
        }, 
        {
            "title" : "Increasing peace & acceptance - Distance", 
            "description" : "Next allow it to get further into the distance, to a point you still see it but much less, and notice how much it increases the peace and acceptance\n\nAllow it to get waaaaaay far into the distance, then start pulling it back a bit closer, so you find your sweet spot.", 
            "type" : "radio", 
            "inputPlaceholder" : "", 
            "answers" : [
                {
                    "isOther" : false, 
                    "text" : "I feel MUCH better", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : ""
                }, 
                {
                    "isOther" : false, 
                    "text" : "I feel better", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : ""
                }, 
                {
                    "isOther" : false, 
                    "text" : "I don’t feel a change in this step", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : ""
                }, 
                {
                    "isOther" : false, 
                    "text" : "I feel worse", 
                    "isLinkNew" : false, 
                    "isConcern" : true, 
                    "concern" : "feel worse"
                }
            ]
        }, 
        {
            "title" : "Increasing peace & acceptance - Still & flat", 
            "description" : "If it's not already a still flat image, make it still and flat, and notice how much it increases the peace and acceptance", 
            "type" : "radio", 
            "inputPlaceholder" : "", 
            "answers" : [
                {
                    "isOther" : false, 
                    "text" : "I feel MUCH better", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : ""
                }, 
                {
                    "isOther" : false, 
                    "text" : "I feel better", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : ""
                }, 
                {
                    "isOther" : false, 
                    "text" : "I don’t feel a change in this step", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : ""
                }, 
                {
                    "isOther" : false, 
                    "text" : "I feel worse", 
                    "isLinkNew" : false, 
                    "isConcern" : true, 
                    "concern" : "feel worse"
                }
            ]
        }, 
        {
            "title" : "Increasing peace & acceptance - Frame", 
            "description" : "Now how about putting a frame around that pic?\n\nTry different frames, see if anything works for you", 
            "type" : "radio", 
            "inputPlaceholder" : "", 
            "answers" : [
                {
                    "isOther" : false, 
                    "text" : "I feel MUCH better", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : ""
                }, 
                {
                    "isOther" : false, 
                    "text" : "I feel better", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : ""
                }, 
                {
                    "isOther" : false, 
                    "text" : "I don’t feel a change in this step", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : ""
                }, 
                {
                    "isOther" : false, 
                    "text" : "I feel worse", 
                    "isLinkNew" : false, 
                    "isConcern" : true, 
                    "concern" : "feel worse"
                }
            ]
        }, 
        {
            "title" : "Increasing peace & acceptance - Lamination & glass", 
            "description" : "Next experiment with different lamination and glass over the image, and notice how much it increases the peace and acceptance", 
            "type" : "radio", 
            "inputPlaceholder" : "", 
            "answers" : [
                {
                    "isOther" : false, 
                    "text" : "I feel MUCH better", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : ""
                }, 
                {
                    "isOther" : false, 
                    "text" : "I feel better", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : ""
                }, 
                {
                    "isOther" : false, 
                    "text" : "I don’t feel a change in this step", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : ""
                }, 
                {
                    "isOther" : false, 
                    "text" : "I feel worse", 
                    "isLinkNew" : false, 
                    "isConcern" : true, 
                    "concern" : "feel worse"
                }
            ]
        }, 
        {
            "title" : "Increasing peace & acceptance - Muting", 
            "description" : "If there's sound or voices that goes with the image, try muting it and notice if you prefer it that way", 
            "type" : "radio", 
            "inputPlaceholder" : "", 
            "answers" : [
                {
                    "isOther" : false, 
                    "text" : "I feel MUCH better", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : ""
                }, 
                {
                    "isOther" : false, 
                    "text" : "I feel better", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : ""
                }, 
                {
                    "isOther" : false, 
                    "text" : "I don’t feel a change in this step", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : ""
                }, 
                {
                    "isOther" : false, 
                    "text" : "I feel worse", 
                    "isLinkNew" : false, 
                    "isConcern" : true, 
                    "concern" : "feel worse"
                }
            ]
        }, 
        {
            "title" : "Increasing peace & acceptance - Tactile", 
            "description" : "If there's a sense of touch to the image, or any other tactile sensation, remove it and notice if you prefer it that way", 
            "type" : "radio", 
            "inputPlaceholder" : "", 
            "answers" : [
                {
                    "isOther" : false, 
                    "text" : "I feel MUCH better", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : ""
                }, 
                {
                    "isOther" : false, 
                    "text" : "I feel better", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : ""
                }, 
                {
                    "isOther" : false, 
                    "text" : "I don’t feel a change in this step", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : ""
                }, 
                {
                    "isOther" : false, 
                    "text" : "I feel worse", 
                    "isLinkNew" : false, 
                    "isConcern" : true, 
                    "concern" : "feel worse"
                }
            ]
        }, 
        {
            "title" : "Increasing peace & acceptance - Word, date, album", 
            "description" : "Now some people found it appropriate to add a word(s) to the image, or a date. It could be on the image itself somewhere, above it, to the side or below.\n\nSome people also like to put the image in a photo album in their mind.\n\nThe words can be written in an artistic way, with decorations (gold is common). If this doesn't make sense to you or doesn't appeal to you, skip it. If you are not sure, the best way to find out is to experiment.", 
            "type" : "radio", 
            "inputPlaceholder" : "", 
            "answers" : [
                {
                    "isOther" : false, 
                    "text" : "I feel MUCH better", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : ""
                }, 
                {
                    "isOther" : false, 
                    "text" : "I feel better", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : ""
                }, 
                {
                    "isOther" : false, 
                    "text" : "I don’t feel a change in this step", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : ""
                }, 
                {
                    "isOther" : false, 
                    "text" : "I feel worse", 
                    "isLinkNew" : false, 
                    "isConcern" : true, 
                    "concern" : "feel worse"
                }
            ]
        }, 
        {
            "title" : "Increasing peace & acceptance - Additional changes", 
            "description" : "Now take a moment to play the “director” role, notice if there are any further changes you'd like to make. Something you'd like to add or embellish in anyway.\n\nWe can always revise this later of course, and there's no \"right or wrong\" here.", 
            "type" : "radio", 
            "inputPlaceholder" : "", 
            "answers" : [
                {
                    "isOther" : false, 
                    "text" : "Nothing comes to mind at the moment", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : "", 
                    "hasGoToStep" : true, 
                    "goToStepByNum" : "54"
                }, 
                {
                    "isOther" : false, 
                    "text" : "Hmm … There’s something I want to try", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : ""
                }, 
                {
                    "isOther" : false, 
                    "text" : "Oh yeah I have something!", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : ""
                }
            ]
        }, 
        {
            "title" : "Increasing peace & acceptance - Additional changes", 
            "description" : "***${echo}***\n\nGreat, what is it?\n\nYou don’t have to share, but … If something works for you, it might help many other parents as well, so anything you share is VERY appreciated. If you want to keep it to yourself, just write something for reference.", 
            "type" : "long", 
            "inputPlaceholder" : "", 
            "answers" : [

            ]
        }, 
        {
            "title" : "Increasing peace & acceptance - Additional changes", 
            "description" : "***${echo}***\n\nNow notice what happens as you allow that change to take place now.", 
            "type" : "radio", 
            "inputPlaceholder" : "", 
            "answers" : [
                {
                    "isOther" : false, 
                    "text" : "I feel MUCH better", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : ""
                }, 
                {
                    "isOther" : false, 
                    "text" : "I feel better", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : ""
                }, 
                {
                    "isOther" : false, 
                    "text" : "I don’t feel a change in this step", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : ""
                }, 
                {
                    "isOther" : false, 
                    "text" : "I feel worse", 
                    "isLinkNew" : false, 
                    "isConcern" : true, 
                    "concern" : "feel worse"
                }
            ]
        }, 
        {
            "title" : "Learnings & insights", 
            "description" : "Looking back at the experience you just transformed:\n\n*${s3}*\n\nAre there any learnings you can pick up from it now? Any insights? Spontaneous realizations?\n\nSometimes our emotions get in the way of our logic & thinking, and it’s easier to learn from a situation once it’s softer and more resolved. So examine that experience again now:\n\n*${s3}*\n\nAnd get a sense if there’s some value or learnings you can adopt to your future behavior.", 
            "type" : "radio", 
            "inputPlaceholder" : "", 
            "answers" : [
                {
                    "isOther" : false, 
                    "text" : "I’ve already learned everything I could from it", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : ""
                }, 
                {
                    "isOther" : false, 
                    "text" : "Had some spontaneous realizations!", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : ""
                }, 
                {
                    "isOther" : false, 
                    "text" : "Oh yes, there are some things I could adopt", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : "", 
                    "hasGoToStep" : true, 
                    "goToStepByNum" : "56"
                }
            ]
        }, 
        {
            "title" : "Learnings & insights", 
            "description" : "***“Had some spontaneous realizations!”***\n\nOh yes, I LOVE those! :)\n\nI would love to hear them, tho your privacy comes before my whims, so if you want to keep them to yourself, just write titles for reference.", 
            "type" : "long", 
            "inputPlaceholder" : "", 
            "answers" : [

            ], 
            "hasGoToStep" : true, 
            "goToStepByNum" : "57"
        }, 
        {
            "title" : "Learnings & insights", 
            "description" : "***“Oh yes, there are some things I could adopt”***\n\nGreat, what are those?\n\nI would love to hear them, tho your privacy comes before my whims, so if you want to keep them to yourself, just write titles for reference.", 
            "type" : "long", 
            "inputPlaceholder" : "", 
            "answers" : [

            ]
        }, 
        {
            "title" : "Congruence Check", 
            "description" : "Looking back at the experience you just transformed:\n\n*${s3}*\n\nDo you have any objections being this way, experiencing it like that?", 
            "type" : "radio", 
            "inputPlaceholder" : "", 
            "answers" : [
                {
                    "isOther" : false, 
                    "text" : "Objections? Of course not!", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : ""
                }, 
                {
                    "isOther" : false, 
                    "text" : "No objections", 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : ""
                }, 
                {
                    "isOther" : false, 
                    "text" : "Yes I have an objection", 
                    "isLinkNew" : false, 
                    "isConcern" : true, 
                    "concern" : ""
                }
            ]
        }, 
        {
            "title" : "", 
            "description" : "", 
            "type" : "radio", 
            "inputPlaceholder" : "", 
            "answers" : [
                {
                    "isOther" : false, 
                    "isLinkNew" : false, 
                    "isConcern" : false, 
                    "concern" : ""
                }
            ]
        }
    ], 
    "credits" : "", 
    "description" : "", 
    "title" : "Resolving Feelings", 
    "isDraft" : false, 
    "isSavoring" : false, 
    "hasReview" : false
}
