import { useDispatch } from 'react-redux';
import { useContext, useState } from 'react';
import { ItemsContext } from 'utilities';
import { setCurrentPage } from 'reduxEntities';
import { SuperButton } from 'common';
import style from './Pagination.module.css';

type Props = {
  cardPacksTotalCount: number;
};
export const Pagination = ({ cardPacksTotalCount }: Props) => {
  const { page, setSearchParams } = useContext(ItemsContext);

  const dispatch = useDispatch();
  let pageCount = 10;

  const currentPageHandler = (page: number) => {
    setSearchParams({ limit: 10, page });
    dispatch(setCurrentPage(page));
  };

  let pagesCount = Math.ceil(cardPacksTotalCount / pageCount);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  const portionSize = 10;
  const portionCount = Math.ceil(pagesCount / portionSize);

  const [portion, setPortion] = useState(1);
  const leftNumber = (portion - 1) * portionSize + 1;

  const rightNumber = portion * portionSize;
  const correctValue = pages.filter(p => (p ? p >= leftNumber && p <= rightNumber : ''));

  return (
    <div className={style.pagination}>
      {portion > 1 && (
        <SuperButton
          onClick={() => {
            setPortion(portion - 1);
          }}
          className={style.btn}
        >
          Prev
        </SuperButton>
      )}
      {correctValue.map(value => {
        return (
          <span
            key={value}
            className={`${style.item} ${
              Number(page) === value ? style.select : style.item
            }`}
            onClick={() => currentPageHandler(value)}
          >
            {value}
          </span>
        );
      })}
      {portionCount > portion && (
        <SuperButton
          onClick={() => {
            setPortion(portion + 1);
          }}
          className={style.btn}
        >
          Next
        </SuperButton>
      )}
    </div>
  );
};
