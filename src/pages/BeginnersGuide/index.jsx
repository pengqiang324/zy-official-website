import './index.less'
import Banner from '../News/components/Banner'
import GuideList from './components/GuideList'

function BeginnersGuide() {
    return (
        <div className="BeginnersGuide">
            <Banner/>
            <div className="fixed-box BeginnersGuide-content ">
                <div className="BeginnersGuide-box-tab">
                    <div className="BeginnersGuide-tab-nav">新手指南</div>
                </div>
                <div className="BeginnersGuide-box-list">
                    <GuideList/>
                </div>
            </div>
        </div>
    )
}

export default BeginnersGuide