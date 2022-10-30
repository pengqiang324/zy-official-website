import { useState } from 'react'
import Pagination from '@/components/Pagination/Pagination'

function GuideList() {
    const list = [
        {
            title: '公司介绍',
        },
        {
            title: 'APP下载相关问题'
        },
        {
            title: '商家入驻相关问题'
        },
        {
            title: '购物返佣相关问题'
        },
        {
            title: '返佣相关问题'
        },
        {
            title: '96会员相关问题'
        },
        {
            title: '96赞友卡相关问题'
        },
        {
            title: '阅读值相关问题'
        },
        {
            title: '用户成长体系相关问题'
        },
        {
            title: '营销中心相关问题'
        },
        {
            title: '小剧场相关问题'
        },
        {
            title: '千万补贴相关问题'
        }
    ]
    const [currentItems, setCurrentItems] = useState(null) // 当前页面数据


    return (
        <div className="BeginnersGuide-box-rule">
            {
                currentItems && currentItems.map((item, index) => (
                    <div className="BeginnersGuide-title" key={index}>新手指南-{item.title}</div>
                ))
            }
            {/* 分页 */}
            <Pagination list={list} setCurrentItems={setCurrentItems} itemsPerPage={10}></Pagination>
        </div>
    )
}

export default GuideList