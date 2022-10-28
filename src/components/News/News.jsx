import './News.less'
import { useEffect, useRef, useState } from 'react';

function News() {
    const [list] = useState([1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13]);

    /** 是否滚动 */
    const [isScrolle, setIsScrolle] = useState(true);

    /** 滚动速度，值越小，滚动越快 */
    const speed = 30;
    const warper = useRef();
    /** 原数据 */
    const childDom1 = useRef();
    /** 拷贝数据 */
    const childDom2 = useRef();

    // 开始滚动
    useEffect(() => {
        // 多拷贝一层，让它无缝滚动
        childDom2.current.innerHTML = childDom1.current.innerHTML;
        let timer;
        if (isScrolle) {
            timer = setInterval(() => {
                warper.current.scrollLeft >= childDom1.current.scrollWidth
                    ? (warper.current.scrollLeft = 0)
                    : warper.current.scrollLeft--;
            }, speed);
        }
        return () => {
            clearTimeout(timer);
        };
    }, [isScrolle]);

    // 鼠标移动，移除方法
    const hoverHandler = (flag) => { setIsScrolle(flag); }

    return (
        <>
            <div className='parent' ref={warper}>
                <div className='child' ref={childDom1}>
                    {list.map((item) => (
                        <li
                            key={item}
                            onMouseOver={() => hoverHandler(false)}
                            onMouseLeave={() => hoverHandler(true)}
                        >
                            {item}
                        </li>
                    ))}
                </div>
                <div className='child' ref={childDom2}></div>
            </div>
        </>
    )
}

export default News