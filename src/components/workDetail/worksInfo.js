import image1 from '../../assets/images/card-img1v2.webp'
import image2 from '../../assets/images/card-img2v2.webp'
import image3 from '../../assets/images/card-img3v2.webp'
import image4 from '../../assets/images/card-img4v2.webp'
import image5 from '../../assets/images/card-img6v2.webp'
import image6 from '../../assets/images/card-img5v2.webp'

export const detailContent = {
  fanma: {
    title: '株式会社FANMA',
    subTitle: '人材紹介会社のコーポレートサイト',
    url: 'https://fanma.co.jp/',
    image: image1,
    content:
      '人材紹介をしている株式会社FANMAのコーポレートサイトです。デザイナーの作成したコーポレートサイトの実装を担当しました。Wordpress化しています。',
    language: 'HTML｜CSS｜Javascript｜Wordpress',
    period: '3週間',
    uiux: [
      `ローディングアニメーションに数値を表示して離脱を防いでいます`,
      `MVにパララックスによる視差効果を設けています。また、慣性スクロールを使用してスクロールしたくなるような仕組みを加えています。なお、SPでは使用感を考慮して慣性はオフにしています`,
      `Wordpressテーマと連携し、クライアントが更新、管理可能にしています。`,
    ],
  },
  portfolio: {
    title: 'ポートフォリオサイト',
    subTitle: '私自身のポートフォリオ掲載用サイトです',
    image: image2,
    url: 'https://iam-showakai.netlify.app/',
    content:
      '転職活動での使用と、制作実績をまとめるために制作したポートフォリオサイトです。デザインに挑戦してみたかったので、illustratorでデザインから作成し、実装しました。',
    language: 'Javascript｜React｜styled-components',
    period: 'デザイン 2週間｜実装　4週間',
    uiux: [
      '操作性や使用感を保ちながら、デザインも綺麗に見えるようなアニメーションを実装しています。',
      `デザインに関しては「柔軟性と広がり」をテーマにして作成しました。情報がわかりやすく伝えられるように、情報設計、配置を行いました。`,
      '背景は、情報が増えるにつれて深まっていくような印象をつけるため、明い色→暗い色に変化させています。',
    ],
  },
  izanow: {
    title: 'izanow',
    subTitle: '美容商品を取り扱う株式会社izanowの商品ページ',
    image: image3,
    url: 'https://izanow.co.jp/',
    content:
      '美容商品を取り扱う株式会社izanowのコーポレートサイト及び商品ページの実装部分を担当しました。お問い合わせページではPHPを使用して、お問い合わせ内容が指定アドレスに転送されるように実装しています。',
    language: 'HTML｜CSS｜Javascript｜ PHP',
    period: '2週間',
    uiux: [
      `商品ページに合わせたローディングアニメーションを提案し、実装しています。`,
      `商品のイメージに合わせてメニューの開閉アニメーションを落ち着きのある動きにしています。`,
      'お問い合わせ内容が、指定アドレスに転送されるように実装しています。',
    ],
  },
  seasideHotel: {
    title: 'SeasideHotel',
    subTitle: '[個人制作]リゾートホテルのコーポレートサイト',
    image: image4,
    url: 'https://sho-test.com/',
    content:
      '個人制作で架空で作成したリゾートホテルのコーポレートサイトです（トップページのみ）。デザインから、実装、デプロイまで行いました。',
    language: 'HTML｜CSS｜Javascript',
    period: 'デザイン 3日 ｜ 実装 1週間',
    uiux: [
      `javascriptを使用し、スクロールに合わせたアニメーションやフェードインを入れています。`,
    ],
  },
  householdApp: {
    title: '家計簿アプリ',
    subTitle: '[個人開発]毎月の収支と、データが見れる家計簿アプリ',
    image: image5,
    url: 'https://household-app-silk.vercel.app/',
    content:
      'Reactの学習用でで作成した家計簿アプリです。データの基本操作である「CRUD機能」の実装を目的として作成しました。月別でのデータの確認は、Chart.jsを使用して実装し、データはfirebaseで管理しています。',
    language: 'React｜Typescript｜MUI｜Firebase｜Chart.js｜Fullcalendar',
    period: '3週間',
    uiux: [
      `トップでは直感的に記入できるように、類似アプリのインターフェースを参考にカレンダをセンターに表示しています。`,
      `記入の際、それぞれの項目にバリデーションを設けてエラーメッセージを出しているので、不備のある入力を防止できます。`,
      `レスポンシブ対応もしており、SPでは収支の金額を表示せずマークをつけることで収支の有無を表示しています。`,
      'カラーのテーマをMUIで管理し、一貫性のあるUIで仕上げています。',
    ],
  },
  weatherApp: {
    title: 'Weather App',
    subTitle: '[個人開発]天気予報検索アプリ',
    image: image6,
    url: 'https://worldweather-sw.netlify.app',
    content:
      'React学習で作成した個人開発の天気予報アプリです。全世界から検索した地名の天気を確認できます。Weather APIからデータをfetchして書き出す機能を実装しています。',
    language: 'Typescript｜React｜WeatherAPI',
    period: '1週間',
    uiux: `使いやすさを重視した、シンプルなUIです。ユーザーが指定のワード以外を入力した際は、エラーとしてポップが表示されるようにしています。
`,
  },
}
