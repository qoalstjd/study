import { authService } from "../fb";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import styled from "styled-components";

const StyledAuth = styled.section`
  background: url(img/auth.jpg) no-repeat center;
  background-size: cover;

  > div {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    display: flex;
    align-items: center;

    > div {
      width: 50%;
      img {
        width: 100%;
      }

      .trueObj {
        background-color: rgba(0, 0, 0, 0.1);
      }
    }
  }
`;

const Auth = ({ setSignned }) => {
  // 비밀번호 입력
  const [adminPassword, setAdminPassword] = useState("");
  const onTyping = event => {
    const {
      target: { value },
    } = event;
    setAdminPassword(value);
  };

  // 정보제출
  const onSubmit = async event => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(authService, "admin@admin.com", adminPassword)
      .then(userCredential => {
        const user = userCredential.user;
        console.log(user);
        setSignned(true);
      })
    } catch (error) {
      console.log(error.code + error.message);
    }
  };

  return (
    <StyledAuth>
      <div>
        <div>
          <img src="img/boot.png" alt="" />
        </div>
        <div>
          <form onSubmit={onSubmit}>
            <label htmlFor="adminPassword">관리자</label>
            <input
              id="adminPassword"
              type="password"
              value={adminPassword}
              onChange={onTyping}
            />
            <input type="submit" value="Login" />
          </form>
        </div>
      </div>
    </StyledAuth>
  );
};

export default Auth;
