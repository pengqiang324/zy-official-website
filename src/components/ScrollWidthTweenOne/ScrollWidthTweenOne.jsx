import { OverPack } from 'rc-scroll-anim'
import TweenOne from 'rc-tween-one'

function ScrollWidthTweenOne({ always=false, children, animation, ...props}) {
    return (
        <OverPack key="444" always={always} {...props}>
            <TweenOne key="4444" animation={animation}>
                { children }
            </TweenOne>
        </OverPack>
    )
}

export default ScrollWidthTweenOne