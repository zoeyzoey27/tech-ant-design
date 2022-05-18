import React from 'react'
import { Row,Col } from 'antd'
import img1 from '../../assets/images/clean-design.jpg'
import img2 from '../../assets/images/easy-customise.jpg'
import img3 from '../../assets/images/great-support.jpg'
import img4 from '../../assets/images/modern-design.jpg'
import img5 from '../../assets/images/unlimited-features.jpg'
import img6 from '../../assets/images/advanced-option.jpg'
import { Card } from 'antd';

const { Meta } = Card;

const Features = () => {
  return (
    <div id='features' className='block featuresBlock bg-gray'>
         <div className='container-fluid'>
            <div className='title-holder'>
                <h2>Key Features and Benefits</h2>
                <p>Obcaecati consequatur libero repudiandae, aperiam itaque laborum!</p>
            </div>
            <Row gutter={[16, 16]}>
                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                    <Card
                        hoverable
                        cover={<img alt="example" src={img1} />}
                    >
                        <Meta title="Clean and Elegant" />
                    </Card>
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                    <Card
                        hoverable
                        cover={<img alt="example" src={img2} />}
                    >
                        <Meta title="Easy to customise" />
                    </Card>
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                    <Card
                        hoverable
                        cover={<img alt="example" src={img3} />}
                    >
                        <Meta title="Great Support" />
                    </Card>
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                    <Card
                        hoverable
                        cover={<img alt="example" src={img4} />}
                    >
                        <Meta title="Modern Design" />
                    </Card>
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                    <Card
                        hoverable
                        cover={<img alt="example" src={img5} />}
                    >
                        <Meta title="Unlimited Features" />
                    </Card>
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                    <Card
                        hoverable
                        cover={<img alt="example" src={img6} />}
                    >
                        <Meta title="Advanced Options" />
                    </Card>
                </Col>
            </Row>
         </div>
    </div>
  )
}

export default Features