/* eslint-disable react/jsx-curly-brace-presence */

import React from 'react'

import Markdown from '../../components/Markdown'
import Testimony from '../../components/Testimony'

export default {
  title: 'Resourceful Response',
  description: 'Description here',
  html: (
    <div>
      <Markdown source={`
In contrast to people who feel the [emptiness](/loss/common-pitfalls), and stuck in [unuseful patterns](/loss/common-pitfalls), some people actually “lit up” when they talk about their loss.

They would still prefer to have the person still in their life, but they can feel their presence and appreciate the good times shared together.

Few people have done this “spontaneously”, and participants who complete the [protocol](/loss/protocol) report a similar experience:
`}
      />
      <Testimony
        text="Up until an hour ago I felt like I was having a heart attack. Now I feel reunited with Larry, and remember all the good vacations we had, and how good he is to me"
        name="Catherine"
        nameMeta="Husband diad from heart attack"
      />
      <Testimony
        imgSrc="https://scontent.fmad3-4.fna.fbcdn.net/v/t1.0-1/p50x50/22852018_10155160350728379_1394566735044658139_n.jpg?oh=57414f3649e2f9a526776e8a6be6d521&oe=5AC94334"
        text="When I think of them now, I always have these good feelings with it 🙂"
        name="Julianne Barley"
        nameMeta="Lost both parents at early age"
      />

      <Markdown source={`
If you still don't have a resourceful response to your loss, [sign up to participate](/loss/participate) in the process so we can [get started](/loss/participate).

---

> When we asked them how they thought of the lost person, we found that they literally thought of them as if they were still present, and this gave them access to all the good feelings that they had during the actual relationship.
>
> There are a variety of ways to do this. Often people will simply think of the lost person as if s/he is nearby, life-size and three-dimensional, moving and breathing, and able to offer both verbal conversation and nonverbal response, as if s/he were physically alive and present in the real world. Some represent the lost person as if s/he were physically present in their heart, or chest area, or present in their whole body in some way.
>
> One person felt the lost person as if he were a comfortable close-fitting sheath embracing her whole body. Others had different ways of representing the lost person, but all of them resulted in a strong sense of the person being fully present with them in the moment, and easy to contact.
>
> <small>Excerpt from Steve and Connirae's [grief article](http://steveandreas.com/Articles/grief02.html)</small>
`}
      />
    </div>
  ),
}
