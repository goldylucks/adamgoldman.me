import { cloudImg } from '../../utils'
import { MESSENGER_LINK_SAVORING_CONTACT } from '../../constants'

export default {
  title: "I don't charge I accept",
  nick: "Give, then ask, don't take",
  description: 'Value first pricing model 💖',
  tags: [],
  body: `
**All my content is**, and always will be, **100% accessible and open sourced**. FOREVER.

![Boromir Charges money](${cloudImg('adamgoldman.me/boromir-charge.jpg')})

Once you get immense value from our time together, **you decide how much you'd love to pay**. I don't want to hold you hostage ahead of time.

<div>
<h1 class="text-center italic">But Adam, aren't you afraid people will take advantage of you?</h1>
<br />
</div>

![Doantion Miracle](${cloudImg('adamgoldman.me/kid-pay.jpg')})

First of all, I ain't afraid of anything ;)

So far no one has "taken advantage". **Some pay less, some pay more**, some really can't spare a dime so they work more passionately to refer other parents.

![Yoda "pay less, pay more, feel better, you will"](${cloudImg('adamgoldman.me/yoda-pay.jpg')})

---

<h1 style="text-align: center; font-style: italic; margin: 40px 0;">So how do I pay?</h1>

#### Card
The easiest way most people choose. Click on the select field below, choose the amount you'd be happy to pay, and click the "buy now" button. Oh and ... Get ready for a dose of good karma ;)
<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank" style="margin-bottom: 40px;">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="hosted_button_id" value="L73XBAVRMGQ6S">
<div class="form-group">
<select name="os0" class="form-control">
<option value="7">$7 USD</option>
<option value="9">$9 USD</option>
<option value="23">$23 USD</option>
<option value="30">$30 USD</option>
<option selected value="70">$70 USD</option>
<option value="140">$140 USD</option>
<option value="350">$350 USD</option>
<option value="600">$600 USD</option>
<option value="970">$970 USD</option>
</select>
</div>
<input type="hidden" name="currency_code" value="USD">
<input type="image" style="width: auto;" src="https://www.paypalobjects.com/en_US/IL/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
<img style="display: none;" alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>

#### PayPal
Peeps who got a PayPal usually use this option, since it's so easy and convenient. [Click here](https://www.paypal.me/goldylucks/0usd)

#### Bitcoin & Cryptocurrency
<div>
<strong>BTC</strong> <br class="d-md-none" />  <small>3BjHBihAL3KpQsiJ6qup5gHiEnTtYbBQFK</small><br />
<strong>BCH</strong> <br class="d-md-none" /> <small>1JjF3o1jj3cdYJw78hYXCUnE1s5uUrQkcL</small><br />
<strong>BTG</strong> <br class="d-md-none" /> <small>ATLVA6eG7TAt9p2ubL4emRLeid6f37H1Fe</small><br />
<strong>DASH</strong> <br class="d-md-none" /> <small>XyqnPYuAeLwzLdx3BDBG5tAgn7GWpqY5uS</small><br />
<strong>LTC</strong> <br class="d-md-none" /> <small>MDRZNuJGi9eqAGRdUMuqjCDwqj49eVTdJF</small><br />
<strong>ZEC</strong> <br class="d-md-none" /> <small>t1dG5TgkC2CeRrPimYgtVdmyoE3uHR2S1rG</small>
</div>

---

<h1 style="text-align: center; font-style: italic; margin: 40px 0;">What if I don't have even $23 to spare?</h1>

That's perfectly fine, there are many ways you can contribute!

[Share](FB_SHARE) this page, [leave a review](https://www.facebook.com/adamgoldman.me/reviews/) (and like!), tell your friends, and [let me know](${MESSENGER_LINK_SAVORING_CONTACT}) what skills do you have that might be useful. There are many areas I could use help in order to reach more people and refine everything that I do. I appreciate every act of kindness! :)
`,
}
