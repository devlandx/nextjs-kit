console.log('process.env.NODE_ENV: ', process.env.NODE_ENV);

const isProd = process.env.NODE_ENV === 'production';

const proUrl = 'https://test-mallapi.kaikeba.com'; 

const devUrl = 'https://test-mallapi.kaikeba.com';

const FaceUrl = isProd ? proUrl : devUrl;


export default {
  baseUrl: FaceUrl,
  client: {
    baseurl: '/v1',
    timeout: 10000
  },
  server: {
    baseurl: `${FaceUrl}/v1`,
    timeout: 10000
  }
};
