import './index.less'
import Companner from './images/bg1.png'
import CompannerBg from './images/bg2.png'
import CompannerBg2 from './images/icon.png'
import ShopBg from './images/bg3.png'
import Marquee from "react-fast-marquee"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Banner from './components/banner'
import { getImage } from './utils'
import TransitionWidth from '@/components/TransitionWidth/TransitionWidth'
import ScrollWidthTweenOne from '@/components/ScrollWidthTweenOne/ScrollWidthTweenOne'
// import QueueAnim from 'rc-queue-anim'
// import Player from 'griffith'

// const sources = {
//     hd: {
//         play_url: 'https://video.twimg.com/ext_tw_video/1585341912877146112/pu/vid/1920x1080/aeoVUvTgj4wHShhN.mp4?tag=14',
//     }
// }

function Home() {
    let navigate = useNavigate()
    const [ news ] = useState([
        {
            logo: getImage('news1'),
            title: '深圳怡亚通供应链股份有限公司'
        },
        {
            logo: getImage('news2'), 
            title: '阿里云计算有限公司'
        },
        {
            logo: getImage('news3'),
            title: '湖南红网新媒体集团有限公司'
        },
        {
            logo: getImage('news4'),
            title: '中国联合网络通信集团有限公司广州市分公司'
        },
        {
            logo: getImage('news5'),
            title: '湖南慈善总会'
        },
        {
            logo: getImage('news6'),
            title: '湖南赞友众持企业管理合伙企业'
        },
        {
            logo: getImage('news7'),
            title: '贵州省“黔系列”'
        }
    ])
    // const linkMore = () => {
    //     navigate('/about', { state: { a: 1 } })
    // }

    return (
        <div className="home">
            <div className="home_banner">
                <Banner></Banner>
            </div>
            {/* <OverPack
                key="0"
                style={{height: '500px', overflow: 'hidden'}}
            >
                <TweenOne key="2" animation={{ y: 0, opacity: 0, type: 'from' }} style={{ transform: 'translateY(100px)' }}>
                    <img src={Companner} alt="公司介绍" />
                </TweenOne>
                <QueueAnim key="1">
                    <div key="0" className="admin"></div>
                    <div key="1" className="admin"></div>
                    <div key="2" className="admin"></div>
                    <div key="3" className="admin"></div>
                </QueueAnim>
            </OverPack > */}
            {/* <Player sources={sources} locale="zh-Hans" disablePictureInPicture={true}/> */}
            <div className="company_Introduction">
                <div className="company_Introduction--left">
                    <img src={Companner} alt="公司介绍"/>
                    <img src={CompannerBg} alt="公司介绍" className="company_Introduction--bg" />
                    <img src={CompannerBg2} alt="公司介绍" className="company_Introduction--bg2" />
                </div>
                <div className="company_Introduction--right">
                    <TransitionWidth>
                        <h2>公司介绍</h2>
                        <h4 >COMPANY INTRODUCTION</h4>
                    </TransitionWidth>
                    <div style={{ color: '#777', textAlign: 'left' }}>——</div>
                    <p> 湖南赞友数字科技有限公司成立于2021年8月，总部设在湖南省长沙市高新区。公司诞生在“互联网+时代乡村振兴”的战略背景下，是一家为“乡村振兴”提供产业扶持、产业培育、乡村市场拓展、产品销售、运营维护等及供应链管理于一体的多元化电子商务综合服务性企业。</p>
                    <p className="company_Introduction--text"> “赞友科技”自成立以来，始终坚持“诚信为本 创新为魂”的发展理念。公司荟萃业界精英，致力于通过公司团队优势、平台优势、流量优势、营销宣传、联盟合作企业资源联动等优势，利用“赞友商城”APP电商平台，助推乡村振兴适应数字化新时代，助推新经济、激发新动能、释放新红利，关注新乡村的发展；“汇聚城市和乡村的力量”，深层次的推动“城乡交汇和融合”；在承担社会责任中实现企业价值。</p>
                    <div className="company_Introduction--more" onClick={() => navigate('/shop')}>点击了解更多</div>
                </div>
            </div>
            <div className="company_shop">
                <div className="company_shop--box">
                    <h4>赞友商城APP</h4>
                    <p>——</p>
                    <div className="company_shop--pri">“赞友商城”充分融合了“分享电商+自营电商+入驻电商”三位一体概念，由湖南赞友数字科技有限公司自主开发并运营的大型综合电商服务平台。使电子商务规模化大大增强，让消费者体验智慧、便捷、高效的优质电子商务服务。致力为广大消费者提供“安全、便捷、实惠”优质消费体验。</div>
                    <div>
                        <img src={ShopBg} alt="赞友商城APP"/>
                    </div>
                </div>
            </div>
            <div className="us_advantages">
                <div className="us_advantages--box">
                    <h2>我们的优势</h2>
                    <p>Our advantages</p>
                    <div className="us_advantages--list">
                        <div className="us_advantages--item">
                            <div className="us_advantages--top">
                                <div className="us-num">
                                    <ScrollWidthTweenOne replay={true} playScale={0.1} animation={{ y: '-80%', ease: 'linear' }}>
                                        <div className="us_advantages--num">
                                            <p>0</p>
                                            <p>1</p>
                                            <p>2</p>
                                            <p>4</p>
                                            <p>5</p>
                                        </div>
                                    </ScrollWidthTweenOne>
                                </div>
                                <span>亿+</span>
                            </div>
                            <div className="us_advantages--pri">
                                分享电商板块销售额
                            </div>
                        </div>
                        <div className="us_advantages--item">
                            <div className="us_advantages--top">
                                500
                                <span>万+笔</span>
                            </div>
                            <div className="us_advantages--pri">
                                分享平台累计订单数
                            </div>
                        </div>
                        <div className="us_advantages--item">
                            <div className="us_advantages--top">
                                <div className="us-num">
                                    <ScrollWidthTweenOne replay={true} playScale={0.1} animation={{ y: '-86%', ease: 'linear' }}>
                                        <div className="us_advantages--num">
                                            <p>00</p>
                                            <p>02</p>
                                            <p>04</p>
                                            <p>08</p>
                                            <p>10</p>
                                            <p>13</p>
                                            <p>15</p>
                                        </div>
                                    </ScrollWidthTweenOne>
                                </div>
                                <span>万+</span>
                            </div>
                            <div className="us_advantages--pri">
                                海量优质商品
                            </div>
                        </div>
                        <div className="us_advantages--item">
                            <div className="us_advantages--top">
                                <div className="us-num">
                                    <ScrollWidthTweenOne replay={true} playScale={0.1} animation={{ y: '-75%', ease: 'linear' }}>
                                        <div className="us_advantages--num">
                                            <p>0</p>
                                            <p>1</p>
                                            <p>2</p>
                                            <p>3</p>
                                        </div>
                                    </ScrollWidthTweenOne>
                                </div>
                                <span>万+</span>
                            </div>
                            <div className="us_advantages--pri">
                                优质商户
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="party_building_culture">
                <div className="fixed-box party_building_box">
                    <div className="party_building--left">
                        <h2>党建文化<span>Party building culture</span></h2>
                        <div className="party_building--line">————————————————————————————</div>
                        <p>
                            坚持和加强党的全面领导，把党建引领贯穿企业治理全过程，把加强党的领导和完善公司治理统一起来，把企业党组织内嵌到公司治理结构之中，把党建作为助力改革发展的“倍增器”，充分发挥党组织的领导核心和政治核心作用。
                        </p>
                        <p className="party_building--text">“以党为核心，发挥党员先锋带头作用，为乡村振兴贡献力量”</p>
                        <div className="party_building--more" onClick={() => navigate('/companyNews')}>查看更多<span>></span></div>
                    </div>
                    <div className="party_building--right">
                        <div className="party_building--item">
                            <div className="party_item--text">
                                <div className="us-num">
                                    <ScrollWidthTweenOne replay={true} playScale={0.1} animation={{ y: '-84%', ease: 'linear' }}>
                                        <div className="us_advantages--num">
                                            <p>0</p>
                                            <p>1</p>
                                            <p>2</p>
                                            <p>3</p>
                                        </div>
                                    </ScrollWidthTweenOne>
                                </div>
                                <span>人</span>
                            </div>
                            <div className="party_item--pri">正式党员</div>
                        </div>
                        <div className="party_building--item">
                            <div className="party_item--text">
                                <div className="us-num">
                                    <ScrollWidthTweenOne replay={true} playScale={0.1} animation={{ y: '-84%', delay: 240, ease: 'linear' }}>
                                        <div className="us_advantages--num">
                                            <p>0</p>
                                            <p>1</p>
                                            <p>2</p>
                                            <p>3</p>
                                        </div>
                                    </ScrollWidthTweenOne>
                                </div>
                                <span>人</span>
                            </div>
                            <div className="party_item--pri">流动党员</div>
                        </div>
                        <div className="party_building--item">
                            <div className="party_item--text">
                                <div className="us-num">
                                    <ScrollWidthTweenOne replay={true} playScale={0.1} animation={{ y: '-92%', delay: 120, ease: 'linear' }}>
                                        <div className="us_advantages--num">
                                            <p>0</p>
                                            <p>2</p>
                                            <p>4</p>
                                            <p>6</p>
                                            <p>9</p>
                                            <p>11</p>
                                            <p>13</p>
                                            <p>15</p>
                                        </div>
                                    </ScrollWidthTweenOne>
                                </div>
                                <span>人</span>
                            </div>
                            <div className="party_item--pri">入党积极分子</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="partners">
                <div className="fixed-box">
                    <h2>合作伙伴</h2>
                    <p>COOPERATIVE PARTNER</p>
                    <Marquee pauseOnHover={true} direction="right">
                        { news.map((item, index) => (
                            <div key={index} className="partners-item">
                                <div className="partners-item--top">
                                    <img src={item.logo} alt={item.title} />
                                </div>
                                <div className="partners-item--title">{item.title}</div>
                            </div>
                        )) }
                    </Marquee>
                </div>
            </div>
        </div>
    )
}

export default Home