import './ButtonMore.less'
import { useNavigate } from 'react-router-dom'

function ButtonMore({ to, style, color, children, prefixCls, linkStyl, ...props }) {
    const navigate = useNavigate()
    return (
        <div 
        className={`news-more ${prefixCls}`} 
        style={{ ...style }} 
        onClick={() => navigate(to)} {...props}>
            <span 
                style={{ ...linkStyl }}>
                {children ? children : '查看更多'}&nbsp;<b>></b>
            </span>
        </div>
    )
}

export default ButtonMore