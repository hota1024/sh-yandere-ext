import { randomPick } from '@/utils/randomPick'
import { Tweet } from './Tweet'

/**
 * returns random tweet from the given element.
 *
 * @param element element.
 */
export const getRandomTweet = (element: Element): Tweet | null => {
  const list = element.querySelectorAll<HTMLElement>('[data-testid="tweet"]')
  const item = randomPick([...list])

  if (!item) {
    return null
  }

  return new Tweet(item)
}
