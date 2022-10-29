import './Video.less'
import { memo } from 'react'
import Player from 'griffith'

function Video({ showModel, sources, cover, setShowModel }) {
    return (
        <div className={`video-model ${!showModel ? 'video-model--on' : ''}`}>
            <div className="video-box">
                <Player sources={sources} locale="zh-Hans" disablePictureInPicture={true} cover={cover} />
                <span className="video-close" onClick={() => setShowModel(false)}></span>
            </div>
        </div>
    )
}

export default memo(Video)