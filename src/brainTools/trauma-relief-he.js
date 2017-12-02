import React from 'react'

import Link from '../components/Link'
import Testimony from '../components/Testimony'
import FbShareLink from '../components/FbShareLink'
import he from '../he'

export const tags = ['טראומה']
export const title = 'שחרור מטראומה'
export const nick = 'מלחמה ברוורס זה שלום'
// eslint-disable-next-line prettier/prettier
export const description = 'איך להפוך חויה שלילית, ריבים, ויכוחים וזכרונות שעדיין רעים למשאב עוצמתי'

export const isRtl = true

export const credits = 'בניתי את ה[כלי](/tools/) הזה על בסיס תהליך הטראומה של באנדלר, פרטים נוספים בספר [Heart of the Mind](http://amzn.to/2xFE4yX) פרק 7'

export const initialState = {
  gender: '',
  inputName: '',
  inputAgeInMemory: '',
  inputGoodFeelingDescription: '',
}

export const steps = [
  {
    title: 'מגדר',
    preDescriptionHtml: (
      <div>
        <Testimony
          isRtl
          imgSrc="https://scontent.fmad3-4.fna.fbcdn.net/v/t1.0-1/c0.0.50.50/p50x50/21432798_1596784173712528_8021548721668961597_n.jpg?oh=5adc2e0e5eeebb9c76f9dba2b2d58924&oe=5AC7A069"
          name="דורה טליאס, מאובחנת עם סרטן השד"
          text="מדהים!!!
כל כך פשוט ואפקטיבי.. תוך חצי שעה בערך מזכרון עצוב.. מאוכזב.. כועס.. הפך להיות לזכרון מצחיק ללא שום חשיבות ומשמעות..תנו לעצמכם את המתנה הזו.."
        />
        <Testimony
          isRtl
          imgSrc="https://scontent.fmad3-4.fna.fbcdn.net/v/t1.0-1/p50x50/23032652_1966225826726443_6316139551781794369_n.jpg?oh=07cdaa0939e6d3768164e5a630b1e273&oe=5A93A2C6"
          text="יותר אפקטיבי מ8 שנים טיפול פסיכולוגי"
          name="רותם אלישע, חוותה אונס במשך כמה שנים"
        />
      </div>),
    description: () => `
אהלן! אדם כאן, אני ופרצופי איתך בכל שלב, ותמיד [כאן](FB_MESSAGE) לשאלות :)

עדיף לדבר אליך בלשון ... ?
`,
    answers: [
      { text: 'דבר אלי בלשון זכר', onClickThat: that => that.setState({ gender: 'male' }, that.next) },
      { text: 'דבר אלי בלשון נקבה', onClickThat: that => that.setState({ gender: 'female' }, that.next) },
    ],
  },
  {
    title: 'רקע',
    description: ({ gender }) => `
לכולנו יש זכרונות מהעבר שעדיין משפיעים עלינו בצורה לא מועילה.

חויות שקופצות לראש ללא הזמנה ולמרות ש${he.ata(gender)} ${he.yodea(gender)} שכלית שזה נגמר, זה עדיין משפיע עליך.

כמה דוגמאות נפוצות:

- זכרונות רעים מהילדות
- ויכוחים ש${he.ata(gender)} עוד ${he.meritz(gender)} בראש
- תאונות וסצנות גרפיות / קשות לצפייה
- ריבים וצעקות

בעוד רגע אני אוביל אותך בתהליך קצר, אבל קודם ${he.ata(gender)} בטח תוהה ...

`,
    answers: [
      { text: 'איך זה הולך לעבוד אדם?' },
    ],
  },

  {
    title: 'איך זה הולך לעבוד',
    description: ({ gender }) => `
אז הנה איך שזה הולך לעבוד, אני חוקר התנהגות אנושית, אורגניזמים, איך חברה מעצבת התנהגות אנושית, תקשורת, ומכונת הלמידה הגדולה מכולן, המח האנושי, אני אתן לך כמה דברים לנסות.

מה שעובד לך, ${he.mashir(gender)}, ומה שלא, ${he.sam(gender)} במגירה

"דברים שניסיתי ועדיין לא עבדו לי"

נשמע טוב?

`,
    answers: [
      { text: 'טוב בהחלט, בוא נמשיך!' },
      { text: 'מעולה. איך ממשיכים?' },
    ],
  },

  {
    title: 'שם',
    description: gender => `
מעולה, עכשיו לפני ש${he.ata(gender)} ${he.bojer(gender)} את הזכרון הראשון לשחרר, ${he.tagid(gender)}, מה השם שלך?
`,
    input: {
      placeholder: 'קוראים לי ...',
      id: 'Name',
    },
  },

  {
    title: 'בחירת זכרון מהעבר לשחרר',
    description: ({ inputName, gender }) => `
אוקי ${inputName},
${he.tajshov(gender)} על זכרון שהיה לך בעבר, שקופץ לך לראש לפעמים, ועדיין גורם לך להרגיש רע, או באופן ש${he.ata(gender)} לא רוצה, ו${he.tomar(gender)} לי ...

מה היה הגיל של ${inputName} בזכרון הזה?
`,
    input: {
      placeholder: ({ inputName }) => `בזכרון הזה הגיל של ${inputName} היה ...`,
      id: 'AgeInMemory',
    },
  },

  {
    title: 'לפני שמשהו קרה, בטוח לחלוטין',
    description: ({ gender, inputName, inputAgeInMemory }) => `
עכשיו בעוד רגע אני אבקש ממך להקפיא את הזכרון ברגע שלפני שמשהו קרה, ככה ש${he.ata(gender)} רואה את ${inputName} ${he.ben(gender)} ${inputAgeInMemory} בתמונה קפואה, ${he.batuaj(gender)} לחלוטין כמו שאני הייתי לפני התאונה שלי:

לאחי הייתה תאונה לפני הרבה זמן על האופנוע, בזמן שעבדך הנאמן כאן היה רכוב מאחור.

(${he.ata(gender)}  ${he.yajol(gender)} לדמיין כמה אבא העריך את הבן שלו, אח שלי, מחזיק את האופנוע ...)

כמה רגעים לפני התאונה, לא היה שום סימן לסכנה, וכולנו בטוחים לחלוטין.

אז אני רוצה ש${he.tire(gender)} את ${inputName} ${he.ben(gender)} ${inputAgeInMemory} בתמונה קפואה, שחור לבן, ${he.batuaj(gender)} לחלוטין, במסך קטן מושתק רחוק רחוק, ו${he.taase(gender)} את התמונה קצת לא בפוקוס וברזולוציה נמוכה.

קצת כמו ש${he.ata(gender)}  ${he.bojer(gender)} את הרזולוציה הכי נמוכה ביוטיוב,  ${he.makir(gender)}?

${he.taase(gender)} את זה עכשיו, ותגיד לי כשסיימת.
`,
    answers: [
      { text: 'סיימתי, בוא נמשיך' },
    ],
  },

  {
    title: 'אחרי שהכל נגמר, בטוח לחלוטין',
    description: ({ gender, inputName, inputAgeInMemory }) => `
מעולה, עכשיו בעוד רגע אני אבקש ממך לראות את ${inputName} ${he.ben(gender)} ${inputAgeInMemory} באותה תמונה קפואה, שחור לבן, במסך הקטן הרחוק רחוק, ו${he.tarits(gender)} את הזכרון קדימה הכי מהר ש${he.ata(gender)}  ${he.yajol(gender)}, ו${he.takpi(gender)} את התמונה בסוף הזכרון, אחרי שהכל נגמר" ו${he.ata(gender)} רואה את ${inputName} ${he.ben(gender)} ${inputAgeInMemory} שם ${he.batuaj(gender)} לחלוטין.

כמה שניות לפני התאונה שלנו, אחי ואני נסענו בכיף שלנו על האופנוע, סצנה די נייטרלית סך הכל.

אז הנהג חתך אותנו, היה את הרגע של הפגיעה, כמה רגעים של בלבול וסטרס, ואז ירדנו הצידה להחליף פרטים עם הנהג.

הרגל שלי לא החלימה 100% עדיין, אבל התאונה עצמה נגמרה, וכולנו בטוחים שוב.

אז אני רוצה ש${he.tarits(gender)} קדימה את זכרון העבר למקום דומה, בו${he.ata(gender)}  ${he.yajol(gender)} לראות את ${inputName} ${he.ben(gender)} ${inputAgeInMemory} אחרי כל מה שקרה, ${he.batuaj(gender)} לחלוטין, ברגע הנייטרלי או החיובי הבא.

עכשיו, ${he.ata(gender)}  ${he.makir(gender)} את הסאונד של סרט מצוייר ש${he.ata(gender)}  ${he.meritz(gender)} אותו קדימה?
`,
    answers: ({ gender }) => [
      { text: 'להריץ קדימה סרט מצוייר, בטח! צליל משעשע' },
      { text: `כן אני  ${he.makir(gender)}, בוא נתקדם` },
    ],
  },

  {
    title: 'קדימה כמו סרט מצוייר',
    description: ({ gender, inputName, inputAgeInMemory }) => `
מעולה, אז הנה מה שאני רוצה ש${he.taase(gender)}:

1. ${he.tire(gender)} את ${inputName} ${he.ben(gender)} ${inputAgeInMemory}, במסך קטן רחוק רחוק, קפוא בזמן, בהתחלת הזכרון, לפני שמשהו קרה, ${he.batuaj(gender)} לחלוטין
2.  ${he.taase(gender)} את התמונה שחור לבן, קצת לא בפוקוס, ו${he.torid(gender)} את הרזולוציה
3. תשתיק את הקול
4.  ${he.tarits(gender)} קדימה את הסרט הכי מהר ש${he.ata(gender)}  ${he.yajol(gender)} כל הדרך עד אחרי שהכל נגמר, ו${he.ata(gender)} רואה את ${inputName} ${he.ben(gender)} ${inputAgeInMemory} ברגע הנייטרלי או החיובי הבא
5. כמו סרט מצוייר,  ${he.tishma(gender)} את הכל רץ קדימה מאוד מהר

${he.taase(gender)} את זה עכשיו, ו${he.teiadea(gender)} אותי כש${he.ata(gender)}  ${he.mesayem(gender)}

`,
    answers: ({ gender, inputName, inputAgeInMemory }) => [
      { text: 'סיימתי, בוא נמשיך' },
      { text: `אוקיי. הרצתי את הזכרון קדימה, ואני רואה את ${inputName} ${he.ben(gender)} ${inputAgeInMemory} ${he.batuaj(gender)} לחלוטין אחרי הסוף` },
    ],
  },

  {
    title: 'מלחמה ברוורס זה ...',
    description: ({ gender, inputName, inputAgeInMemory }) => `
עכשיו, בזמן ש${he.ata(gender)} רואה את ${inputName} ${he.ben(gender)} ${inputAgeInMemory} בתמונה הקטנה רחוק רחוק, ${he.batuaj(gender)} לחלוטין, אחרי הסוף, אי פעם חשבת כבר למה הופך סרט מלחמה, כש${he.ata(gender)}  ${he.meritz(gender)} אותו ברוורס?

[diihWjg0lAM](YtEmbedd)

שמעתי את זה באיזה יום בסמינר, וזה עשה לי הרבה שכל.

הלהבות וההרס יארזו את עצמם לתוך פצצות, שיחזרו למטוס, שיחזור לבסיס ויפורק לגורמים.

כל הנשקים והתחמושת יישלחו חזרה למפעלים להתפרק חזרה לחומרי גלם.

חיילים יחזרו לבתיהם, ינשקו את בת זוגם ויחבקו את אהוביהם.

אי פעם חשבת על זה?

`,
    answers: [
      { text: 'לא חשבתי על זה עדיין, ת\'כלס זה מעניין ...' },
      { text: 'חשבתי על זה, אכן' },
    ],
  },

  {
    title: 'רוורס כמו סרט מצוייר',
    description: ({ gender, inputAgeInMemory }) => `
עכשיו בעוד רגע אני אבקש ממך לעשות משהו מעניין, ואל  ${he.taase(gender)} את זה עד שאני אומר לך, אוקיי?

אני רוצה ש${he.tikanes(gender)} אל תוך סוף הזכרון, אל תוך הגוף של עצמך ${he.ben(gender)}  ה${inputAgeInMemory}, ${he.batuaj(gender)} לחלוטין, ככה ש${he.ata(gender)} רואה את מה שראית באותו זמן,  ${he.shomea(gender)} מה ששמעת ו...

${he.tarits(gender)} את הזכרון ברוורס, דרך העיניים שלך, הכי מהר ש${he.ata(gender)}  ${he.yajol(gender)}, כל הדרך עד ללפני ההתחלה, איפה ש${he.ata(gender)} ${he.batuaj(gender)} לחלוטין שוב.

אז ${he.ata(gender)} ${he.shomea(gender)} את כולם מדברים אחורה, רואה את הכל ואת כולם נעים אחורה ברוורס, הכי מהר ש${he.ata(gender)}  ${he.yajol(gender)}.

(ניחשת טוב, כמו סרט מצוייר)

נעשה את זה ככה פעם אחת, ואז נוסיף כמה קישוטים לבחירתך :)

אז הנה הצעדים שוב:

1.  ${he.tikanes(gender)} אל תוך סוף הזכרון, לתוך הגוף של עצמך ${he.ben(gender)} ${inputAgeInMemory}, ${he.batuaj(gender)} לחלוטין
2. ${he.tire(gender)} את מה שראית באותו זמן,  ${he.tishma(gender)} את מה ששמעת
3.  ${he.tarits(gender)} את הזכרון ברוורס הכי מהר ש${he.ata(gender)}  ${he.yajol(gender)},  ${he.tishma(gender)} את כולם מדברים אחורה, ${he.tire(gender)} את הכל ואת כולם נעים אחורה ברוורס, הכי מהר ש${he.ata(gender)}  ${he.yajol(gender)}, כמו סרט מצוייר, כל הדרך עד לפני ההתחלה, איפה ש${he.ata(gender)} ${he.batuaj(gender)} לחלוטין שוב

${he.taatsom(gender)} את העיניים ו${he.taase(gender)} את זה עכשיו,  ${he.teiadea(gender)} אותי שסיימת

`,
    answers: [
      { text: 'סיימתי!' },
      { text: 'הרצתי את הזכרון ברוורס מבפנים דרך העיניים שלי' },
      { text: 'עשיתי! לעזאזל אדם, זה הזוי!' },
    ],
  },

  {
    title: 'רוורס כמו סרט מצוייר + סאונד',
    description: ({ gender, inputAgeInMemory }) => `
חזרת?

מעולה!

עכשיו נעשה את זה אפילו יותר טוב.

אני רוצה ש${he.taase(gender)} את אותו הדבר, אבל הפעם ${he.tosif(gender)} נעימה נחמדה או צליל של מהו מצחיק בזמן ש${he.ata(gender)}  ${he.meritz(gender)} את הזכרון ברוורס.

לרוב האנשים שפגשתי נעימת קרקס עובדת כמו קסם:

[1D5Sa2Yq-2g](YtEmbedd)

${he.ata(gender)}  ${he.yajol(gender)} להשתמש בכל דבר ש${he.ata(gender)} רוצה שגורם לך לצחוק, להרגיש גיחוך, עוצמתי, מה ש${he.ata(gender)} ${he.maadif(gender)}.

יש כאלה ש${he.ohavim(gender)} לשמוע קומיקאי מסויים. ${he.ajerim(gender)} ${he.margishim(gender)} עוצמה פנימית כש${he.shomim(gender)} שיר כלשהו.

וכמובן אפשר תמיד פשוט לצחוק :)

[yLmd0100T9g](YtEmbedd)

${he.tivjar(gender)} את מה שגורם לך להרגיש הכי טוב עכשיו ו${he.taase(gender)} את זה שוב ככה:


1.  ${he.tikanes(gender)} אל תוך סוף הזכרון, לתוך הגוף של עצמך ${he.ben(gender)} ${inputAgeInMemory}, ${he.batuaj(gender)} לחלוטין
2. ${he.tire(gender)} את מה שראית באותו זמן,  ${he.tishma(gender)} את מה ששמעת
3.  ${he.tatjil(gender)} את מוזיקת הקרקס (או צליל/שיר אחר שבחרת)
4.  ${he.tarits(gender)} את הזכרון ברוורס הכי מהר ש${he.ata(gender)}  ${he.yajol(gender)},  ${he.tishma(gender)} את כולם מדברים אחורה, ${he.tire(gender)} את הכל ואת כולם נעים אחורה ברוורס, הכי מהר ש${he.ata(gender)}  ${he.yajol(gender)}, כמו סרט מצוייר, כל הדרך עד לפני ההתחלה, איפה ש${he.ata(gender)} ${he.batuaj(gender)} לחלוטין שוב

${he.taatsom(gender)} את העיניים ו${he.taase(gender)} את זה עכשיו, ו${he.teiadea(gender)} אותי כשסיימת, ו${he.ata(gender)} בתחילת הזכרון שוב, ו${he.ata(gender)} ${he.batuaj(gender)} לחלוטין

`,
    answers: [
      { text: 'סיימתי!' },
      { text: 'זה אפילו יותר טוב עם המנגינה!' },
      { text: 'עשיתי את זה, מעניין ...' },
    ],
  },

  {
    title: 'גדול או צבעים?',
    description: () => `
חזרת שוב?

אחלה!

עכשיו, אי פעם חשבת מה גדול יותר או עט ב12 צבעים שונים?

מטופש, אני יודע, פשוט רציתי להסיח את דעתך לרגע לפני הקטע הבא :)
`,
    answers: [
      { text: 'האהא, מצחיק מאוד אדם :)' },
      { text: 'תראה לי את הקטע הבא' },
    ],
  },

  {
    title: 'נסיון שווא',
    description: ({ gender }) => `
${he.tajshov(gender)} על אותו זכרון ישן מהעבר שלך ו${he.tenase(gender)} לשווא להרגיש כלפיו אותו דבר כמו פעם, לפני שלמדת את התהליך הזה.

${he.ata(gender)} ${he.alul(gender)} להיות ${he.mufta(gender)} לגלות שזה לא כל כך קל יותר :)
`,
    answers: ({ gender }) => [
      { text: `זה מדהים! אני ${he.margish(gender)} טוב!` },
      { text: `אני ${he.margish(gender)} יותר גרוע` },
      { text: `מה לעזא... אני אשכרה ${he.margish(gender)} טוב לגבי זה, מה קורה כאן?!` },
      { text: `אני ${he.margish(gender)} בדיוק אותו דבר כמו בעבר` },
    ],
  },

  {
    title: 'להרגיש טוב כלפי ...',
    description: ({ gender }) => `
וכמה טוב ${he.ata(gender)} ${he.margish(gender)} עכשיו, כש${he.ata(gender)} ${he.lomed(gender)}, ש${he.ata(gender)}  ${he.yajol(gender)} ללמוד להרגיש טוב יותר כלפי מה שפעם השפיע עליך בצורה שכבר לא מועילה?

1-10, כמה טוב ${he.ata(gender)} ${he.margish(gender)} עכשיו?

ו${he.sim(gender)} לב, זה  יכול להיות מעניין לשים לב לא רק איפה בגוף ${he.ata(gender)}  ${he.yajol(gender)} להרגיש טוב קודם,

עכשיו,

איפה בגוף ${he.ata(gender)}  ${he.yajol(gender)} להרגיש טוב יותר חזק, ולאן בגוף ההרגשה הזאת יכולה להתחיל לזרום ולהתפשט.

ואם לתחושה הזאת היה צבע, ואיזה צבע זה היה יכול להיות?

${he.taer(gender)} את התחושה הזאת באופן הכי חי ומפורט ש${he.ata(gender)}  ${he.yajol(gender)}
`,
    input: {
      placeholder: ({ gender }) => `אני ${he.margish(gender)} טוב קודם ב... וזה כמו ... וזה מתפשט/זורם ל... בצבע ...`,
      id: 'GoodFeelingDescription',
    },
  },

  {
    title: '',
    description: ({ gender }) => `
זה לא אדיר ש${he.ata(gender)}  ${he.yajol(gender)} ללמוד כל כך מהר?  
${he.makir(gender)} [אחרים](FB_SHARE) ש${he.yajol(gender)}ים להנות מזה גם?

או ש${he.ata(gender)} רוצה לעשות את זה שוב על זכרון אחר קודם?

`,
    answers: (state, { goToStepByTitle, resetInputs }) => [
      {
        text: 'אני רוצה לעשות את זה שוב על זכרון אחר!',
        onClick: () => {
          goToStepByTitle('בחירת זכרון מהעבר לשחרר')
          resetInputs('ageInMemory', 'goodFeelingDescription')
        },
      },
      {
        text: 'אני רוצה לעשות את זה שוב על אותו זכרון!',
        onClick: () => {
          goToStepByTitle('לפני שמשהו קרה, בטוח לחלוטין')
          resetInputs('goodFeelingDescription')
        },
      },
      <FbShareLink>אני רוצה שעוד יחוו את זה</FbShareLink>,
      <Link to="/i-dont-charge-i-accept/">למדתי הרבה ואני רוצה לתת חזרה</Link>,
    ],
  },

]
