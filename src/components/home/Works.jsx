import React,{useState} from 'react'
import '../../assets/css/works.css'
import { Modal, Button } from 'antd';


const Works = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };


    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
        <div id='works' className='block worksBlock'>
            <div className='container-fluid'>
                <div className='title-holder'>
                    <h2>How it works</h2>
                    <p>Perspiciatis vero similique, ut ducimus modi ipsam autem tempora</p>
                </div>
                <div className='content-holder'>
                    <Button size='large' onClick={showModal}>
                       <i className="fas fa-play"></i>
                    </Button>
                </div>
                <Modal title="Woocommerce Tutorial" visible={isModalVisible} onCancel={handleCancel} footer={null}>
                <iframe title="Woocommerce Tutorial" width="100%" height="400" 
                    src="https://www.youtube.com/embed/8f8_JYIzOno?list=PLiUrl-SQRR7LQINGQGE99pXWDuKq4SxfU">
                </iframe>
                </Modal>
            </div>
        </div>
    )
}

export default Works