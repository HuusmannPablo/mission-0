import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { FaFacebookF, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import './Socialbar.css'

export default function Socialbar() {
    return (
        <div class="socialbar-body">

            <a href='https://instagram.com/cafedemonteverde' target='_blank' rel='noreferrer'>
                <div className='social-icon'>
                    <h1><BsInstagram /></h1>
                </div>
            </a>
            
            <a href='https://www.facebook.com/cafedemonteverde' target='_blank' rel='noreferrer'>
                <div className='social-icon'>
                    <h1><FaFacebookF /></h1>
                </div>
            </a>

            <a href='https://twitter.com/cafedemonteverd' target='_blank' rel='noreferrer'>
                <div className='social-icon'>
                    <h1><BsTwitter /></h1>
                </div>
            </a>

            <a href='https://www.linkedin.com/company/cafemonteverde' target='_blank' rel='noreferrer'>
                <div className='social-icon'>
                    <h1><FaLinkedinIn /></h1>
                </div>
            </a>

            <a href='https://www.youtube.com/channel/UCxV7672hO3-AWB2hG5K0vdg/featured' target='_blank' rel='noreferrer'>
                <div className='social-icon'>
                    <h1><FaYoutube /></h1>
                </div>
            </a>
        </div>
    )
}