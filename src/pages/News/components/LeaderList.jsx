import './LeaderList.less'
import { memo } from 'react'

function LeaderList() {
    return (
        <div className="news-info--list">
            <div className="news-list--item" style={{ padding: 0 }}>领导关怀</div>
            <div className="news-list--item"></div>
            <div className="news-list--item">
                <h2>中国联合网络通信集团有限公司广东省分公司领导一行莅临考察指导</h2>
                <p>双方将联合充分发挥以5G为核心的新基建优势，加强在互联网等领域的合作，为乡村振兴保驾护航。</p>
            </div>
            <div className="news-list--item"></div>
            <div className="news-list--item"></div>
            <div className="news-list--item">
                <h2>湖北农发供应链管理有限公司领导一行莅临考察指导</h2>
                <p>双方就携手打造供应链平台、农产品领域合作等议题进行深度交流。</p>
            </div>
            <div className="news-list--item"></div>
            <div className="news-list--item">
                <h2>省乡村发展基金会领导一行莅临考察指导</h2>
                <p>表示作为省乡村发展基金会理事，将继续在乡村振兴公益事业方面做出新的努力和贡献。</p>
            </div>
        </div>
    )
}

export default memo(LeaderList)