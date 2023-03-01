import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  background-color: #363740;
`;

export const UserLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
  height: 582px;
  width: 380px;
  border-radius: 8px;
  background-color: #ffffff;
`;

export const LoginButton = styled.button`
  width: 316px;
  height: 48px;
  background-color: #3751ff;
  margin-top: 100px;
  border-radius: 8px;
  border: none;
  color: #fff;
  cursor: pointer;
`;

export const Logo = styled.div`
  background-image: url("/assets/images/logo.svg");
  width: 48px;
  height: 48px;
  background-repeat: no-repeat;
`;

export const Name = styled.div`
  color: #a4a6b3;
  margin-top: 5px;
  font-weight: 700;
  line-height: 23.85px;
`;

export const LoginHeader = styled.div`
 @import url("https://fonts.googleapis.com/css?family=Mulish:400,700&display=swap");
  font-weight: bold;
  
  font-style: Bold;
  font-size: 24px;
  line-height: 30px;
  line-height: 100%;
  margin-top: 30px;
`;

export const LoginInstructions = styled.div`
 @import url("https://fonts.googleapis.com/css?family=Mulish:400,700&display=swap");
  font-size: 14px;
  line-height: 28px;
  color: #a4a6b3;
  margin-top: 10px;
  line-height: 114%;
`;

export const LoginEmailInput = styled.input.attrs({ type: "email" })`

  width: 316px;
  height: 42px;
  border-width: 0.1px;
  border-radius: 8px;
  margin-top: 80px;
  border-color: grey;
  ::placeholder {
    padding-left: 10px;
  }
`;

export const LoginPasswordlInput = styled.input.attrs({ type: "password" })`
  width: 316px;
  height: 42px;
  border-width: 0.1px;
  border-radius: 8px;
  margin-top: 30px;
  border-color: grey;

  ::placeholder {
    padding-left: 10px;
  }
`;


export const EmailName = styled.label`   
@font-face {
  font-family: 'Mulish';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/mulish/v12/1Ptvg83HX_SGhgqk2wotYKNnBcif.woff2) format('woff2');
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
position: absolute;
padding-top: 60px;
`

export const PasswordName = styled.div`   
 @import url("https://fonts.googleapis.com/css?family=Mulish:400,700&display=swap");
display: flex;
position: absolute;
padding-top: 130px;
`

export const ForgotPasswordLink=styled.div`  
display: flex;
align-self: flex-end;
position: absolute;
padding-top: 130px;
`
export const LoginContainer=styled.div` 

display: flex;
flex-direction: column;

`

