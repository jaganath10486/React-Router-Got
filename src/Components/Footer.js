import React from 'react'
import '../Styles/Footer.css';
function Footer() {
  return (
    <div className='mb-2 footer' style={{marginTop : '50px'}}>
       
        <div className="social d-flex justify-content-center">
            <a href="https://www.instagram.com/___jaganath__as_dj_104/"><i className="fa fa-instagram fa-3x" aria-hidden="true"></i></a>
            <a href="https://github.com/jaganath10486"><i className="fa fa-github fa-3x" aria-hidden="true"></i></a>
            <a href="https://www.linkedin.com/in/segi-jaganath-9b81ba240/"><i className="fa fa-linkedin-square fa-3x" aria-hidden="true"></i></a>
        </div>
        <div className='xyz'>
        <h4 className="text-center" style={{color : '#aaa'}}>Made by using <code>https://thronesapi.com</code> API</h4>
        </div>
    </div>
  )
}
export default React.memo(Footer)