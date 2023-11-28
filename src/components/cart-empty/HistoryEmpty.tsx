import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './CartEmpty.module.scss';

type HistoryEmptyProps = {
  title: string;
};

const HistoryEmpty: FC<HistoryEmptyProps> = ({ title }) => {
  return (
    <div className={styles.cart_empty}>
      <h1>{title}이 비어있습니다.</h1>
      <p>{title}이 비어있습니다.</p>
      <Link to='/'>계속 쇼핑하기</Link>
    </div>
  );
};

export default HistoryEmpty;
