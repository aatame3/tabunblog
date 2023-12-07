import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'note.aata.me',
  title: 'aatame3のノート(ブログ?)',
  subtitle: '色々書くやつ',
  lang: 'ja-JP',
  description: 'Uraraとかいうやつを試すためのサイト Powered by SvelteKit/Urara',
  author: {
    avatar: '/assets/face.jpg',
    name: 'aatame3',
    status: '🤓',
    bio: '\'08\n学生 一般キモオタク'
  },
  themeColor: '#33ff9f'
}
