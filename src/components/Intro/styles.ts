import styled from 'styled-components';
import backgroundImage from '../../vendors/images/intro/intro.png';

export const Container = styled.div`
/* Intro */

.intro {
	width: 100%;
	height: 100vh;
	min-height: 540px;
	text-align: center;
	color: #F4F7F6;
	background: url(${backgroundImage}) no-repeat;
	background-size: cover;
	background-attachment: fixed;
	overflow-x: hidden; 
	position: relative;
}

.content-intro {
  text-align: center;
	position: relative;
	top: 26%;
  padding-bottom: 80px;
}

.intro-efect {
  padding-top: 17px;
}

.content-intro h3 {
    margin: 0 auto;
    border-right: 2px solid rgba(255,255,255,.75);
    white-space: nowrap;
    overflow: hidden;
    transform: translateY(-50%);
}

/* Animation */
.anim-typewriter{
  animation: typewriter 4s steps(44) 1s 1 normal both,
             blinkTextCursor 500ms steps(44) infinite normal;
}
@keyframes typewriter{
  from{width: 0;}
  to{width: 30em;}
}
@keyframes blinkTextCursor{
  from{border-right-color: rgba(255,255,255,.75);}
  to{border-right-color: transparent;}
}

.redes-sociais {
  margin-top: 12px;
  margin-bottom: 58px;
}

.social-logo {
	border-radius: 50%;
	height: 36px;
	width: 36px;
	margin: 0 2px;
}

.social-logo:hover {
	background-color: #092140;
}

.call-contato {
  color: #F4F7F6;
  font-size: 18px;
  border: 2px solid #F4F7F6;
  padding: 20px 30px; 
}

.call-contato:hover {
  font-weight: bold;
  box-shadow: inset 0 0 20px rgba(255, 255, 255, .5), 0 0 20px rgba(255, 255, 255, .2);
  outline-color: rgba(255, 255, 255, 0);
  outline-offset: 15px;
  text-shadow: 1px 1px 2px #427388; 
}
`;