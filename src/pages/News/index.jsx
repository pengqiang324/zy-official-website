import './index.less'
import { useState } from 'react'
import { OverPack } from 'rc-scroll-anim'
import TweenOne from 'rc-tween-one'
import { Fragment } from 'react'
import video1 from './images/video1.jpg'
import video2 from './images/video2.jpg'
import video3 from './images/video3.jpg'
import Video from '@/components/Video/Video'
import LeaderList from './components/LeaderList'
import MediaCoverage from './components/MediaCoverage'

// 批量导入视频
export const getVideo = (suffix) => {
    const modules = import.meta.globEager('./media/*.mp4');
    return modules[`./media/${suffix}.mp4`].default
}

function News() {
    const [newsList] = useState([
        {
            time: '2022',
            day: '09-28',
            title: '赞友商城3.1.2版本更新公告',
            content: '赞友商城3.1.2版本更新公告尊敬的用户：赞友商城App已于2022年9月28日05：00版本更新至3.1.2版本，更新内容如下：一、新增营销中心应用场景1、新增小剧场充值兑换机制，可采用人民币+营销值组合兑换会员及小剧场内K币；2、新增小剧场营销值兑换专区，可使用营销值兑换专区内K豆免费观看短剧；3、新增云发单机器人兑换功能。用户可使用营销值兑换云发单机器人，让分享电商更简单更便捷。（注：...'
        },
        {
            time: '2022',
            day: '07-22',
            title: '赞友商城3.0.0版本更新公告',
            content: '赞友商城3.0.0版本更新公告尊敬的用户赞友商城App于2022年7月22日23:38版本更新至3.0.0版本，更新内容如下：1、赞友商城入驻商城版块上线，入驻商户请重选店铺行业进行商品上传审核，赞友商城试运营开启售卖时间2022年7月27日11:08，敬请期待！2、优化分享电商版块底层架构，提升分享电商商品、佣金核心竞争力，加速分享电商版块的发展。3、优化赞友商城商家管理后台，操作手册可通...'
        },
        {
            time: '2022',
            day: '10-19',
            title: '9月6日系统公告',
            content: '9月6日系统公告尊敬的用户：一、放假通知：1、放假时间：2022年9月10日—9月12日。2、放假安排：（1）放假期间，电话客服、工单客服轮值班照常服务，如响应不够及时，敬请谅解；（2）放假期间期权转让中心不休市；（3）防疫温馨提示：非必要、不外出；守规矩、不瞒报；严防护、不放松；扫双码、不懈怠；非必要、不聚集、不信谣、不传谣；戴口罩、勤洗手。3、我们恭祝全体用户节日快乐、阖家幸福。二、 目...'
        },
        {
            time: '2022',
            day: '10-19',
            title: '赞友商城3.1.0版本更新公告',
            content: '赞友商城3.1.0版本更新公告尊敬的用户'
        }
    ])

    const videoList = [
        {
            image: video1,
            title: '乡村振兴宣传视频',
            media: getVideo(1)
        },
        {
            image: video2,
            title: '企业宣传片',
            media: getVideo(2)
        },
        {
            image: video3,
            title: '乡村振兴正当时',
            media: getVideo(3)
        }
    ]

    const getVideoParams = (play_url = videoList[0].media) => ({
        hd: {
            play_url
        }
    })

    const [showModel, setShowModel] = useState(false)
    const [sources, setSources] = useState(getVideoParams())
    const [cover, setCover] = useState(videoList[0].image)
    const lookVideo = (video) => {
        setShowModel(true)
        setSources((prevState) => ({
            ...prevState,
            ...getVideoParams(video.media)
        }))
        setCover(video.image)
    }

    return (
        <>
            <div className='news'>
                <div className="banner-header"></div>
                <div className="shop-info">
                    <div className="fixed-box">
                        <OverPack
                            key="4"
                            playScale={0.1}
                            always={false}
                        >
                            <TweenOne key="40" animation={{ opacity: 0, type: 'from', delay: 400 }}>
                                <h2 className="shop-notice">赞友动态</h2>
                                <h4>Zan You News</h4>
                            </TweenOne>
                        </OverPack>
                        <div>
                            <div className="shop-info--box">
                                <OverPack
                                    key="4"
                                    playScale={0.1}
                                    replay={true}
                                    always={false}
                                >
                                    <TweenOne key="40" animation={{ opacity: 0, type: 'from', delay: 400 }}>
                                        <div className="shop-info--news">
                                            {newsList.map((news, index) => (
                                                <Fragment key={index + 'a'}>
                                                    <div className="shop-news--list">
                                                        <div className="shop-news--left">
                                                            <h3>{news.time}</h3>
                                                            <p>{news.day}</p>
                                                        </div>
                                                        <div className="news-line"></div>
                                                        <div className="shop-news--right">
                                                            <h2>{news.title}</h2>
                                                            <p>{news.content}</p>
                                                        </div>
                                                    </div>
                                                    {index !== newsList.length - 1 && <div className="shop-news-line"></div>}
                                                </Fragment>
                                            ))}
                                        </div>
                                    </TweenOne>
                                </OverPack>
                                <div className="shop-info--Introduction">
                                    <div className="shop-Introduction--pri"></div>
                                </div>
                            </div>
                            <div className="news-more">
                                <span>查看更多&nbsp;></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="news-info">
                    <div className="fixed-box">
                        <LeaderList/>
                        <div className="news-more">
                            <span style={{ color: 'rgba(216, 27, 67, 1)' }}>查看更多&nbsp;></span>
                        </div>
                    </div>
                </div>
                <MediaCoverage title="媒体报道" subtitle="media coverage"/>
                <div className="news-media--coverage news-video">
                    <div className="fixed-box">
                        <h2 className="shop-notice">视讯中心</h2>
                        <h4>Video center</h4> 
                        <div className="news-video--list">
                            {
                                videoList.map((video, index) => (
                                    <div className="video-list--item" key={index} onClick={() => lookVideo(video)}>
                                        <div className="list-item--header" style={{backgroundImage: `url(${video.image})`}}></div>
                                        <h2>{video.title}</h2>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="news-more video-more" style={{ marginTop: '52px' }}>
                            <span>了解更多&nbsp;></span>
                        </div>
                    </div>
                </div>
            </div>
            {/* video */}
            <Video showModel={showModel} cover={cover} sources={sources} setShowModel={setShowModel}/>
        </>
    )
}

export default News