import { ComponentProps } from 'react';

type FormButtonProps = ComponentProps<'button'> & {
  type?: string;
  children: string;
  className?: string;
};

function FormButton({
  type = 'button',
  className = 'basic',
  children = '제출',
}: FormButtonProps) {
  className = `btn ${className}`;

  return (
    <button type={type} className={className}>
      {children}
    </button>
  );
}

export default FormButton;
