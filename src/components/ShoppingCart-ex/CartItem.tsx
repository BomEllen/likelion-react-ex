import module from './Cart.module.css';
import CartButton from './CartButton';

export interface ProductProps {
  id?: string;
  name: string;
  price: number;
  imgUrl?: string | null;
  inventory: number;
  index: number;
  onUpdate?: (i: number, q: number) => void;
}

export default function productData({
  name,
  price,
  imgUrl,
  inventory,
  index,
  onUpdate,
}: ProductProps) {
  const formattedPrice = price.toLocaleString('ko-KR');

  return (
    <div className={module['cart-item-container']}>
      <div className={module['cart-items']}>
        {imgUrl ? (
          <img src={import.meta.env.BASE_URL + imgUrl} alt={name} />
        ) : (
          <span>이미지를 불러올 수 없습니다</span>
        )}
        <div>
          <span>{name}</span>
          <strong>{formattedPrice}원</strong>
        </div>
      </div>
      <CartButton idx={index} max={inventory} onUpdate={onUpdate} />
    </div>
  );
}
