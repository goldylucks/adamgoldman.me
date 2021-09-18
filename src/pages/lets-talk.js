import { MESSENGER_LINK_WELCOME } from '../constants'

export default {
  title: "Let's talk?",
  nick: "friend u've yet to meet",
  description: "Choose how you'd like to talk to me online",
  tags: [],
  body: `
What can I do you for my friend?

[Iv8VWQlUq90](YtEmbedd)

[Messege](${MESSENGER_LINK_WELCOME}), [email](EMAIL), or contact me through the form below.

<form action="http://formspree.io/goldy@adamgoldman.me" method="POST" style="margin-bottom: 60px;"> 
  <div class="form-group">
    <input class="form-control" name="contact-email" placeholder="Step 1: Place your email here" required />
  </div>
  <div class="form-group">
    <select class="form-control" name="contact-topic">
      <option value="contact-topic-placeholder" selected>Step 2: Choose Topic</option>
      <option value="contact-topic-talk">Book you for a talk</option>
      <option value="contact-topic-workshop">Book you for a workshop</option>
      <option value="contact-topic-personal">Improve my personal life</option>
      <option value="contact-topic-professional">Improve my professional life</option>
      <option value="contact-topic-cool">I just think your awesome</option>
      <option value="contact-topic-other">Other</option>
    </select>
  </div>
  <div class="form-group">
    <textarea class="form-control" name="contact-freetext" placeholder="Step 3: Tell me what's on your mind ..."></textarea>
  </div>
  <button class="btn btn-primary">Step 4: Let's do this!</button>
</form>

Talk soon,`,
  ps: `**PS**. If your not ready to contact me yet, go through some [results](/transcripts) and [feedbacks](FB_REVIEWS) first. I'm not going anywhere.
`,
}
