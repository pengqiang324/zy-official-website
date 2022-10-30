import './VideoCenter.less'
import { useState, memo } from 'react'
import Bg3 from '../images/bg3.jpg'
import Bg4 from '../images/bg4.jpg'
import Bg5 from '../images/bg5.jpg'
import Bg6 from '../images/bg6.jpg'
import Video from '@/components/Video/Video'
import { getVideo } from '../utils'

function VideoCenter() {
    const VideoCenter = [
        {
            image: Bg3,
            title: '乡村振兴 共建美丽乡村',
            content: '民族要复兴  乡村必振兴',
            media: getVideo(3)
        },
        {
            image: Bg4,
            title: '乡村振兴 法治先行',
            content: '《中华人民共和国乡村振兴法》',
            media: getVideo(4)
        },
        {
            image: Bg5,
            title: '乡村天地阔 振兴正当时',
            content: '乡村正在成为所有人向往的美好家园',
            media: getVideo(5)
        },
        {
            image: Bg6,
            title: '共建美丽乡村 你我携手同行',
            content: '绿水青山就是金山银山',
            media: getVideo(6)
        }
    ]

    const getVideoParams = (play_url = VideoCenter[0].media) => ({
        hd: {
            play_url
        }
    })
    const [showModel, setShowModel] = useState(false)
    const [sources, setSources] = useState(getVideoParams())
    const [cover, setCover] = useState(VideoCenter[0].image)
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
            <div className="VideoList-center">
                <div className="fixed-box">
                    <h2>视讯中心</h2>
                    <p>Video center</p>
                    <div className="VideoList-center--list">
                        {
                            VideoCenter.map((video, index) => (
                                <div className="VideoList-list--item" key={index}>
                                    <div className="VideoList-item--image" style={{ backgroundImage: `url(${video.image})` }} onClick={() => lookVideo(video)}></div>
                                    <div className="VideoList-item-info">
                                        <h2>{video.title}</h2>
                                        <p>{video.content}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            {/* video */}
            <Video showModel={showModel} cover={cover} sources={sources} setShowModel={setShowModel} />
        </>
    )
}

export default memo(VideoCenter)