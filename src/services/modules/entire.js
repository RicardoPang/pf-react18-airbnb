import pfRequest from '..';

export function getEntireRoomList(offset = 0, size = 20) {
  return pfRequest.get({
    url: 'entire/list',
    params: {
      offset,
      size,
    },
  });
}
