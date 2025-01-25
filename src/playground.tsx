import { useState } from 'react';
import SignUpForm from './playgrounds/03-signup-form';
import SignInForm from './playgrounds/04-signin-form';

function Playground() {
  const [view, setView] = useState(false);

  return (
    <div className="Playground">
      <h1>플레이그라운드</h1>
      {view ? <SignInForm /> : <SignUpForm />}

      <hr />

      <button type="button" onClick={() => setView(!view)}>
        {view ? '회원가입' : '로그인'} 페이지로 이동
      </button>
    </div>
  );
}

export default Playground;
