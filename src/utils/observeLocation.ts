/**
 * observe location.
 *
 * @param handler handler function.
 */
export const observeLocation = (
  handler: (href: string) => void
): MutationObserver => {
  let oldHref: string

  const observer = new MutationObserver(() => {
    const href = location.href

    if (oldHref !== href) {
      oldHref = href

      handler(href)
    }
  })

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  })

  return observer
}
