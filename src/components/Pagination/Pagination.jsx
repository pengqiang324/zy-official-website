import './Pagination.less'
import { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate';

function Pagination({ list, setCurrentItems }) {
    const [pageCount, setPageCount] = useState(0) // 分页总数
    const [itemOffset, setItemOffset] = useState(0) // 页面请求偏移量
    const itemsPerPage = 2
    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage
        console.log(`Loading items from ${itemOffset} to ${endOffset}`)
        setCurrentItems(list.slice(itemOffset, endOffset))
        setPageCount(Math.ceil(list.length / itemsPerPage))
    }, [itemOffset, itemsPerPage])

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % list.length
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        )
        setItemOffset(newOffset)
    }
    return (
        <ReactPaginate
            breakLabel="..."
            nextLabel="下一页"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="上一页"
            renderOnZeroPageCount={null}
            className="pagination"
            activeLinkClassName="pagination-on"
        />
    )
}

export default Pagination