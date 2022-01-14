import { api } from '@/core/api'
import { config } from '@/core/config'
import { getMessagesInRange, replaceMessageTokens } from '@/core/messages'
import { randomPick } from '@/utils/randomPick'

setInterval(() => {
  try {
    update()
  } catch (e) {
    console.error(e)
  }
}, 5000)

const update = async () => {
  if (location.href.match(/^https?:\/\/.*\.google\.com/)) {
    return
  }

  const data = await config.get()
  if (!data.allowCommonYandere) {
    return
  }

  yanderecaMessage()
}

const yanderecaMessage = async () => {
  const progress = await api.getProgress()
  const message = randomPick(getMessagesInRange(progress))
  const content = await replaceMessageTokens(message.message)

  const el = randomPick([
    ...document.querySelectorAll<HTMLElement>('div, span, h1, h2, h3'),
  ])
  el.innerText = content

  if (progress <= 0.5) {
    const yandereImage = browser.runtime.getURL('assets/yandere.png')
    const img = randomPick([...document.querySelectorAll('img')])
    img.src = yandereImage
  }
}
