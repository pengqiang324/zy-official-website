import './Header.less'
import CustomLink from '../CustomeLink/CustomeLink'
import Logo from './images/logo.png'

function Header() {
    return (
        <div className="home">
            <header className="home_header">
                <div className="home_header--box">
                    <div className="home_header--logo">
                        <img src={Logo} alt="logo" />
                    </div>
                    <div className="home_header--menu">
                        <CustomLink className="home_header--link" to="/home">首页</CustomLink>
                        <CustomLink className="home_header--link" to="/shop">赞友商城</CustomLink>
                        <CustomLink className="home_header--link" to="/about">新闻中心</CustomLink>
                        <CustomLink className="home_header--link" to="/about">乡村振兴</CustomLink>
                        <CustomLink className="home_header--link" to="/about">帮助中心</CustomLink>
                        <CustomLink className="home_header--link" to="/about">关于我们</CustomLink>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header