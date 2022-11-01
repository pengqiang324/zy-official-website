import './MediaCoverage.less'
import mediaBg1 from '../images/mediaBg1.png'
import mediaBg2 from '../images/mediaBg2.png'
import mediaBg3 from '../images/mediaBg3.png'
import ButtonMore from '@/components/ButtomMore/ButtonMore'
import { OverPack } from 'rc-scroll-anim'
import TweenOne from 'rc-tween-one'
import { useNavigate } from 'react-router-dom'
import MediaReports from '@/mock/MediaReports.json'

function MediaCoverage({ enableAnimate, title, subtitle }) {
    const navigate = useNavigate()
    const mediaList = [MediaReports[0], ...MediaReports.slice(2,4)]
    mediaList.map((item, index) => {
        if (!index) {
            item.image = mediaBg1
        } else if (index===1) {
            item.image = mediaBg2
        } else {
            item.image = mediaBg3
        }
    })

    const renderDom = <>
        <h2 className="shop-notice">{title}</h2>
        <h4>{subtitle}</h4>
    </>

    const renderListDom = <div className="news-media--list">
        {
            mediaList.map((media, index) => (
                <div className="news-media--item" key={index} onClick={() => navigate('/ArticleDetails', { state: media })}>
                    <div className="news-media--image" style={{ backgroundImage: `url(${media.image})` }}></div>
                    <div className="news-media--info">
                        <h2>{media.title}</h2>
                        <p>{media.description}</p>
                    </div>
                </div>
            ))
        }
    </div>

    const renderMoreDom = <ButtonMore to='/companyNews' style={{ marginTop: '52px' }}></ButtonMore>

    return (
        <div className="news-media--coverage">
            <div className="fixed-box">
                {
                    enableAnimate ? 
                    ( 
                        <>
                            <OverPack key="444" replay={true} always={false}>
                                <TweenOne key="4444" animation={{ scale: 0, type: 'from', ease: 'linear' }}>
                                    { renderDom }
                                </TweenOne>
                            </OverPack>
                            <OverPack key="555" replay={true} always={false}>
                                <TweenOne key="5555" animation={{ scale: 0, type: 'from', ease: 'linear', delay: '100' }}>
                                    {renderListDom }
                                </TweenOne>
                            </OverPack>
                        </>
                    ) : <>
                            { renderDom }
                            { renderListDom }
                    </>
                }
                {
                    enableAnimate ? 
                    (
                        <OverPack key="666" replay={true} always={false} playScale={0.1}>
                            <TweenOne key="6666" animation={{ opacity: 0, type: 'from' }}>
                                {renderMoreDom}
                            </TweenOne>
                        </OverPack> 
                    ): renderMoreDom
                }
            </div>
        </div>
    )
}

export default MediaCoverage