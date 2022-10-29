import './index.less'
import { useState } from 'react'
import LeaderList from '../News/components/LeaderList'
import Tabs from '@/components/Tabs/Tabs'
import LeadershipVisits from './components/LeadershipVisits'
import LeadershipGuidance from './components/LeadershipGuidance'

function LeadershipCare() {
    const [navs] = useState(['领导来访', '领导指导'])
    const [num, setNum] = useState(0)

    return (
        <div className="leaderShipCare">
            <div className="leaderShipCare-banner"></div>
            <div className="leaderShipCare-info">
                <div className="fixed-box">
                    <LeaderList></LeaderList>
                </div>
            </div>
            <div className="leaderShipCare-tabs">
                <Tabs navs={navs} num={num} setNum={setNum}>
                    {!num ? <LeadershipVisits /> : <LeadershipGuidance/>}
                </Tabs>
            </div>
        </div>
    )
}

export default LeadershipCare