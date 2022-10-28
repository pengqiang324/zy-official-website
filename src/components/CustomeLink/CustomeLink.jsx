import './CustomeLink.less'
import { useState } from 'react'
import { Link, useMatch, useResolvedPath, useLocation } from 'react-router-dom'
import { childRoutes } from "@/routes"

function CustomLink({ children, to, ...props }) {
    const resolved = useResolvedPath(to)
    const match = useMatch({ path: resolved.pathname, end: true })
    const location = useLocation()
    const [showLink, setShowLink] = useState(false)
    // console.log(resolved, match, '11')
    const mounseEnter = () => {
        setShowLink(true)
    }

    const mounseLeave = () => {
        setShowLink(false)
    }

    const childrenRoutes = childRoutes[to]
    
    return (
        <div className="link-list">
            <Link
                style={{ color: match ? "#333" : "rgba(119, 119, 119, 1)", fontWeight: match ? "bold" : '' }}
                to={to}
                {...props}
                onMouseEnter={mounseEnter}
                onMouseLeave={mounseLeave}
            >
                {children}
            </Link>
            {
                childrenRoutes && (
                    <div
                        className="link-children"
                        style={{ display: showLink ? 'block' : 'none' }}
                        onMouseEnter={mounseEnter}
                        onMouseLeave={mounseLeave}
                    >
                        {
                            childrenRoutes.map((item, index) => (
                                <Link
                                    to={item.path}
                                    className="link-children--item"
                                    style={{ color: location.pathname === item.path ? '#333' : 'rgb(119, 119, 119)', fontWeight: location.pathname === item.path ?"bold": '' }}
                                    key={index}
                                >{item.name}</Link>
                            ))
                        }
                    </div>
                )
            }
        </div>
    );
}

export default CustomLink