import './Footer.less'
import Bg from '@/assets/images/bg.png'

function Footer() {
    return (
        <div className="footer">
            <div className="fixed-box">
                <h2>赞友商城</h2>
                <div className="footer-info">
                    <div className="footer-left">
                        <p>湖南赞友数字科技有限公司成立于2021年8月，总部设在湖南省长沙市高新区。公司诞生在“互联网+时代乡村振兴”的战略背景下，是一家为“乡村振兴”提供产业扶持、产业培育、乡村市场拓展、产品销售、运营维护等及供应链管理于一体的多元化电子商务综合服务性企业。</p>
                    </div>
                    <div className="footer-middle">
                        <p>联系邮箱：zanyou2021@126.com </p>
                        <p>联系地址：湖南省 长沙市 岳麓区 延龙路72号</p>
                    </div>
                    <div className="footer-right">
                        <p>联系电话：400 - 6896 - 005</p>
                    </div>
                </div>
                <div className="footer-lodge">
                    <a href="/" target="_blank">
                        <img src={Bg} alt="赞友数字科技" width="20px" height="20px"/>
                        <span>湘公网安备 8552455262252号</span>
                    </a>
                    <span className="footer-span">©2022 湖南赞友数字科技有限公司 版权所有</span>
                </div>
            </div>
        </div>
    )
}

export default Footer