import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import entradaNumeros35 from '../../../../styles/img/capitulosPics/entradaNumeros35.jpg';

class EntradaNumeros35 extends Component {
	render() {
		return (
			<Fragment>
				<div className="body__Capitulos">
					<div>
						<Helmet>
							<meta charSet="utf-8" />
							<meta name="description" content="Codeando, aprender lenguages de programacion" /> 
    						<meta name="keywords" content="HTML, CSS, XML, JavaScript, PHP, bootstrap, jQuery" />
							{/* <link rel="canonical" href="http://mysite.com/example" /> */}
							<title>Agregar Etiqueta</title>
						</Helmet>
					</div>
					<div>
						<h1 className="h1__tituloCapitulos">Agregar Etiqueta</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ahora hemos revisado dos atributos de tipo para <code>&lt;input&gt;</code> relacionados con el texto. Pero, podríamos querer que nuestros usuarios escriban un número, en cuyo caso podemos establecer el atributo de tipo en ... (lo adivinó) ... ¡"número"!
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Al configurar type = "number" para un <code>&lt;input&gt;</code> podemos restringir lo que los usuarios escriben en el campo de entrada a solo números (y algunos caracteres especiales como -, + y.). También podemos proporcionar un atributo de paso que crea flechas dentro del campo de entrada para aumentar o disminuir el valor del atributo de paso. A continuación se muestra el código necesario para representar un campo de entrada para números:
						</p>
                        <br />
						<div style={{ margin: 'auto', width: '70%' }}>
							<img
								className="materialboxed"
								width="750"
								height="150"
								alt="Agregar etiquetas nos explica para que sirve esa entrada o input"
								data-caption="Agregar etiquetas nos explica para que sirve esa entrada o input"
								src={entradaNumeros35}
							/>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default EntradaNumeros35;
