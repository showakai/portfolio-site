import { useEffect } from 'react'
import AboutDetail from '../components/aboutDetail/AboutDetail'

const AboutP = () => {
  useEffect(() => {
    history.scrollRestoration = 'auto' // 自動復元を有効化
  }, [])

  return (
    <>
      <AboutDetail />
    </>
  )
}

export default AboutP
