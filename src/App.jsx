import './App.css'
import { useEffect } from 'react'
import { useRoutes, useLocation } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import routes, { pageTitles } from "./routes";

function App() {
  const element = useRoutes(routes);
  const location = useLocation()
  useEffect(() => {
    document.title = pageTitles[location.pathname]
  })
  return (
    <div className="App">
      <Header></Header>
      <div className="panel-body">
          {/*注册路由*/}
          {element}
      </div>
      <Footer></Footer>
    </div>
  )
}

export default App
