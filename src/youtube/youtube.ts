import { api } from '@/core/api'
import { getMessagesInRange } from '@/core/messages'
import { observeLocation } from '@/utils/observeLocation'
import { randomPick } from '@/utils/randomPick'
import { VideoItem } from './VideoItem'

const main = async () => {
  observeLocation((path: string) => {
    if (path.match(/youtube\.com\/?$/)) {
      setTimeout(() => yanderecaTopPage(5), 1000)
    }
  })
}
main()

const getAllItem = () => [
  ...document.querySelectorAll<HTMLElement>('ytd-rich-item-renderer'),
]

const yanderecaTopPage = async (count: number) => {
  const progress = 0
  const items = [getAllItem()[0]]

  for (let i = 0; i < count; i++) {
    items.push(randomPick(getAllItem()))
  }

  for (const item of items) {
    if (!item) {
      return
    }

    const messages = getMessagesInRange(progress)
    const message = randomPick(messages).message
    console.log(messages)

    const v = new VideoItem(item)
    const yandereImage = browser.runtime.getURL('assets/yandere.png')
    v.setThumbnailURL(yandereImage)
    v.setTitle(message)
    v.setChannelName('ヤンデレちゃん')
    v.setAvatarURL(yandereImage)
    v.removeOverlays()
    v.removeMetadata()
  }
}
