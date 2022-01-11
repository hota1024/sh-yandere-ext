const decode = <T>(token: string): T | null => {
  if (!token) {
    return null
  }

  const base64Url = token.split('.')[1]
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split('')
      .map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
      })
      .join('')
  )

  return JSON.parse(jsonPayload)
}

/**
 * UserData type.
 */
export type UserData = {
  uid: string
  fullname: string
  surname: string
  name: string
}

/**
 * JWTPayload type.
 */
export type JWTPayload = {
  user: UserData
}

/**
 * decode jwt.
 *
 * @param jwt jwt.
 */
export const decodeJWT = (jwt: string): JWTPayload | null => {
  return decode<JWTPayload>(jwt)
}
