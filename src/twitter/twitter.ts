import { api } from '@/core/api'
import { randomPick } from '@/utils/randomPick'
import { getRandomTweet } from './getRandomTweet'

const update = async () => {
  const tweet = getRandomTweet(document.body)
  console.log(tweet)

  if (!tweet) {
    return
  }
  console.log(tweet)

  const progress = await api.getProgress()
  let content = ''

  if (progress === 0) {
    content = randomPick([
      'タスク1つも終わってないよね？大変なのは分かっているけど、君と離れている時間なんか、できる限り長く味わいたくないから…追い詰められないうちに、計画的にこなして…ね？',
      'なんでTwitter見てるの？早く終わらせて楽になろ？',
    ])
  } else if (progress < 0.5) {
    content = randomPick([
      '分かってる…。分かってるよ。私と離れている時間が辛いから、タスクが進まないんだよね…。でも、大丈夫。終わったら会えなかった分、精一杯愛してあげるから。タスクを私だと思って頑張ってみてほしいな…！',
      'タスク、もう少しで半分だよ？もうちょっと頑張ってみよ？',
    ])
  } else if (progress < 1) {
    content = randomPick([
      'タスクおつかれさま。いい子いい子♪中間地点まで進んだよ…！頑張ったね！',
      'あ、もしかして疲れてきたかな…？そうだね…このまま終わりまでジャンジャン作業進めていくっていうのももちろん、凄くカッコいいけど…無理はしちゃだめだよ？自分が思っている以上に、体は疲れているかもしれないからね。',
      '息抜きが怖かったりする？ずっとそればかりやっちゃって、タスクに手がつけられなくなっちゃうんじゃないかって。うーん…。',
      'あ、そうだ！君がもしよければ、君の意志を削ぐような誘惑？お邪魔虫っていうのかな？そいつらの処理、私が手伝ってあげる…！君が私から目移りしてしまうことへの予防にもなるし…名案でしょ？',
      'お外に遊びに連れてってよ',
    ])
  } else if (progress === 1) {
    content = randomPick([
      'タスクおつかれさま。いい子いい子♪',
      'お外に遊びに連れてってよ',
    ])
  }

  tweet.setContent(content)
  tweet.setUsername('yandere')
  tweet.setDisplayName('yandere')
  tweet.removeButtons()
  tweet.removeAttachment()
  tweet.disablePointerEvents()
  tweet.setAvatarURL(
    'https://2.bp.blogspot.com/-D2VpG7TwfyE/W64Dti8W-DI/AAAAAAABPI8/p1sqGz68DrgupVX1SLLdhgsP7AWstBhXgCLcBGAs/s800/mental_yandere_woman.png'
  )
}

setInterval(() => {
  update()
}, 10000)
