import { useState } from 'react'
import Pagination from '@/components/Pagination/Pagination'
import BeginnerGuide from '@/mock/BeginnerGuide.json'
import { useNavigate } from 'react-router-dom'

function GuideList() {
    const [currentItems, setCurrentItems] = useState(null) // 当前页面数据
    const navigate = useNavigate()

    return (
        <div className="BeginnersGuide-box-rule">
            {
                currentItems && currentItems.map((item, index) => (
                    <div className="BeginnersGuide-title" key={index} onClick={() => navigate('/ArticleDetails', { state: item })}>{item.title}</div>
                ))
            }
            {/* 分页 */}
            <Pagination list={BeginnerGuide} setCurrentItems={setCurrentItems} itemsPerPage={10}></Pagination>
        </div>
    )
}

export default GuideList