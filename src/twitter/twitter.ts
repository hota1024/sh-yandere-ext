import { api } from '@/core/api'
import { getMessagesInRange, replaceMessageTokens } from '@/core/messages'
import { randomPick } from '@/utils/randomPick'
import { getRandomTweet } from './getRandomTweet'

const update = async () => {
  const tweet = getRandomTweet(document.body)

  if (!tweet) {
    return
  }

  const progress = await api.getProgress()
  const messages = getMessagesInRange(progress)
  const message = await replaceMessageTokens(randomPick(messages).message)
  const yandereImage = browser.runtime.getURL('assets/yandere.png')

  tweet.setContent(message)
  tweet.setUsername('yandere')
  tweet.setDisplayName('yandere')
  tweet.removeButtons()
  tweet.removeAttachment()
  tweet.disablePointerEvents()
  tweet.setAvatarURL(yandereImage)
  console.log(yandereImage)
}

setInterval(() => {
  try {
    update()
  } catch (e) {
    console.error(e)
  }
}, 10000)
