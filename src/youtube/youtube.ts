import { VideoItem } from './VideoItem'

setTimeout(() => {
  // const items = document.querySelectorAll<HTMLElement>('ytd-rich-item-renderer')
  const items = [document.querySelector<HTMLElement>('ytd-rich-item-renderer')]

  for (const item of items) {
    if (!item) {
      return
    }

    const v = new VideoItem(item)
    console.log(v)
    const yandereImage = browser.runtime.getURL('assets/yandere.png')
    v.setThumbnailURL(yandereImage)
    v.setTitle('ゲームの動画はあなたを邪魔しちゃうから消しておいたよ。')
    v.setChannelName('ヤンデレちゃん')
    v.setAvatarURL(yandereImage)
    v.removeOverlays()
    v.removeMetadata()
  }
}, 5000)
