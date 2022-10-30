import './Detail.less'
import TransitionWidth from '@/components/TransitionWidth/TransitionWidth'
import detail1 from '../images/detail1.jpg'
import detail2 from '../images/detail2.jpg'
import detail3 from '../images/detail3.jpg'

function Detail() {
    return (
        <div className="RuralRevitalization-detail">
            <div className="fixed-box">
                <TransitionWidth duration={600}>
                    <h4>驰援湘西、怀化抗洪救灾</h4>
                </TransitionWidth>
                <TransitionWidth duration={600} delay={200}>
                    <p>2022年6月7日湖南赞友数字科技有限公司向湖南省慈善总会赞友乡村振兴发展基金捐赠1000箱大米、1000箱面条、300箱食用油，共计28.83万元的爱心物资驶往湘西、怀化受灾地区。</p>
                </TransitionWidth>
                <div className="RuralRevitalization-detail--images">
                    {
                        [detail1, detail2, detail3].map((image, index) => (
                            <TransitionWidth duration={600} key={index}>
                                <img src={image} alt="赞友科技" key={index} />
                            </TransitionWidth>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Detail