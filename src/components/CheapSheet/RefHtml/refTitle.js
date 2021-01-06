import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import title8 from './../../../styles/img/capitulosPics/title8.jpg';
import ButtonBack from '../buttonBack';


class Title extends Component {
	render() {
		return (
			<Fragment>
				<div>
					<div>
						<Helmet>
							<meta charSet="utf-8" />
							<meta name="description" content="Codeando, aprender lenguages de programacion" /> 
    						<meta name="keywords" content="HTML, CSS, XML, JavaScript, PHP, bootstrap, jQuery programacion desarrollo codigo aprender" />
							{/* <link rel="canonical" href="http://mysite.com/example" /> */}
							<title>Codeando</title>
							<title>Titulo de la pagina o title. Aprende codigo con Codeando Html Css JavaScript Bootstrap</title>
						</Helmet>
					</div>
					<nav className="vertical_nav">
					</nav>
					<div className="body__Capitulos">
						<h1 className="h1__tituloCapitulos">"Title" - Titulo de la pagina</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;El título se ordena dentro de nuestro HEAD. Aunque no es
							una etiqueta obligatoria, en todas las documentaciones sobre HTML lo recomiendan, ya que
							tiene bastante valor.
							<code>&lt;title&gt;</code>.
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Es útil en los bookmarks donde salvamos
							nuestras páginas favoritas y nos aparece el titulo que pongamos a nuestra pagina.
						</p>
						<div style={{ margin: '50px', textAlign: 'center' }}>
							<img
								className="materialboxed"
								width="650"
								height="400"
								alt="Title o titulo es muy importante a la hora de dar calidad a nuestra pagina y darle contenido"
								data-caption="Title o titulo es muy importante a la hora de dar calidad a nuestra pagina y darle contenido"
								src={title8}
							/>
						</div>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Aparece en la barra de titulo de la ventana
							que tenemos abierta en la página.
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;También en la barra de navegación, en la historia de
							nuestro buscador.
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Para los motores de búsqueda, google, yahoo, bing
							etcetera, enseñan el resultado de la buscada en función del título, así como el SEO de
							nuestra página mejora con un título, ya que suelen exigirlo.
						</p>
					</div>
                    <ButtonBack />
				</div>
			</Fragment>
		);
	}
}

export default Title;
