import React, { memo } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import Pagination from '@mui/material/Pagination';
import { PaginationWrapper } from './style';
import { featchRoomListAction } from '@/store/modules/entire/createActions';

const EntirePagination = memo(() => {
  // 返回多个 state 字段时，记得用 shallowEqual，避免 useSelector 返回新对象导致的警告
  const { totalCount, currentPage, roomList } = useSelector(
    (state) => ({
      totalCount: state.entire.totalCount,
      currentPage: state.entire.currentPage,
      roomList: state.entire.roomList,
    }),
    shallowEqual
  );

  // 小算法：必须掌握
  const totalPage = Math.ceil(totalCount / 20);
  const startCount = currentPage * 20 + 1;
  const endCount = (currentPage + 1) * 20;

  // 事件处理
  const dispatch = useDispatch();
  function pageChangeHandle(event, pageCount) {
    // 回到顶部
    window.scrollTo(0, 0);
    // 更新最新的页码：redux => currentPage
    dispatch(featchRoomListAction(pageCount - 1));
  }

  return (
    <PaginationWrapper>
      {!!roomList.length && (
        <div className="info">
          <Pagination count={totalPage} onChange={pageChangeHandle} />
          <div className="desc">
            第 {startCount} - {endCount} 个房源, 共超过 {totalCount} 个
          </div>
        </div>
      )}
    </PaginationWrapper>
  );
});

export default EntirePagination;
