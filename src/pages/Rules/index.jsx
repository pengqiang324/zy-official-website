import './index.less'
import { useState } from 'react'
import Agreement from './components/Agreement'
import Rule from './components/Rule'
import Tabs from '../../components/Tabs/Tabs'

function Rules() {
    const [navs] = useState(['平台规则', '平台协议'])
    const [num, setNum] = useState(0)

    return (
        <div className="rules">
            <div className="rules-banner"></div>
            <div className="rules-box">
                <Tabs navs={navs} num={num} setNum={setNum}>
                    {
                        !num ? <Rule /> : <Agreement />
                    }
                </Tabs>
            </div>
        </div>
    )
}

export default Rules