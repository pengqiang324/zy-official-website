import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Example from '../pages/Example'
import Shop from '../pages/Shop'
import Rule from '../pages/Rules'

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
        path: "/a",
        element: <Example />
    },
    {
        path: "/",
        element: <Redirect to="/Home" />
    }
]

// 子路由
export const childRoutes = {
    '/shop': [
        {
            path: '/rule',
            name: '商城规则'
        }
    ]
}

// 标题
export const pageTitles = {
    '/home': '首页',
    '/shop': '赞友商城',
    '/about': '关于我们',
    '/rule': '商城规则',
    '/a': '动态资讯'
}

export default routes