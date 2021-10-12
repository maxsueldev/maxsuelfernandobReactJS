import React from 'react';
import * as C from './styles';

import facebookLogo from '../../vendors/images/redes-sociais/facebook-logo.png';
import linkedinLogo from '../../vendors/images/redes-sociais/linkedin-logo.png';
import githubLogo from '../../vendors/images/redes-sociais/github-logo.png';

export const Intro = (() => {
    return (
        <C.Container>
        <section id="intro" className="intro">	
		    <div className="container16 content-intro">
			    <h1>Maxsuel Fernando</h1>
			    <div className="intro-efect">
				    <h3 className="anim-typewriter">Desenvolvedor Front-End | Analista de Sistemas | Empreendedor</h3>
			    </div>
			    <div className="redes-sociais">
				<a href="https://www.facebook.com/maxsuelfernandob" target="_blank">
					<img src={ facebookLogo } alt="facebook-logo" className="social-logo" />
				</a>
				<a href="https://www.linkedin.com/in/maxsuelfernandob" target="_blank">
					<img src={ linkedinLogo } alt="linkedin-logo" className="social-logo" />
				</a>
				<a href="https://github.com/maxsuelfernandob" target="_blank">
					<img src={ githubLogo } alt="github-logo" className="social-logo" />
				</a>
			</div>
			<a href="#contato" className="call-contato">Entrar em contato</a>
		</div>
		<a className="mouse" href="#sobre">
			<div className="scroll-downs">
  				<div className="mousey">
   				    <div className="scroller"></div>
  				</div>
			</div>
	    </a>
	</section>
    </C.Container>
    );
});