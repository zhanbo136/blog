module.exports = {
  "title": "麋鹿的博客",
  "description": "读书破万卷，下笔如有神",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "主页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间线",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "联系",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/zhanbo136",
            "icon": "reco-github"
          }
        ]
      }
    ],
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "friendLink": [
      {
        "title": "麋鹿",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1243875403@qq.com",
        "link": "https://www.codezhanbo.cn"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "sidebar": "auto",
    "lastUpdated": "Last Updated",
    "author": "麋鹿",
    "authorAvatar": "/avatar.png",
    "record": "湘ICP备20007679号-1",
    "startYear": "2019",

    "vssueConfig": {
      "platform": 'github',
      "owner": 'zhanbo136',
      "repo": 'blog',
      "clientId": '775622ba18a0c4ba0f32',
      "clientSecret": 'e7e9d1adba55c92e7ecb35056f3561152a72dbfb',
      //"autoCreateIssue": ture,
    },
    //"autoCreateIssue": ture,
  },
  
  "markdown": {
    "lineNumbers": true
  }
}