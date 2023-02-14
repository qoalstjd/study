import { authService } from "../fbase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";

const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(false);
  const toggleAccount = () => setNewAccount(prev => !prev);
  const [error, setError] = useState("");
  const onTyping = event => {
    const {
      target: { name, value },
    } = event;
    if (name === "이메일") {
      setEmail(value);
    } else if (name === "비밀번호") {
      setPassword(value);
    }
  };
  const onSubmit = async event => {
    event.preventDefault();
    try {
      if (newAccount) {
        await createUserWithEmailAndPassword(authService, email, password);
      } else {
        await signInWithEmailAndPassword(authService, email, password);
      }
    } catch (error) {
      setError(error.message);
    }
  };
  const onFocus = event => {
    let { target } = event;
    target.classList.add("on");
  };
  const onBlur = event => {
    const {
      target: { value },
    } = event;
    if (value === "") {
      event.target.classList.remove("on");
    }
  };
  return (
    <div className="signAccount">
      <form onSubmit={onSubmit}>
        <div className="epForm">
          <input
            id="inputEmail"
            name="이메일"
            type="email"
            required
            value={email}
            onChange={onTyping}
            onFocus={onFocus}
            onBlur={onBlur}
          />
          <label htmlFor="inputEmail">이메일</label>
        </div>
        <div className="epForm">
          <input
            id="inputPassword"
            name="비밀번호"
            type="password"
            required
            value={password}
            onChange={onTyping}
            onFocus={onFocus}
            onBlur={onBlur}
          />
          <label htmlFor="inputPassword">비밀번호</label>
        </div>
        <input type="submit" value={newAccount ? "계정 만들기" : "로그인"} />
        {error}
      </form>
      {newAccount ? (
        <p>
          이미 계정이 있으신가요?{" "}
          <button onClick={toggleAccount}>로그인</button>
        </p>
      ) : (
        <p>
          이미 계정이 있으신가요?{" "}
          <button onClick={toggleAccount}>가입하기</button>
        </p>
      )}
    </div>
  );
};

export default AuthForm;
