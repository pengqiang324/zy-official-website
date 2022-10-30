import './index.less'
import { useLocation } from 'react-router-dom'
import bg1 from './images/bg1.jpg'
import bg2 from './images/bg2.jpg'
import ScrollWidthTweenOne from '@/components/ScrollWidthTweenOne/ScrollWidthTweenOne'

function About() {
    const { state } = useLocation()

    return (
        <div className="About">
            <div className="About-banner"></div>
            <div className="About-info">
                <div className="fixed-box">
                    <ScrollWidthTweenOne replay={true} playScale={0.1} animation={{ opacity: 0, type: 'from', delay: 450, ease: 'linear' }}>
                        <h2>联系我们</h2>
                        <p>CONTACT US</p>
                    </ScrollWidthTweenOne>
                    <div className="About-info-detail">
                        <div className="About-detail--left">
                            <h4>湖南赞友数字科技有限公司</h4>
                            <div className="About-detail--info">
                                <p>联系方式：400-6896-005</p>
                                <p>公司地址：湖南省长沙市岳麓区九天银河产业园2栋</p>
                            </div>
                        </div>
                        <div className="About-detail--right">
                            <div className="About-right--header">
                                <div className="About-right--header_left">
                                    <img src={bg1} alt="官方公众号" />
                                    <h5>官方公众号</h5>
                                </div>
                                <div className="About-right--header_right">
                                    <img src={bg2} alt="赞友商城资讯中心" />
                                    <h5>赞友商城资讯中心</h5>
                                </div>
                            </div>
                            <p>邮箱地址：zanyou2021@126.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About