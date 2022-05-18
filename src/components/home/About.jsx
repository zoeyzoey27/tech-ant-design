import React from 'react'
import '../../assets/css/about.css'
import { Row, Col } from 'antd';

const items = [
    {
      icon: <i className="fas fa-chart-pie"></i>,
      title: 'High Performance',
      content: 'cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
    },
    {
      icon: <i className="fas fa-desktop"></i>,
      title: 'Flat Design',
      content: 'cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
    },
    {
      icon: <i className="fas fa-database"></i>,
      title: 'Simplified Workflow',
      content: 'cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
    },
]
const About = () => {
  return (
    <div id="about" className='block aboutBlock'>
        <div className='container-fluid'>
            <div className='title-holder'>
                <h2>About us</h2>
                <p>dolor sit amet, consectetur adipisicing elit</p>
            </div>
            <div className='content-holder'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing 
                elit. Velit necessitatibus officiis repudiandae est 
                deserunt delectus dolorem iure porro distinctio fuga, 
                nostrum doloremque. Facilis porro in laborum dolor amet 
                ratione hic? Lorem ipsum dolor sit amet, consectetur 
                adipisicing elit. Magnam aut a porro, adipisci quidem sint 
                enim pariatur ducimus, saepe voluptatibus inventore commodi! 
                Quis, explicabo molestias libero tenetur temporibus perspiciatis 
                deserunt.</p>
            </div>
            <Row gutter={[16, 16]}>
                {
                    items.map((item,index)=>(
                        <Col md={{ span: 8 }} key={index}>
                             <div className='about-content'>
                                 <div className='about-content-icon'>{item.icon}</div>
                                 <h3>{item.title}</h3>
                                 <p>{item.content}</p>
                             </div>
                        </Col>
                    ))
                }
            </Row>
        </div>
    </div>
  )
}

export default About