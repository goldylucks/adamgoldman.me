// @flow

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import s from './Reviews.css';
import FbPageBox from '../../components/FbPageBox';
import Markdown from '../../components/Markdown';

const ReviewPage = () => (
  <div className="main-layout">
    <h1 className="main-title">Students Share ...</h1>
    <Markdown
      className="page-text"
      source={`

# Brain Hacking

<iframe class="${s.iframe}" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fcara.smith.7921%2Fposts%2F10155482725050619%3A0&width=500" width="500" height="373" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>

<iframe class="${s.iframe}" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fsuzy.relf%2Fposts%2F10155784647048442%3A0&width=500" width="500" height="354" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>

<iframe class="${s.iframe}" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fjulianne.barley%2Fposts%2F10154923498533379%3A0&width=500" width="500" height="335" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>

<iframe class="${s.iframe}" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fliran.galizian%2Fposts%2F10210995739867591%3A0&width=500" width="500" height="411" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>

<iframe class="${s.iframe}" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fdennis.pateo%2Fposts%2F715337218655134%3A0&width=500" width="500" height="335" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>

<iframe class="${s.iframe}" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3D446539335730222%26id%3D100011224775781%26substory_index%3D0&width=500" width="500" height="354" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>

<iframe class="${s.iframe}" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmackyading02%2Fposts%2F10209564010879361%3A0&width=500" width="500" height="392" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>

<iframe class="${s.iframe}" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fenrique.melchor.372%2Fposts%2F1987087104638617%3A0&width=500" width="500" height="373" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>

<iframe class="${s.iframe}" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fharoldetcobanez%2Fposts%2F1625535310804204%3A0&width=500" width="500" height="335" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>

<iframe class="${s.iframe}" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fhayleykirsten%2Fposts%2F1603569772989169%3A0&width=500" width="500" height="373" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>

<iframe class="${s.iframe}" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmadalenaamoya%2Fposts%2F1819899878036395%3A0&width=500" width="500" height="354" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>

<iframe class="${s.iframe}" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmor.tamir.5%2Fposts%2F10207587059394103%3A0&width=500" width="500" height="436" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>

<iframe class="${s.iframe}" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fnivmo%2Fposts%2F1545233935534069%3A0&width=500" width="500" height="392" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>

<iframe class="${s.iframe}" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FItayalta%2Fposts%2F10212330831678916%3A0&width=500" width="500" height="354" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>

<iframe class="${s.iframe}" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FOneVoys%2Fposts%2F10213062405291421%3A0&width=500" width="500" height="335" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>

<iframe class="${s.iframe}" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FLevi.Yuval%2Fposts%2F10212819345179613%3A0&width=500" width="500" height="354" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>

# Misc

<iframe class="${s.iframe}" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fkornelia.brzezinska.58%2Fposts%2F1531046000262762%3A0&width=500" width="500" height="316" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>

> *First time Math made sense* - **Winfilda Chisvo Jemwa**, accounting student

> *Was juggling under an hour, and it spread to the rest of my company* - **Kamil Rzeźnicki**, owner of [All In Mobile](https://www.allinmobile.co/)

> *Learning how to juggle was surprisingly intuitive* - **Michał Mynarski**, developer at [All In Mobile](https://www.allinmobile.co/)

# Consulting to companies

<iframe class="${s.iframe}" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fdarylcharm%2Fposts%2F10155082068855549%3A0&width=500" width="500" height="430" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>

<iframe class="${s.iframe}" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fchibee.patag%2Fposts%2F1918330311525896%3A0&width=500" width="500" height="360" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>

<iframe class="${s.iframe}" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fido.tsuk.7%2Fposts%2F314072749014094%3A0&width=500" width="500" height="411" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>

# Programming students

<iframe class="${s.iframe}" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Felanperach%2Fposts%2F10155120934953839%3A0&width=500" width="500" height="354" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>

<iframe class="${s.iframe}" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Flognip%2Fposts%2F10212247815163219%3A0&width=500" width="500" height="487" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>

<iframe class="${s.iframe}" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmjrignacio%2Fposts%2F10211044551523923%3A0&width=500" width="500" height="354" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>

<iframe class="${s.iframe}" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmepler%2Fposts%2F10156193316772166%3A0&width=500" width="500" height="335" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>
  
# Training for the faculty of Palawan State University

<iframe class="${s.iframe}" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fjennybaby.rabang%2Fposts%2F1650513311630753%3A0&width=500" width="500" height="354" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>

<iframe class="${s.iframe}" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Frextheramos%2Fposts%2F1908320749452230%3A0&width=500" width="500" height="335" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>

<iframe class="${s.iframe}" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fjesebellann.dihayco%2Fposts%2F1401832533215906%3A0&width=500" width="500" height="316" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>

<iframe class="${s.iframe}" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fbemsor%2Fposts%2F1458381417514332%3A0&width=500" width="500" height="398" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>

> *So amazing and you will learn alot...thank you for the wonderful knowledge you shared with us...* - **Divine **

`}
    />
    <FbPageBox style={{ display: 'block', textAlign: 'center' }} />
  </div>
);

export default withStyles(s)(ReviewPage);
