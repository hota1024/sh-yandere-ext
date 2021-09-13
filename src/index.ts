import { getProgress } from './getProgress'

function randomPick<T>(array: T[]): T {
  const result = array[Math.floor(Math.random() * (array.length - 1))]

  return result
}

setInterval(async () => {
  const tweets = document.querySelectorAll('[data-testid="tweet"]')
  const tweet = tweets[Math.floor(Math.random() * tweets.length)]

  const avatar =
    tweet.children[0].children[0].children[0].children[0].children[0]
      .children[1].children[0].children[0]
  tweet.children[1].children[0].children[0].children[0].children[0].children[1].innerHTML =
    ''
  tweet.children[1].children[0].children[0].children[0].children[0].children[2].innerHTML =
    ''
  const displayName =
    tweet.children[1].children[0].children[0].children[0].children[0]
      .children[0].children[0].children[0].children[0].children[0].children[0]
  const username =
    tweet.children[1].children[0].children[0].children[0].children[0]
      .children[0].children[0].children[0].children[1].children[0].children[0]

  const content = tweet.children[1].children[1].children[0].children[0]
  tweet.children[1].children[1].children[1].innerHTML = ''
  tweet.children[1].children[1].children[2].innerHTML = ''

  const home =
    document.querySelector<HTMLSpanElement>(
      '.r-gtdqiz > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > h2:nth-child(1) > span:nth-child(1)'
    ) ??
    document.querySelector<HTMLSpanElement>(
      'span.r-1awozwy > span:nth-child(1) > span:nth-child(1)'
    )

  avatar.setAttribute(
    'style',
    `background-image: url(https://2.bp.blogspot.com/-D2VpG7TwfyE/W64Dti8W-DI/AAAAAAABPI8/p1sqGz68DrgupVX1SLLdhgsP7AWstBhXgCLcBGAs/s800/mental_yandere_woman.png)`
  )
  displayName.innerHTML = 'yandere'
  username.innerHTML = 'yandere'

  const progress = await getProgress()
  // const progress = Math.random()

  if (home) {
    home.innerText = `Home(progress: ${progress})`
  }
  console.log(progress)

  tweet?.parentElement?.parentElement?.parentElement?.parentElement?.parentElement?.parentElement?.setAttribute(
    'style',
    `background: rgba(255, 0, 0, ${(1 - progress) * 0.5})`
  )

  if (progress === 0) {
    content.innerHTML = randomPick([
      'タスク1つも終わってないよね？大変なのは分かっているけど、君と離れている時間なんか、できる限り長く味わいたくないから…追い詰められないうちに、計画的にこなして…ね？',
      'なんでTwitter見てるの？早く終わらせて楽になろ？',
    ])
  } else if (progress < 0.5) {
    content.innerHTML = randomPick([
      '分かってる…。分かってるよ。私と離れている時間が辛いから、タスクが進まないんだよね…。でも、大丈夫。終わったら会えなかった分、精一杯愛してあげるから。タスクを私だと思って頑張ってみてほしいな…！',
      'タスク、もう少しで半分だよ？もうちょっと頑張ってみよ？',
    ])
  } else if (progress < 1) {
    content.innerHTML = randomPick([
      'タスクおつかれさま。いい子いい子♪中間地点まで進んだよ…！頑張ったね！',
      'あ、もしかして疲れてきたかな…？そうだね…このまま終わりまでジャンジャン作業進めていくっていうのももちろん、凄くカッコいいけど…無理はしちゃだめだよ？自分が思っている以上に、体は疲れているかもしれないからね。',
      '息抜きが怖かったりする？ずっとそればかりやっちゃって、タスクに手がつけられなくなっちゃうんじゃないかって。うーん…。',
      'あ、そうだ！君がもしよければ、君の意志を削ぐような誘惑？お邪魔虫っていうのかな？そいつらの処理、私が手伝ってあげる…！君が私から目移りしてしまうことへの予防にもなるし…名案でしょ？',
      'お外に遊びに連れてってよ',
    ])
  } else if (progress === 1) {
    content.innerHTML = randomPick([
      'タスクおつかれさま。いい子いい子♪',
      'お外に遊びに連れてってよ',
    ])
  }
}, 2000)
