import './index.less'
import Player from 'griffith'
import VideoImg from './images/video.jpg'
import Video from '../News/media/3.mp4'
import { Fragment } from 'react'
import { OverPack } from 'rc-scroll-anim'
import TweenOne from 'rc-tween-one'

function RadioStations() {
    const sources = {
        hd: {
            play_url: Video
        }
    }
    const radioList = [
        {
            title: '赞友商城携手广州联通为乡村振兴“赋能加码”',
            time: '2022-10-20'
        },
        {
            title: ' 湖南省民营企业首支乡村振兴专项发展基金成立',
            time: '2022-10-20'
        },
        {
            title: '长沙“赞友商城”电商平台为乡村振兴农产品销售打开新通道',
            time: '2022-10-20'
        },
        {
            title: ' 赞友商城乡村振兴专项研讨会在湖南赞友数字科技有限公司召开',
            time: '2022-10-14'
        },
        {
            title: '携手赞友商城，共织乡村振兴“幸福网',
            time: '2022-08-10'
        }
    ]
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
                                                <div className="RadioStations-list--item">
                                                    <h4>{radio.title}</h4>
                                                    <p>{radio.time}</p>
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