import { useState } from 'react';
import module from './Cart.module.css';

interface ButtonProps {
  idx: number;
  max: number;
  onUpdate?: (i: number, q: number) => void;
}

export default function Button({ idx, max, onUpdate }: ButtonProps) {
  const [button, setButton] = useState<number>(1);

  const increase = () => {
    if (max > button) {
      const nextValue = button + 1;
      setButton(nextValue);
      onUpdate?.(idx, nextValue);
    }
  };

  const decrease = () => {
    if (button > 1) {
      const nextValue = button - 1;
      setButton(nextValue);
      onUpdate?.(idx, nextValue);
    }
  };

  return (
    <div className={module['cart-button-container']}>
      <button type="button" onClick={decrease} aria-label="수량 빼기">
        -
      </button>
      <span aria-label="현재 수량">{button}</span>
      <button type="button" onClick={increase} aria-label="수량 더하기">
        +
      </button>
    </div>
  );
}