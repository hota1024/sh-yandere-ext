setTimeout(() => {
  const item = document.querySelector('ytd-rich-item-renderer')

  if (!item) {
    return
  }

  const thumbnail = item.querySelector<HTMLImageElement>('#img')

  if (thumbnail) {
    thumbnail.src =
      'https://2.bp.blogspot.com/-D2VpG7TwfyE/W64Dti8W-DI/AAAAAAABPI8/p1sqGz68DrgupVX1SLLdhgsP7AWstBhXgCLcBGAs/s800/mental_yandere_woman.png'
  }

  const title = item.querySelector<HTMLElement>('#video-title-link')
  console.log(title)

  if (title) {
    const text = document.createElement('div')
    text.innerText = ''
    text.className = 'style-scope ytd-rich-grid-media'
    text.innerText = 'ゲームの動画はあなたを邪魔しちゃうから消しておいたよ。'

    title.appendChild(text)
  }
}, 5000)
