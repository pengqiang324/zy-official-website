import './TransitionWidth.less'
import { OverPack } from 'rc-scroll-anim'
import TweenOne from 'rc-tween-one'

function TransitionWidth({ children, duration = 800, replay = true, delay=0 }) {
    return (
        <div style={{ position: 'relative' }}>
            { children }
            <OverPack key={children} replay={replay} always={false} playScale={0.1}>
                <TweenOne key={children} animation={{ width: 0, duration, delay }} className="company_bg">
                </TweenOne>
            </OverPack>
        </div>
    )
}

export default TransitionWidth