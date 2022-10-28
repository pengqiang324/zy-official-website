
import { Fragment } from 'react'
import { useState } from 'react'

function Agreement() {
    const [list] = useState([{ title: '赞友商城入驻商家违规管理规范总则', time: '2022-10-19' }, { title: '赞友商城入驻商家违规管理规范总则', time: '2022-10-20' }])

    return (
        <div className="rules-box-protol">
            {
                list.map((item, index) => (
                    <Fragment key={index}>
                        <div className="rule-news">
                            <h2>{item.title}</h2>
                            <p>{item.time}</p>
                        </div>
                        {index !== list.length-1 && <div className="rule-news-line"></div>}
                    </Fragment>
                ))
            }
        </div>
    )
}

export default Agreement