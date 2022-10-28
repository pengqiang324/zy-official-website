import { useState } from 'react'
import Pagination from '@/components/Pagination/Pagination'

function Rule() {
    const list = [
        '赞友商城入驻商家违规管理规范总则1', 
        '赞友商城入驻商家违规管理规范总则2', 
        '赞友商城入驻商家违规管理规范总则3',
        '赞友商城入驻商家违规管理规范总则4',
        '赞友商城入驻商家违规管理规范总则5',
        '赞友商城入驻商家违规管理规范总则6',
        '赞友商城入驻商家违规管理规范总则7',
        '赞友商城入驻商家违规管理规范总则8'
    ]
    const [currentItems, setCurrentItems] = useState(null) // 当前页面数据
    

    return (
        <div className="rules-box-rule">
            {
                currentItems && currentItems.map((item, index) => (
                    <div className="rule-title" key={index}>{item}</div>
                ))
            }
            {/* 分页 */}
            <Pagination list={list} setCurrentItems={setCurrentItems}></Pagination>
        </div>
    )
}

export default Rule