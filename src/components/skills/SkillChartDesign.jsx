import { Doughnut, Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import icon1 from '../../assets/images/skills-icon1.png'
import icon2 from '../../assets/images/skills-icon2.png'
import icon3 from '../../assets/images/skills-icon3.png'

import { color } from 'chart.js/helpers'
import { useState } from 'react'
import styled, { useTheme } from 'styled-components'

const customIconPlugin = {
  id: 'customIcon',
  afterDraw(chart) {
    const { ctx, chartArea, config } = chart
    if (!chartArea) return // chartAreaが無効な場合は終了
    const centerX = (chartArea.left + chartArea.right) / 2
    const centerY = (chartArea.top + chartArea.bottom) / 2

    const icon = config.options.plugins.customIcon.icon

    const img = new Image()
    img.src = icon // アイコンのパス
    img.onload = () => {
      ctx.drawImage(img, centerX - 15, centerY - 15, 30, 30) // アイコンを描画
    }
  },
}

ChartJS.register(ArcElement, Tooltip, Legend, customIconPlugin)

export function SkillChartDesign() {
  const theme = useTheme()
  const [hoverdSkill, setHoverdSkill] = useState(null)

  const designSkills = [
    { tool: 'illustrator', ability: 80, icon: icon1, period: 3 },
    { tool: 'photoshop', ability: 70, icon: icon2, period: 3 },
    { tool: 'Figma', ability: 60, icon: icon3, period: 1 },
  ]
  let hoveredClass = ''

  const handleHover = (skill) => {
    setHoverdSkill(skill)
  }

  const handleMouseLeave = () => {
    setHoverdSkill(null)
  }

  return (
    <>
      <SskillsList>
        {designSkills.map((skill) => (
          <Schart
            onMouseEnter={() => handleHover(skill.tool)}
            onMouseLeave={handleMouseLeave}
            key={skill.tool}
          >
            <Doughnut
              data={{
                datasets: [
                  {
                    label: skill.tool,
                    data: [skill.ability, 100 - skill.ability],
                    backgroundColor: ['#fff', '#c1c1c1'],
                    borderWidth: 0,
                    cutout: ' 93%',
                  },
                ],
              }}
              options={{
                events: [],
                hover: {
                  enabled: false,
                },
                label: false,
                plugins: {
                  tooltip: {
                    enabled: false,
                  },
                  legend: {
                    display: false,
                  },
                  customIcon: {
                    icon: skill.icon,
                  },
                },
              }}
            />
            <p>{skill.tool}</p>
            {hoverdSkill === skill.tool && (
              <HoverOverlay>
                <p>使用歴：{skill.period}年</p>
              </HoverOverlay>
            )}
          </Schart>
        ))}
      </SskillsList>
    </>
  )
}

const SskillsList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  height: 210px;
  width: 60%;
  flex-wrap: wrap;
  row-gap: 0px;
  column-gap: 40px;
  margin-left: 10px;

  & li {
    width: 18%;
    list-style: none;
    font-family: ${({ theme }) => theme.fonts.jaFont};
    letter-spacing: 0;
    font-size: 1.6rem;
    font-weight: 300;
    line-height: 2;
    text-align: center;
    color: ${({ theme }) => theme.colors.white};
    position: relative;
  }
  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    width: 100%;
    row-gap: 0px;
    justify-content: space-evenly;

    column-gap: 10px;
    align-items: flex-start;
    margin-left: 0px;

    & li {
      width: 30%;
      font-size: 1.4rem;
      p {
        padding-top: 5px;
      }
    }
  }
`

const Schart = styled.li`
  position: relative;
`

const HoverOverlay = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${({ theme }) => theme.colors.subColor};
  padding: 10px;
  border-radius: 8px;
  font-size: 1.2rem;
  pointer-events: none;
  position: absolute;
  width: 120px;
  color: ${({ theme }) => theme.colors.mainColor};
  font-weight: 600;
  background-color: #ddd;
  transition: all 0.5s;
`
