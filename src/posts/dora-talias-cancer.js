import { parseFbConversation } from '../utils';

export default {
  title: 'דורה טליאס - ניקוי אבל ואבדן, געגועים לבעל, אכזבה, כעס, עצב ואבחון של סרטן', // eslint-disable-line prettier/prettier
  isTitleRtl: true,
  tags: [],
  IS_DRAFT: true,
  description: 'לתת לדורה לספר על עצמה כאן ...',
  nick: 'סרטן, אין חיה כזאת',
  isBodyRtl: true,
  body: `

# תוכן עניינים
- ## פתיח
- ## הערות מהסשן
- ## תמלול סשן מילה במילה

---

# פתיח
תאריך סשן ראשון: 17.10.2017  
שם הקליינט: דורה טאליאס  
גיל: 66  
אבחון: סרטן שד ממאיר  
אמצעי תקשורת: צ'אט של פייסבוק  

---

# הערות מהסשן

---

# תמלול סשן מילה במילה

  `,
  html: `<div>${parseFbConversation(msgs())}</div>`, // eslint-disable-line no-use-before-define
};

function msgs() {
  return [
    { author: 'time', content: 'OCT 17TH, 8:58PM' },
    {
      content: [{ type: 'text', html: 'אהלן\n', isRtl: true }],
      author: 'adam',
    },
    {
      content: [{ type: 'text', html: 'היי ערב טוב\n', isRtl: true }],
      author: 'other',
    },
    {
      content: [
        { type: 'text', html: 'אני אשאל אותך שאלות\n', isRtl: true },
        { type: 'text', html: 'ואתן לך דברים לנסות\n', isRtl: true },
      ],
      author: 'adam',
    },
    { content: [{ type: 'likeSticker' }], author: 'other' },
    {
      content: [
        {
          type: 'text',
          html:
            'מה שאת מצליחה, את שומרת,\nמה שלא, שמה במגירה \n\n"דברים שניסיתי ועדיין לא עבדו לי"\n',
          isRtl: true,
        },
        { type: 'text', html: 'יש?\n', isRtl: true },
      ],
      author: 'adam',
    },
    {
      content: [{ type: 'text', html: 'מחכה\n', isRtl: true }],
      author: 'other',
    },
    {
      content: [{ type: 'text', html: 'מחכה ל..?\n', isRtl: true }],
      author: 'adam',
    },
    {
      content: [
        {
          type: 'text',
          html: 'לרשום לך דברים שניסיתי להבראה שלי ולא עבדו?\n',
          isRtl: true,
        },
      ],
      author: 'other',
    },
    { content: [{ type: 'text', html: 'כן\n', isRtl: true }], author: 'adam' },
    {
      content: [
        {
          type: 'text',
          html:
            'שינוי תזונה מאוד מאוד דרסתי בשנה הראשונה למחלה  שעקבות זה ירדתי בצורה דראסטית במשקל אך לא היה ריפוי\n',
          isRtl: true,
        },
      ],
      author: 'other',
    },
    {
      content: [
        { type: 'text', html: 'אוקיי, שינוי תזונה\nמה עוד\n', isRtl: true },
      ],
      author: 'adam',
    },
    {
      content: [
        {
          type: 'text',
          html: 'משתמשת השמן ריק סימפסון כבר שנתיים  שנה הראשונה לא עזר\n',
          isRtl: true,
        },
        { type: 'text', html: 'מדיטציות..דמיון מודרך..\n', isRtl: true },
      ],
      author: 'other',
    },
    {
      content: [{ type: 'text', html: 'מה עם השמן?\n', isRtl: true }],
      author: 'adam',
    },
    {
      content: [{ type: 'text', html: 'חשיבה חיובית\n', isRtl: true }],
      author: 'other',
    },
    {
      content: [
        {
          type: 'text',
          html: 'שנה ראשונה לא עזר ועכשיו כן עוזר?\n',
          isRtl: true,
        },
      ],
      author: 'adam',
    },
    {
      content: [
        {
          type: 'text',
          html: 'כרגע יש נסיגה בשוליים של הגוש מתחילה הצטמצמות\n',
          isRtl: true,
        },
      ],
      author: 'other',
    },
    {
      content: [{ type: 'text', html: 'ואת עדיין לוקחת?\n', isRtl: true }],
      author: 'adam',
    },
    {
      content: [{ type: 'text', html: 'כן בטח\n', isRtl: true }],
      author: 'other',
    },
    {
      content: [
        { type: 'text', html: 'והתזונה?\n', isRtl: true },
        { type: 'text', html: 'תני לי קצת יותר פרטים\n', isRtl: true },
      ],
      author: 'adam',
    },
    {
      content: [
        {
          type: 'text',
          html: 'הבעיה שלי עכשיו זה שקשה לי לאכול..אני בתת משקל\n',
          isRtl: true,
        },
      ],
      author: 'other',
    },
    {
      content: [
        {
          type: 'text',
          html:
            'מה עם התזונה, מה השינוי שעשית, מה היום\nכנ"ל לגבי מדיטציות ודמיון מודרך\n',
          isRtl: true,
        },
      ],
      author: 'adam',
    },
    {
      content: [
        {
          type: 'text',
          html:
            'לא מחברת לזה אין לי סבלנות...לפני שחליתי הייתי עושה מדיטציות בקלי קלות היום לא..\n',
          isRtl: true,
        },
        {
          type: 'text',
          html: 'מרוב שהרעבתי את עצמי בשנה הראשונה פגעתי בקיבה שלי לדעתי..\n',
          isRtl: true,
        },
      ],
      author: 'other',
    },
    {
      content: [
        {
          type: 'text',
          html:
            'היום אני אוכלת הכל חוץ מקמח לבן (פסטות למיניהם)\nסוכר\nדברי חלב\nכי אם הייתי ממשיכה עוד שינוי הדרסטי רק ירקות פירות זרעים ואגוזים הייתי מתה מרזון.\nאני שוקלת 36 ק"ג זה תת תזונה לגילי 66..\n',
          isRtl: true,
        },
      ],
      author: 'other',
    },
    {
      content: [
        {
          type: 'text',
          html:
            'אוקיי\nנגיע גם לעניין האוכל, זה כבר עשיתי המון, יש הרבה תהליכים מעולים לזה\n',
          isRtl: true,
        },
      ],
      author: 'adam',
    },
    { content: [{ type: 'likeSticker' }], author: 'other' },
    {
      content: [
        {
          type: 'text',
          html:
            'עכשיו\nמה הזכרון הכי קדום שלך\nשאת זוכרת עכשיו\nשהיית תינוקת / ילדה קטנה\nמבלי להיכנס לפרטים\n\nבת כמה את בזכרון הזה,\nאת מרגישה חיובי או שלילי לגבי,\nואיזה סוג של רגש זה\n',
          isRtl: true,
        },
      ],
      author: 'adam',
    },
    {
      content: [{ type: 'text', html: 'צריכה קצת לחשוב\n', isRtl: true }],
      author: 'other',
    },
    {
      content: [
        { type: 'text', html: 'קצת, כן\n', isRtl: true },
        { type: 'text', html: 'זה לא חייב להיות הכי קדום\n', isRtl: true },
        { type: 'text', html: 'רק הכי קדום שעולה לך בנתיים\n', isRtl: true },
      ],
      author: 'adam',
    },
    { content: [{ type: 'likeSticker' }], author: 'other' },
    {
      content: [{ type: 'text', html: 'תגידי לי כשמצאת\n', isRtl: true }],
      author: 'adam',
    },
    {
      content: [{ type: 'text', html: 'אפשר להמשיך מחר?\n', isRtl: true }],
      author: 'other',
    },
    {
      content: [{ type: 'text', html: 'וודאי\n', isRtl: true }],
      author: 'adam',
    },
    {
      content: [{ type: 'text', html: 'לילה טוב\n', isRtl: true }],
      author: 'other',
    },
    {
      content: [{ type: 'text', html: 'לילה טוב\n', isRtl: true }],
      author: 'adam',
    },
    { author: 'time', content: 'OCT 18TH, 10:03AM' },
    {
      content: [
        {
          type: 'text',
          html: 'בוקר טוב אם אתה פנוי אני מוכנה להמשיך..\n',
          isRtl: true,
        },
        {
          type: 'text',
          html:
            'הזיכרון הכי קדום שלי בתור ילדה בת 6 בערך בכיתה א\nזיכרון לא חיובי ולא שלילי אין שם שום תחושה אני רואה את עצמי מחיוכת..\n',
          isRtl: true,
        },
      ],
      author: 'other',
    },
    {
      content: [
        { type: 'text', html: 'אוקי\n', isRtl: true },
        {
          type: 'text',
          html: 'בשביל הספורט, תכנסי אל תוך הזכרון לרגע\n',
          isRtl: true,
        },
        {
          type: 'text',
          html: 'ככה שתראי את זה דרך העיניים שלך\n',
          isRtl: true,
        },
        {
          type: 'text',
          html: 'במקום לראות אץ עצמך מבחוץ\nמבינה?\n',
          isRtl: true,
        },
      ],
      author: 'adam',
    },
    {
      content: [{ type: 'text', html: 'הבנתי זה יקח קצת זמן\n', isRtl: true }],
      author: 'other',
    },
    {
      content: [
        { type: 'text', html: 'אכן זה לא לוקח הרבה זמן\n', isRtl: true },
      ],
      author: 'adam',
    },
    {
      content: [
        {
          type: 'text',
          html:
            'הצלחתי להכנס..\nבת 7 או 8 משהו כזה..\nמרגישה שמחה ואהובה עם סבתא שלי..יש שם שמחה בלב\n',
          isRtl: true,
        },
      ],
      author: 'other',
    },
    {
      content: [{ type: 'text', html: 'עדיף ממקודם?\n', isRtl: true }],
      author: 'adam',
    },
    {
      content: [{ type: 'text', html: 'לא הבנתי\n', isRtl: true }],
      author: 'other',
    },
    {
      content: [
        {
          type: 'text',
          html:
            'אמרת שהזכרון הכי קדום זה בגיל 6\nואת רואה עת עצמך מחייכת\n\nואז הצלחת להיכנס אליו, וראית אותו מבפנים, דרך העיניים שלך, כן?\n',
          isRtl: true,
        },
        {
          type: 'text',
          html: 'אני תיכף תופס טיסה, אז אולי אענה לך עוד כמה שעות\n',
          isRtl: true,
        },
      ],
      author: 'adam',
    },
    {
      content: [
        {
          type: 'text',
          html:
            'כן אבל כנראה שזה  אותו גיל רק חשבתי גיל 6 בעצם זהו זכרון של הגילאים 7 או 6 משהו כזה..\n',
          isRtl: true,
        },
        { type: 'text', html: 'טיסה נעימה\n', isRtl: true },
      ],
      author: 'other',
    },
    {
      content: [
        { type: 'voiceMsg', duration: '0:23', isRtl: false },
        { type: 'voiceMsg', duration: '0:30', isRtl: false },
        { type: 'voiceMsg', duration: '0:47', isRtl: false },
        { type: 'voiceMsg', duration: '0:42', isRtl: false },
      ],
      author: 'adam',
    },
    {
      content: [
        { type: 'text', html: 'אתה מבין נכון\n', isRtl: true },
        {
          type: 'text',
          html:
            'הבנתי את העקרון..אעשה את זה ארשום לי במחברת הכל וכשאסיים אכתוב לך גם כל מה שעלה משם..זה בסדר?\n',
          isRtl: true,
        },
      ],
      author: 'other',
    },
    { author: 'time', content: 'OCT 18TH, 3:17PM' },
    {
      content: [
        { type: 'text', html: 'מעולה, כן\n', isRtl: true },
        { type: 'text', html: 'אני כאן לשאלות\n', isRtl: true },
        {
          type: 'text',
          html:
            "אני בטוח שיהיה מעניין לעבוד איתך, תפסת את הקטע הראשון ממש מהר!\n\nהרבה אנשים גורמים לי להקיז דם לפני שמעזים לעשות את הצעד הכי קטנצ'יק בשביל להרגיש יותר טוב\n",
          isRtl: true,
        },
      ],
      author: 'adam',
    },
    { author: 'time', content: 'OCT 18TH, 4:38PM' },
    { content: [{ type: 'likeSticker' }], author: 'other' },
    {
      content: [
        {
          type: 'text',
          html:
            'אני קצת עסוקה כרגע אהייה שוב אחרי השעה 20.00 אם זה בסדר  בנתיים אני מחפשת זכרונות נוספים ומנסה ממש להכנס לתוכם להרגיש תחושות ..טעמים..קולות..\n',
          isRtl: true,
        },
      ],
      author: 'other',
    },
    { author: 'time', content: 'OCT 18TH, 6:08PM' },
    {
      content: [
        {
          type: 'text',
          html:
            'היי אדם\nהאם הזכרונות שאני מעלה אמורות להיות לפי סדר כרונולוגי של הגיל או מה שעולה לא משנה אם זה לפי הסדר\n',
          isRtl: true,
        },
      ],
      author: 'other',
    },
    { author: 'time', content: 'OCT 18TH, 7:40PM' },
    {
      content: [{ type: 'text', html: 'לא משנה הסדר\n', isRtl: true }],
      author: 'adam',
    },
    {
      content: [
        {
          type: 'text',
          html: 'טוב יש לי כבר חמישה זכרונות שמתוכם רק 2 חיוביים\n',
          isRtl: true,
        },
        {
          type: 'text',
          html: 'קניתי לי מחברת במיוחד לעבודה הזו\n',
          isRtl: true,
        },
        {
          type: 'text',
          html: 'כל הזכרונות השליליים כתבתי ליד "להקפיא"\n',
          isRtl: true,
        },
        { type: 'text', html: 'האם לכתוב לך כאן את כולם?\n', isRtl: true },
      ],
      author: 'other',
    },
    {
      content: [
        { type: 'text', html: 'מעולה\n', isRtl: true },
        { type: 'text', html: 'כן\n', isRtl: true },
      ],
      author: 'adam',
    },
    {
      content: [
        {
          type: 'text',
          html: 'גיל 14.5 15 זכרון שלילי ..האם להכנס לפרטים\n',
          isRtl: true,
        },
      ],
      author: 'other',
    },
    {
      content: [
        { type: 'text', html: 'אין צורך\n', isRtl: true },
        { type: 'text', html: 'רק סוג הזכרון\n', isRtl: true },
        {
          type: 'text',
          html:
            'נניח תאונת דרכים, אבדן של מישהו יקר, וכדומה\nכלומר רק ה"קטגוריה"\n',
          isRtl: true,
        },
      ],
      author: 'adam',
    },
    { content: [{ type: 'likeSticker' }], author: 'other' },
    {
      content: [
        {
          type: 'text',
          html:
            'גיל 13 עליה לארץ בתי הורים עם אחי הקטן בן 11 לפנימיה מטורקיה זכרון שהוא לא חיובי ולא שלילי בעיקר יש שם התרגשות ..\n',
          isRtl: true,
        },
        {
          type: 'text',
          html:
            'גיל 16 רוצה לנסוע עם חברים מהפנימיה לבקר  בטורקיה לחופש לא התאפשר..יש שם אכזבה..בכי..עצב..\n',
          isRtl: true,
        },
      ],
      author: 'other',
    },
    {
      content: [
        {
          type: 'text',
          html:
            'גיל 24.5 בערך...עצב תחושה של לאן הכנסתי את עצמי..!!??\nמדובר כאן על יום חתונתי עם בעלי...היה קשה..בגלל סיבות שלא יכולה לפרט כאן...כי זה יהייה ארוך מאוד...\n',
          isRtl: true,
        },
        {
          type: 'text',
          html:
            'גיל 56 איבדתי את בעלי למחלת הסרטן...שנתיים ושמונה חודשים לפני התגלתה המחלה..היה לי דזאוו...הייתי בסרט הזה..ידעתי שבעלי הולך למות זה ענין של זמן..תחושות ..חוסר אונים..עצב..תחושת אשמה כי יש בי ידיעה ברורה שבעלי לא יבריא ..\n',
          isRtl: true,
        },
        {
          type: 'text',
          html:
            'בעקבות זה התמוטטות עצבים אישפוז של יומיים..שאחרי זה התנהלתי כמו רובוט..\n',
          isRtl: true,
        },
        {
          type: 'textWithEmoticon',
          html:
            'תקשיב...אני שמה לב שכל הזכרונות שעולים הם שליליים...<img alt="😕" class="_1ift _2560 img" src="https://static.xx.fbcdn.net/images/emoji.php/v9/zf2/1/16/1f615.png">',
          isRtl: true,
        },
      ],
      author: 'other',
    },
    {
      content: [
        { type: 'text', html: 'יאפ , זה לרוב המצב\n', isRtl: true },
        { type: 'text', html: 'וזה מעולה שאת עושה בהם סדר\n', isRtl: true },
        {
          type: 'text',
          html:
            'זה לא הדבר הכי נעים לעשות, אבל, זאת הפעם האחרונה שהם ישפיעו עליך באופן לא חיובי\n',
          isRtl: true,
        },
      ],
      author: 'adam',
    },
    {
      content: [{ type: 'text', html: 'להמשיך עוד?\n', isRtl: true }],
      author: 'other',
    },
    {
      content: [
        { type: 'text', html: 'כל מה שעולה\n', isRtl: true },
        { type: 'text', html: 'ואז נתחיל לעבוד עליהם\n', isRtl: true },
        {
          type: 'text',
          html: 'כל עוד זה לא כתוב, זה מתרוצץ אצלך בראש\n',
          isRtl: true,
        },
      ],
      author: 'adam',
    },
    { content: [{ type: 'likeSticker' }], author: 'other' },
    {
      content: [
        {
          type: 'textWithEmoticon',
          html:
            'אני אמשיך עם זה מחר..<img alt="☺" class="_1ift _2560 img" src="https://static.xx.fbcdn.net/images/emoji.php/v9/zfb/1/16/263a.png">',
          isRtl: true,
        },
        { type: 'text', html: 'אפשרי?\n', isRtl: true },
        {
          type: 'text',
          html:
            'אני רק רוצה ליידע אותך שאני עם סרטן שד מאוגוסט 2014 \nמעולם לא ראיתי אונקולוג..ללא ניתוח ללא כימו וללא הקרנות רק ריפוי טבעי כי אני מאמינה שמה שהגוף שלי יצר לא טוב הוא יודע לתקן את הלא טוב הזה..\n',
          isRtl: true,
        },
      ],
      author: 'other',
    },
    {
      content: [
        { type: 'text', html: 'וודאי\n', isRtl: true },
        { type: 'text', html: 'אני גם מאמין בזה\n', isRtl: true },
      ],
      author: 'adam',
    },
    {
      content: [
        {
          type: 'text',
          html:
            'עברתי מצבים נוראיים וקיצוניים ביותר..הגעתי למצב של מוות רוחני מוות תלט מוות פיסי הייתי על קרשים דכאון נוראי...ולא הסכמתי לקחת שום כדור נגד דכאון לאט לאט בנחישות יצאתי מהמצב הזה בעזרת מלאכים אנושיים שפגשתי בדרך...\n',
          isRtl: true,
        },
      ],
      author: 'other',
    },
    { author: 'time', content: 'OCT 19TH, 11:50AM' },
    {
      content: [
        { type: 'text', html: 'מעולה, אחלה קרקע לעבודה יש לנו\n', isRtl: true },
      ],
      author: 'adam',
    },
    { author: 'time', content: 'OCT 20TH, 7:05PM' },
    {
      content: [
        { type: 'textWithEmoticon', html: 'ערב טוב ושבת שלום..', isRtl: true },
      ],
      author: 'other',
    },
    {
      content: [{ type: 'text', html: 'איך האנגלית שלך דורה?\n', isRtl: true }],
      author: 'adam',
    },
    {
      content: [
        { type: 'text', html: 'האנגלית שלי לא פרפקט...\n', isRtl: true },
      ],
      author: 'other',
    },
    {
      content: [{ type: 'text', html: 'אוקיי\nאז נעשה בעברית\n', isRtl: true }],
      author: 'adam',
    },
    {
      content: [{ type: 'text', html: 'אני מעדיפה בעברית\n', isRtl: true }],
      author: 'other',
    },
    {
      content: [{ type: 'text', html: 'מה כתובת המייל שלך\n', isRtl: true }],
      author: 'adam',
    },
    {
      content: [{ type: 'text', html: 'Dorya10@gmail.com\n', isRtl: false }],
      author: 'other',
    },
    {
      content: [
        {
          type: 'textWithHtml',
          html:
            '<a target="_blank" href="https://l.messenger.com/l.php?u=https%3A%2F%2Fdocs.google.com%2Fa%2Fadamgoldman.me%2Fdocument%2Fd%2F13kBMviocVF2LyF0BHN7a9dcnLpqUD4uwvRl682nw724%2Fedit%3Fusp%3Dsharing&amp;h=ATOFfG6IwkHJoLsBrU-peMezk5jraSqZOhVVY2xKLygI_uJCiB6UHNAF77JB2HD_47l_cAhys5a8_Z-RWH47bpw37r_3i7YFA5za_BJRRicmBSZabYWUPldpvaKfK4Fo8GIYlg" rel="nofollow noopener">https://docs.google.com/a/adamgoldman.me/document/d/13kBMviocVF2LyF0BHN7a9dcnLpqUD4uwvRl682nw724/edit?usp=sharing</a>',
          isRtl: false,
        },
        { type: 'text', html: 'תראי אם יש לך גישה\n', isRtl: true },
      ],
      author: 'adam',
    },
    { content: [{ type: 'text', html: 'יש?\n', isRtl: true }], author: 'adam' },
    {
      content: [
        {
          type: 'text',
          html: 'כן הגעתי עד למקום לצריכה אישור כניסה מגוגל שם נתקעתי\n',
          isRtl: true,
        },
      ],
      author: 'other',
    },
    {
      content: [
        { type: 'text', html: 'כן תלחצי על בקשת אישור\n', isRtl: true },
        {
          type: 'textWithHtml',
          html:
            '<a target="_blank" href="https://l.messenger.com/l.php?u=https%3A%2F%2Fdocs.google.com%2Fdocument%2Fd%2F13kBMviocVF2LyF0BHN7a9dcnLpqUD4uwvRl682nw724%2Fedit&amp;h=ATOFfG6IwkHJoLsBrU-peMezk5jraSqZOhVVY2xKLygI_uJCiB6UHNAF77JB2HD_47l_cAhys5a8_Z-RWH47bpw37r_3i7YFA5za_BJRRicmBSZabYWUPldpvaKfK4Fo8GIYlg" rel="nofollow noopener">https://docs.google.com/document/d/13kBMviocVF2LyF0BHN7a9dcnLpqUD4uwvRl682nw724/edit#</a>',
          isRtl: false,
        },
        { type: 'text', html: 'תבדקי עכשיו אם זה עובד\n', isRtl: true },
      ],
      author: 'adam',
    },
    {
      content: [
        {
          type: 'text',
          html:
            'בקישור החדש אני מגיע ישר לזכרונות שכתבתי  משם אין לי לאן להתקדם\n',
          isRtl: true,
        },
      ],
      author: 'other',
    },
    { author: 'time', content: 'OCT 20TH, 9:44PM' },
    {
      content: [
        {
          type: 'text',
          html:
            'קיבלתי מייל ממך יש שם דף עם כל הזכרונות שלי..\nאיך ממשיכים משם?\n',
          isRtl: true,
        },
      ],
      author: 'other',
    },
    { author: 'time', content: 'OCT 20TH, 11:35PM' },
    {
      content: [
        { type: 'text', html: '14.5 15 - זכרון שלילי\n', isRtl: true },
        {
          type: 'text',
          html: 'איזה סוג של זכרון?\nבלי להכנס לפרטים\n',
          isRtl: true,
        },
        {
          type: 'text',
          html: 'כיוון שזה הכי מוקדם, נתחיל איתו\n',
          isRtl: true,
        },
      ],
      author: 'adam',
    },
    { author: 'time', content: 'OCT 21ST, 10:09AM' },
    { content: [{ type: 'likeSticker' }], author: 'other' },
    {
      content: [{ type: 'text', html: 'בוקר טוב..\n', isRtl: true }],
      author: 'other',
    },
    {
      content: [
        { type: 'text', html: 'בוקר אור\n', isRtl: true },
        { type: 'text', html: 'מוכנה?\n', isRtl: true },
      ],
      author: 'adam',
    },
    { author: 'time', content: 'OCT 21ST, 11:45AM' },
    {
      content: [
        {
          type: 'text',
          html: 'היי אהייה אחרי השעה 16.00 אם זה בסדר\n',
          isRtl: true,
        },
      ],
      author: 'other',
    },
    {
      content: [
        {
          type: 'text',
          html:
            "אחד היתרונות בעבודה בצ'אט,\nאנחנו עונים מתי שפנויים\n\nלסנכרן זה לא חובה\n\nאז כשאת חוזרת\n\nמבלי להיכנס לפרטים, תגידי רק מה סוג הזכרון של גיל 14.5-15\n",
          isRtl: true,
        },
      ],
      author: 'adam',
    },
    { author: 'time', content: 'OCT 21ST, 3:56PM' },
    {
      content: [{ type: 'text', html: 'היי\nזיכרון שלילי\n', isRtl: true }],
      author: 'other',
    },
    {
      content: [
        { type: 'text', html: 'כן, איזה סוג של שלילי\n', isRtl: true },
        { type: 'text', html: 'מישהו שעזב?\n', isRtl: true },
        { type: 'text', html: 'תאונה?\n', isRtl: true },
      ],
      author: 'adam',
    },
    {
      content: [{ type: 'text', html: 'אכזבה..כעס..בכי..\n', isRtl: true }],
      author: 'other',
    },
    {
      content: [
        { type: 'text', html: 'אוקיי\n', isRtl: true },
        {
          type: 'text',
          html: 'ושאת נזכרת בזה עכשיו, אני מנחש, שאת רואה תמונה זזה\n',
          isRtl: true,
        },
        { type: 'text', html: 'סוג של וידאו כזה\n', isRtl: true },
        { type: 'text', html: 'שמתנגן שוב ושוב\n', isRtl: true },
        { type: 'text', html: 'או שזאת תמונה "קפואה" ?\n', isRtl: true },
      ],
      author: 'adam',
    },
    {
      content: [{ type: 'text', html: 'כמו וידאו\n', isRtl: true }],
      author: 'other',
    },
    {
      content: [
        { type: 'text', html: 'אוקיי\n', isRtl: true },
        { type: 'text', html: 'עכשיו אני רוצה שתעשי כזה דבר\n', isRtl: true },
        {
          type: 'text',
          html:
            'עכשיו תראי\nבתור צעד ראשון\nאני רוצה שתצאי מהתמונה הזאת\nותראי אותה מבחוץ\nמרחוק\nכלומר\nתראי את דורה בת ה14.5\nמבחוץ\nככה שאת רואה את כל הגוף שלה\nיש?\n',
          isRtl: true,
        },
      ],
      author: 'adam',
    },
    { content: [{ type: 'text', html: 'כן\n', isRtl: true }], author: 'other' },
    {
      content: [
        {
          type: 'text',
          html: 'אוקיי כשאת עונה\nתגידי\nעשיתי\nאו\nהבנתי\n',
          isRtl: true,
        },
        { type: 'text', html: 'ככה שאני אדע באיזה שלה את\n', isRtl: true },
      ],
      author: 'adam',
    },
    {
      content: [{ type: 'text', html: 'הבנתי\n', isRtl: true }],
      author: 'other',
    },
    {
      content: [
        { type: 'text', html: 'אוקיי\n', isRtl: true },
        {
          type: 'text',
          html:
            'עכשיו תראי\nלפני כמה זמן לי ולאחי הייתה תאונת אופנוע\nנהג חתך אותנו מהחניה\n\nאז אנחנו נסענו באופנוע בכיף שלנו\nוכמה שניות לפני שהנהג פגע בנו, היינו בשיחה משעשעת\nולא היה שום סימן לסכנה\nכלומר, באותו רגע, הזכרון הזה היה נייטרלי לחלוטין\nוהיינו בטוחים לחלוטין\nמבינה?\n',
          isRtl: true,
        },
      ],
      author: 'adam',
    },
    {
      content: [{ type: 'text', html: 'מבינה\n', isRtl: true }],
      author: 'other',
    },
    {
      content: [
        {
          type: 'text',
          html:
            'ואז היה את הרגע של הפגיעה\nלא נעים\nהיינו בשוק כמה שניות\nהתעשתנו\n\nוירדנו לשוליים להחליף פרטים עם הנהג\nהרגל שלי באותו רגע עדיין לא החלימה לחלוטין\nאבל האירוע עצמו של התאונה נגמר\n\nוהיינו שוב בטוחים לחלוטין\nלכל זכרון, גדול כקטן, יש רגע נייטרלי של לפני, ויש רגע נייטרלי של אחרי\nעד כה איתי?\n',
          isRtl: true,
        },
      ],
      author: 'adam',
    },
    {
      content: [{ type: 'text', html: 'הבנתי\n', isRtl: true }],
      author: 'other',
    },
    {
      content: [
        {
          type: 'text',
          html:
            'מעולה\nעכשיו אני רוצה שתמצאי את הרגע של לפני בזכרון שלך\nלפני שמשהו קרה\nואת רואה את דורה בת ה14.5 בתמונה\nוהיא בטוחה לחלוטין\nאין סימן לסכנה\nיכול להיות שזה כמה דקות לפני\nויכול להיות שזה בכלל שעה לפני\n\nוזה נייטרלי לחלוטין\n',
          isRtl: true,
        },
      ],
      author: 'adam',
    },
    {
      content: [{ type: 'text', html: 'מבינה\n', isRtl: true }],
      author: 'other',
    },
    {
      content: [{ type: 'text', html: 'תגידי לי כשעשית\n', isRtl: true }],
      author: 'adam',
    },
    {
      content: [
        {
          type: 'text',
          html:
            'הסיטואציה שלי כאן לא היתה עם סכנה..יש לי אותי שאני רואה אותה מבחוץ..\n',
          isRtl: true,
        },
      ],
      author: 'other',
    },
    {
      content: [{ type: 'text', html: 'מעולה\n', isRtl: true }],
      author: 'adam',
    },
    {
      content: [{ type: 'text', html: 'רואה את עצמי\n', isRtl: true }],
      author: 'other',
    },
    {
      content: [
        {
          type: 'textWithHtml',
          html:
            '<span>וזאת תמונה </span><b><span class="_3oh- _58nk"><span>מלפני</span></span></b>',
          isRtl: true,
        },
        {
          type: 'text',
          html: 'כלומר תמונה נייטרלית לחלוטין כן?\n',
          isRtl: true,
        },
      ],
      author: 'adam',
    },
    { content: [{ type: 'text', html: 'כן\n', isRtl: true }], author: 'other' },
    {
      content: [
        { type: 'text', html: 'אין שום סימן לאירוע שקרה אחרי\n', isRtl: true },
        { type: 'text', html: 'מעולה\n', isRtl: true },
      ],
      author: 'adam',
    },
    {
      content: [
        { type: 'text', html: 'לא ההפך יש צפיה ותקווה\n', isRtl: true },
      ],
      author: 'other',
    },
    {
      content: [{ type: 'text', html: 'מעולה\n', isRtl: true }],
      author: 'adam',
    },
    {
      content: [
        {
          type: 'text',
          html:
            'עכשיו אני רוצה שתמצאי את הרגע של אחרי בזכרון שלך\nאחרי שהכל נגמר,\nואת רואה את דורה בת ה14.5 בתמונה\nוהיא בטוחה לחלוטין\nאין סימן לסכנה\nיכול להיות שזה כמה דקות אחרי\nויכול להיות שזה בכלל שעה אחרי\n\nוזה נייטרלי לחלוטין\n\nתגידי לי שמצאת את הרגע שאת רואה את דורה בת ה14.5 אחרי שהכל נגמר, והיא בטוחה לחלוטין\n',
          isRtl: true,
        },
      ],
      author: 'adam',
    },
    {
      content: [
        {
          type: 'text',
          html: 'היא בטוחה לחלוטין אך מאוכזבת מאוד..כועסת ובוכה\n',
          isRtl: true,
        },
      ],
      author: 'other',
    },
    {
      content: [
        { type: 'text', html: 'תמצאי תמונה יותר קדימה\n', isRtl: true },
        { type: 'text', html: 'אחרי שכבר אין זכר לאירוע\n', isRtl: true },
        { type: 'text', html: 'והיא עסוקה במשו אחר\n', isRtl: true },
        { type: 'text', html: 'תמונה נייטרלית לחלוטין\n', isRtl: true },
      ],
      author: 'adam',
    },
    {
      content: [{ type: 'text', html: 'יש לי\n', isRtl: true }],
      author: 'other',
    },
    {
      content: [
        { type: 'text', html: 'אוקיי\n', isRtl: true },
        {
          type: 'text',
          html: 'חשוב מאוד שהתמונה הזאת תהיה נייטרלית\n',
          isRtl: true,
        },
        {
          type: 'text',
          html: 'כלומר דורה שם לא כועסת, לא בוכה, לא מאוכזבת, לא עצבנית\n',
          isRtl: true,
        },
        { type: 'text', html: 'נייטרלית לחלוטין\n', isRtl: true },
        { type: 'text', html: 'יש?\n', isRtl: true },
      ],
      author: 'adam',
    },
    { content: [{ type: 'text', html: 'יש\n', isRtl: true }], author: 'other' },
    {
      content: [
        {
          type: 'text',
          html:
            'ואני רוצה שתראי את התמונה הזאת מרחוק\nככה שאת רואה את דורה בת ה14.5\nרחוק רחוק\nבמסך קטן ושחור לבן\nללא קול או סאונד\n',
          isRtl: true,
        },
        { type: 'text', html: 'תגידי לי כשעשית\n', isRtl: true },
      ],
      author: 'adam',
    },
    { content: [{ type: 'text', html: 'יש\n', isRtl: true }], author: 'other' },
    {
      content: [{ type: 'text', html: 'עשית?\n', isRtl: true }],
      author: 'adam',
    },
    { content: [{ type: 'text', html: 'כן\n', isRtl: true }], author: 'other' },
    {
      content: [
        {
          type: 'text',
          html:
            'עכשיו באותו מסך קטן, שחור לבן, רחוק רחוק, ללא קול, אני רוצה שתחליפי את התמונה של האחרי, בתמונה של הלפני.\nככה שאת רואה את דורה בת ה14.5\nרחוק רחוק\nבמסך קטן ושחור לבן\nללא קול או סאונד\nלפני שיש זכר לאירוע,\n',
          isRtl: true,
        },
      ],
      author: 'adam',
    },
    {
      content: [
        {
          type: 'text',
          html:
            'כלומר כשהייתי עם תקווה והרצון ועדיין חשבתי שהכל יהייה כמו שאני רוצה\n',
          isRtl: true,
        },
        { type: 'text', html: 'יש לי את התמונה\n', isRtl: true },
      ],
      author: 'other',
    },
    {
      content: [
        { type: 'text', html: 'מעולה\n', isRtl: true },
        { type: 'text', html: 'עכשיו\n', isRtl: true },
        {
          type: 'text',
          html:
            'עכשיו אני רוצה שתריצי את זה קדימה\nהכי מהר שאת יכולה\nבמסך הקטן\nרחוק רחוק\nשחור לבן\nבלי קול\nותראי את זה מרחוק\nתראי את רות הקטנה\nבהילוך מהיר\n',
          isRtl: true,
        },
        { type: 'text', html: 'עוברת את מה שהיא עברה\n', isRtl: true },
        { type: 'text', html: 'עד שאת מגיעה לתמונה של האחרי\n', isRtl: true },
        { type: 'text', html: 'תגידי לי כשאת שם\n', isRtl: true },
      ],
      author: 'adam',
    },
    {
      content: [
        { type: 'text', html: 'אתה מתכוון לדורה הקטנה\n', isRtl: true },
      ],
      author: 'other',
    },
    {
      content: [{ type: 'text', html: 'דורה, סליחה\n', isRtl: true }],
      author: 'adam',
    },
    {
      content: [{ type: 'text', html: 'יש לי\n', isRtl: true }],
      author: 'other',
    },
    {
      content: [{ type: 'text', html: 'עשית?\n', isRtl: true }],
      author: 'adam',
    },
    { content: [{ type: 'text', html: 'כן\n', isRtl: true }], author: 'other' },
    {
      content: [
        { type: 'text', html: 'אוקיי\n', isRtl: true },
        { type: 'text', html: 'עכשיו\n', isRtl: true },
        { type: 'text', html: 'תיכנסי אל תוך התמונה\n', isRtl: true },
        { type: 'text', html: 'ככה שאתה דורה בת ה14.5\n', isRtl: true },
        {
          type: 'text',
          html: 'ותריצי את זה אחורה, הכי מהר שאת יכולה\n',
          isRtl: true,
        },
      ],
      author: 'adam',
    },
    {
      content: [{ type: 'text', html: 'הבנתי\n', isRtl: true }],
      author: 'other',
    },
    {
      content: [
        { type: 'text', html: 'עד לתמונה של הלפני\n', isRtl: true },
        { type: 'text', html: 'אבל\n', isRtl: true },
        {
          type: 'text',
          html: 'אני רוצה שתראי את כולם זזים אחורה\n',
          isRtl: true,
        },
        { type: 'text', html: 'ותשמעי אותם מדברים אחורה\n', isRtl: true },
        { type: 'text', html: 'הכל דרך העיניים שלך\n', isRtl: true },
        { type: 'text', html: 'וכשאת עושה את זה\n', isRtl: true },
        { type: 'text', html: 'תשמעי מוזיקת קרקס ברקה\n', isRtl: true },
        { type: 'text', html: 'אוהבת מוזיקת קרקס?\n', isRtl: true },
      ],
      author: 'adam',
    },
    {
      content: [
        { type: 'text', html: 'אין לי מושג מה זה מוסיקת קרקס\n', isRtl: true },
      ],
      author: 'other',
    },
    {
      content: [
        {
          type: 'textWithHtml',
          html:
            '<a target="_blank" href="https://l.messenger.com/l.php?u=https%3A%2F%2Fyoutu.be%2F1D5Sa2Yq-2g&amp;h=ATOFfG6IwkHJoLsBrU-peMezk5jraSqZOhVVY2xKLygI_uJCiB6UHNAF77JB2HD_47l_cAhys5a8_Z-RWH47bpw37r_3i7YFA5za_BJRRicmBSZabYWUPldpvaKfK4Fo8GIYlg" rel="nofollow noopener">https://youtu.be/1D5Sa2Yq-2g</a>',
          isRtl: false,
        },
      ],
      author: 'adam',
    },
    {
      content: [{ type: 'text', html: 'כן  עשיתי\n', isRtl: true }],
      author: 'other',
    },
    {
      content: [
        { type: 'text', html: 'אוקיי\n', isRtl: true },
        { type: 'text', html: 'תתארי לי במלים שלך\n', isRtl: true },
        { type: 'text', html: 'מה עשית\n', isRtl: true },
        {
          type: 'text',
          html: 'ואיך זה היה לעשות את זה בפעם הראשונה\n',
          isRtl: true,
        },
      ],
      author: 'adam',
    },
    {
      content: [
        {
          type: 'text',
          html: 'את כל התהליך או את האחרון בלבד?\n',
          isRtl: true,
        },
        { type: 'text', html: 'שעשע אותי מאוד אפילו חייכתי\n', isRtl: true },
      ],
      author: 'other',
    },
    {
      content: [
        {
          type: 'textWithEmoticon',
          html:
            'מעניין <img alt="🙂" class="_1ift _2560 img" src="https://static.xx.fbcdn.net/images/emoji.php/v9/z4c/1/16/1f642.png">',
          isRtl: true,
        },
        { type: 'text', html: 'עכשיו\n', isRtl: true },
        { type: 'text', html: 'כשאת חושבת על אותו זכרון\n', isRtl: true },
        { type: 'text', html: 'מה שונה\n', isRtl: true },
        { type: 'text', html: '?\n', isRtl: false },
      ],
      author: 'adam',
    },
    {
      content: [
        {
          type: 'text',
          html:
            'אני מרגישה שאין לזכרון שום חשיבות כשאני נזכרת ורואה בעיני רוחי את ההילוך המהיר בשחור לבן אחורה זה אפילו מצחיק אותי\n',
          isRtl: true,
        },
      ],
      author: 'other',
    },
    {
      content: [
        { type: 'text', html: 'אפילו מצחיק???\n', isRtl: true },
        {
          type: 'textWithEmoticon',
          html:
            'חשבתי שזה זכרון שלילי <img alt="🙂" class="_1ift _2560 img" src="https://static.xx.fbcdn.net/images/emoji.php/v9/z4c/1/16/1f642.png">',
          isRtl: true,
        },
        { type: 'text', html: 'מעניין לא?\n', isRtl: true },
        {
          type: 'text',
          html: 'ציפית שתרגישי ככה כלפי הזכרון הזה\n',
          isRtl: true,
        },
        { type: 'text', html: 'כל כך מהר\n', isRtl: true },
        { type: 'text', html: 'תלמדי להרגיש טוב\n', isRtl: true },
        { type: 'text', html: 'חשבת פעם שזה אפשרי?\n', isRtl: true },
      ],
      author: 'adam',
    },
    {
      content: [{ type: 'text', html: 'החיוך לא נמחק מהפנים\n', isRtl: true }],
      author: 'other',
    },
    {
      content: [
        { type: 'text', html: 'קטע לא?\n', isRtl: true },
        { type: 'text', html: 'תתארי לך ...\n', isRtl: true },
      ],
      author: 'adam',
    },
    {
      content: [{ type: 'text', html: 'וואווו זה כל כך פשוט\n', isRtl: true }],
      author: 'other',
    },
    {
      content: [
        { type: 'text', html: 'כל כך הרבה דברים\n', isRtl: true },
        { type: 'text', html: 'איך את הולכת להרגיש\n', isRtl: true },
        { type: 'text', html: 'עכשיו\n', isRtl: true },
        { type: 'text', html: 'שאת יודעת\n', isRtl: true },
        { type: 'text', html: 'שהכל את הולכת להפוך לצחוק\n', isRtl: true },
        { type: 'text', html: 'והחיוך לא יורד מהפנים\n', isRtl: true },
        {
          type: 'text',
          html: 'אפילו שקורים דברים שהם כאילו "קשים"\n',
          isRtl: true,
        },
        { type: 'text', html: 'ופעם היו מטרידים אותך\n', isRtl: true },
      ],
      author: 'adam',
    },
    {
      content: [
        { type: 'text', html: 'אני לא יכולה להפסיק לצחוק\n', isRtl: true },
      ],
      author: 'other',
    },
    {
      content: [
        { type: 'text', html: 'ולא יכולה להפסיק לצחוק ...\n', isRtl: true },
        {
          type: 'text',
          html: 'ותחשבי שמעכשיו\nלעולם לא תדעי\nותהיהי באי וודאות מתמדת\n',
          isRtl: true,
        },
      ],
      author: 'adam',
    },
    {
      content: [{ type: 'text', html: 'מדהים!!!\n', isRtl: true }],
      author: 'other',
    },
    {
      content: [
        { type: 'text', html: 'מתי צחוק כזה ישתלט עליך שוב\n', isRtl: true },
        {
          type: 'text',
          html: 'תארי לך איזה מן עתיד יכול להיות לך ...\n',
          isRtl: true,
        },
        {
          type: 'text',
          html: 'שיותר ויותר צחוק מדהים ימלא אותך מעוד ועוד כיוונים\n',
          isRtl: true,
        },
        { type: 'text', html: 'שלא חשבת עליהם מקודם\n', isRtl: true },
        {
          type: 'text',
          html: 'ואיך זה ישפיע על אנשים שיראו אותך\n',
          isRtl: true,
        },
        {
          type: 'text',
          html:
            'וכמה את תוכלי להשפיע עליהם לחיוב\nעכשיו שאת יודעת כמה צחוק מסתתר בכל פינה\n',
          isRtl: true,
        },
      ],
      author: 'adam',
    },
    {
      content: [
        {
          type: 'text',
          html:
            'אני מבינה מזה שהכל תלוי במשמעויות שאנחנו נותנים לכל מיני ארועים שקורים לנו בחיים אך ורק המשמעות\n',
          isRtl: true,
        },
      ],
      author: 'other',
    },
    {
      content: [
        { type: 'text', html: 'בדיוק\n', isRtl: true },
        { type: 'text', html: 'והמשמעות תלויה בעיקר\n', isRtl: true },
        { type: 'text', html: 'באיך שאנחנו רואים את הדברים\n', isRtl: true },
        { type: 'text', html: 'עכשיו תגידי\n', isRtl: true },
        {
          type: 'text',
          html: 'את רוצה שאחזיר אותך למצב הישן?\nולרגשות הישנים שלך?\n',
          isRtl: true,
        },
        {
          type: 'textWithEmoticon',
          html:
            'או מעדיפה להמשיך לצחוק? <img alt="🙂" class="_1ift _2560 img" src="https://static.xx.fbcdn.net/images/emoji.php/v9/z4c/1/16/1f642.png">',
          isRtl: true,
        },
      ],
      author: 'adam',
    },
    {
      content: [
        { type: 'text', html: 'איזו רגשות\n', isRtl: true },
        { type: 'text', html: 'לעצב?\n', isRtl: true },
        { type: 'text', html: 'בטח שלא\n', isRtl: true },
      ],
      author: 'other',
    },
    {
      content: [{ type: 'text', html: 'בטח שלא\nבדיוק\n', isRtl: true }],
      author: 'adam',
    },
    {
      content: [{ type: 'text', html: 'לצחוקקק!!!\n', isRtl: true }],
      author: 'other',
    },
    {
      content: [
        {
          type: 'sticker',
          style:
            'background-image: url(http://res.cloudinary.com/goldylucks/image/upload/v1504164954/stickers/sticker-tounge.png); background-repeat: no-repeat; background-size: 120px 120px; height: 120px; width: 120px;',
        },
      ],
      author: 'adam',
    },
    {
      content: [
        {
          type: 'text',
          html: 'עכשיו לפני שממשיכים\nאם בא לך, ואני ממש אשמח\n',
          isRtl: true,
        },
        {
          type: 'textWithHtml',
          html:
            '<span>לתת ביקורת בעמוד, שעוד אנשים ילמדו ממך מה אפשרי</span><br><a target="_blank" href="https://www.facebook.com/pg/adamgoldman.me/reviews/">https://www.facebook.com/pg/adamgoldman.me/reviews/</a>',
          isRtl: true,
        },
      ],
      author: 'adam',
    },
    { content: [{ type: 'text', html: 'כן\n', isRtl: true }], author: 'other' },
    {
      content: [
        {
          type: 'image',
          src:
            'https://scontent.fskg1-1.fna.fbcdn.net/v/t35.0-0/p480x480/22711675_1496603220415903_1152451256_o.png?oh=e5ddfb8187c7bdda8c1df4e4d78e9e9b&oe=59FA0A30',
          isRtl: false,
        },
      ],
      author: 'adam',
    },
    { content: [{ type: 'likeSticker' }], author: 'other' },
    {
      content: [
        {
          type: 'text',
          html: 'ואם לא זה גם בסדר\n\nתגידי לי בכל מקרה כשאת מוכנה להמשיך\n',
          isRtl: true,
        },
      ],
      author: 'adam',
    },
    {
      content: [
        { type: 'text', html: 'זה העיקרון נכון\n', isRtl: true },
        {
          type: 'text',
          html: 'כך אני יכולה לעבוד עם כל זכרון נכון?\n',
          isRtl: true,
        },
        { type: 'text', html: 'אני מוכנה להמשיך\n', isRtl: true },
      ],
      author: 'other',
    },
    {
      content: [
        {
          type: 'text',
          html: 'ככה את יכולה לעבוד אם כל זיכרון, כן\n',
          isRtl: true,
        },
        { type: 'text', html: 'עם רובם הגדול\n', isRtl: true },
        {
          type: 'text',
          html: 'אבל יש סוג זכרון אחד שבשביל זה נעשה משהו אחר\n',
          isRtl: true,
        },
        {
          type: 'text',
          html: 'זכרונות של געגועים לאנשים, או הרגשה של אבל או אבדן\n',
          isRtl: true,
        },
        { type: 'text', html: 'זה נשאיר ליותר מאוחר\n', isRtl: true },
        {
          type: 'text',
          html: '"כך אני יכולה לעבוד עם כל זכרון נכון?"\nמעולה מעולה ששאלת\n',
          isRtl: true,
        },
      ],
      author: 'adam',
    },
    {
      content: [
        { type: 'text', html: 'כתבתי לך משוב...\n', isRtl: true },
        { type: 'text', html: 'עולה זה ממש מרגש אותי\n', isRtl: true },
      ],
      author: 'other',
    },
    {
      content: [
        {
          type: 'textWithEmoticon',
          html:
            'ראיתי תודה <img alt="🙂" class="_1ift _2560 img" src="https://static.xx.fbcdn.net/images/emoji.php/v9/z4c/1/16/1f642.png">',
          isRtl: true,
        },
        { type: 'text', html: 'וזאת רק ההתחלה\n', isRtl: true },
        { type: 'text', html: 'זהכלי אחד\n', isRtl: true },
        { type: 'text', html: 'שלמדת ממש מהר\n', isRtl: true },
        {
          type: 'text',
          html:
            'ויש עוד הרבההההההההההההה דורה\nהרבה דברים שהולכים להשתפר בחיים שלך\n',
          isRtl: true,
        },
        { type: 'text', html: 'וכמו שראית, הכל מאוד פשוט\n', isRtl: true },
        {
          type: 'text',
          html: 'לפעמים לוקח כמה דקות, לפעמים לוקח קצת יותר\n',
          isRtl: true,
        },
      ],
      author: 'adam',
    },
    {
      content: [
        { type: 'text', html: 'תודה לבריאה שהפגישה אותי אתך..\n', isRtl: true },
      ],
      author: 'other',
    },
    {
      content: [
        {
          type: 'text',
          html:
            'וכל עוד את רוצה להמשיך וללמוד להרגיש יותר טוב ולבנות עתיד מזהיר יותר,\nאני לרשותך\n',
          isRtl: true,
        },
        { type: 'text', html: 'ולרשות כל יקירייך\n', isRtl: true },
        { type: 'text', html: 'עכשיו תראי\n', isRtl: true },
      ],
      author: 'adam',
    },
    {
      content: [{ type: 'text', html: 'תודה מכל הלב..\n', isRtl: true }],
      author: 'other',
    },
    {
      content: [
        {
          type: 'text',
          html:
            'יש לך את כל התהליך שעשינו פה בפייסבוק\nאת יכולה לגלול קצת למעלה ולקרוא אותו שוב\n\nואז תבחרי זכרון אחר לעשות אותו\n',
          isRtl: true,
        },
        { type: 'text', html: 'ותגידי לי איך היה\n', isRtl: true },
        { type: 'text', html: 'ואם את רוצה הכוונה קצת\n', isRtl: true },
        {
          type: 'textWithEmoticon',
          html:
            'זאת בכל זאת הפעם  השנייה שלך <img alt="🙂" class="_1ift _2560 img" src="https://static.xx.fbcdn.net/images/emoji.php/v9/z4c/1/16/1f642.png">',
          isRtl: true,
        },
        {
          type: 'text',
          html: '(ואת ממש לומדת מהר, הרשמת אותי מאוד)\n',
          isRtl: true,
        },
      ],
      author: 'adam',
    },
    {
      content: [
        {
          type: 'text',
          html: 'אתה עובד עם עוד אנשים מהפעם הזו שאני עניתי לך?\n',
          isRtl: true,
        },
      ],
      author: 'other',
    },
    {
      content: [
        {
          type: 'text',
          html:
            'אני עושה את זה כבר כמה שנים, עובד עם כמה עשרות במקביל כל הזמן\n\nמהקבוצה של הפייס  שאת חברה בה, בנתיים יש 5\n',
          isRtl: true,
        },
      ],
      author: 'adam',
    },
    {
      content: [
        { type: 'text', html: 'הצילום שלך זו תמונה שלך?\n', isRtl: true },
        { type: 'text', html: 'אם כן אתה בול עידן רייכל\n', isRtl: true },
      ],
      author: 'other',
    },
    {
      content: [
        {
          type: 'text',
          html: 'חחחחחחח כה אומרים לי את זה לא מעט\n',
          isRtl: true,
        },
        {
          type: 'text',
          html: 'תגידי לי אחרי שאת עושה את אותו תהליך על זכרון אחר\n',
          isRtl: true,
        },
        { type: 'text', html: 'ואם את רוצה קצת הנחיות\n', isRtl: true },
      ],
      author: 'adam',
    },
    { content: [{ type: 'likeSticker' }], author: 'other' },
    {
      content: [
        {
          type: 'text',
          html: 'איך קוראים לטכניקה  הזו והיכן לומדים?\n',
          isRtl: true,
        },
        {
          type: 'text',
          html:
            'אתה יודע אני עכשיו מנסה לחזור לזכרון השלילי שוב ..הוא איננו יש שם רק חיוך...ואהבה וחמלה\n',
          isRtl: true,
        },
      ],
      author: 'other',
    },
    {
      content: [
        {
          type: 'textWithEmoticon',
          html:
            'לומדים אצלי <img alt="🙂" class="_1ift _2560 img" src="https://static.xx.fbcdn.net/images/emoji.php/v9/z4c/1/16/1f642.png">',
          isRtl: true,
        },
        { type: 'text', html: 'בדיוק!\n', isRtl: true },
        {
          type: 'text',
          html: 'רק חיוך ...\nאהבה ...\nוחמלה ...\n',
          isRtl: true,
        },
        {
          type: 'text',
          html:
            'ויש עוד הרבה חיוכים ...\nוהרבה אהבות ..\nוהרבה חמלות ..\n\nשחיכו לך יותר מדי זמן\n',
          isRtl: true,
        },
        { type: 'text', html: 'ומחכים שתגלי אותם\n', isRtl: true },
        { type: 'text', html: 'ועוד יותר\n', isRtl: true },
      ],
      author: 'adam',
    },
    {
      content: [
        { type: 'text', html: 'כן תודה...אני ממש מרוגשת..\n', isRtl: true },
      ],
      author: 'other',
    },
    {
      content: [
        {
          type: 'text',
          html: 'שמח שאת אוהבת\nאנחנו רק מתחילים\n',
          isRtl: true,
        },
      ],
      author: 'adam',
    },
    {
      content: [
        {
          type: 'textWithEmoticon',
          html:
            'בנתיים אני אנסה לעבוד על עוד זכרון זה יקח לי קצת זמן אולי זה ידחה למחר..<img alt="☺" class="_1ift _2560 img" src="https://static.xx.fbcdn.net/images/emoji.php/v9/zfb/1/16/263a.png">',
          isRtl: true,
        },
      ],
      author: 'other',
    },
    {
      content: [
        {
          type: 'textWithEmoticon',
          html:
            'יש זמן, כולנו צעירים <img alt="😉" class="_1ift _2560 img" src="https://static.xx.fbcdn.net/images/emoji.php/v9/z57/1/16/1f609.png">',
          isRtl: true,
        },
      ],
      author: 'adam',
    },
    { author: 'time', content: 'OCT 22ND, 6:40PM' },
    {
      content: [
        { type: 'text', html: 'ערב טוב אדם\n', isRtl: true },
        {
          type: 'text',
          html:
            'אני מנסה לעבוד על הזיכרון של היום שנודע לי שאני עם סרטן שד ממאיר...מוצאת הזכרון אך לא רואה תנועה אלא תמונה קפואה..איך ממשיכים משם ?\n',
          isRtl: true,
        },
      ],
      author: 'other',
    },
    {
      content: [
        {
          type: 'text',
          html: 'אכן, על תמונות קפואות, יש תהליך אחר\n',
          isRtl: true,
        },
        {
          type: 'text',
          html: 'על כמה זכרונות עשית את התהליך שעשית איתי?\n',
          isRtl: true,
        },
        { type: 'text', html: 'ואיך היה?\n', isRtl: true },
      ],
      author: 'adam',
    },
    { content: [{ type: 'text', html: '2\n', isRtl: false }], author: 'other' },
    {
      content: [
        {
          type: 'text',
          html:
            'תזכרי שאני פה איתך בפייסבוק,\nולא רואה את הפנים שלך, את צריכה להגיד לי מה את עושה\n',
          isRtl: true,
        },
      ],
      author: 'adam',
    },
    {
      content: [{ type: 'text', html: 'היה מדהים...\n', isRtl: true }],
      author: 'other',
    },
    {
      content: [
        { type: 'text', html: 'אז עשית על 2 בסך הכל?\n', isRtl: true },
        { type: 'text', html: 'או 3?\n', isRtl: true },
      ],
      author: 'adam',
    },
    {
      content: [
        { type: 'text', html: '2\n', isRtl: false },
        { type: 'text', html: 'וזה השלישי\n', isRtl: true },
      ],
      author: 'other',
    },
    {
      content: [
        { type: 'text', html: 'אוקיי\n', isRtl: true },
        { type: 'text', html: 'לתמונה הקפואה הזאת אנחנו נחזור\n', isRtl: true },
        {
          type: 'text',
          html:
            'בנתיים, יש לך עוד זכרונות מהעבר עליהם את יכולה לעשות את התהליך?\n',
          isRtl: true,
        },
      ],
      author: 'adam',
    },
    {
      content: [
        {
          type: 'text',
          html:
            'בתמונה הקפואה הזו אני לא רואה ולא מרגישה כלום..לא עצב לא כעס לא שמחה כלום אני חושבת שאני בהלם טוטאלי ורק עכשיו כשאני מנסה לשחזר את הסיטואציה אני  מבינה שהייתי בהלם בשוק..כי הייתי בטוחה שאין לי סרטן\n',
          isRtl: true,
        },
      ],
      author: 'other',
    },
    {
      content: [
        { type: 'text', html: 'אוקיי\n', isRtl: true },
        { type: 'text', html: 'לתמונה הזאת אנחנו נחזור\n', isRtl: true },
      ],
      author: 'adam',
    },
    {
      content: [{ type: 'text', html: 'יש לי עוד זכרון שלילי\n', isRtl: true }],
      author: 'other',
    },
    {
      content: [
        {
          type: 'textWithHtml',
          html:
            '<span>בנתיים, תכתבי פה במסמך, על איזה זכרונות עשית את התהליך</span><br><a target="_blank" href="https://l.messenger.com/l.php?u=https%3A%2F%2Fdocs.google.com%2Fdocument%2Fd%2F13kBMviocVF2LyF0BHN7a9dcnLpqUD4uwvRl682nw724%2Fedit&amp;h=ATOFfG6IwkHJoLsBrU-peMezk5jraSqZOhVVY2xKLygI_uJCiB6UHNAF77JB2HD_47l_cAhys5a8_Z-RWH47bpw37r_3i7YFA5za_BJRRicmBSZabYWUPldpvaKfK4Fo8GIYlg" rel="nofollow noopener">https://docs.google.com/document/d/13kBMviocVF2LyF0BHN7a9dcnLpqUD4uwvRl682nw724/edit#</a>',
          isRtl: true,
        },
        { type: 'text', html: 'שיהיה לנו מעקב\n', isRtl: true },
      ],
      author: 'adam',
    },
    { content: [{ type: 'likeSticker' }], author: 'other' },
    {
      content: [
        {
          type: 'text',
          html: 'האם אני צריכה להוריד את האפליקציה כדי לרשום?\n',
          isRtl: true,
        },
      ],
      author: 'other',
    },
    {
      content: [
        { type: 'text', html: 'אם את במחשב אז לא\n', isRtl: true },
        { type: 'text', html: 'תרשמי אחר כך, לא דחוף\n', isRtl: true },
      ],
      author: 'adam',
    },
    {
      content: [{ type: 'text', html: 'אני עובדת  בפלאפון\n', isRtl: true }],
      author: 'other',
    },
    {
      content: [
        { type: 'text', html: 'אוקיי\n', isRtl: true },
        { type: 'text', html: 'אז עשית כבר על 2 זכרונות\n', isRtl: true },
        {
          type: 'text',
          html: 'ויש את התמונה הקפואה שנשים בצד לבנתיים\n',
          isRtl: true,
        },
      ],
      author: 'adam',
    },
    {
      content: [
        {
          type: 'text',
          html:
            'כן  אפשר לעזוב  בצד בנתיים רוצה להעיד על זיכרון מלפני 4 שנים, 13 שנות עבודה כמנהלת חנויות של דניאלה לנביא אילצו אותי להתפטר... זיכרון שלילי מלא באכזבה..כאב עמיר בנשמה איך וויתרו עלי ככה ..אחרי 13 שנה כה"מנהלת" עם המון המון השגים והצלחות בחנויות שניהלתי..\n',
          isRtl: true,
        },
        { type: 'text', html: 'את זה אני רואה במלא תנועה ..\n', isRtl: true },
      ],
      author: 'other',
    },
    {
      content: [
        {
          type: 'text',
          html: 'איזה חלק את רואה בתנועה?\nהרגע שבו בישרו לך?\n',
          isRtl: true,
        },
      ],
      author: 'adam',
    },
    {
      content: [
        {
          type: 'text',
          html:
            'הכל...כמו סרט לפני שאמרו לי שאין להם מה להציע לי אם אני רוצה לעזוב את הניהול של החנות מסויימת שניהלתי שנתיים..אז הם מצאו פתרון בלהגיד לי תהיי מוכרת במקום מנהלת...וזה לא היה מקובל עלי\n',
          isRtl: true,
        },
      ],
      author: 'other',
    },
    {
      content: [
        { type: 'text', html: 'אוקיי\n', isRtl: true },
        { type: 'text', html: 'תעשי על זה את התהליך\n', isRtl: true },
        { type: 'text', html: 'ותרגישי מה קורה\n', isRtl: true },
      ],
      author: 'adam',
    },
    { content: [{ type: 'likeSticker' }], author: 'other' },
    {
      content: [
        { type: 'text', html: 'וואוו!!!\nמדהים...\n', isRtl: true },
        { type: 'text', html: 'עשיתי א  זה\n', isRtl: true },
        {
          type: 'text',
          html:
            'אני חוזרת להתחלה של הזיכרון ואין שם שום כאב שום אכזבה..הכל בסדר כפי שהיה...אני שמחה..\n',
          isRtl: true,
        },
      ],
      author: 'other',
    },
    {
      content: [
        { type: 'text', html: 'אההההה\n', isRtl: true },
        { type: 'text', html: 'מעולה\n', isRtl: true },
        { type: 'text', html: 'איזה קטע זה הא\n', isRtl: true },
        {
          type: 'text',
          html:
            'תארי לך\nאנשים "רגילים" נזכרים בעבר שלהם\nומפחדים להתקל בזכרונות \n\nכשאני נזכר בעבר, או שאני נזכר במשו טוב,\nאו שנזכר במשו שעדיין לא הפכתי לזכרון שמח\n\nוזה אחלה של מקום להיות בו!\n',
          isRtl: true,
        },
      ],
      author: 'adam',
    },
    {
      content: [
        { type: 'text', html: 'זכרון של הפיטורים שלי\n', isRtl: true },
        {
          type: 'text',
          html:
            'כרגע אני מרגישה שאין לזה שום משמעות עבורי..יא איזה משקל נתתי לזה כשזה קרה...זה היה אחד הטריגרים שהביאו לי את הסרטן\n',
          isRtl: true,
        },
        {
          type: 'text',
          html:
            'הכי מצחיק כשאני עוברת אחורה בהילוך מהיר...אני אפילו שומעת קולות כמו ששומעים בסרטים מצויירים וזה ממש משעשע אותי!',
          isRtl: true,
        },
      ],
      author: 'other',
    },
    {
      content: [
        {
          type: 'text',
          html: 'וזה היה אחד הטריגים שהביאו לך את הסרטן\n',
          isRtl: true,
        },
        { type: 'text', html: 'אז חלק גדול כבר יצא\n', isRtl: true },
      ],
      author: 'adam',
    },
    {
      content: [
        { type: 'text', html: 'כן\n', isRtl: true },
        { type: 'text', html: 'כך אני חושבת\n', isRtl: true },
      ],
      author: 'other',
    },
    {
      content: [
        { type: 'text', html: 'אמת\n', isRtl: true },
        { type: 'text', html: 'עכשיו\n', isRtl: true },
        { type: 'text', html: 'אני חוזר בקרוב\n', isRtl: true },
        {
          type: 'text',
          html: 'תחפשי עוד זכרון לעשות את התהליך\n',
          isRtl: true,
        },
        {
          type: 'text',
          html: 'שימי לב גם כמה את יכולה להפוך את זה ליותר ויותר מגוחך\n',
          isRtl: true,
        },
        { type: 'text', html: 'כמו הסרטים המצויירים\n', isRtl: true },
        { type: 'text', html: 'ותגידי לי כשאת מסיימת\n', isRtl: true },
        {
          type: 'text',
          html: 'אנחנו רוצים להגיע למצב שבו כל מה שיש לך זה רגשות טובים\n',
          isRtl: true,
        },
      ],
      author: 'adam',
    },
    { content: [{ type: 'likeSticker' }], author: 'other' },
    { author: 'time', content: 'TUE 6:08PM' },
    {
      content: [
        { type: 'text', html: 'ערב טוב אדם\n', isRtl: true },
        {
          type: 'text',
          html:
            'לפני כמה דקות סיימתי עם תהליך עבודה על זכרון נוסף.\nרשמתי לך באפליקציה על כל הזכרונות שעבדתי עליהם.\n',
          isRtl: true,
        },
      ],
      author: 'other',
    },
    { author: 'time', content: 'TUE 10:44PM' },
    {
      content: [
        { type: 'text', html: 'מעולה\n', isRtl: true },
        {
          type: 'text',
          html:
            'מה עם זה:\nרוצה לנסוע עם חברים פנימיה לבקר בטורקיה לחופש לא התאפשר - אכזבה, עצב\n',
          isRtl: true,
        },
      ],
      author: 'adam',
    },
    {
      content: [
        {
          type: 'text',
          html: 'זה ממש מטריד אותי כבר אין לזה משמעות  עבורי היום\n',
          isRtl: true,
        },
      ],
      author: 'other',
    },
    {
      content: [
        {
          type: 'text',
          html: 'זה ממש מטריד? או שאין לזה משמעות?\n',
          isRtl: true,
        },
      ],
      author: 'adam',
    },
    {
      content: [
        { type: 'text', html: 'לא מטריד ואין לזה משמעות\n', isRtl: true },
      ],
      author: 'other',
    },
    {
      content: [
        {
          type: 'text',
          html: 'ועל זה לא עשית תהליך  ישירות נכון?\n',
          isRtl: true,
        },
      ],
      author: 'adam',
    },
    {
      content: [{ type: 'text', html: 'נכון\n', isRtl: true }],
      author: 'other',
    },
    {
      content: [
        { type: 'text', html: 'מעולה\n', isRtl: true },
        {
          type: 'text',
          html: 'אז המח שלך מכליל את מה שהוא למד\n',
          isRtl: true,
        },
        { type: 'text', html: 'כמה זמן לקח לך הסיבוב האחרון?\n', isRtl: true },
      ],
      author: 'adam',
    },
    {
      content: [{ type: 'text', html: 'גם אני הרגשתי את זה\n', isRtl: true }],
      author: 'other',
    },
    {
      content: [
        {
          type: 'text',
          html: 'כמה זמן לקח לך להפוך את הזכרון האחרון לחיובי?\n',
          isRtl: true,
        },
      ],
      author: 'adam',
    },
    {
      content: [
        {
          type: 'text',
          html:
            'ממש קצר .. קטע של מוזיקת הקרקס ממש משעשע ..מצחיק כי אני מרגישה שאני בתוך סרט מצוייר..עם קולות ודיבורים לא מובנים\n',
          isRtl: true,
        },
        {
          type: 'text',
          html:
            'אני כל הזמן חוזרת לזכרונות הללו ונוכחת לדעת שהם עוברים לידי ללא שום השפעה כאילו שזו לא אני מעורבת בהם\n',
          isRtl: true,
        },
      ],
      author: 'other',
    },
    {
      content: [
        { type: 'text', html: 'אוקיי\n', isRtl: true },
        {
          type: 'text',
          html: 'מה מונע ממך לעשות את התהליך על כל שאר הזכרונות שרשמת לי?\n',
          isRtl: true,
        },
      ],
      author: 'adam',
    },
    {
      content: [
        {
          type: 'text',
          html:
            'עבדתי על הזכרונות שהכי השפיעו עלי רשמתי אותם כזכרונות שליליים כי הם ניו כאלה אך ההשפעה שלהם על חיי לא היו כל כך משמעותיים כמו השאר\n',
          isRtl: true,
        },
      ],
      author: 'other',
    },
    {
      content: [
        { type: 'text', html: 'כמו השאר?\n', isRtl: true },
        {
          type: 'text',
          html:
            'אוקיי נעבור רגע אחד אחד\nמה עם זה:\n\n"56 - בעל נפטר מסרטן\n\nבעקבות זה התמוטטות עצבים אשפוז של יומיים..שאחרי זה התנהלתי כמו רובוט..\n"\n',
          isRtl: true,
        },
      ],
      author: 'adam',
    },
    {
      content: [
        { type: 'text', html: 'נכון לא עשיתי על זה עבודה...\n', isRtl: true },
      ],
      author: 'other',
    },
    {
      content: [
        { type: 'text', html: 'עדיין לא?\nאוקיי\n', isRtl: true },
        {
          type: 'text',
          html: 'עכשיו תראי חשוב להפריד כאן שני דברים\n',
          isRtl: true,
        },
        {
          type: 'text',
          html:
            'יש את הרגע שקיבלת את הידיעה\nיש את ההתנהלות שלך אחרי\n"כמו רובוט"\n\nוגם, יש  את מה שאתה מרגישה כלפי בעלך\n',
          isRtl: true,
        },
        {
          type: 'text',
          html: 'עכשיו שאת חושבת על בעלך, איזה רגשות עולים?\n',
          isRtl: true,
        },
      ],
      author: 'adam',
    },
    {
      content: [{ type: 'text', html: 'הבנתי\n', isRtl: true }],
      author: 'other',
    },
    {
      content: [
        { type: 'text', html: 'יש געגוע / חוסר / אבל ?\n', isRtl: true },
      ],
      author: 'adam',
    },
    {
      content: [
        { type: 'text', html: 'רק אהבה\n', isRtl: true },
        { type: 'text', html: 'חמלה\n', isRtl: true },
        { type: 'text', html: 'געגוע\n', isRtl: true },
        { type: 'text', html: 'הוא חסר לי מאוד\n', isRtl: true },
      ],
      author: 'other',
    },
    {
      content: [
        { type: 'text', html: 'אוקיי\n', isRtl: true },
        { type: 'text', html: 'על זה נעשה משהו אחר\n', isRtl: true },
        {
          type: 'text',
          html: 'בשביל להעצים את הנוכחות שלו ושל הזכרונות ממנו חיים שלך\n',
          isRtl: true,
        },
        { type: 'text', html: 'אבל קודם\n', isRtl: true },
        {
          type: 'text',
          html: 'כשאת נזכרת ברגע שהודיעו לך שהוא נפטר\n',
          isRtl: true,
        },
        { type: 'text', html: 'אני מניח שזה לא זכרון חיובי\n', isRtl: true },
      ],
      author: 'adam',
    },
    {
      content: [
        { type: 'text', html: 'לא הודיעו לי הייתי איתו\n', isRtl: true },
        {
          type: 'text',
          html:
            'ברור שלא למרות שביקשנו אני והילדים שזה יגמר כי הוא סבל סבל לא אנושי\n',
          isRtl: true,
        },
      ],
      author: 'other',
    },
    {
      content: [
        { type: 'text', html: 'ואמרת גם\n', isRtl: true },
        {
          type: 'text',
          html:
            '"בעקבות זה התמוטטות עצבים אשפוז של יומיים..שאחרי זה התנהלתי כמו רובוט.."\n',
          isRtl: true,
        },
        { type: 'text', html: 'מתי זה נגמר?\n', isRtl: true },
        {
          type: 'textWithEmoticon',
          html:
            'או שאני מדבר עכשיו עם רובוט? <img alt="😀" class="_1ift _2560 img" src="https://static.xx.fbcdn.net/images/emoji.php/v9/zce/1/16/1f600.png">',
          isRtl: true,
        },
      ],
      author: 'adam',
    },
    {
      content: [
        {
          type: 'text',
          html:
            'כל זה קרה כשהרופא אמר לי בהתחלה שאין מה לעשות עבורו  וידעתי שהוא ימות זה רק ענין של זמן ..כשחזרנו מהבית חולים אחרי 10 חמי אשפוז שלו אותו לילה קרתה ההתמוטטות\n',
          isRtl: true,
        },
      ],
      author: 'other',
    },
    {
      content: [
        { type: 'text', html: 'אוקיי\n', isRtl: true },
        {
          type: 'text',
          html:
            'אז הזכרון השלילי זה על כל התקופה מאז האבחון שלו, ועד סיום האשפוז של יומיים שלך?\n',
          isRtl: true,
        },
      ],
      author: 'adam',
    },
    {
      content: [
        {
          type: 'text',
          html: 'ואחרי כל זה כשהתחיל טיפולים מיד ממש כאילו\n',
          isRtl: true,
        },
        {
          type: 'text',
          html: 'עד שהוא נפטר שנתיים ושמונה חודשים בדיוק\n',
          isRtl: true,
        },
      ],
      author: 'other',
    },
    {
      content: [{ type: 'text', html: 'ואחרי שהוא נפטר?\n', isRtl: true }],
      author: 'adam',
    },
    {
      content: [
        {
          type: 'text',
          html:
            'הייתה הקלה מאוד גדולה בשבילי ואז היו לי רגעים שהרגשתי רגשי אשמה כי הרבה שנים רציתי להפיג ממנו כשהוא חלה לא עזבתי ..סעדתי טיפלתי ..המכל הלב עם המון אהבה..\n',
          isRtl: true,
        },
      ],
      author: 'other',
    },
    {
      content: [
        { type: 'text', html: 'אוקיי תראי\n', isRtl: true },
        {
          type: 'text',
          html: 'את יכולה לעשות את התהליך על כל התקופה הזאת\n',
          isRtl: true,
        },
        { type: 'text', html: 'מהרגע שהוא קיבל את האבחנה\n', isRtl: true },
        {
          type: 'text',
          html: 'ועד לאחרי שנפטר\nואחרי האשפוז וכל זה\n',
          isRtl: true,
        },
        {
          type: 'text',
          html: 'רק שימי לב, שאת לא עושה את זה על רגעים חיוביים איתו\n',
          isRtl: true,
        },
      ],
      author: 'adam',
    },
    {
      content: [
        {
          type: 'text',
          html: 'זה תהליך מאוד ארוך כי זה על פני כמעט 3 שנים...\n',
          isRtl: true,
        },
        {
          type: 'text',
          html:
            'כשאני אומרת 3 שנים  לא היה כל הזמן שלילי הכל פשוט היה קושי..הייתי מוטשת..פעמיים בשבוע בבית חולים כימו ועל זה שכרוך בזה זה שלילי כי היתה מחלה קשה מאוד  ..התמודדות יומיומית\n',
          isRtl: true,
        },
      ],
      author: 'other',
    },
    {
      content: [
        {
          type: 'text',
          html:
            'תראי\nאת לא צריכה לעבור דרך כל פרט ופרט\n\nבעיקר על הרגעים שהיו חזקים יותר\n\nוגם תזכרי שהאפקט יהיה חיובי בכל מקרה, גם אם תפספסי קצת חלקים, תוכלי לעשות  את זה שוב\n',
          isRtl: true,
        },
        {
          type: 'text',
          html: 'כבר ראית שהמח שלך הכליל הרבה מהלמידה הזאת\n',
          isRtl: true,
        },
        {
          type: 'text',
          html: 'והתהליך כבר כמעט אוטומאטי בחלקים מסויימים\n',
          isRtl: true,
        },
        {
          type: 'text',
          html: 'הדבר הכי חשוב זה נקודת ההתחלה ונקודת הסוף\n',
          isRtl: true,
        },
      ],
      author: 'adam',
    },
    {
      content: [
        { type: 'text', html: 'נכון אתה צודק\n', isRtl: true },
        { type: 'text', html: 'למה הכוונה\n', isRtl: true },
      ],
      author: 'other',
    },
    {
      content: [
        {
          type: 'textWithHtml',
          html:
            '<span>תזכרי שההתחלה היא תמיד </span><b><span class="_3oh- _58nk"><span>לפני</span></span></b><span> שמשהו קרה</span>',
          isRtl: true,
        },
        {
          type: 'text',
          html: 'כלומר את רואה את עצמך בסיטואציה שהיא נייטרלית לחלוטין\n',
          isRtl: true,
        },
        {
          type: 'text',
          html: 'לפני שאת יודעת שאת הולכת לקבל את הידעה על האבחון שהיה לו\n',
          isRtl: true,
        },
        { type: 'text', html: 'מבינה?\n', isRtl: true },
      ],
      author: 'adam',
    },
    {
      content: [{ type: 'text', html: 'זו נקודת ההתחלה נכון\n', isRtl: true }],
      author: 'other',
    },
    {
      content: [
        { type: 'text', html: 'בדיוק\n', isRtl: true },
        { type: 'text', html: 'ונקודת הסוף היא אחרי\n', isRtl: true },
        {
          type: 'text',
          html: 'כשאת רואה את עצמך אחרי אחרי שהכל נגמר\n',
          isRtl: true,
        },
        { type: 'text', html: 'וזה גם סיטואציה נייטרלית\n', isRtl: true },
      ],
      author: 'adam',
    },
    {
      content: [
        {
          type: 'text',
          html: 'הבנתי אז לעשות את אותו התהליך על הזכרון הזה גם\n',
          isRtl: true,
        },
      ],
      author: 'other',
    },
    {
      content: [
        { type: 'text', html: 'כן\n', isRtl: true },
        { type: 'text', html: 'על כל ה3 שנים\n', isRtl: true },
        { type: 'text', html: 'מה שיוצא\n', isRtl: true },
        {
          type: 'text',
          html: 'כאן המח שלך יעשה הרבה עבודה בשבילך, מבלי שתהיה מודעת\n',
          isRtl: true,
        },
      ],
      author: 'adam',
    },
    {
      content: [
        { type: 'text', html: 'או קי.. מחר אני אעבוד על זה..\n', isRtl: true },
      ],
      author: 'other',
    },
    {
      content: [
        { type: 'text', html: 'אוקיי מעולה\n', isRtl: true },
        { type: 'text', html: 'תגידי לי איך היה כשמסיימת\n', isRtl: true },
      ],
      author: 'adam',
    },
    {
      content: [
        {
          type: 'textWithEmoticon',
          html:
            'בטח...תודה רבה על הכל .בנתיים לילה טוב<img alt="😍" class="_1ift _2560 img" src="https://static.xx.fbcdn.net/images/emoji.php/v9/z2/1/16/1f60d.png">',
          isRtl: true,
        },
      ],
      author: 'other',
    },
    {
      content: [
        { type: 'text', html: 'הלכתי לישון\nלילה טוב\n', isRtl: true },
        {
          type: 'text',
          html: 'תזכרי שאם יש לך חלומות חזקים היום\nזה טבעי\n',
          isRtl: true,
        },
        {
          type: 'text',
          html: 'זה המח שלך עושה בשבילך עוד ועוד עבודה\n',
          isRtl: true,
        },
      ],
      author: 'adam',
    },
    { content: [{ type: 'likeSticker' }], author: 'other' },
    { author: 'time', content: 'THU 3:57PM' },
    {
      content: [
        { type: 'text', html: 'היי אדם\n', isRtl: true },
        {
          type: 'text',
          html:
            'האם יכול להיות שהמח שלי עושה את התהליך בצורה אוטומטית  בלי  צורך לעבור את כל התהליך\n',
          isRtl: true,
        },
      ],
      author: 'other',
    },
    {
      content: [
        {
          type: 'textWithEmoticon',
          html:
            'כן, בשלב מסויים המח מבין את התהליך ועושה אותו "בלי לשאול אותך" <img alt="🙂" class="_1ift _2560 img" src="https://static.xx.fbcdn.net/images/emoji.php/v9/z4c/1/16/1f642.png">',
          isRtl: true,
        },
        { type: 'text', html: 'לשם אנחנו מכוונים\n', isRtl: true },
        { type: 'text', html: 'לתת למח שלך עוד ועוד כלים\n', isRtl: true },
        { type: 'text', html: 'שיעבדו בצורה חלקה ואטומאטית\n', isRtl: true },
      ],
      author: 'adam',
    },
    {
      content: [{ type: 'text', html: 'הגעתי\n', isRtl: true }],
      author: 'other',
    },
    {
      content: [
        {
          type: 'text',
          html: 'ככה שאת תוכלי להתעסק בליהנות מחייך\n',
          isRtl: true,
        },
        { type: 'text', html: 'מאהובייך\n', isRtl: true },
        { type: 'text', html: 'וליצור\n', isRtl: true },
      ],
      author: 'adam',
    },
    {
      content: [{ type: 'text', html: 'אני כבר שם\n', isRtl: true }],
      author: 'other',
    },
    {
      content: [
        { type: 'text', html: 'אמת', isRtl: true },
        { type: 'text', html: 'מעולה\n', isRtl: true },
        { type: 'text', html: 'וזה תהליך אחד\n', isRtl: true },
        { type: 'text', html: 'יש המוווווווון\n', isRtl: true },
        { type: 'text', html: 'אז עשית את התהליך על הכל?\n', isRtl: true },
      ],
      author: 'adam',
    },
    { author: 'time', content: 'THU 5:27PM' },
    {
      content: [
        {
          type: 'text',
          html:
            'כשהתחלתי עם התהליך על הזכרון עם המחלה של בעלי וכל זה עבר מהתחלה  הרגשתי  שזה לא מזיז לי בכלל... זה עובר לידי...לפני זה כשהייתי נזכרת היה לי עצב בלב ועכשיו כל זכרון שלילי שכתבתי הם כבר כאילו לא זכרונות שלי..יכול להיות דבר כזה?\n',
          isRtl: true,
        },
      ],
      author: 'other',
    },
    {
      content: [
        { type: 'text', html: 'אני ממזמן יודע שכן:)\n', isRtl: true },
        {
          type: 'text',
          html: 'ועכשיו יש לך חובה לספר לכמה שיותר אנשים:)\n',
          isRtl: true,
        },
      ],
      author: 'adam',
    },
    {
      content: [
        {
          type: 'text',
          html: 'מאז שהתחלתי לעבור את התהליך אתך אני בן אדם יותר שמח ומרוגש\n',
          isRtl: true,
        },
      ],
      author: 'other',
    },
    {
      content: [{ type: 'text', html: 'אז תגידי\n', isRtl: true }],
      author: 'adam',
    },
    {
      content: [
        {
          type: 'text',
          html: 'אני מספרת לכולם אנשים מסתכלים עלי כאילו נפלתי מהשמיים\n',
          isRtl: true,
        },
        {
          type: 'text',
          html:
            'לא חושבת שכל אחד יכול להגיע לזה צריך להיות עם דמיון מפותח מאוד בשביל זה\n',
          isRtl: true,
        },
      ],
      author: 'other',
    },
    {
      content: [
        { type: 'text', html: 'לכולם יש דמיון מפותח\n', isRtl: true },
        { type: 'text', html: 'אבל הרבה אנשים עוד מפחדים ממנו\n', isRtl: true },
      ],
      author: 'adam',
    },
    {
      content: [{ type: 'text', html: 'יכול להיות..\n', isRtl: true }],
      author: 'other',
    },
    {
      content: [
        {
          type: 'text',
          html: 'בדיוק בגלל שהם מפחדים ממה שאנשים אחרים חושבים\n',
          isRtl: true,
        },
        { type: 'text', html: 'אבל את צללת ישר פנימה\n', isRtl: true },
        { type: 'text', html: 'ולכן את לומדת מאוד מהר\n', isRtl: true },
        { type: 'text', html: 'ואין לדעת לאן עוד תגיעי\n', isRtl: true },
        { type: 'text', html: 'וכמה תחלימי\n', isRtl: true },
        { type: 'text', html: 'אני מאוד מסוקרן לגלות\n', isRtl: true },
        {
          type: 'text',
          html:
            'וגם\nכמו שאת תראי\n\nהדרך הכי טובה, מהירה, ויעילה, להשפיע על אנשים אחרים,\nזה לזרוח מבפנים כמה שיותר חזק, ולהרגיש כל כך טוב,\nעד שאנשים אחרים לא יוכלו להתעלם וירצו גם לעצמם\n',
          isRtl: true,
        },
      ],
      author: 'adam',
    },
    {
      content: [
        {
          type: 'text',
          html:
            'אני כבר מרגישה שאני בתהליך הבראה מעוצם מאוד..ואני יודעת בוודאות שלא נוטר הרבה כשי דאגיד אני בריאה לחלוטין..\n',
          isRtl: true,
        },
        {
          type: 'text',
          html:
            'אז איך אני ממשיכה מכאן..אני רואה שכל זכרון שלילי כבר ממש לא מזיז לי כאילו לא זכרונות שלי ...מתבוננת עליהם מחוצה לי..\n',
          isRtl: true,
        },
        {
          type: 'text',
          html: 'אני רוצה לשלם לך איך אני מעבירה לך תשלום ומה הסכום\n',
          isRtl: true,
        },
      ],
      author: 'other',
    },
    {
      content: [
        { type: 'text', html: 'העברה בנקאית מתאים?\n', isRtl: true },
        { type: 'text', html: 'אני בבנק הפועלים\n', isRtl: true },
        { type: 'text', html: 'והסכום הוא כמה שאתה שמחה לשלם\n', isRtl: true },
      ],
      author: 'adam',
    },
    {
      content: [
        {
          type: 'text',
          html: 'אעביר לך 1000 ש"ח תרשום לי לאן איזה חשבון\n',
          isRtl: true,
        },
        { type: 'text', html: 'היכן אתה גר\n', isRtl: true },
      ],
      author: 'other',
    },
    {
      content: [
        { type: 'text', html: '12-681-560975\nאדם גולדמן\n', isRtl: true },
      ],
      author: 'adam',
    },
    {
      content: [
        { type: 'text', html: 'לכל סניף של הפועלים נכון\n', isRtl: true },
      ],
      author: 'other',
    },
    {
      content: [
        {
          type: 'text',
          html:
            '12 - בנק הפועלים\n681 - סניף לב דיזנגוף תל אביב\n560975- מספר החשבון שלי\n',
          isRtl: true,
        },
        { type: 'text', html: 'או במלים אחרות\n', isRtl: true },
        {
          type: 'text',
          html:
            'בנק הפועלים\nסניף לב דיזנגוף תל אביב\nחשבון 560975\nאדם גולדמן\n',
          isRtl: true,
        },
      ],
      author: 'adam',
    },
    { content: [{ type: 'likeSticker' }], author: 'other' },
    {
      content: [
        { type: 'text', html: 'אעביר לך במשך השבוע הבא\n', isRtl: true },
      ],
      author: 'other',
    },
    {
      content: [
        { type: 'text', html: 'מעולה, אשמח\n', isRtl: true },
        { type: 'text', html: 'תראי השלב הבא\n', isRtl: true },
        { type: 'text', html: 'תעשי סריקה על החיים שלך\n', isRtl: true },
        { type: 'text', html: 'כמה שיותר ביסודיות\n', isRtl: true },
        {
          type: 'text',
          html: 'וממש תנסי בכל הכח להעלות רגשות רעים\n',
          isRtl: true,
        },

        {
          type: 'text',
          html:
            'ואז תראי עם יש עוד משהו שמגביל אותך,\nאו שאת כבר חופשייה לחלוטין\n',
          isRtl: true,
        },
      ],
      author: 'adam',
    },
    { content: [{ type: 'likeSticker' }], author: 'other' },
    {
      content: [
        {
          type: 'text',
          html: 'ואז נעבור להעצמת רגשות חיוביים ובריאות\n',
          isRtl: true,
        },
      ],
      author: 'adam',
    },
    {
      content: [
        { type: 'text', html: 'בשביל זה צריך כמה ימים ...\n', isRtl: true },
      ],
      author: 'other',
    },
    { content: [{ type: 'likeSticker' }], author: 'other' },
    {
      content: [
        {
          type: 'textWithEmoticon',
          html:
            'אעבוד על זה שישי שבת ...<img alt="☺" class="_1ift _2560 img" src="https://static.xx.fbcdn.net/images/emoji.php/v9/zfb/1/16/263a.png">',
          isRtl: true,
        },
      ],
      author: 'other',
    },
    {
      content: [
        {
          type: 'text',
          html:
            'תראי, כשאת עושה את הסריקה, תחפשי גם זכרונות מאוד חזקים משמעותיים עבורך שהם חיוביים\n',
          isRtl: true,
        },
        { type: 'text', html: 'ותרשמי אותם\n', isRtl: true },
        { type: 'text', html: 'אנחנו נשתמש בהם בקרוב\n', isRtl: true },
        { type: 'text', html: 'וואו דורה אני מתרגש בשבילך!\n', isRtl: true },
      ],
      author: 'adam',
    },
    {
      content: [
        {
          type: 'text',
          html: 'גם אני מזה מרוגשת..החיוך לא נמחק לי מהפנים\n',
          isRtl: true,
        },
      ],
      author: 'other',
    },
    {
      content: [
        { type: 'text', html: 'הא בדיוק!\n', isRtl: true },
        {
          type: 'text',
          html:
            'עכשיו קחי את החיוך הזה, ותדמייני כמה יותר טוב העתיד שלך ושל יקירייך הולך להיות\n',
          isRtl: true,
        },
      ],
      author: 'adam',
    },
    {
      content: [
        {
          type: 'text',
          html: 'הבריאה הפגישה בינינו וזה לא סתם..\n',
          isRtl: true,
        },
      ],
      author: 'other',
    },
    {
      content: [
        { type: 'text', html: 'עכשיו שהחיוך הזה שם\n', isRtl: true },
        { type: 'text', html: 'ורק הולך ומתגבר\n', isRtl: true },
        {
          type: 'text',
          html: 'עם כל כלי שאת הולכת ללמוד וליישם\n',
          isRtl: true,
        },
        {
          type: 'text',
          html: 'וככל שתשתפי יותר אנשים החיוך התגבר, והחיוך שלהם יתגבר\n',
          isRtl: true,
        },
        {
          type: 'textWithEmoticon',
          html:
            'עד שנדביק את כולם... <img alt="😉" class="_1ift _2560 img" src="https://static.xx.fbcdn.net/images/emoji.php/v9/z57/1/16/1f609.png">',
          isRtl: true,
        },
      ],
      author: 'adam',
    },
    { content: [{ type: 'likeSticker' }], author: 'other' },
    {
      content: [
        {
          type: 'text',
          html:
            'עוד פעם\nלעבור על כל החיים שלי לסרוק ולראות אם יש השפעה שלילית או רגש כלשהו על זכרונות שליליים או עצובים  \nו גם לרשום זכרונות חיוביים ושמחים ?\n',
          isRtl: true,
        },
      ],
      author: 'other',
    },
    {
      content: [
        { type: 'text', html: 'כן\n', isRtl: true },
        { type: 'text', html: 'הדגש כאן הוא\n', isRtl: true },
        {
          type: 'text',
          html:
            '1. לנסות בכח להרגיש רע\n2. לעשות רשימה של זכרונות חיוביים / משמעותיים\n',
          isRtl: true,
        },
        {
          type: 'text',
          html:
            'כי כל החיים רוב האנשים מפחדים מהעבר שלהם\nומפחדים "ליפול חזרה" לרגשות ישנים\n\nאני לא רוצה שתפחדי\n\nאני רוצה שראי במו עינייך שאין אופציה לחזור חזרה לאיך שהיית פעם\n',
          isRtl: true,
        },
      ],
      author: 'adam',
    },
    {
      content: [
        {
          type: 'text',
          html:
            'כשאני מנסה בכח להרגיש רע ..לרשום א  זה את זכרונות הרעים שאני אבדוק האם הם משפיעים עלי?האם יש צורך לרשום שוב?\n',
          isRtl: true,
        },
      ],
      author: 'other',
    },
    {
      content: [
        { type: 'text', html: 'אם בא לך\n', isRtl: true },
        { type: 'text', html: 'לשיקולך\n', isRtl: true },
      ],
      author: 'adam',
    },
    {
      content: [{ type: 'text', html: 'את החיוביים כן לרשום\n', isRtl: true }],
      author: 'other',
    },
    { content: [{ type: 'text', html: 'כן\n', isRtl: true }], author: 'adam' },
    { content: [{ type: 'likeSticker' }], author: 'other' },
    {
      content: [{ type: 'text', html: 'בדף המשותף שלנו\n', isRtl: true }],
      author: 'adam',
    },
    {
      content: [
        { type: 'text', html: 'Ok\n', isRtl: false },
        { type: 'textWithEmoticon', html: 'בנתיים שבת שלום ...', isRtl: true },
      ],
      author: 'other',
    },
    {
      content: [
        {
          type: 'emoticon',
          alt: ':)',
          src:
            'https://static.xx.fbcdn.net/images/emoji.php/v9/z6/1/32/1f642.png',
          isRtl: false,
        },
      ],
      author: 'adam',
    },
    { author: 'time', content: 'SUN 8:56AM' },
    {
      content: [
        { type: 'text', html: 'היי דורה\n', isRtl: true },
        { type: 'text', html: 'התקדמות?\n', isRtl: true },
      ],
      author: 'adam',
    },
    {
      content: [
        {
          type: 'textWithEmoticon',
          html:
            'עדיין לא ...הייתי מאוד עסוקה..עבדתי בשבת והיה יום הולדת לנכד..היום אתחיל ..<img alt="☺" class="_1ift _2560 img" src="https://static.xx.fbcdn.net/images/emoji.php/v9/zfb/1/16/263a.png">',
          isRtl: true,
        },
      ],
      author: 'other',
    },
    {
      content: [
        { type: 'text', html: 'מזל טוב!\n', isRtl: true },
        {
          type: 'text',
          html:
            'לא זוכר אם שאלתי אותך כבר\nאני בקשר עם עוד הרבה אנשים, והרבה יכולים וישמח ללמוד ממך\n',
          isRtl: true,
        },
        {
          type: 'text',
          html:
            'אני רוצה להעלות את ההתקמות שלך באתר שלי, כדי שכולם יוכלו ללמוד ולקבל השראה\n',
          isRtl: true,
        },
        {
          type: 'text',
          html:
            'אני הכי אשמח עם תרצי שאשים קישור לפרופיל שלך בפייסבוק, ככה שיוכלו לפנות אליך ולראות שמדובר בבנאדם אמיתי ושזה באמת אפשרי ללמוד להרגיש כל כך טוב  כל כך מהר\n',
          isRtl: true,
        },
        { type: 'text', html: 'מה את אומרת?\n', isRtl: true },
      ],
      author: 'adam',
    },
    {
      content: [
        {
          type: 'text',
          html:
            'בסדר גמור..אין בעיה..רק לא הייתי רוצה שכולם יראו את תוכן הזכרון כלומר את הפרטים..\n',
          isRtl: true,
        },
      ],
      author: 'other',
    },
    {
      content: [
        {
          type: 'text',
          html:
            'אוקיי, אז אני אעלה את זה לאתר במצב פרטי שרק את תוכלי לראות, ואז תגידי לי אם תרצי לשנות עוד פרטים\n',
          isRtl: true,
        },
        { type: 'text', html: 'ורק אז אפרסם לקהל הרחב\n', isRtl: true },
        { type: 'text', html: 'באישורך הסופי\n', isRtl: true },
      ],
      author: 'adam',
    },
    { content: [{ type: 'likeSticker' }], author: 'other' },
    { author: 'time', content: 'SUN 2:33PM' },
    {
      content: [
        {
          type: 'text',
          html: 'איםה אני אראה את מה שהעליתה  איזה אתר?\n',
          isRtl: true,
        },
      ],
      author: 'other',
    },
    {
      content: [
        { type: 'text', html: 'אני אשלח לך קישור\n', isRtl: true },
        {
          type: 'textWithEmoticon',
          html: 'זה יהיה תיאור המקרה הראשון בעברית שיעלה לאתר',
          isRtl: true,
        },
      ],
      author: 'adam',
    },
    {
      content: [
        {
          type: 'sticker',
          style:
            'background-image: undefined; background-repeat: no-repeat; background-size: 120px 120px; height: 120px; width: 120px;',
        },
      ],
      author: 'other',
    },
    { author: 'time', content: 'SUN 7:34PM' },
    {
      content: [
        {
          type: 'text',
          html:
            'היי אדם \nרשמתי לך במסמך את 5 הזכרונות שעשעתי איתם את התהליך.\n',
          isRtl: true,
        },
        {
          type: 'text',
          html:
            'אני סוקרת את חיי מהנקודה  הכי רחוקה שיכולה להיזכר  תא כל כך מוצאת עוד זכרונות כואבים כמו אלו שכבר כתבתי...שהיו כל כך משמעותיים...\n',
          isRtl: true,
        },
        {
          type: 'textWithEmoticon',
          html:
            'עכשיו אתחיל לעשות אשימה של זכרונות טובים <img alt="☺" class="_1ift _2560 img" src="https://static.xx.fbcdn.net/images/emoji.php/v9/zfb/1/16/263a.png">',
          isRtl: true,
        },
      ],
      author: 'other',
    },
    { author: 'time', content: '10:26AM' },
    {
      content: [
        { type: 'text', html: 'קדימה קדימה\n', isRtl: true },
        {
          type: 'emoticon',
          alt: ':)',
          src:
            'https://static.xx.fbcdn.net/images/emoji.php/v9/z6/1/32/1f642.png',
          isRtl: false,
        },
        {
          type: 'text',
          html: 'וכל כמה זמן, תפקצי לזכרון הכי הכי קדום שלך\n',
          isRtl: true,
        },
        {
          type: 'text',
          html:
            'כמה שתזכרי יותר אחורה בזמן, השינוי לטובה יהיה יותר עמוק, חזק, ובריא\n',
          isRtl: true,
        },
      ],
      author: 'adam',
    },
    { content: [{ type: 'likeSticker' }], author: 'other' },
  ];
}
