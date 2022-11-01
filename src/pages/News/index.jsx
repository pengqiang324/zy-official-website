import './index.less'
import { useState } from 'react'
import { OverPack } from 'rc-scroll-anim'
import TweenOne from 'rc-tween-one'
import { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
import video1 from './images/video1.jpg'
import video2 from './images/video2.jpg'
import video3 from './images/video3.jpg'
import Video from '@/components/Video/Video'
import LeaderList from './components/LeaderList'
import MediaCoverage from './components/MediaCoverage'
import Banner from './components/Banner'
import ButtonMore from '../../components/ButtomMore/ButtonMore'
import CompanyNews from '@/mock/CompanyNews.json'
import { splitTime } from '../../utils/index'

// 批量导入视频
export const getVideo = (suffix) => {
    const modules = import.meta.globEager('./media/*.mp4');
    return modules[`./media/${suffix}.mp4`].default
}

function News() {
    const newsList = CompanyNews.slice(0, 4)
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
    const navigate = useNavigate()
    const lookDetail = (news) => {
        navigate('/ArticleDetails', { state: news })
    }

    return (
        <>
            <div className='news'>
                <Banner/>
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
                                                    <div className="shop-news--list" onClick={() => lookDetail(news)}>
                                                        <div className="shop-news--left">
                                                            <h3>{splitTime('year', news.createAtDate)}</h3>
                                                            <p>{splitTime('month', news.createAtDate) + '-' + splitTime('day', news.createAtDate)}</p>
                                                        </div>
                                                        <div className="news-line"></div>
                                                        <div className="shop-news--right">
                                                            <h2>{news.title}</h2>
                                                            <p>{news.description}</p>
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
                            <ButtonMore to='/companyNews'></ButtonMore>
                        </div>
                    </div>
                </div>
                <div className="news-info">
                    <div className="fixed-box">
                        <LeaderList/>
                        <ButtonMore to='/LeadershipCare' linkStyl={{ color: 'rgba(216, 27, 67, 1)' }}></ButtonMore>
                    </div>
                </div>
                <MediaCoverage title="媒体报道" subtitle="media coverage"/>
                <div className="news-media--coverage news-video">
                    <div className="fixed-box">
                        <h2 className="shop-notice" style={{fontWeight: '400'}}>视讯中心</h2>
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
                        <ButtonMore prefixCls="video-more" to='/VideoList' style={{ marginTop: '52px' }}>了解更多</ButtonMore>
                    </div>
                </div>
            </div>
            {/* video */}
            <Video showModel={showModel} cover={cover} sources={sources} setShowModel={setShowModel}/>
        </>
    )
}

export default News