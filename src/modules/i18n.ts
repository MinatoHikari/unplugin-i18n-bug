import { createI18n } from 'vue-i18n'

import zhCN from '../../locales/zh-CN'
import enUS from '../../locales/en-US'
import { type UserModule } from '~/types'

export const install: UserModule = ({ app }) => {
  const i18n = createI18n({
    legacy: false,
    locale: 'en-US',
    messages: {
      'zh-CN': zhCN,
      'en-US': enUS,
    },
  })

  app.use(i18n)
}
