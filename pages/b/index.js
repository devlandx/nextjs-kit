/*
 * @Author: starkwang
 * @Contact me: https://shudong.wang/about
 * @Date: 2019-11-21 11:45:47
 * @LastEditors: starkwang
 * @LastEditTime: 2019-11-27 18:04:42
 * @Description: file content
 */
import React from 'react';
import Head from 'next/head';
import Router, { withRouter } from 'next/router';
import Nav from '../../components/nav';
import styles from './styles.styl';

const Home = res => {
  console.log('Homequery', res);
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="hero">
        <h1 className="title">Welcome to b page!</h1>

        <div className={styles.stark}>This is blog page</div>

        <p className="description">
          To get started, edit <code>pages/index.js</code> and save to reload.
        </p>
      </div>

      <style jsx>{`
        .hero {
          width: 100%;
          color: #333;
        }
        .title {
          margin: 0;
          width: 100%;
          padding-top: 80px;
          line-height: 1.15;
          font-size: 48px;
        }
        .title,
        .description {
          text-align: center;
        }
        .row {
          max-width: 880px;
          margin: 80px auto 40px;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
        }
        .card {
          padding: 18px 18px 24px;
          width: 220px;
          text-align: left;
          text-decoration: none;
          color: #434343;
          border: 1px solid #9b9b9b;
        }
        .card:hover {
          border-color: #067df7;
        }
        .card h3 {
          margin: 0;
          color: #067df7;
          font-size: 18px;
        }
        .card p {
          margin: 0;
          padding: 12px 0 0;
          font-size: 13px;
          color: #333;
        }
      `}</style>
    </div>
  );
};
export default withRouter(Home);
