import type { MessageFunction } from 'vue-i18n'

export default {
  button: {
    about: '关于',
    back: '返回',
    go: '确定',
    home: '首页',
    toggle_dark: '切换深色模式',
    toggle_langs: '切换语言',
  },
  intro: {
    'desc': '固执己见的 Vite 项目模板',
    'dynamic-route': '动态路由演示',
    'hi': '你好，{name}',
    'aka': '也叫',
    'whats-your-name': '输入你的名字',
    'not-found': '未找到页面',
  },
  pagination: {
    pages: ({ named }: Parameters<MessageFunction>[0]) => `${named('number')}/页`,
    total: ({ named }: Parameters<MessageFunction>[0]) => `共 ${named('number')} 条数据`,
  },
  confirm: {
    confirm_deletion: '确认删除?',
    confirm_void: '确认作废?',
    confirm_release: '确认发布?',
    ack: '确认',
    cancel: '取消',
    non_records: '请至少选择一条数据',
  },
}
