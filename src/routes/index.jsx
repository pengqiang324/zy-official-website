import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Shop from '../pages/Shop'
import Rule from '../pages/Rules'
import News from '../pages/News'
import CompanyNews from '../pages/CompanyNews'
import LeadershipCare from '../pages/LeadershipCare'
import RuralRevitalization from '../pages/RuralRevitalization'
import RadioStations from '../pages//RadioStations'
import ResultsShow from '../pages/ResultsShow'
import HelpCenter from '../pages/HelpCenter'

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
        path: "/",
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
            path: '/RadioStations',
            name: '新手指南'
        },
        {
            path: '/RadioStations',
            name: '视频'
        },
        {
            path: '/RadioStations',
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
    '/HelpCenter': '帮助中心'
}

export default routes