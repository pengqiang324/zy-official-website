import './Info.less'
import { OverPack } from 'rc-scroll-anim'
import TweenOne from 'rc-tween-one'
import TransitionWidth from '@/components/TransitionWidth/TransitionWidth'

function Info() {
    return (
        <div className="RuralRevitalization-info">
            <OverPack key="1000" always={false} replay={true}>
                <TweenOne key="10000" animation={{ scale: 0, type: 'from', ease: 'linear' }}>
                    <h2>赞友乡村振兴发展基金</h2>
                </TweenOne>
            </OverPack>
            <div className="fixed-box RuralRevitalization-info--list">
                <TransitionWidth duration={600}>
                    <div className="RuralRevitalization-info--left"></div>
                </TransitionWidth>
                <TransitionWidth duration={600}>
                    <div className="RuralRevitalization-info--right">
                        赞友乡村振兴发展基金由湖南赞友数字科技有限公司发起，于2021年12月在湖南省慈善总会登记成立。旨在响应党和国家号召、深入实施乡村振兴战略、为乡村振兴的产业培育提供资金支持，助力乡村市场拓展、人才培养等各类慈善公益事业；参与帮贫扶困、助学助医。
                    </div>
                </TransitionWidth>
            </div>
        </div>
    )
}

export default Info