

import React, { useEffect, useState } from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { NavLink } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';

import icon from '../images/cryptocurrency.png';


const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(null);

  useEffect(() => {
    const hadnleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', hadnleResize);

    hadnleResize();

    return () => window.removeEventListener('resize', hadnleResize)
  }, [])

  useEffect(() => {
    if(screenSize < 768){
        setActiveMenu(false)
    }else{
        setActiveMenu(true)
    }
  }, [screenSize])

  return (
    <div className='nav-container'>
        <div className='logo-container'>
             <Typography.Title level={2}  className="logo">
                <Avatar src={icon} size="large" />
                <NavLink to="/">Cryptoverse</NavLink>
             </Typography.Title>
            <Button className='menu-control-container' onClick={() => setActiveMenu(!activeMenu)}>
                <MenuOutlined />
            </Button>
        </div>
        {activeMenu && <Menu theme='dark' items={null}>
            <Menu.Item key='home' icon={<HomeOutlined />}>
                <NavLink to="/">Home</NavLink>
            </Menu.Item>
            <Menu.Item key='cryptocurrencies' icon={<FundOutlined />}>
                <NavLink to="/cryptocurrencies">Cryptocurrencies</NavLink>
            </Menu.Item>
            <Menu.Item key='exchanges' icon={<MoneyCollectOutlined />}>
                <NavLink to="/exchanges">Exchanges</NavLink>
            </Menu.Item>
            <Menu.Item key='news' icon={<BulbOutlined />}>
                <NavLink to="/news">News</NavLink>
            </Menu.Item>
        </Menu>}
    </div>
  )
}

export default Navbar;