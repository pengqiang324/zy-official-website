import './index.less'
import { useLocation } from 'react-router-dom'
import Banner from '../News/components/Banner'

function ArticleDetails() {
    const { state } = useLocation()
    
    return (
        <div className="ArticleDetails">
            <Banner/>
            <div className="ArticleDetails-content">
                <div className="fixed-box">
                    <div className="ArticleDetails-content-header">
                        <h2>{state.title}</h2>
                        <p>发表时间：{state.createAtDate.replace(/\//g, '-')}</p>
                        <div className="ArticleDetails-line"></div>
                    </div>
                    <div className="ArticleDetails-content--info">
                        <div className="ArticleDetails-conent--html" dangerouslySetInnerHTML={{ __html: state.content}}></div>
                        <div className="ArticleDetails-info--line"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArticleDetails