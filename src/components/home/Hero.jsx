import React from 'react'
import { Carousel,Button } from 'antd'
import '../../assets/css/hero.css'

const items = [
    {
      title: 'Web and mobile payment built for developers',
      content: 'An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
    },
    {
      title: 'Work better together. Schedule meetings',
      content: 'An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
    },
    {
      title: 'The best app to increase your productivity',
      content: 'An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
    },
]
const Hero = () => {
  return (
    <div className='heroBlock'>
        <Carousel autoplay>
            {
                items.map((item,index) => (
                <div className='container-fluid' key={index} >
                    <div className='content'>
                        <h3>{item.title}</h3>
                        <p>{item.content}</p>
                        <div className='hero-btns'>
                            <Button type="primary" size="large">Learn more</Button>
                            <Button type="default" size="large">
                                <i className="fas fa-desktop hero-btn-icon"></i>
                                Watch a demo
                            </Button>
                        </div>
                    </div>
                </div>
            ))
            }
        </Carousel>
    </div>
  )
}

export default Hero