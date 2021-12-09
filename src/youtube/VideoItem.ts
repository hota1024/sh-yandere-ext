/**
 * VideoItem class.
 */
export class VideoItem {
  /**
   * VideoItem constructor.
   *
   * @param element video item element.
   */
  constructor(private readonly element: HTMLElement) {}

  /**
   * set thumbnail url.
   */
  setThumbnailURL(url: string): void {
    this.thumbnail().src = url
  }

  /**
   * set video title.
   *
   * @param title title.
   */
  setTitle(title: string): void {
    this.title().innerText = title
  }

  /**
   * set avatar url.
   */
  setAvatarURL(url: string): void {
    this.avatar().src = url
  }

  /**
   * set channel name.
   *
   * @param name channel name.
   */
  setChannelName(name: string): void {
    console.log(this.channelName())
    this.channelName().innerText = name
  }

  /**
   * remove video overlays.
   */
  removeOverlays(): void {
    this.mouseoverOverlay().remove()
    this.hoverOverlays().remove()
  }

  /**
   * remove metadata.
   */
  removeMetadata(): void {
    this.metadata().remove()
  }

  /**
   * returns video thumbnail element.
   */
  thumbnail(): HTMLImageElement {
    return this.element.querySelector('#img') as HTMLImageElement
  }

  /**
   * returns video title element.
   */
  title(): HTMLElement {
    return this.element.querySelector('#video-title') as HTMLElement
  }

  /**
   * returns video avatar element.
   */
  avatar(): HTMLImageElement {
    return this.element.querySelector('#avatar > #img') as HTMLImageElement
  }

  /**
   * returns video mouseover-overlay element.
   */
  mouseoverOverlay(): HTMLElement {
    return this.element.querySelector('#mouseover-overlay') as HTMLElement
  }

  /**
   * returns hover-overlays element.
   */
  hoverOverlays(): HTMLElement {
    return this.element.querySelector('#hover-overlays') as HTMLElement
  }

  /**
   * returns channel name element.
   */
  channelName(): HTMLElement {
    return this.element.querySelector('#channel-name') as HTMLElement
  }

  /**
   * returns metadata element.
   */
  metadata(): HTMLElement {
    return this.element.querySelector('#metadata') as HTMLElement
  }
}
