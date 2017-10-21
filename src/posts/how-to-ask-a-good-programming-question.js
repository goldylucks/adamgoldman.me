export default {
  title: 'How To Ask A Good Programming Question',
  tags: [],
  nick: '',
  body: `
  
You’ve probably asked me something and I’ve sent you here to help you revise your question in a clearer way.
 
Please read this doc line by line. It’s very short and concise. If you haven’t done so already, [read this short SO](https://stackoverflow.com/help/how-to-ask) post about how to ask good questions as well. If you already read it, [go over it again quickly](https://stackoverflow.com/help/how-to-ask).
 
Communication is one of the most important skills an effective developer (and any human being actually) can posses. 
 
As you learn to communicate effectively and clearly with others, your internal communication (read: "thinking") will start to improve as well in ways you might not fully comprehend yet it will surprise you as it happens, now ...
 
Whenever communicating to me (and other devs), remember these pointers:

---

###### Big picture first, little pieces last
Saying “when I click the ‘next’ arrow it jumps too much forward” doesn’t tell me much until I know what you are trying to implement is pagination. It’s better to start with:
“I’m implementing pagination in the books table”, and THEN go on to the little details, “When I click the “next” arrow…”

---

###### Be specific, state current and wanted behavior
“It jumps too much forward” could mean many things. It’s better to state EXACTLY what happens NOW, and what SHOULD happen, i.e.:
 
“Current behavior: While on page 1, clicking the next arrow fetches the data of page 3, and highlights the number 3 in the page selector.
 
Wanted behavior: While on page 1, clicking the next arrow should fetch the data of page 2, and highlight the number 2 in the page selector.”
 
This way there’s (almost) ZERO room for miscommunication, and I know exactly what the problem is and what we want to achieve.
 
(do your best to) **Include the following**:  

1. What did you research to solve the problem

2. What have you tried

3. Copy paste of the error, if any

4. Screenshot of the problem if possible, I use [nimbus](https://chrome.google.com/webstore/detail/nimbus-screenshot-screen/bpconcjcammlapcogcnnelfmaeghhagj)

5. What’s the current behavior

6. What’s the wanted behavior

7. Link to the repo when possible, or [gist](http://gist.github.com/new) with any relevant code.

8. This is programming, be specific! Mention relevant file names, line numbers, function names etc
 `,
};
