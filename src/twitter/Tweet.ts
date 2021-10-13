/**
 * Tweet class.
 */
export class Tweet {
  /**
   * Tweet constructor.
   *
   * @param element tweet element.
   */
  constructor(private readonly element: HTMLElement) {}

  disablePointerEvents(): void {
    ;(this.element.children[0].children[0].children[0]
      .children[0] as HTMLElement).style.pointerEvents = 'none !important'
  }

  /**
   * set avatar image url.
   *
   * @param url avatar URL.
   */
  setAvatarURL(url: string): void {
    const el = this.avatar()

    el.style.backgroundImage = `url(${url})`
  }

  /**
   * set display name.
   *
   * @param name display name.
   */
  setDisplayName(name: string): void {
    const el = this.displayName()

    el.innerText = name
  }

  /**
   * set username.
   *
   * @param name username.
   */
  setUsername(name: string): void {
    const el = this.username()

    el.innerText = name
  }

  /**
   * set tweet content.
   *
   * @param content tweet content.
   */
  setContent(content: string): void {
    const el = this.content()

    el.innerText = content
  }

  /**
   * remove buttons.
   */
  removeButtons(): void {
    const el = this.buttons()
    el.remove()
  }

  /**
   * remove attachment.
   */
  removeAttachment(): void {
    const el = this.attachment()
    el.remove()
  }

  /**
   * returns avatar element.
   */
  avatar(): HTMLElement {
    return this.element.children[0].children[0].children[0].children[1]
      .children[0].children[0].children[0].children[0].children[0].children[1]
      .children[0].children[0] as HTMLElement
  }

  /**
   * returns display name element.
   */
  displayName(): HTMLElement {
    return this.element.children[0].children[0].children[0].children[1]
      .children[1].children[0].children[0].children[0].children[0].children[0]
      .children[0].children[0].children[0].children[0]
      .children[0] as HTMLElement
  }

  /**
   * returns username element.
   */
  username(): HTMLElement {
    return this.element.children[0].children[0].children[0].children[1]
      .children[1].children[0].children[0].children[0].children[0].children[0]
      .children[0].children[0].children[1].children[0]
      .children[0] as HTMLElement
  }

  /**
   * returns tweet time element.
   */
  time(): HTMLElement {
    return this.element.children[0].children[0].children[0].children[1]
      .children[1].children[0].children[0].children[0].children[0]
      .children[2] as HTMLElement
  }

  /**
   * returns tweet content element.
   */
  content(): HTMLElement {
    return this.element.children[0].children[0].children[0].children[1]
      .children[1].children[1].children[0].children[0] as HTMLElement
  }

  /**
   * returns tweet attachment element.
   */
  attachment(): HTMLElement {
    return this.element.children[0].children[0].children[0].children[1]
      .children[1].children[1].children[1] as HTMLElement
  }

  /**
   * returns buttons element.
   */
  buttons(): HTMLElement {
    return this.element.children[0].children[0].children[0].children[1]
      .children[1].children[1].children[2] as HTMLElement
  }
}

// avatar: temp0.children[0].children[0].children[0].children[1].children[0]
// name: temp0.children[0].children[0].children[0].children[1].children[1].children[0]
// content: temp0.children[0].children[0].children[0].children[1].children[1].children[1].children[0]
// contentText: temp0.children[0].children[0].children[0].children[1].children[1].children[1].children[0].children[0].children[0]
// setContentText: temp0.children[0].children[0].children[0].children[1].children[1].children[1].children[0].children[0].innerText = 'testaa'
// setTweetAttachment: temp0.children[0].children[0].children[0].children[1].children[1].children[1].children[1].innerHTML = ''

// buttons: temp0.children[0].children[0].children[0].children[1].children[1].children[1].children[2]

// time: temp0.children[0].children[0].children[0].children[1].children[1].children[0].children[0].children[0].children[0].children[2]
// displayName: temp0.children[0].children[0].children[0].children[1].children[1].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0]
// setDisplayname: temp0.children[0].children[0].children[0].children[1].children[1].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].innerText = 'test'
