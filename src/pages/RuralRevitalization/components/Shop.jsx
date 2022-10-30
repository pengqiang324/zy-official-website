import './Shop.less'
import { OverPack } from 'rc-scroll-anim'
import TweenOne from 'rc-tween-one'
import shop1 from '../images/shop1.jpg'
import shop2 from '../images/shop2.jpg'
import shop3 from '../images/shop3.jpg'
import TransitionWidth from '@/components/TransitionWidth/TransitionWidth'

function Shop() {
    const shopList = [
        {
            num: 6,
            unit: '万瓶',
            title: '三十分钟销售6万',
            content: '公司与贵州梵净山酒业达成帮扶合作，三十分钟共计销售6万瓶，带来经济效益突破千万元。',
            image: shop1
        },
        {
            num: 3500,
            unit: '吨',
            title: '三天助农脐橙销售',
            content: '2021年6月，对接湖南邵阳崀山地区销售脐橙近700万斤，折合约3500吨',
            image: shop2
        },
        {
            num: 700,
            unit: '吨',
            title: '两天助农苹果销售',
            content: '2021年12月，对接新疆地区销售苹果近140万斤，折合约700吨',
            image: shop3
        }
    ]
    return (
        <div className="RuralRevitalization-shop">
            <div className="fixed-box">
                <div className="RuralRevitalization-shop--list">
                    {
                        shopList.map((shop, index) => (
                            <div className="RuralRevitalization-shop--item" key={index}>
                                <OverPack key="111" replay={true} always={false} playScale={0.1}>
                                    <TweenOne key="1111" animation={{ scale: 0, type: 'from', ease: 'linear' }}>
                                        <h2>{shop.num}<span>{shop.unit}</span></h2>
                                    </TweenOne>
                                </OverPack>
                                <TransitionWidth duration={600}>
                                    <h4>{shop.title}</h4>
                                </TransitionWidth>
                                <TransitionWidth duration={600}>
                                    <p>{shop.content}</p>
                                </TransitionWidth>
                                <OverPack key="222" replay={true} always={false} playScale={0.1}>
                                    <TweenOne key="2222" animation={{ scale: 0, type: 'from', ease: 'linear' }}>
                                        <div className="RuralRevitalization-shop--img">
                                            <img src={shop.image} alt={shop.title} />
                                        </div>
                                    </TweenOne>
                                </OverPack>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Shop