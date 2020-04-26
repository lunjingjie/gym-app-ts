/* eslint-disable import/prefer-default-export */
import request from '@/api/request';

const allEnpList = () => request({
  url: '/owl/data/customer/customerData/state',
  method: 'get',
});

const allEnpDetailList = () => request({
  url: '/owl/data/customer/loadAppRealData',
  method: 'get',
  params: {
    typeName: 'total',
    typeId: null,
  },
});

export default {
  allEnpList,
  allEnpDetailList,
};
