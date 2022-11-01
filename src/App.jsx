import './App.less'
import { useEffect, Suspense } from 'react'
import { useRoutes, useLocation } from 'react-router-dom'
import BackToUp from '@uiw/react-back-to-top'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import routes, { pageTitles } from "./routes"
import NProgress from './components/NProgress/NProgress'
import { VerticalAlignTopOutlined } from '@ant-design/icons';

function App() {
  const element = useRoutes(routes);
  const location = useLocation()
  useEffect(() => {
    document.title = pageTitles[location.pathname] || '赞友科技'
    document.documentElement.scrollTo(0, 0) // 滚动条置顶
  }, [location.pathname])
  return (
    <div className="App">
      <Suspense fallback={<NProgress />}>
        <Header></Header>
        <div className="panel-body">
          {/*注册路由*/}
          {element}
          <BackToUp size={60} strokeWidth={4}>
            <VerticalAlignTopOutlined style={{fontSize: '20px', }} className='backtoup-icon'/>
          </BackToUp>
        </div>
        <Footer></Footer>
      </Suspense>
    </div>
  )
}

export default App
