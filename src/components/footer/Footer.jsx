import { color } from 'chart.js/helpers'
import { theme } from '../../styles/theme'
import Button from '../button/Button'
import {
  Scontact,
  ScontactButton,
  ScontactTitle,
  Sfooter,
} from './Footer.styles'
import { Link, useNavigate } from 'react-router'

const Footer = () => {
  const navigate = useNavigate()
  return (
    <>
      <Sfooter className="footer">
        {/* <div className="bg-letter-f">
          <span>Thank you for visiting</span>
          <span>Thank you for visiting</span>
          <span>Thank you for visiting</span>
          <span>Thank you for visiting</span>
          <span>Thank you for visiting</span>
          <span>Thank you for visiting</span>
          <span>Thank you for visiting</span>
        </div> */}
        <div className="inner-section">
          <Scontact id="contact">
            <div className="text-box">
              <h3 className="contact__title">Contact</h3>
              <p>お問い合わせはこちらから</p>
            </div>
            <ScontactButton>
              <a
                href={'mailto:showakai810@gmail.com'}
                className="footer__email-box"
              >
                <span>showakai810@gmail.com</span>
                <span>Click to mail me!</span>
              </a>
            </ScontactButton>
          </Scontact>
        </div>

        <div className="footer__container">
          <div className="footer__content">
            <small className="copyright">
              All Rights Reserved 2024 Sho Wakai
            </small>
          </div>
        </div>
      </Sfooter>
    </>
  )
}

export default Footer
