import './index.less'
import { useState } from 'react'
import media from '../News/media/2.mp4'
import VideoImg from './images/video.jpg'
import Video from '@/components/Video/Video'

function HelpCenter() {
    const sources = {
        hd: {
            play_url: media
        }
    }
    const [showModel, setShowModel] = useState(false)
    const lookVideo = () => {
        setShowModel(true)
    }
    return (
        <div className="HelpCenter">
            <div className="HelpCenter-banner">
                <div className="fixed-box">
                    <div className="HelpCenter-banner--left">
                        <h2>公司宣传片</h2>
                        <p>湖南赞友数字科技有限公司成立于2021年8月，总部设在中国移动互联网第五城的湖南省长沙市高新区，公司诞生在移动互联网时代、国家“乡村振兴”战略背景下，是一家致力于使用互联网电商平台为乡村振兴提供产业扶持、产业培育、乡村市场拓展、产品销售、运营维护、供应链管理于一体的多元化高新电子商务服务企业。</p>
                        <div className='HelpCenter--more'>了解更多</div>
                    </div>
                    <div className="HelpCenter-banner--right">
                        <div className="HelpCenter--video">
                            <div className="HelpCenter--video--info" onClick={lookVideo}></div>
                        </div>
                    </div>
                </div>
            </div>
            {/* video */}
            <Video showModel={showModel} cover={VideoImg} sources={sources} setShowModel={setShowModel} />
        </div>
    )
}

export default HelpCenter