export default {
    description: 'Just playing around.',
    lang: 'cn-ZH',
    base:'/docs/',
    markdown: {
        lineNumbers: true,
    },
    themeConfig: {
        siteTitle: 'Aurora',
        socialLinks: [
            {
                icon: 'gitee',
                link: 'https://gitee.com/aurora-engine/aurora'
            },
        ],
        // 导航栏配置
        nav:[
            {text:"Gitee",link:"/introduce/aurora"},
            {text:"指南",link:"/introduce/aurora"},
            {
                text:"v1.1.1",
                items:[
                    {text:"更新日志",link:"/update/update"}
                ],
            },

        ],

        // 侧边栏配置
        sidebar: [
            {
                text: '介绍',
                collapsible: true,
                items: [
                    { text: '什么是 Aurora ?', link: '/introduce/aurora' },
                    { text: '快速开始', link: '/introduce/start' },
                ]
            },
            {
                text: 'Web 服务',
                collapsible: true,
                items: [
                    { text: 'Get 请求', link: '/router/get' },
                    { text: 'Post 请求', link: '/router/post' },
                    { text: 'Group 分组', link: '/router/group' },
                    { text:'中间件',link:'/router/middleware'},
                    { text: 'File 上传', link: '/router/file'},
                ]
            },
            {
                text: '静态资源',
                collapsible: true,
                items: [
                    { text: '视图解析', link: '/static/static' },
                ]
            },
            {
                text: '配置模块',
                collapsible: true,
                items: [
                    { text: '配置文件', link: '/config/config' },
                    { text: '日志', link: '/config/log' },
                    { text: '系统变量', link: '/config/sys' },
                ]
            },
            {
                text: '组件系统',
                collapsible: true,
                items: [
                    { text: '依赖管理', link: '/component/dep' },
                    { text: 'Ioc生命周期', link: '/component/ioc' },
                    { text: '结构体接口', link: '/component/controller' },
                ]
            },
            {
                text: '更新',
                collapsible: true,
                items: [
                    { text: 'Update', link: '/update/update' },
                ]
            }
        ]
    },

}