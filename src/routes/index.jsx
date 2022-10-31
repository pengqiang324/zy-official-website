import { useEffect, lazy } from 'react'
import { useNavigate } from 'react-router-dom'

// 懒加载组件
function dynamicImport(componentName) {
    return lazy(() => import(`../pages/${componentName}/index.jsx`))
}
const Home = dynamicImport('Home')
const About = dynamicImport('About')
const Shop = dynamicImport('Shop')
const Rule = dynamicImport('Rules')
const News = dynamicImport('News')
const CompanyNews = dynamicImport('CompanyNews')
const LeadershipCare = dynamicImport('LeadershipCare')
const RuralRevitalization = dynamicImport('RuralRevitalization')
const RadioStations = dynamicImport('RadioStations')
const ResultsShow = dynamicImport('ResultsShow')
const HelpCenter = dynamicImport('HelpCenter')
const BeginnersGuide = dynamicImport('BeginnersGuide')
const VideoList = dynamicImport('VideoList')
const PolicyHighlights = dynamicImport('PolicyHighlights')
const ArticleDetails = dynamicImport('ArticleDetails')

// 重定向
function Redirect({ to }) {
    let navigate = useNavigate()
    useEffect(() => {
        navigate(to)
    })
    return null;
}

const routes = [
    {
        path: "/",
        element: <Redirect to="/home" />
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/home",
        element: <Home />
    },
    {
        path: "/shop",
        element: <Shop />
    },
    {
        path: "/rule",
        element: <Rule />
    },
    {
        path: "/news",
        element: <News />
    },
    {
        path: "/companyNews",
        element: <CompanyNews />
    },
    {
        path: "/LeadershipCare",
        element: <LeadershipCare />
    },
    {
        path: "/RuralRevitalization",
        element: <RuralRevitalization />
    },
    {
        path: "/RadioStations",
        element: <RadioStations/>
    },
    {
        path: '/ResultsShow',
        element: <ResultsShow/>
    },
    {
        path: '/HelpCenter',
        element: <HelpCenter/>
    },
    {
        path: '/BeginnersGuide',
        element: <BeginnersGuide/>
    },
    {
        path: '/VideoList',
        element: <VideoList/>
    },
    {
        path: '/PolicyHighlights',
        element: <PolicyHighlights/>
    },
    {
        path: '/ArticleDetails',
        element: <ArticleDetails/>
    },
    {
        path: '*', // 这个404页面不会被匹配到
        element: <Redirect to="/home" />
    }
]

// 子路由
export const childRoutes = {
    '/shop': [
        {
            path: '/rule',
            name: '商城规则'
        }
    ],
    '/news': [
        {
            path: '/companyNews',
            name: '公司动态'
        },
        {
            path: '/LeadershipCare',
            name: '领导关怀'
        }
    ],
    '/RuralRevitalization': [
        {
            path: '/RadioStations',
            name: '广播站'
        },
        {
            path: '/ResultsShow',
            name: '成果展示'
        }
    ],
    '/HelpCenter': [
        {
            path: '/BeginnersGuide',
            name: '新手指南'
        },
        {
            path: '/VideoList',
            name: '视频'
        },
        {
            path: '/PolicyHighlights',
            name: '政策要闻'
        }
    ]
}

// 标题
export const pageTitles = {
    '/home': '首页',
    '/shop': '赞友商城',
    '/about': '关于我们',
    '/rule': '商城规则',
    '/news': '新闻中心',
    '/companyNews': '公司动态',
    '/LeadershipCare': '领导关怀',
    '/RuralRevitalization': '乡村振兴',
    '/RadioStations': '广播站',
    '/ResultsShow': '成果展示',
    '/HelpCenter': '帮助中心',
    '/BeginnersGuide': '新手指南',
    '/VideoList': '视频列表',
    '/PolicyHighlights': '政策要闻',
    '/ArticleDetails': '文章详情'
}

export default routes