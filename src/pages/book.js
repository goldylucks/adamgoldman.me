import { MESSENGER_LINK_WELCOME } from '../constants'

const description = 'Work on any past memories you want to clear, current problems you still have, and building an ever brightening future'

export default {
  title: 'Book a Session',
  nick: 'let\'s do this',
  description,
  tags: [],
  body: `
<p class="lead">${description}</p>

My preferred way of communicating is [Messenger](${MESSENGER_LINK_WELCOME}), but you can also [email](EMAIL) or fill the form below.

<form class="form" action="http://formspree.io/goldy@adamgoldman.me" method="POST" style="margin-bottom: 60px">
  <div class="form-group">
    <input class="form-control" name="contact-email" placeholder="Step 1: Place your email here" required />
  </div>
  <div class="form-group">
    <select class="form-control" name="contact-topic">
      <option value="Placeholder" selected>Step 2: Choose Topic</option>
      <option value="habit">I want to stop a bad habit (smoking, nail biting etc)</option>
      <option value="multiple">I want to resolve multiple things</option>
      <option value="trauma">I want to clear PTSD or a trauma/phobia</option>
      <option value="more life">I want to get more "life" in my life</option>
      <option value="Other Topic">Other</option>
    </select>
  </div>
  <div class="form-group">
    <textarea class="form-control" name="contact-freetext" placeholder="Step 3: Tell me anything that might be relevant"></textarea>
  </div>
  <button class="btn btn-primary btn-block">Step 4: Let's do this!</button>
</form>

Talk soon,
`,
}
