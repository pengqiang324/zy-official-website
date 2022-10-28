import './index.less'
import { useState } from 'react'
import Agreement from './components/Agreement'
import Rule from './components/Rule'

function Rules() {
    const [navs] = useState(['平台规则', '平台协议'])
    const [num, setNum] = useState(0)
    // const [rules] = useState([])

    return (
        <div className="rules">
            <div className="rules-banner"></div>
            <div className="rules-box">
                <div className="fixed-box rules-content">
                    <div className="rules-box-tab">
                        {
                            navs.map((nav, index) => (
                                <div 
                                    className={`rules-tab-nav ${ index == num ? 'rules-tab-on' : '' }`} 
                                    key={index}
                                    onMouseEnter={() => setNum(index)}
                                >
                                    <p></p>
                                    <span>{nav}</span>
                                </div>
                            ))
                        }
                    </div>
                    <div className="rules-box-list">
                        {
                            !num ? <Rule/> : <Agreement/>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rules