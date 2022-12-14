import './index.less'
import { Fragment, useState } from 'react'
import Pagination from '@/components/Pagination/Pagination'

function CompanyNews() {
    const newsList = [
        {
            title: '帮助湘西受灾群众渡过难关，这家爱心企业捐赠一批生活物资',
            content: '6月7日，湖南赞友数字科技有限公司在长沙通过湖南省慈善总会，向湘西土家族苗族自治州受灾地区捐赠价值28.83万元的生活物资，帮助受灾群众解决生活所急。6月1日以来，湖南多地出现持续性大暴雨，强降雨造成湘西州、怀化市等地出现严重洪涝灾害，多地基础设施被毁、农田被淹，给人民生命财产及生产生活造成严重损失。为确保受灾群众有饭吃、有衣穿、有干净饮用水，帮助他们尽早渡过难关、重建家园，湖南省慈善总会紧...'
        },
        {
            title: '湖南省慈善总会联合爱心单位支援湘西抗洪救灾',
            content: '6月1日以来，我州遭遇今年入汛以来第一轮集中强降雨天气，雨量大、时间长、强度高，受灾点多、面广，损失程度之深是近年来之最，对人民群众的生命财产及生产生活造成了严重损失。灾害无情，人间有爱。为确保受灾群众有饭吃、有衣穿、有干净的饮水，帮助他们渡过难关，湖南省慈善总会联合爱心企业湖南沁湘源水资源有限公司向泸溪县、凤凰县捐赠矿泉水2000件，6月6日晚已运达灾区。同时，针对此次灾情，湖南省慈善总会...'
        },
        {
            title: '一方有难，八方支援，28.83万元爱心物资驶往湘西受灾地区',
            content: '6月7日下午，在位于长沙高新区的湖南赞友数字科技有限公司前坪，两辆装有大米、面条、食用油等生活物资的大货车出发，将驶往湖南湘西受灾地区。6月以来，湖南多地出现持续性大暴雨，导致湘西州、怀化出现严重洪涝灾害，基础设施被毁、农田被淹，给灾区人民的生命财产及生产生活造成严重的损失。为确保受灾群众有饭吃、有衣穿、有干净饮用水，湖南省慈善总会紧急发出倡议书，号召社会各界一起行动起来，奉献爱心，汇聚力量...'
        },
        {
            title: '长沙“赞友商城”电商平台为乡村振兴农产品销售打开新通道',
            content: '湖南省邵阳市新宁县崀山附近的5个村100多家“国家地理标志”脐橙种植农户，刚刚从树上摘下来的160万斤新鲜富硒脐橙，近日触网上行，通过地处长沙市高新区九天银河产业园“赞友商城”乡村振兴农产品专业电商平台销售，仅用短短3个小时，就被全国各地的消费者一抢而光。一些果农情不自禁地说：“这个电商平台真好，为乡村振兴农产品打开了新通道，以后再也不用担心果子滞销烂在家里了。”中共中央、国务院印发的《乡村...'
        },
        {
            title: '赞友商城携手广州联通为乡村振兴“赋能加码”',
            content: '9月6日下午，中国联合网络通信集团有限公司广东省分公司（以下简称“广州联通”）汪总、康总、唐总、陈总一行莅临湖南赞友数字科技有限公司（以下简称“赞友商城”）参观考察。湖南赞友商城总经办及相关部门负责人全程陪同并开展座谈，双方将联合充分发挥以5G为核心的新基建优势，加强在互联网等领域的合作，为乡村振兴保驾护航。数字乡村是建设数字中国的重要内容。今年的《政府工作报告》提出，“加强数字中国建设整体...'
        },
        {
            title: '邹平座受聘赞友商城首席科学家将主导公司数字科技领域发展规划',
            content: '9月17日下午，湖南赞友数字科技有限公司隆重举行“首席科学家聘任仪式”，总经办及相关部门负责人出席了本次聘任仪式。赞友商城正式聘任邹平座为赞友商城首席科学家。今后，双方将深入数字科技领域等方面开展紧密交流与合作，助推资产战略、业务、数字科技融合发展及产业创新。邹平座，中国经济学家，中国制造业金融研究院院长，国家制造强国建设领导小组金融课题组组长，并提出国家制造业金融“空间站”计划；是北京大学...'
        },
        {
            title: '怡亚通副总裁宫妤女士来访',
            content: '  10月10日上午，深圳市怡亚通供应链股份有限公司（002183）副总裁宫妤女士一行莅临赞友商城参观考察。双方就供应链互通、品牌孵化、数字营销及电商生态优化等进行了深度交流和探讨，并达成初步合作意向。'
        },
        {
            title: '160万斤崀山脐橙3小时抢光——长沙“赞友商城”电商平台为乡村振兴农产品销售打开...',
            content: '160万斤崀山脐橙3小时抢光——长沙“赞友商城”电商平台为乡村振兴农产品销售打开新通道湖南日报・新湖南客户端12月3日讯(通讯员 战豪文）邵阳市新宁县崀山附近的5个村100多家“国家地理标志”脐橙种植农户，刚刚从树上摘下来的160万斤新鲜富硒脐橙，近日触网上行，通过地处长沙高新区九天银河产业园“赞友商城”乡村振兴农产品专业电商平台销售，仅用短短3个小时，就被全国各地的消费者一抢而光。一些果农...'
        },
        {
            title: '长沙“赞友商城”电商平台为乡村振兴农产品销售打开新通道',
            content: '湖南省邵阳市新宁县崀山附近的5个村100多家“国家地理标志”脐橙种植农户，刚刚从树上摘下来的160万斤新鲜富硒脐橙，近日触网上行，通过地处长沙市高新区九天银河产业园“赞友商城”乡村振兴农产品专业电商平台销售，仅用短短3个小时，就被全国各地的消费者一抢而光。一些果农情不自禁地说：“这个电商平台真好，为乡村振兴农产品打开了新通道，以后再也不用担心果子滞销烂在家里了。”中共中央、国务院印发的《乡村...'
        },
        {
            title: '大爱无疆 大善至美——湖南省各爱心企业助力泸溪受灾群众度难关',
            content: '红网时刻6月9日讯（通讯员 龚宗泽 张祥智）受月初强降雨影响，泸溪县大范围道路及农业基础设施遭到严重损毁受灾严重。为缓解物资短缺压力，确保灾区群众基本生活。日前，湖南省慈善总会、泸溪县慈善总会先后向全省、全县发出募捐倡议，并得到社会各界的积极响应，各爱心企业、团队、个人纷纷慷慨解囊，一批批物资于近日先后陆续运抵泸溪，生动诠释了一方有难，八方支援，书写着大爱无疆、大善至美的时代画卷!爱心物资启...'
        },
        {
            title: '湖南省民营企业首支乡村振兴专项发展基金成立',
            content: '湖南省民营企业首支乡村振兴专项发展基金成立湖南日报•新湖南客户端1月22日讯，日前，湖南省慈善总会赞友乡村振兴发展基金宣告成立。该基金是湖南省慈善总会批准民营企业湖南赞友数字科技有限公司发起成立的首支乡村振兴专项发展基金，基金将专项用于湖南省乡村振兴领域的各项公益事业。据了解，湖南赞友是一家致力于使用互联网电商平台为乡村振兴提供从产业扶持、产业培育、乡村市场拓展、产品销售、运营维护、及供应链...'
        },
        {
            title: '赞友商城乡村振兴专项研讨会在湖南赞友数字科技有限公司召开',
            content: '赞友商城乡村振兴专项研讨会在湖南赞友数字科技有限公司召开7月28日，省乡村发展基金会理事长张智勇、副事长付军明和基金会秘书长翦志锋等其他理事单位同志一行赴湖南赞友数字科技有限公司调研乡村发展公益帮扶工作。湖南赞友数字科技有限公司董事长陈建文、赞友乡村振兴发展基金秘书长杨子琪等人进行了接待和介绍。调研组一行先后参观了湖南赞友数字科技有限公司的乡村振兴展示厅、办公区等各个区域，详细了解了企业的成...'
        },
        {
            title: '携手赞友商城，共织乡村振兴“幸福网”',
            content: '2021年12月湖南省慈善总会领导一行参观公司并做相关指导，新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容…'
        }
    ]

    const [currentItems, setCurrentItems] = useState(null) // 当前页面数据
    return (
        <div className='companyNews'>
            <div className="companyNews-banner"></div>
            <div className="fixed-box">
                <h2>实时关注资讯</h2>
                <div className="companyNews-line">——</div>
                <p>实时关注行内资讯让我们快人一步</p>
                <div className="companyNews-list">
                    {
                        currentItems && currentItems.map((item, index) => (
                            <Fragment key={index}>
                                <div className="companyNews-list--item">
                                    <h4>{item.title}</h4>
                                    <div className="companyNews-item--content">{item.content}</div>
                                </div>
                                {index !== currentItems.length - 1 && <div className="companyNew-list-provide"></div>}
                            </Fragment>
                        ))
                    }
                </div>
                {/* 分页 */}
                <div style={{margin: '80px 0 100px'}}>
                    <Pagination list={newsList} setCurrentItems={setCurrentItems}></Pagination>
                </div>
            </div>
        </div>
    )
}

export default CompanyNews