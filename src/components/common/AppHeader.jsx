import React, {useState} from 'react'
import '../../assets/css/header.css'
import { Anchor, Drawer, Button } from 'antd'

const { Link } = Anchor

const AppHeader = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  return (
    <div className='container-fluid'>
        <div className='header'>
            <div className="logo">
                <i className="fas fa-bolt logo-icon"></i>
                <a href='/'>Tech</a>
            </div>
            <div className='mobile-hidden'>
                <Anchor targetOffset="65">
                    <Link href="#hero" title="Home" />
                    <Link href="#about" title="About" />
                    <Link href="#features" title="Features" />
                    <Link href="#works" title="How it works" />
                    <Link href="#faq" title="FAQ" />
                    <Link href="#pricing" title="Pricing" />
                    <Link href="#contact" title="Contact" />
                </Anchor>
            </div>
            <div className='mobile-visible'>
                <Button type="second" onClick={showDrawer}>
                    <i className="fas fa-bars"></i>
                </Button>
                <Drawer 
                   title="Menu" 
                   placement="right" 
                   onClose={onClose} 
                   visible={visible}
                >
                    <Anchor targetOffset="65">
                        <Link href="#hero" title="Home" />
                        <Link href="#about" title="About" />
                        <Link href="#features" title="Features" />
                        <Link href="#works" title="How it works" />
                        <Link href="#faq" title="FAQ" />
                        <Link href="#pricing" title="Pricing" />
                        <Link href="#contact" title="Contact" />
                    </Anchor>
                </Drawer>
            </div>
        </div>
    </div>
  )
}

export default AppHeader