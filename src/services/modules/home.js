import pfRequest from '..';

export function getHomeGoodPriceData() {
  return pfRequest.get({
    url: '/home/goodprice',
  });
}
