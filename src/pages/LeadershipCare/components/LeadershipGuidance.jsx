import { Timeline } from 'antd'

function LeadershipGuidance() {
    const timeLines = [
        {
            content: [
                '2022年10月10日上午，深圳市怡亚通供应链股份有限公司领导一行莅临赞友商城参观考察。',
                '2022年9月17日，邹平座教授参观公司并做相关指导。'
            ]
        },
        {
            content: ['2022年9月6日，中国联合网络通信集团有限公司广东省分公司领导一行参观考察。']
        },
        {
            content: [
                '2022年8月17日，湖北农发供应链管理有限公司领导一行参观公司并就相关业务进行洽谈。',
                '2022年7月28日，省乡村发展基金会理事长张智勇等其他理事单位同志一行参观公司调研乡村发展公益帮扶工作。'
            ]
        },
        {
            content: ['2022年7月长沙县供销合作社、安沙镇和平村考察团参观公司并做相关指导。']
        },
        {
            content: ['2022年6月湖南省机关工委、省证劵交易所等领导一行参观公司并做相关指导。']
        },
        {
            content: ['2022年5月中国建设银行湖南省分行领导一行参观公司并就相关业务进行洽谈。']
        },
        {
            content: ['2022年4月湖南省农村商业银行领导一行参观公司并就相关业务进行洽谈']
        },
        {
            content: ['2022年3月华融湘江银行领导一行参观公司并就相关业务进行洽谈']
        },
        {
            content: [
                '2022年2月湖南省民政厅、湖南省慈善总会领导一行参观公司并做相关指导。',
                '2022年1月中国中国联合网络通信集团有限公司广州市分公司领导一行参观公司并做相关指导。',
                '2022年1月长沙高新技术产业开发区领导一行参观公司并做相关指导。',
                '2022年1月湖南省乡村振兴局领导一行参观公司并做相关指导。'
            ]
        },
        {
            content: ['2021年12月湖南省慈善总会领导一行参观公司并做相关指导。']
        }
    ]
    return (
        <div className="LeadershipGuidance">
            <div className="LeadershipGuidance-left">
                <div className="LeadershipGuidance-bg"></div>
                <div className="LeadershipGuidance-bg"></div>
                <div className="LeadershipGuidance-bg"></div>
                <div className="LeadershipGuidance-bg"></div>
            </div>
            <div className="LeadershipGuidance-right">
                <Timeline>
                    {
                        timeLines.map((timeLine, index) => (
                            <Timeline.Item color="gray" key={index}>
                                {
                                    timeLine.content.map((item, i) => (
                                        <div className="LeadershipGuidance-right--dot" key={i}>{item}</div>
                                    ))
                                }
                            </Timeline.Item>
                        ))
                    }
                </Timeline>
            </div>
        </div>
    )
}

export default LeadershipGuidance