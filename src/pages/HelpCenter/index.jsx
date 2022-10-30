import './index.less'
import { useState } from 'react'
import media from '../News/media/2.mp4'
import VideoImg from './images/video.jpg'
import Video from '@/components/Video/Video'
import ScrollWidthTweenOne from '@/components/ScrollWidthTweenOne/ScrollWidthTweenOne'

function HelpCenter() {
    const sources = {
        hd: {
            play_url: media
        }
    }
    const [showModel, setShowModel] = useState(false)
    const lookVideo = () => {
        setShowModel(true)
    }
    const problemList = [
        {
            title: '新手指南-公司介绍'
        },
        {
            title: '新手指南-APP下载相关问题'
        },
        {
            title: '新手指南-商家入驻相关问题'
        },
        {
            title: '新手指南-购物返佣相关问题'
        },
        {
            title: '新手指南-返佣相关问题'
        },
        {
            title: ' 新手指南-96会员相关问题'
        },
        {
            title: '新手指南-96赞友卡相关问题'
        },
        {
            title: '新手指南-阅读值相关问题'
        },
        {
            title: '新手指南-用户成长体系相关问题'
        }
    ]

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
    return (
        <div className="HelpCenter">
            <div className="HelpCenter-banner">
                <div className="fixed-box">
                    <div className="HelpCenter-banner--left">
                        <h2>公司宣传片</h2>
                        <p>湖南赞友数字科技有限公司成立于2021年8月，总部设在中国移动互联网第五城的湖南省长沙市高新区，公司诞生在移动互联网时代、国家“乡村振兴”战略背景下，是一家致力于使用互联网电商平台为乡村振兴提供产业扶持、产业培育、乡村市场拓展、产品销售、运营维护、供应链管理于一体的多元化高新电子商务服务企业。</p>
                        <div className='HelpCenter--more'>了解更多</div>
                    </div>
                    <div className="HelpCenter-banner--right">
                        <div className="HelpCenter--video">
                            <div className="HelpCenter--video--info" onClick={lookVideo}></div>
                        </div>
                    </div>
                </div>
            </div>
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
                                            <div className="HelpCenter-list--item" key={index}>{problem.title}</div>
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
                                        <div className="HelpCenter-list--item">
                                            <div className="HelpCenter-item--image"></div>
                                            <h4>新手入门指南</h4>
                                        </div>
                                        <div className="HelpCenter-list--item">
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
                        <div className="news-more" style={{marginTop: '120px'}}>
                            <span>查看更多&nbsp;></span>
                        </div>
                    </div>
                </div>
            </div>
            {/* video */}
            <Video showModel={showModel} cover={VideoImg} sources={sources} setShowModel={setShowModel} />
        </div>
    )
}

export default HelpCenter