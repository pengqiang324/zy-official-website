import './index.less'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { OverPack } from 'rc-scroll-anim'
import TweenOne from 'rc-tween-one'
import { Fragment } from 'react'
import { splitTime } from '../../utils/index'
import PlatformAnnouncement from '@/mock/PlatformAnnouncement.json'

// 批量导入图片
export const getImage = (suffix) => {
    const modules = import.meta.globEager('./images/*.png');
    return modules[`./images/${suffix}.png`].default
}

function Shop() {
    const [newsList] = useState(PlatformAnnouncement.slice(0, 4))
    const Navigate = useNavigate()
    const lookDetail = (news) => {
        Navigate('/ArticleDetails', { state: news })
    }
    return (
        <div className='shop'>
            <div className="shop-banner"></div>
            <OverPack
                key="0"
                always={false}
                playScale={0.2}
                replay={true}
                className="shop-box"
            >
                <TweenOne key="01" animation={{ x: 0 }} style={{ transform: 'translateX(100%)' }} className="shop-bg2">
                    <img src={getImage('bg2')} alt="赞友科技" />
                </TweenOne>
            </OverPack >
            <OverPack
                key="1"
                always={false}
                replay={true}
                className="shop-box"
            >
                <TweenOne key="10" animation={{ x: 0 }} style={{ transform: 'translateX(-100%)' }} className="shop-bg2">
                    <img src={getImage('bg3')} alt="赞友科技" />
                </TweenOne>
            </OverPack >
            <OverPack
                key="2"
                always={false}
                replay={true}
                className="shop-box"
            >
                <TweenOne key="20" animation={{ x: 0 }} style={{ transform: 'translateX(100%)' }} className="shop-bg2">
                    <img src={getImage('bg4')} alt="赞友科技" />
                </TweenOne>
            </OverPack >
            <div className="shop-info">
                <div className="fixed-box">
                    <OverPack
                        key="4"
                        replay={true}
                        always={false}
                    >
                        <TweenOne key="40" animation={{ opacity: 0, type: 'from', delay: 400 }}>
                            <h2 className="shop-notice">更新公告</h2>
                            <h4>News</h4>
                        </TweenOne>
                    </OverPack>
                    <div className="shop-info--box">
                        <OverPack
                            key="4"
                            playScale={0.1}
                            replay={true}
                            always={false}
                        >
                            <TweenOne key="40" animation={{ opacity: 0, type: 'from', delay: 400 }}>
                                <div className="shop-info--news">
                                    { newsList.map((news, index) => (
                                        <Fragment key={index+'a'}>
                                            <div className="shop-news--list" onClick={() => lookDetail(news)}>
                                                <div className="shop-news--left">
                                                    <h3>{splitTime('day', news.createAtDate)}</h3>
                                                    <p>{splitTime('year', news.createAtDate) + '-' + splitTime('month', news.createAtDate)}</p>
                                                </div>
                                                <div className="shop-news--right">
                                                    <h2>{news.title}</h2>
                                                    <p>{news.description}</p>
                                                </div>
                                            </div>
                                            {index !== newsList.length - 1 && <div className="shop-news-line"></div> }
                                        </Fragment>
                                    ))}
                                </div>
                            </TweenOne>
                        </OverPack>
                        <div className="shop-info--Introduction">
                            <div className="shop-Introduction--top">
                                <div className="shop-Introduction--pri">
                                    <h2> •【重磅】xxx产品销售量指数型上升</h2>
                                    <p>请输入要描述的内容进行内容补充，请输入要描述的内容进行内容补充，请输入要描述的内容进行...</p>
                                </div>
                            </div>
                            <div className="shop-Introduction--bottom">
                                <div className="shop-Introduction--pri">
                                    <h2> •【重磅】xxx公司连续发布多款产品</h2>
                                    <p>请输入要描述的内容进行内容补充，请输入要描述的内容进行内容补充，请输入要描述的内容进行...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop