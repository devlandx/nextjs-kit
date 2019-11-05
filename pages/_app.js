import React from 'react';
import { Provider } from 'react-redux';
import App from 'next/app';
import Head from 'next/head';
import withRematch from '../store/withRematch';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    return {
      pageProps: Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}
    };
  }


  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <>
        <Head>
          <title>Nextjs-stylus</title>
        </Head>
        <Provider store={store}>
          <Component {...pageProps}/>
        </Provider>
      </>
    );
  }
}

export default withRematch(MyApp);
