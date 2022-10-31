
import { Fragment } from 'react'
import AgreementList from '@/mock/Agreement.json'
import { useNavigate } from 'react-router-dom'

function Agreement() {
    const navigate = useNavigate()
    return (
        <div className="rules-box-protol">
            {
                AgreementList.map((item, index) => (
                    <Fragment key={index}>
                        <div className="rule-news" onClick={() => navigate('/ArticleDetails', { state: item })}>
                            <h2>{item.title}</h2>
                            <p>{item.createAtDate.replace(/\//g, '-')}</p>
                        </div>
                        {index !== AgreementList.length-1 && <div className="rule-news-line"></div>}
                    </Fragment>
                ))
            }
        </div>
    )
}

export default Agreement