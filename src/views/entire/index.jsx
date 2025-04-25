import React, { memo, useEffect } from 'react';
import { EntireWrapper } from './style';
import EntireFilter from './c-cpns/entire-filter';
import EntireRooms from './c-cpns/entire-rooms';
import EntirePagination from './c-cpns/entire-pagination';
import { useDispatch } from 'react-redux';
import { featchRoomListAction } from '@/store/modules/entire/createActions';
import { changeHeaderConfigAction } from '@/store/modules/main';

const Entire = memo(() => {
  // 发送网络请求，获取数据，并且保存当前的页面等
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(featchRoomListAction());
    dispatch(changeHeaderConfigAction({ isFixed: true, topAlpha: false }));
  }, [dispatch]);

  return (
    <EntireWrapper>
      <EntireFilter />
      <EntireRooms />
      <EntirePagination />
    </EntireWrapper>
  );
});

export default Entire;
