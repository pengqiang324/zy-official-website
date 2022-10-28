import { Button } from 'antd';
import { useLocation } from 'react-router-dom'

function About() {
    const { state } = useLocation()

    return (
        <div className="App">
            关于我们
            <Button>点我</Button>
        </div>
    )
}

export default About