const path = require('path')

module.exports = {
  title: 'Rock UI',
  description: 'Rock UI - simple, powerful, and fast.',
  themeConfig: {
    repo: '',
    sidebar: [
      {
        text: 'Introduction',
        children: [
          { text: 'Why Rock UI?', link: '/' },
          { text: 'Getting Started', link: '/installation/' },
        ],
      }, {
        text: 'Components',
        children: [
          { text: 'Component A', link: '/components/component-a' },
          { text: 'Component B', link: '/components/component-b' },
        ],
      }
    ],
  },
  vite: {
    resolve: {
      alias: {
        'my-lib': path.resolve(__dirname, '../../src'),
      },
      dedupe: ['vue'], // avoid error when using dependencies that also use Vue
    }
  }
}