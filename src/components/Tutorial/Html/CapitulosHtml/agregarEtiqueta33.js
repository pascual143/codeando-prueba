import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import agregarEtiqueta33 from '../../../../styles/img/capitulosPics/agregarEtiqueta33.jpg';
import MenuTutorialHtml from '../../../MenusTutorial/Html/menuTutorialHtml';

class AgregarEtiqueta33 extends Component {
	render() {
		return (
			<Fragment>
				<div>
					<div>
						<Helmet>
							<meta charSet="utf-8" />
							<meta name="description" content="Codeando, aprender lenguages de programacion" /> 
    						<meta name="keywords" content="HTML, CSS, XML, JavaScript, PHP, bootstrap, jQuery programacion desarrollo codigo aprender" />
							<title>Agregar Etiqueta - Aprender codigo con Codeando Html Css JavaScript bootstrap jQuery</title>
							{/* <link rel="canonical" href="http://mysite.com/example" /> */}
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
						<h1 className="h1__tituloCapitulos">Agregar Etiqueta</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;En el ejercicio anterior creamos un elemento <code>&lt;input&gt;</code> pero no incluimos nada para explicar para qué se utiliza <code>&lt;input&gt;</code>. Para que un usuario identifique correctamente un <code>&lt;input&gt;</code> usamos el elemento <code>&lt;label&gt;</code> apropiadamente nombrado.
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;El elemento <code>&lt;label&gt;</code> tiene una etiqueta de apertura y cierre y muestra el texto escrito entre las etiquetas de apertura y cierre. Para asociar un <code>&lt;label&gt;</code> y un <code>&lt;input&gt;</code>, el <code>&lt;input&gt;</code> necesita un atributo id. Luego asignamos el atributo for del elemento <code>&lt;label&gt;</code> con el valor del atributo id de <code>&lt;input&gt;</code>, así:
						</p>
                        <br />
						<div style={{ margin: '20px', textAlign: 'center' }}>
							<img
								className="materialboxed"
								width="600"
								height="200"
								alt="Agregar etiquetas nos explica para que sirve esa entrada o input"
								data-caption="Agregar etiquetas nos explica para que sirve esa entrada o input"
								src={agregarEtiqueta33}
							/>
						</div>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Otro beneficio para usar el elemento <code>&lt;label&gt;</code> es cuando se hace clic en este elemento, el <code>&lt;input&gt;</code> correspondiente se resalta / selecciona.
						</p>
                        <br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;¡Veamos el elemento <code>&lt;label&gt;</code> en acción!
						</p>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default AgregarEtiqueta33;
