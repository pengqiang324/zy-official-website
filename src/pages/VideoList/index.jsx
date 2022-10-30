import './index.less'
import CompanyPublicity from '../HelpCenter/components/CompanyPublicity'
import OperationVideo from './components/OperationVideo'
import VideoCenter from './components/VideoCenter'
function VideoList() {
    return (
        <div className="VideoList">
            <CompanyPublicity />
            <OperationVideo />
            <VideoCenter />
        </div>
    )
}

export default VideoList