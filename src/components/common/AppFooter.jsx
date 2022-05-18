import React from 'react'
import '../../assets/css/footer.css'
import { BackTop } from 'antd'

const AppFooter = () => {
  return (
    <div className='container-fluid'>
        <div className='footer'>
            <div className='footer-logo'>
                <i className="fas fa-bolt logo-icon"></i>
                <a href='/'>Tech</a>
            </div>
            <ul className='footer-social-media'>
                 <li>
                     <a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
                 </li>
                 <li>
                      <a href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a>
                 </li>
                 <li>
                      <a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a>
                 </li>
                 <li>
                       <a href="https://www.pinterest.com/"><i className="fab fa-pinterest-p"></i></a>
                 </li>
                 <li>
                        <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
                 </li>  
            </ul>
            <div className='copyright'>Copyright &copy; 2022 Tech</div>
            <BackTop>
                <div className="goTop"><i className="fas fa-arrow-circle-up"></i></div>
            </BackTop>
        </div>
    </div>
  )
}

export default AppFooter