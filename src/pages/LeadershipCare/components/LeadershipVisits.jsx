import { Fragment, useState } from 'react'
import Pagination from '@/components/Pagination/Pagination'

function LeadershipVisits() {
    const list = [
        {
            time: '2022',
            day: '10-20',
            title: '赞友商城携手广州联通为乡村振兴“赋能加码”',
            content: '赞友商城3.1.2版本更新公告尊敬的用户：赞友商城App已于2022年9月28日05：00版本更新至3.1.2版本，更新内容如下：一、新增营销中心应用场景1、新增小剧场充值兑换机制，可采用人民币+营销值组合兑换会员及小剧场内K币；2、新增小剧场营销值兑换专区，可使用营销值兑换专区内K豆免费观看短剧；3、新增云发单机器人兑换功能。用户可使用营销值兑换云发单机器人，让分享电商更简单更便捷。（注：...'
        },
        {
            time: '2022',
            day: '10-20',
            title: '邹平座受聘赞友商城首席科学家将主导公司数字科技领域发展规划',
            content: '邹平座受聘赞友商城首席科学家将主导公司数字科技领域发展规划'
        },
        {
            time: '2022',
            day: '10-20',
            title: '怡亚通副总裁宫妤女士来访',
            content: '  10月10日上午，深圳市怡亚通供应链股份有限公司（002183）副总裁宫妤女士一行莅临赞友商城参观考察。双方就供应链互通、品牌孵化、数字营销及电商生态优化等进行了深度交流和探讨，并达成初步合作意向。'
        },
        {
            time: '2022',
            day: '10-14',
            title: '赞友商城乡村振兴专项研讨会在湖南赞友数字科技有限公司召开',
            content: '赞友商城乡村振兴专项研讨会在湖南赞友数字科技有限公司召开7月28日，省乡村发展基金会理事长张智勇、副事长付军明和基金会秘书长翦志锋等其他理事单位同志一行赴湖南赞友数字科技有限公司调研乡村发展公益帮扶工作。湖南赞友数字科技有限公司董事长陈建文、赞友乡村振兴发展基金秘书长杨子琪等人进行了接待和介绍。调研组一行先后参观了湖南赞友数字科技有限公司的乡村振兴展示厅、办公区等各个区域，详细了解了企业的成...'
        },
        {
            time: '2022',
            day: '08-10',
            title: '携手赞友商城，共织乡村振兴“幸福网',
            content: '2021年12月湖南省慈善总会领导一行参观公司并做相关指导，新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容…'
        },
    ]
    const [currentItems, setCurrentItems] = useState(null) // 当前页面数据

    return (
        <div className="shop-info--news">
            {currentItems && currentItems.map((news, index) => (
                <Fragment key={index + 'a'}>
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
                    {index !== list.length - 1 && <div className="shop-news-line"></div>}
                </Fragment>
            ))}
            {/* 分页 */}
            <div style={{ margin: '80px 0 100px' }}>
                <Pagination list={list} setCurrentItems={setCurrentItems}></Pagination>
            </div>
        </div>
    )
}

export default LeadershipVisits