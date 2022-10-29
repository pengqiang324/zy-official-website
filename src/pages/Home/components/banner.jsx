import { getImage } from '../utils'
import Img from '../images/banner1.jpg'
import Img2 from '../images/banner5.png'
import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
import 'rc-banner-anim/assets/index.css';
import './banner.less'
const BgElement = Element.BgElement;


function Banner() {
    return (
        <>
            <BannerAnim prefixCls="banner-user" autoPlay={true}>
                <Element
                    prefixCls="banner-user-elem"
                    key="0"
                    followParallax={{
                        delay: 1000,
                        data: [
                            { id: 'bg', value: 15, bgPosition: '50%', type: ['backgroundPositionX', 'backgroundPositionY'] },
                            { id: 'title', value: -30, type: ['x', 'y'] },
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
                <Element
                    prefixCls="banner-user-elem"
                    key="1"
                    followParallax={{
                        delay: 1000,
                        data: [
                            { id: 'bg1', value: 15, bgPosition: '50%', type: ['backgroundPositionX', 'backgroundPositionY'] },
                            { id: 'title1', value: -30, type: ['x', 'y'] },
                        ],
                    }}
                >
                    <BgElement
                        key="bg1"
                        className="bg"
                        style={{
                            background: `url(${Img2}) 50% 50% no-repeat`,
                            backgroundSize: 'cover'
                        }}
                        id="bg1"
                    />
                    <div className="fixed-box">
                        <TweenOne className="banner-bg2" animation={{ y: 30, opacity: 0, type: 'from' }} id="title1">
                            <img src={getImage('banner6')} alt="banner6" />
                        </TweenOne>
                    </div>
                </Element>
            </BannerAnim>
        </>
    )
}

export default Banner