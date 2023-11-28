import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { addToCart } from '../../../../store/cart/cart.slice';
import { IProduct } from '../../../../store/products/products.type';
import styles from './CardItem.module.scss';

type CardItemProps = {
  item: IProduct;
};

const CardItem: FC<CardItemProps> = ({ item }) => {
  //현재 장바구니 상태 가져오기(장바구니에 담긴 제품)
  const { products } = useAppSelector((state) => state.cart);
  //some메소드 사용하여 장바구니에 이미 존재하는지 확인
  const productMatching = products.some((product) => product.id === item.id);
  const dispatch = useAppDispatch();

  //dispatch를 사용하여 addToCart 액션
  const addItemToCart = () => {
    dispatch(addToCart(item));
  };

  return (
    <li className={styles.card_item}>
      <Link to={`/product/${item.id}`}>
        <img
          src={item.image}
          width={'80%'}
          height={'200px'}
          alt='product card'
        />
      </Link>

      <h5>{item.title.substring(0, 15)}...</h5>

      <div>
        <button
          disabled={productMatching}
          //productMatching이 false일때만 addItemToCart함수 실행
          onClick={() => !productMatching && addItemToCart()}
        >
          {productMatching ? '장바구니에 담긴 제품' : '장바구니에 담기'}
        </button>
        <p>$ {item.price}</p>
      </div>
    </li>
  );
};

export default CardItem;
