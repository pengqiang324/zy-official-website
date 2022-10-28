import { getImage } from '../utils'
import Img from '../images/banner1.jpg'
import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
import 'rc-banner-anim/assets/index.css';
import './banner.less'
const BgElement = Element.BgElement;


function Banner() {
    return (
        <>
            <BannerAnim prefixCls="banner-user">
                <Element
                    prefixCls="banner-user-elem"
                    key="0"
                    followParallax={{
                        delay: 1000,
                        data: [
                            { id: 'bg', value: 15, bgPosition: '50%', type: ['backgroundPositionX', 'backgroundPositionY'] },
                            { id: 'title', value: -20, type: ['x', 'y'] },
                        ],
                    }}
                >
                    <BgElement
                        key="bg"
                        className="bg"
                        style={{
                            background: `url(${Img}) 50% 50% no-repeat`,
                            backgroundSize: 'cover'
                        }}
                        id="bg"
                    />
                    <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }} id="title">
                        <div className="banner-user-bg">
                            <img src={getImage('banner1')} alt="banner1" />
                            <img src={getImage('banner2')} alt="banner2" />
                            <img src={getImage('banner3')} alt="banner3" />
                            <img src={getImage('banner4')} alt="banner4" />
                        </div>
                    </TweenOne>
                </Element>
            </BannerAnim>
        </>
    )
}

export default Banner