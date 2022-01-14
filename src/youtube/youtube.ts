import { api } from '@/core/api'
import { getMessagesInRange, replaceMessageTokens } from '@/core/messages'
import { observeLocation } from '@/utils/observeLocation'
import { randomPick } from '@/utils/randomPick'
import { VideoItem } from './VideoItem'

const main = async () => {
  observeLocation((path: string) => {
    if (path.match(/youtube\.com\/?$/)) {
      setTimeout(() => {
        try {
          yanderecaTopPage(5)
        } catch (e) {
          console.error(e)
        }
      }, 1000)
    }
  })
}
main()

const getAllItem = () => [
  ...document.querySelectorAll<HTMLElement>('ytd-rich-item-renderer'),
]

const yanderecaTopPage = async (count: number) => {
  const progress = await api.getProgress()

  const items = [randomPick(getAllItem())]

  for (let i = 0; i < count; i++) {
    items.push(randomPick(getAllItem()))
  }

  for (const item of items) {
    if (!item) {
      return
    }

    const messages = getMessagesInRange(progress)
    const message = await replaceMessageTokens(randomPick(messages).message)

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
