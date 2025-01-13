import React from 'react'
import { useParams } from 'react-router'
import { SWorkDetail } from './WorkDetail.styled'

import { detailContent } from './worksInfo'
import { useTheme } from 'styled-components'
import { GlobalStyles } from '../../styles/Global.styles'

const WorkDetail = () => {
  const { site } = useParams()
  const theme = useTheme()

  const { title, subTitle, image, url, content, language, period, uiux } =
    detailContent[site]

  return (
    <>
      <GlobalStyles color={theme.colors.mainColor} />
      <SWorkDetail className="work-detail">
        <div className="inner-section">
          <div className="main-title">Work</div>
          <h3 className="ja-title">制作したもの</h3>

          <div className="text-box">
            <h2>{title}</h2>
            <p className="sub-title">{subTitle}</p>
            <a href={url}>Go to site</a>
          </div>

          <div className="img-box">
            <img src={image} alt="" />
          </div>

          <div className="work-detail__conteiner">
            <dl>
              <div>
                <dt>案件内容</dt>
                <dd>{content}</dd>
              </div>
              <div>
                <dt>使用言語等</dt>
                <dd>{language}</dd>
              </div>
              <div>
                <dt>制作期間</dt>
                <dd>{period}</dd>
              </div>
              <div>
                <dt>UI/UX</dt>
                <dd>
                  {Array.isArray(uiux)
                    ? uiux.map((content, index) => <p key={index}>{content}</p>)
                    : uiux}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </SWorkDetail>
    </>
  )
}

export default WorkDetail
