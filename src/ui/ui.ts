import { ConfigKey, getConfig, setConfig, setDefaults } from '@/config'

onload = async () => {
  setDefaults()

  const inputs = document.querySelectorAll<HTMLInputElement>('input[data-key]')

  const update = async () => {
    const config = await getConfig()

    for (const input of inputs) {
      const key = input.getAttribute('data-key') as ConfigKey
      if (!key) {
        continue
      }

      if (input.value === config[key]) {
        continue
      }

      input.value = config[key] ?? ''
    }
  }

  for (const input of inputs) {
    const key = input.getAttribute('data-key')
    if (!key) {
      continue
    }

    input.addEventListener('input', async () => {
      setConfig(key, input.value)
    })
  }

  update()
}
