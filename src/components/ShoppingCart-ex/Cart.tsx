import { useState } from 'react';
import module from './Cart.module.css';
import ProductData, { ProductProps } from './CartItem';

const productData: Omit<ProductProps, 'index' | 'onUpdate'>[] = [
  {
    id: 'item-1',
    name: '1A 우유 900mL',
    price: 1880,
    amount: 30,
    imgUrl: 'src/cart-milk.png',
  },
  {
    id: 'item-2',
    name: '맛있는 콩나물 500g',
    price: 1280,
    amount: 6,
    imgUrl: 'src/cart-bean.png',
  },
  {
    id: 'item-3',
    name: '고소한 두부 1kg',
    price: 2280,
    amount: 8,
    imgUrl: 'src/cart-tofu.png',
  },
];

export default function Cart() {
  const [items, setItems] = useState(() =>
    productData.map((item) => [item.price, 1])
  );

  const priceSum = items.reduce((sum, [price, q]) => sum + price * q, 0);
  const formattedPriceSum = priceSum.toLocaleString('ko-KR');

  const handleAmountChange = (i: number, q: number) => {
    const changeArray = items.map((item, index) =>
      index === i ? [item[0], q] : item
    );
    setItems(changeArray);
  };

  return (
    <div className={module['cart-container']}>
      <header className={module['cart-title']}>
        <img src="src/cart.png" alt="" />
        <h4>장바구니</h4>
      </header>
      <div className={module['cart-productData']}>
        {productData.map(({ id, ...product }, index) => (
          <ProductData
            key={id}
            index={index}
            onUpdate={handleAmountChange}
            {...product}
          />
        ))}
        <p className={module['cart-sum-price']}>
          구매 총액 : {formattedPriceSum}원
        </p>
      </div>
    </div>
  );
}
