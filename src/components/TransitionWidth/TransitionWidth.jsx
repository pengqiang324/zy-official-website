import './TransitionWidth.less'
import { OverPack } from 'rc-scroll-anim'
import TweenOne from 'rc-tween-one'

function TransitionWidth({ children, duration=800}) {
    return (
        <div style={{ position: 'relative' }}>
            { children }
            <OverPack key="0" always={false} playScale={0.1}>
                <TweenOne key="2" animation={{ width: 0, duration }} className="company_bg">
                </TweenOne>
            </OverPack>
        </div>
    )
}

export default TransitionWidth