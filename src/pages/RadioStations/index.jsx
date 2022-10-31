import './index.less'
import Player from 'griffith'
import VideoImg from './images/video.jpg'
import Video from '../News/media/3.mp4'
import { Fragment } from 'react'
import { OverPack } from 'rc-scroll-anim'
import TweenOne from 'rc-tween-one'
import CompanyNews from '@/mock/CompanyNews.json'
import { useNavigate } from 'react-router-dom'

function RadioStations() {
    const sources = {
        hd: {
            play_url: Video
        }
    }
    const radioList = [CompanyNews[0], ...CompanyNews.slice(-3), CompanyNews[4]]
    const navigate = useNavigate()

    return (
        <div className="RadioStations">
            <div className="RadioStations-banner"></div>
            <div className="RadioStations-info">
                <div className="fixed-box">
                    <OverPack key="444" always={false} playScale={0.1}>
                        <TweenOne key="4444" animation={{ x: 400, opacity: 0, type: 'from', ease: 'linear' }}>
                            <div className="RadioStations-info--title">
                                <h2>广播站</h2>
                                <p>broadcasting station</p>
                            </div>
                        </TweenOne>
                    </OverPack>
                    <OverPack key="555" always={false} playScale={0.1}>
                        <TweenOne key="5555" animation={{ x: 400, opacity: 0, type: 'from', delay: 200, ease: 'linear' }}>
                            <div className="RadioStations-info--list">
                                <div className="RadioStations-list--left">
                                    {
                                        radioList.map((radio, index) => (
                                            <Fragment key={index}>
                                                <div className="RadioStations-list--item" onClick={() => navigate('/ArticleDetails', { state: radio })}>
                                                    <h4>{radio.title}</h4>
                                                    <p>{radio.createAtDate.replace(/\//g, '-')}</p>
                                                </div>
                                                {index !== radioList.length - 1 && <div className="RadioStations-line"></div>}
                                            </Fragment>
                                        ))
                                    }
                                </div>
                                <div className="RadioStations-list--right">
                                    <Player sources={sources} locale="zh-Hans" disablePictureInPicture={true} cover={VideoImg} />
                                </div>
                            </div>
                        </TweenOne>
                    </OverPack>
                </div>
            </div>
        </div>
    )
}

export default RadioStations