import './index.less'
import CompanyPublicity from './components/CompanyPublicity'
import ScrollWidthTweenOne from '@/components/ScrollWidthTweenOne/ScrollWidthTweenOne'
import ButtonMore from '@/components/ButtomMore/ButtonMore'
import BeginnerGuide from '@/mock/BeginnerGuide.json'
import { useNavigate } from 'react-router-dom'

function HelpCenter() {
    const navigate = useNavigate()
    const problemList = [...BeginnerGuide.slice(0,9)]

    const commonProblems = [
        {
            title: '赞友商城和众持、众益是什么关系？',
            content: '众持合伙系赞友商城的股东，持有赞友商城30%股权。众益平台系赞友商城的渠道合作方，为赞友商城提供流量拓展及维护服务、并向用户提供相关运维服务。'
        },
        {
            title: '年底赞友商城如果有收益，是否会给拥有第三方平台对赞友商城的投资权益的用户进行分红？如果有分红，分红计划是怎样的？为何不给市场披露？',
            content: '您好，赞友商城将根据相关法律规定进行利润分配。届时，赞友商城将会把可分配利润向包括众持合伙在内的股东进行分配，具体情况请关注众持合伙的公告。请知悉，谢谢。'
        },
        {
            title: '公司现在在做什么？我们赞友要怎么配合，公司和用户是什么关系？ ',
            content: '您好，我司目前正在积极打造私域电商平台，进行架构调整。且我司期望与用户一起为通证经济营造更广阔的应用场景，创造更大的商业价值。请知悉，谢谢。 '
        },
        {
            title: '针对市场上各位谣言，公司有没有什么举措？',
            content: '您好，我司从未接到任何有关部门的立案调查。我司坚持依法合规经营，请各位用户不信谣不传谣。任何信息请以APP或微信公众号公告为准。请知悉，谢谢。 '
        }
    ]

    const toPage = (pathName, data={}) => {
        return () => {
            navigate(pathName, data)
        }
    }
    return (
        <div className="HelpCenter">
            <CompanyPublicity/>
            <div className="HelpCenter-info">
                <div className="fixed-box">
                    <div className="HelpCenter-info--header">
                        <p>Help center</p>
                        <ScrollWidthTweenOne replay={true} playScale={0.1} animation={{ opacity: 0, type: 'from', delay: 450, ease: 'linear' }}>
                            <span>帮助中心</span>
                        </ScrollWidthTweenOne>
                    </div>
                    <ScrollWidthTweenOne replay={true} playScale={0.1} animation={{ opacity: 0, type: 'from', delay: 450, ease: 'linear' }}>
                        <div className="HelpCenter-info--list">
                            <div className='HelpCenter-list--left'>
                                <div className="HelpCenter-left-header">
                                    <span></span>
                                    <h2>热门问题</h2>
                                </div>
                                <div className="HelpCenter-left-line"></div>
                                <div className='HelpCenter-left-list'>
                                    {
                                        problemList.map((problem, index) => (
                                            <div className="HelpCenter-list--item" key={index} onClick={toPage('/ArticleDetails', { state: problem })}>{problem.title}</div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className='HelpCenter-list--right'>
                                <div className="HelpCenter-right--top">
                                    <div className="HelpCenter-top--left"></div>
                                    <div className="HelpCenter-top--right">
                                        <h4>如何咨询客服?</h4>
                                        <div className="HelpCenter-top-right--info">
                                            <p>1.进入APP-“我的”-“联系客服”提交工单咨询</p>
                                            <p>2.可拨打电话客服：400-6896-005进行咨询 </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="HelpCenter-right--bottom">
                                    <div className="HelpCenter-bottom--list">
                                        <div className="HelpCenter-list--item" onClick={toPage('/BeginnersGuide')}>
                                            <div className="HelpCenter-item--image"></div>
                                            <h4>新手入门指南</h4>
                                        </div>
                                        <div className="HelpCenter-list--item" onClick={toPage('/VideoList')}>
                                            <div className="HelpCenter-item--image"></div>
                                            <h4>96赞友卡相关问题</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollWidthTweenOne>
                </div>
            </div>
            <div className="HelpCenter-problem">
                <div className="fixed-box">
                    <h2>常见问题</h2>
                    <p>common problem</p>
                    <div className="HelpCenter-problem--bg"></div>
                    <div className="HelpCenter-problem--list">
                        {
                            commonProblems.map((problem, index) => (
                                <ScrollWidthTweenOne key={index} replay={true} playScale={0.1} animation={{ scale: 0, type: 'from', ease: 'linear' }}>
                                    <div className="HelpCenter-problem--item">
                                        <h4>{problem.title} </h4>
                                        <div></div>
                                        <p>{problem.content}</p>
                                    </div> 
                                </ScrollWidthTweenOne>
                            ))
                        }
                        <ButtonMore style={{ marginTop: '120px' }} to="/BeginnersGuide"></ButtonMore>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HelpCenter