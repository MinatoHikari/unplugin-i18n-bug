import type { MessageFunction } from 'vue-i18n'

export default {
  button: {
    about: 'About',
    back: 'Back',
    go: 'GO',
    home: 'Home',
    toggle_dark: 'Toggle dark mode',
    toggle_langs: 'Change languages',
  },
  intro: {
    'desc': 'Opinionated Vite Starter Template',
    'dynamic-route': 'Demo of dynamic route',
    'hi': 'Hi, {name}!',
    'aka': 'Also known as',
    'whats-your-name': 'What\'s your name?',
    'not-found': 'Not found',
  },
  pagination: {
    pages: ({ named }: Parameters<MessageFunction>[0]) => `${named('number')}/page`,
    total: ({ named }: Parameters<MessageFunction>[0]) => `${named('number')} records in total`,
  },
  confirm: {
    confirm_deletion: 'confirm deletion?',
    confirm_void: 'confirm void?',
    confirm_release: 'confirm release?',
    ack: 'ack',
    cancel: 'cancel',
    non_records: 'Please choose at least one record',
  },
}
