import { useState } from 'react'
import Pagination from '@/components/Pagination/Pagination'
import RuleList from '@/mock//PlatformRule.json'
import { useNavigate } from 'react-router-dom'

function Rule() {
    const [currentItems, setCurrentItems] = useState(null) // 当前页面数据
    const navigate = useNavigate()

    return (
        <div className="rules-box-rule">
            {
                currentItems && currentItems.map((item, index) => (
                    <div className="rule-title" key={index} onClick={() => navigate('/ArticleDetails', { state: item })}>{item.title}</div>
                ))
            }
            {/* 分页 */}
            <Pagination list={RuleList} setCurrentItems={setCurrentItems} itemsPerPage={10}></Pagination>
        </div>
    )
}

export default Rule