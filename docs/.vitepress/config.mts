import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "CET-4 精华笔记",
  description: "大学英语四级考试精华复习笔记",
  lang: 'zh-CN',

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '写作', link: '/writing/' },
      { text: '翻译', link: '/translation/' },
      { text: '语法', link: '/grammar/' },
      { text: '词汇', link: '/vocabulary/' },
    ],

    sidebar: {
      '/writing/': [
        {
          text: '📝 写作',
          items: [
            { text: '七大作文模板', link: '/writing/templates' },
            { text: '高分万能句', link: '/writing/sentences' },
            { text: '常用英语谚语', link: '/writing/proverbs' },
            { text: '80个高频词组', link: '/writing/phrases' },
            { text: '写作完整范例', link: '/writing/examples' },
          ]
        }
      ],
      '/translation/': [
        {
          text: '🌏 翻译',
          items: [
            { text: '30个必背句型', link: '/translation/patterns' },
            { text: '中国文化热词', link: '/translation/culture' },
            { text: '传统工艺节日', link: '/translation/tradition' },
            { text: '饮食历史旅游', link: '/translation/life' },
            { text: '经济教育科技', link: '/translation/modern' },
            { text: '地理环境', link: '/translation/environment' },
          ]
        }
      ],
      '/grammar/': [
        {
          text: '📖 语法',
          items: [
            { text: '倒装句', link: '/grammar/inversion' },
            { text: '虚拟语气', link: '/grammar/subjunctive' },
            { text: '强调句', link: '/grammar/emphasis' },
            { text: '定语从句', link: '/grammar/relative-clause' },
            { text: '主谓一致', link: '/grammar/agreement' },
          ]
        }
      ],
      '/vocabulary/': [
        {
          text: '📗 词汇',
          items: [
            { text: 'Unit 1 文化符号', link: '/vocabulary/unit1' },
            { text: 'Unit 2 潮流趋势', link: '/vocabulary/unit2' },
            { text: 'Unit 3 父爱亲情', link: '/vocabulary/unit3' },
            { text: 'Unit 4 人生追求', link: '/vocabulary/unit4' },
            { text: '高级替换词速查', link: '/vocabulary/replacements' },
          ]
        }
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com' }
    ],

    search: {
      provider: 'local'
    },

    footer: {
      message: 'CET-4 大学英语四级精华复习笔记',
      copyright: '© 2026 杜星宇'
    },

    outline: {
      level: [2, 3],
      label: '本页目录'
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    lastUpdated: {
      text: '最后更新于'
    },

    darkModeSwitchLabel: '主题',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到顶部',
    notFound: {
      title: '页面未找到',
      quote: '换个页面看看吧~',
      linkLabel: '返回首页'
    }
  },

  markdown: {
    lineNumbers: true,
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详情'
    }
  }
})
