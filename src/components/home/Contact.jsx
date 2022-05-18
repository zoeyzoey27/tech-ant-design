import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd'
import '../../assets/css/contact.css'
const { TextArea } = Input;

const Contact = () => {
  return (
    <div id='contact' className='block contactBlock'>
        <div className='container-fluid'>
            <div className='title-holder'>
                <h2>Get in Touch</h2>
                <p>Dolore nam rerum obcaecati fugit odio nobis Molestiae rerum</p>
            </div>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
            >
                <Form.Item
                    name="fullname"
                    rules={[{ required: true, message: 'Please input your Fullname!' }]}
                >
                    <Input type="text" placeholder="Fullname" />
                </Form.Item>
                <Form.Item
                    name="email"
                    rules={[{ required: true, message: 'Please input your Email Address!' }]}
                >
                    <Input
                    type="email"
                    placeholder="Email Address"
                    />
                </Form.Item>
                <Form.Item
                    name="phone"
                >
                    <Input type="text" placeholder="Telephone" />
                </Form.Item>
                <Form.Item
                    name="subject"
                >
                    <Input type="text" placeholder="Subject" />
                </Form.Item>
                <Form.Item
                    name="message"
                >
                    <TextArea rows={4} placeholder="Message" />
                </Form.Item>
                <Form.Item
                    name="agreement"
                    valuePropName="checked"
                    rules={[
                    {
                        validator: (_, value) =>
                        value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                    },
                    ]}
                >
                    <Checkbox>I agree with terms and conditions.</Checkbox>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button"> Submit</Button>
                </Form.Item>
            </Form>
        </div>
    </div>
  )
}

export default Contact