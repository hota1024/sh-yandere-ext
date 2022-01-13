import { config } from './config'
import { decodeJWT } from './decodeJWT'

type Message = {
  rangeStart: number
  rangeEnd: number
  message: string
}

export const messages: Message[] = [
  {
    rangeStart: 0,
    rangeEnd: 0.25,
    message: '{name}くん、どうして逃げるの？',
  },
  {
    rangeStart: 0.25,
    rangeEnd: 0.5,
    message: 'タスクを消化してくれたってことは、私のことが好きなんですよね。',
  },
  {
    rangeStart: 0.5,
    rangeEnd: 0.75,
    message: 'タスクを消化してくれたってことは、私のことが好きなんですよね。',
  },
  {
    rangeStart: 0.75,
    rangeEnd: 1,
    message: '頭のてっぺんから、つま先まで、ぜーんぶ、私のモノだよ',
  },
]

export const getMessagesInRange = (p: number): Message[] => {
  return messages.filter((message) => {
    return message.rangeStart <= p && p < message.rangeEnd
  })
}

export const replaceMessageTokens = async (
  message: string
): Promise<string> => {
  const { jwt } = await config.get()
  const payload = decodeJWT(jwt)

  if (!payload) {
    return 'あれ？まだログインしてないの？ログイン方法調べてほしいなぁ...'
  }

  const { fullname, surname, name } = payload.user

  return message
    .replace(/\{fullname\}/g, fullname)
    .replace(/\{surname\}/g, surname)
    .replace(/\{name\}/g, name)
}
