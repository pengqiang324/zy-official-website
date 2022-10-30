import './OperationVideo.less'
import { useState, memo } from 'react'
import Bg1 from '../images/bg1.png'
import Bg2 from '../images/bg2.png'
import Video from '@/components/Video/Video'
import { getVideo } from '../utils'

function OperationVideo() {
    const OperationVideo = [
        {
            image: Bg1,
            title: '96赞友卡申请流程',
            media: getVideo(1)
        },
        {
            image: Bg2,
            title: '96赞友卡绑定流程',
            media: getVideo(2)
        }
    ]

    const getVideoParams = (play_url = OperationVideo[0].media) => ({
        hd: {
            play_url
        }
    })
    const [showModel, setShowModel] = useState(false)
    const [sources, setSources] = useState(getVideoParams())
    const [cover, setCover] = useState(OperationVideo[0].image)
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
            <div className="VideoList-list">
                <div className="fixed-box">
                    <div className="VideoList-list--header">
                        <h2>操作视频</h2>
                        <p>96赞友卡申请及绑定流程</p>
                    </div>
                    <div className="VideoList-list--info">
                        {
                            OperationVideo.map((video, index) => (
                                <div className="VideoList-list--item" key={index} onClick={() => lookVideo(video)}>
                                    <div className="VideoList-item--image" style={{ backgroundImage: `url(${video.image})` }}></div>
                                    <div className="VideoList-item-info">
                                        <h2>{video.title}</h2>
                                        <p>点击视频，了解详细操作步骤。</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            {/* video */ }
            <Video showModel={showModel} cover={cover} sources={sources} setShowModel={setShowModel} />
        </>
    )
}

export default memo(OperationVideo)