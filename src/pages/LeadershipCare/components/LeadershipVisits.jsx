import { Fragment, useState } from 'react'
import Pagination from '@/components/Pagination/Pagination'
import CompanyNewsList from '@/mock/CompanyNews.json'
import { splitTime } from '@/utils/index'
import { useNavigate } from 'react-router-dom'

function LeadershipVisits() {
    const list = [...CompanyNewsList.slice(0, 3), ...CompanyNewsList.slice(-2)]
    const [currentItems, setCurrentItems] = useState(null) // 当前页面数据
    const navigate = useNavigate()
    return (
        <div className="shop-info--news">
            {currentItems && currentItems.map((news, index) => (
                <Fragment key={index + 'a'}>
                    <div className="shop-news--list" onClick={() => navigate('/ArticleDetails', { state: news })}>
                        <div className="shop-news--left">
                            <h3>{splitTime('month', news.createAtDate) + '-' + splitTime('day', news.createAtDate)}</h3>
                            <p>{splitTime('year', news.createAtDate)}</p>
                        </div>
                        <div className="shop-news--right">
                            <h2>{news.title}</h2>
                            <p>{news.description}</p>
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