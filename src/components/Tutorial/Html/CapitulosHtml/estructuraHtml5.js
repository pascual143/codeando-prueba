import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import estructura from '../../../../styles/img/capitulosPics/estructura.jpg';
import MenuTutorialHtml from '../../../MenusTutorial/Html/menuTutorialHtml';

class EstructuraHtml extends Component {
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
							<title>Como se estructura la pagina HTML. Aprende codigo con Codeando html css Javascript games</title>
						</Helmet>
					</div>
					<nav className="vertical_nav">
					<div className="left_section menu_left">
						<div className="left_section" style={{margin: "10px"}}>
							<MenuTutorialHtml />
						</div>
					</div>
					</nav>
					<div className="body__Capitulos">
						<h1 className="h1__tituloCapitulos">La estructura HTML</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HTML empieza primero abriendo con el{' '}
							<code>&lt;!Doctype&gt;</code> para configurar el navegador, <code>&lt;html&gt;</code> para proporcionar 
                            la estructura base, y despues añadir un encabezado<code>&lt;Head&gt;</code> y un cuerpo de la pagina{' '}
							<code>&lt;body&gt;</code>, y volvemos a cerrar la estructura con <code>&lt;/html&gt;</code>.{''} 
                            Se completa asi, la estructura basica de una pagina web
						</p>
						<br />
						<div style={{ margin: '50px', textAlign: 'center' }}>
							<img
								className="materialboxed"
								width="550"
								height="400"
								alt="Estructura Html. Head, Body."
								data-caption="Head y body completan la estructura basica completa en html"
								src={estructura}
							/>
						</div>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Head section, o encabezado, nos proporciona
							informacion descriptiva sobre el documento en si, como puede ser el titulo, los metadatos(que ya veremos que es),
							 asi como scripts o hojas de estilos o enlaces a ellos. Empieza con{' '}
							<code>&lt;head&gt;</code> y termina con <code>&lt;/head&gt;</code>
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Body section, el cuerpo, contiene todo el
							contenido que aparece cuando el navegador lee el documento. Empieza con{' '}
							<code>&lt;body&gt;</code> y termina con <code>&lt;/body&gt;</code>. En el body no debe haber ningun metadato, hoja de estilos o
							script.
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HTML es una estructura genealogica en forma
							de arbol de forma que al poner un parrafo en el body, este parrafo sera el hijo, y el body
							sera el padre. Si ponemos dentro del body otro element como un h1, este h1 y el parrafo
							seran hermanos. Esto es importante sobretodo para la hoja de estilos CSS.
						</p>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default EstructuraHtml;
