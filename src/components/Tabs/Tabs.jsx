import './Tabs.less'

function Tabs({ navs, num, children, setNum }) {
    
    return (
        <div className="fixed-box rules-content">
            <div className="rules-box-tab">
                {
                    navs.map((nav, index) => (
                        <div
                            className={`rules-tab-nav ${index == num ? 'rules-tab-on' : ''}`}
                            key={index}
                            onMouseEnter={() => setNum(index)}
                        >
                            <p></p>
                            <span>{nav}</span>
                        </div>
                    ))
                }
            </div>
            <div className="rules-box-list">{ children }</div>
        </div>
    )
}

export default Tabs