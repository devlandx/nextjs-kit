console.log('process.env.INIT_ENV: ', process.env.INIT_ENV);

const isProd = process.env.INIT_ENV === 'prod';

const proUrl = 'https://test-mallapi.kaikeba.com';

const devUrl = 'https://test-mallapi.kaikeba.com';

export default {
  baseUrl: isProd ? proUrl : devUrl
};
