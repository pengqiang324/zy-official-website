import './MediaCoverage.less'
import mediaBg1 from '../images/mediaBg1.png'
import mediaBg2 from '../images/mediaBg2.png'
import mediaBg3 from '../images/mediaBg3.png'
import { OverPack } from 'rc-scroll-anim'
import TweenOne from 'rc-tween-one'

function MediaCoverage({ enableAnimate, title, subtitle }) {

    const mediaList = [
        {
            image: mediaBg1,
            title: '160万斤崀山脐橙3小时抢光——长沙“赞友商城”电商平台为乡村振兴农产品销售打开新通道',
            content: '160万斤崀山脐橙3小时抢光——长沙“赞友商城”电商平台为乡村振兴农产品销售打开新通道湖南日报・新湖南客户端12月3日讯(通讯员 战豪文）邵阳市新宁县崀山附近的5个村100多家“国家地理标志”脐橙种植农户，刚刚从树上摘下来的160万斤新鲜富硒脐橙，近日触网上行，通过地处长沙高新区九天银河产业园“赞友商城”乡村振兴农产品专业电商平台销售，仅用短短3个小时，就被全国各地的消费者一抢而光。一些果农...'
        },
        {
            image: mediaBg2,
            title: '大爱无疆 大善至美——湖南省各爱心企业助力泸溪受灾群众度难关',
            content: '红网时刻6月9日讯（通讯员 龚宗泽 张祥智）受月初强降雨影响，泸溪县大范围道路及农业基础设施遭到严重损毁受灾严重。为缓解物资短缺压力，确保灾区群众基本生活。日前，湖南省慈善总会、泸溪县慈善总会先后向全省、全县发出募捐倡议，并得到社会各界的积极响应，各爱心企业、团队、个人纷纷慷慨解囊，一批批物资于近日先后陆续运抵泸溪，生动诠释了一方有难，八方支援，书写着大爱无疆、大善至美的时代画卷!爱心物资启...'
        },
        {
            image: mediaBg3,
            title: '湖南省民营企业首支乡村振兴专项发展基金成立',
            content: '湖南省民营企业首支乡村振兴专项发展基金成立湖南日报•新湖南客户端1月22日讯，日前，湖南省慈善总会赞友乡村振兴发展基金宣告成立。该基金是湖南省慈善总会批准民营企业湖南赞友数字科技有限公司发起成立的首支乡村振兴专项发展基金，基金将专项用于湖南省乡村振兴领域的各项公益事业。据了解，湖南赞友是一家致力于使用互联网电商平台为乡村振兴提供从产业扶持、产业培育、乡村市场拓展、产品销售、运营维护、及供应链...'
        }
    ]

    const renderDom = <>
        <h2 className="shop-notice">{title}</h2>
        <h4>{subtitle}</h4>
    </>

    const renderListDom = <div className="news-media--list">
        {
            mediaList.map((media, index) => (
                <div className="news-media--item" key={index}>
                    <div className="news-media--image" style={{ backgroundImage: `url(${media.image})` }}></div>
                    <div className="news-media--info">
                        <h2>{media.title}</h2>
                        <p>{media.content}</p>
                    </div>
                </div>
            ))
        }
    </div>

    const renderMoreDom = <div className="news-more" style={{ marginTop: '52px' }}>
        <span>查看更多&nbsp;></span>
    </div>

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