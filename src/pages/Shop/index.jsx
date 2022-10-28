import './index.less'
import { useState } from 'react'
import { OverPack } from 'rc-scroll-anim'
import TweenOne from 'rc-tween-one'

import { Fragment } from 'react'

// 批量导入图片
export const getImage = (suffix) => {
    const modules = import.meta.globEager('./images/*.png');
    return modules[`./images/${suffix}.png`].default
}

function Shop() {
    const [ newsList ] = useState([
        {
            time: '2022-09',
            day: '28',
            title: '赞友商城3.1.2版本更新公告',
            content: '赞友商城3.1.2版本更新公告尊敬的用户：赞友商城App已于2022年9月28日05：00版本更新至3.1.2版本，更新内容如下：一、新增营销中心应用场景1、新增小剧场充值兑换机制，可采用人民币+营销值组合兑换会员及小剧场内K币；2、新增小剧场营销值兑换专区，可使用营销值兑换专区内K豆免费观看短剧；3、新增云发单机器人兑换功能。用户可使用营销值兑换云发单机器人，让分享电商更简单更便捷。（注：...'
        },
        {
            time: '2022-07',
            day: '22',
            title: '赞友商城3.0.0版本更新公告',
            content: '赞友商城3.0.0版本更新公告尊敬的用户赞友商城App于2022年7月22日23:38版本更新至3.0.0版本，更新内容如下：1、赞友商城入驻商城版块上线，入驻商户请重选店铺行业进行商品上传审核，赞友商城试运营开启售卖时间2022年7月27日11:08，敬请期待！2、优化分享电商版块底层架构，提升分享电商商品、佣金核心竞争力，加速分享电商版块的发展。3、优化赞友商城商家管理后台，操作手册可通...'
        },
        {
            time: '2022-10',
            day: '19',
            title: '9月6日系统公告',
            content: '9月6日系统公告尊敬的用户：一、放假通知：1、放假时间：2022年9月10日—9月12日。2、放假安排：（1）放假期间，电话客服、工单客服轮值班照常服务，如响应不够及时，敬请谅解；（2）放假期间期权转让中心不休市；（3）防疫温馨提示：非必要、不外出；守规矩、不瞒报；严防护、不放松；扫双码、不懈怠；非必要、不聚集、不信谣、不传谣；戴口罩、勤洗手。3、我们恭祝全体用户节日快乐、阖家幸福。二、 目...'
        },
        {
            time: '2022-10',
            day: '19',
            title: '赞友商城3.1.0版本更新公告',
            content: '赞友商城3.1.0版本更新公告尊敬的用户'
        }
    ])
    return (
        <div className='shop'>
            <div className="shop-banner"></div>
            <OverPack
                key="0"
                always={false}
                playScale={0.2}
                replay={true}
                className="shop-box"
            >
                <TweenOne key="01" animation={{ x: 0 }} style={{ transform: 'translateX(100%)' }} className="shop-bg2">
                    <img src={getImage('bg2')} alt="赞友科技" />
                </TweenOne>
            </OverPack >
            <OverPack
                key="1"
                always={false}
                replay={true}
                className="shop-box"
            >
                <TweenOne key="10" animation={{ x: 0 }} style={{ transform: 'translateX(-100%)' }} className="shop-bg2">
                    <img src={getImage('bg3')} alt="赞友科技" />
                </TweenOne>
            </OverPack >
            <OverPack
                key="2"
                always={false}
                replay={true}
                className="shop-box"
            >
                <TweenOne key="20" animation={{ x: 0 }} style={{ transform: 'translateX(100%)' }} className="shop-bg2">
                    <img src={getImage('bg4')} alt="赞友科技" />
                </TweenOne>
            </OverPack >
            <div className="shop-info">
                <div className="fixed-box">
                    <OverPack
                        key="4"
                        replay={true}
                        always={false}
                    >
                        <TweenOne key="40" animation={{ opacity: 0, type: 'from', delay: 400 }}>
                            <h2 className="shop-notice">更新公告</h2>
                            <h4>News</h4>
                        </TweenOne>
                    </OverPack>
                    <div className="shop-info--box">
                        <OverPack
                            key="4"
                            playScale={0.1}
                            replay={true}
                            always={false}
                        >
                            <TweenOne key="40" animation={{ opacity: 0, type: 'from', delay: 400 }}>
                                <div className="shop-info--news">
                                    { newsList.map((news, index) => (
                                        <Fragment key={index+'a'}>
                                            <div className="shop-news--list">
                                                <div className="shop-news--left">
                                                    <h3>{news.day}</h3>
                                                    <p>{news.time}</p>
                                                </div>
                                                <div className="shop-news--right">
                                                    <h2>{news.title}</h2>
                                                    <p>{news.content}</p>
                                                </div>
                                            </div>
                                            {index !== newsList.length - 1 && <div className="shop-news-line"></div> }
                                        </Fragment>
                                    ))}
                                </div>
                            </TweenOne>
                        </OverPack>
                        <div className="shop-info--Introduction">
                            <div className="shop-Introduction--top">
                                <div className="shop-Introduction--pri">
                                    <h2> •【重磅】xxx产品销售量指数型上升</h2>
                                    <p>请输入要描述的内容进行内容补充，请输入要描述的内容进行内容补充，请输入要描述的内容进行...</p>
                                </div>
                            </div>
                            <div className="shop-Introduction--bottom">
                                <div className="shop-Introduction--pri">
                                    <h2> •【重磅】xxx公司连续发布多款产品</h2>
                                    <p>请输入要描述的内容进行内容补充，请输入要描述的内容进行内容补充，请输入要描述的内容进行...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop