import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import { Exchanges, Homepage, News, Cryptocurrencies, CryptoDetails, Navbar } from './components';
import './App.css';

const App = () => (
  <div className="app">
    <div className="navbar">
      <Navbar />
    </div>
    <div className="main">
      <Layout>
        <div className="routes">
          <Routes>
            <Route exact path="/" element={<Homepage />}></Route>
            <Route exact path="/exchanges" element={<Exchanges />}></Route>
            <Route exact path="/cryptocurrencies" element={<Cryptocurrencies />}></Route>
            <Route exact path="/crypto/:coinId" element={<CryptoDetails />}></Route>
            <Route exact path="/news" element={<News />}></Route>
          </Routes>
        </div>
      </Layout>
      <div className="footer">
        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2021 
          <NavLink to="/" style={{ marginLeft: '8px' }}>
            Cryptoverse Inc.
          </NavLink> <br />
          All Rights Reserved.
        </Typography.Title>
        <Space>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/exchanges">Exchanges</NavLink>
          <NavLink to="/news">News</NavLink>
        </Space>
      </div>
    </div>
  </div>
);

export default App;