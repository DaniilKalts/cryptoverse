import React, { useEffect, useState } from 'react';
import millify from 'millify';
import { Collapse, Row, Col, Typography, Avatar } from 'antd';
import HTMLReactParser from 'html-react-parser';

import { useGetExchangesQuery } from '../services/cryptoApi';
import Loader from './Loader';


import CountUp from 'react-countup'

const { Text } = Typography;
const { Panel } = Collapse;

const Exchanges = () => {
  const { data, isFetching } = useGetExchangesQuery();
  const [exchangesList, setExchangesList] = useState();

 
  useEffect(() => {
    setExchangesList(data?.data?.exchanges)
    console.log(exchangesList)
  },[data])

  if (isFetching) return <Loader />;

  return (
    <>
      <Row>
        <Col span={6}>Exchanges</Col>
        <Col span={6}>24h Trade Volume</Col>
        <Col span={6}>Markets</Col>
        <Col span={6}>Change</Col>
      </Row>
      <br />
      <Row>
        {exchangesList && exchangesList.map((exchange) => (
          <Col span={24}>
            <Collapse>
              <Panel
                key={exchange.uuid}
                showArrow={false}
                header={(
                  <Row key={exchange.uuid}>
                    <Col span={6}>
                      <Text><strong>{exchange.rank}.</strong></Text>
                      <Avatar className="exchange-image" src={exchange.iconUrl} />
                      <Text><strong>{exchange.name}</strong></Text>
                    </Col>
                    <Col span={6}>$
                      <CountUp start={0} end={millify(millify(exchange['24hVolume']))} duration={1} delay={0} />.
                      <CountUp start={0} end={millify(Math.floor(Math.random() * 9) + 1)} duration={1} delay={0} />
                    M</Col>
                    <Col span={6}><CountUp start={0} end={(millify(exchange.numberOfMarkets))} duration={1} delay={0} /></Col>
                    <Col span={6}><CountUp start={0} end={(millify(Math.floor(Math.random() * 80) + 1))} duration={1} delay={0} />%</Col>
                  </Row>
                  )}
              >
                {HTMLReactParser(`<p>${exchange.name} is the first digital currency that allows users to send and receive money, without the interference of a central bank or government. Instead, a network of thousands of peers is controlling the transactions; a decentralized system.</p>

<h3>Why does ${exchange.name} have value?</h3>

<p>${exchange.name}&rsquo;s useful qualities (decentralized, borderless, secure) aren&rsquo;t the only reason the coin is worth so much. Due to its scarcity (and it&rsquo;s hard to produce), ${exchange.name} is often nicknamed &lsquo;Digital Gold&rsquo;, in reference to &lsquo;classic&rsquo; physical gold. Like gold, ${exchange.name} also has a finite supply of coins available; there will only ever be 21 million ${exchange.name}. And now you know why the creation of new ${exchange.name}s is also called mining.</p>

<h3>No inflation in ${exchange.name}</h3>

<p>${exchange.name} was invented in response to a few concerns the inventor(s) had, such as inflation. Its supply is limited, so one cannot just devalue the currency by printing more, as governments often do with fiat currencies (USD, EUR, etc.).</p>

<p>As people look for alternative places to keep their money rather than losing value in a negative interest rate account, ${exchange.name} becomes more appealing. Big global companies, such as Tesla and MicroStrategy already purchased serious amounts of ${exchange.name}. And it&#39;s only a matter of time that other companies will follow. This also ensures that the value remains or continues to increase.</p>

<h3>Who built ${exchange.name}</h3>

<p>In 2008, ${exchange.name} was invented by an anonymous person or group named Satoshi Nakamoto. In 2009, ${exchange.name} was released as open-source software. Nakamoto&rsquo;s real identity is still unknown, although there are many theories about who it might be. Decentralization is one of ${exchange.name}&rsquo;s most important principles, and that&rsquo;s why this anonymity is perfectly in line.</p>

<h3>The technology of ${exchange.name}</h3>

<p>The ${exchange.name} blockchain is a database, the so-called &lsquo;ledger&rsquo;, that consists of ${exchange.name} transaction records. For new transactions to be added to the ledger, the nodes must agree that the transaction is real and valid. The blockchain is public and contains records of all the transactions taking place.</p>

<h3>How to buy ${exchange.name}?</h3>

<p>Continue reading <a href="https://coinranking.com/blog/how-to-buy-your-first-${exchange.name}/" rel="nofollow noopener" target="_blank">this blog article</a> on how to buy your first ${exchange.name}.</p` || '')}
              </Panel>
            </Collapse>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Exchanges;