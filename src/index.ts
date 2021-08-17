import axios from 'axios'

setInterval(async () => {
  // try {
  //   const {
  //     data: { progress },
  //   } = await axios.get<{ progress: number }>(
  //     'http://localhost:8080/task/progress'
  //   )
  //   console.log({ progress })
  // } catch (e) {
  //   console.log('error', e)
  // }
  const tweets = document.querySelectorAll('[data-testid="tweet"]')
  const tweet = tweets[Math.floor(Math.random() * tweets.length)]

  const avatar =
    tweet.children[0].children[0].children[0].children[0].children[0]
      .children[1].children[0].children[0]
  const displayName =
    tweet.children[1].children[0].children[0].children[0].children[0]
      .children[0].children[0].children[0].children[0].children[0].children[0]
  const username =
    tweet.children[1].children[0].children[0].children[0].children[0]
      .children[0].children[0].children[0].children[1].children[0].children[0]
  const content = tweet.children[1].children[1].children[0].children[0]

  console.log(avatar)

  avatar.setAttribute(
    'style',
    `background-image: url(https://2.bp.blogspot.com/-D2VpG7TwfyE/W64Dti8W-DI/AAAAAAABPI8/p1sqGz68DrgupVX1SLLdhgsP7AWstBhXgCLcBGAs/s800/mental_yandere_woman.png)`
  )
  displayName.innerHTML = 'yandere'
  username.innerHTML = 'yandere'
}, 5000)
