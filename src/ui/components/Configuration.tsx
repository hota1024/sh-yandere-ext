import React, { useEffect, useState } from 'react'
import { Config } from '@/core/config'
import { Input } from './Input'
import { Label } from './Label'
import { ConfigItem } from './ConfigItem'
import { Button } from './Button'
import { api } from '@/core/api'
import { Alert } from './Alert'
import { decodeJWT } from '@/core/decodeJWT'

const openLoginModal = async () => {
  alert(
    `このアラートを閉じると Google アカウントのログイン画面が開かれます。以下の手順に従いログインを行ってください。
1. ログインするアカウントを選択するか、認証情報を入力してください。
2. アクセス権の確認画面が出てきたら「すべてのタスクの作成、編集、整理、削除」にチェックを入れてください。
3. ログインが完了した後、認証するために必要なコードが表示されます。コピーして現在開いているページに貼り付けてください。`
  )

  const url = await api.issueAuthURL()
  window.open(url, '_blank')

  const code = prompt('認証コードをペーストしてください。')

  if (!code) {
    alert('認証コードが入力されていません。再度お試しください。')
    return
  }

  const jwt = await api.authWithCode(code)

  return jwt
}

/**
 * Configuration props.
 */
export type ConfigurationProps = {
  /**
   * config manager.
   */
  config: Config
}

/**
 * Configuration component.
 */
export const Configuration: React.VFC<ConfigurationProps> = (props) => {
  const { config } = props
  const [apiEndpoint, setApiEndpoint] = useState('')
  const [jwt, setJWT] = useState<string>('')
  const [showJWT, setShowJWT] = useState(false)

  const payload = decodeJWT(jwt)
  const uid = payload?.user.uid
  const name = payload?.user.familyname

  const loadConfig = async () => {
    const data = await config.get()
    setApiEndpoint(data.apiEndpoint)
    setJWT(data.jwt)
  }

  useEffect(() => {
    loadConfig()
  }, [])

  useEffect(() => {
    config.set({ apiEndpoint })
  }, [apiEndpoint])

  useEffect(() => {
    config.set({ jwt })
  }, [jwt])

  const logout = () => {
    if (confirm(`${name} をログアウトしますか？`)) {
      setJWT('')
      alert('ログアウトしました。')
    }
  }

  const openLogin = async () => {
    const jwt = await openLoginModal()

    if (jwt) {
      setJWT(jwt)
    }
  }

  return (
    <>
      <ConfigItem>
        <Label htmlFor="apiEndpoint">APIのエンドポイント</Label>
        <Input
          id="apiEndpoint"
          value={apiEndpoint}
          onChange={({ target: { value } }) => setApiEndpoint(value)}
        />
      </ConfigItem>
      <ConfigItem>
        {jwt ? (
          <>
            <Alert>
              {name} としてログインしています。
              <div style={{ height: '8px' }}></div>
              <div>
                <Button onClick={() => setShowJWT(!showJWT)}>
                  {showJWT ? 'JWT を隠す' : 'JWT を表示する'}
                </Button>
                {showJWT && (
                  <>
                    <p>
                      JWT: <input value={jwt ?? 'no jwt'} readOnly />
                    </p>
                    <p>
                      uid: <input value={uid ?? 'no id'} readOnly />
                    </p>
                  </>
                )}
              </div>
              <div style={{ height: '8px' }}></div>
              <div>
                <Button onClick={logout}>ログアウト</Button>
              </div>
            </Alert>
          </>
        ) : (
          <Button onClick={openLogin}>Googleでログイン</Button>
        )}
      </ConfigItem>
    </>
  )
}
