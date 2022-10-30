import './index.less'
import Banner from './components/Banner'
import Shop from './components/Shop'
import Info from './components/Info'
import Detail from './components/Detail'
import MediaCoverage from '../News/components/MediaCoverage'

function RuralRevitalization() {
    
    return (
        <div className='RuralRevitalization'>
            <Banner/>
            <Shop/>
            <Info/>
            <Detail/>
            <MediaCoverage enableAnimate={true} title="乡村振兴广播站" subtitle="media coverage" />
        </div>
    )
}

export default RuralRevitalization