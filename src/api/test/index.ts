import request from '../request';

const test = () => request({
  url: '/news',
  method: 'get',
});

export default {
  test,
};
