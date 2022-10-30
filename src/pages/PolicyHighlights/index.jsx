import './index.less'
import { Fragment } from 'react'

function PolicyHighlights() {
    const newsList = [
        {
            title: '2022年中国直播电商行业最新政策汇总一览',
            content: '中商情报网讯：直播带货，作为一种新兴商业模式和互联网业态，近年来发展势头迅猛，在促进就业、扩大内需、提振经济、脱贫攻坚等方面发挥了积极作用。随着各类扶持政策的出台，直播电商行业迎来规范化发展新阶段。越来越多的直播平台和直播机构主动完善治理规则、为用户构建更安全、更放心的直播购物环境，推动行业进一步健康有序发展，为国内消费稳增长提供动力支撑。资料来源：中商产业研究院整理'
        },
        {
            title: '「欢庆党的二十大特刊」全面推进乡村振兴',
            content: '党的二十大报告提出，全面推进乡村振兴。'
        },
        {
            title: '通证经济：基于通证的价值互联网',
            content: '在经济生活中，一个人持有凭证即表示其是财产的所有者。'
        },
        {
            title: '抢占先机！为何说通证经济象征未来？',
            content: '改革开放，先下海的人成为了财富新贵；互联网兴起，先进场的人成就互联网时代商业传奇；1998年实行住房分配货币化改革以来，最早买房的人享受到了房地产增长红利；2012年移动互联网元年以来，最早搭乘移动互联网东风的都完成了财富积累；每一次股市牛市来临的时候抓住机会的都赚得盆满钵满，如1996年到1997年的牛市；2005年到2007年的牛市等。我们不难发现，所有的成功都有一个共同特征，那就是凡事...'
        },
        {
            title: '全国范围内百家电商平台将“亮照、亮证、亮规则”',
            content: '新华社北京5月31日电（记者 赵文君）市场监管总局将部署开展“百家电商平台点亮”行动，基于相关法律法规和规定，规范引导网络交易经营者“亮照、亮证、亮规则”，着力破解平台主体信息和规则不明问题。这是记者31日从市场监管总局获悉的。这一行动共有全国范围内百家电商平台参与，与消费者日常生活密切，平台内经营者众多，日常交易量大、业务覆盖面广。据初步统计，百家电商平台共涉及超过2300万平台内经营者。...'
        }
    ]

    return (
        <div className='PolicyHighlights'>
            <div className="PolicyHighlights-banner"></div>
            <div className="fixed-box">
                <h2>政策见闻</h2>
                <div className="PolicyHighlights-line">——</div>
                <p>实时关注行内资讯让我们快人一步</p>
                <div className="PolicyHighlights-list">
                    {
                        newsList.map((item, index) => (
                            <Fragment key={index}>
                                <div className="PolicyHighlights-list--item">
                                    <h4>{item.title}</h4>
                                    <div className="PolicyHighlights-item--content">{item.content}</div>
                                </div>
                                {index !== newsList.length - 1 && <div className="PolicyHighlights-list-provide"></div>}
                            </Fragment>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default PolicyHighlights