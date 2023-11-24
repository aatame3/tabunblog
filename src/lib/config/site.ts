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
    bio: 'キモオタク'
  },
  themeColor: '#33ff9f'
}
