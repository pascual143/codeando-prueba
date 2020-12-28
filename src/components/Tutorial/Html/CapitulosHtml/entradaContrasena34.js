import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import entradaContrasena34 from '../../../../styles/img/capitulosPics/entradaContrasena34.jpg';

class EntradaContrasena34 extends Component {
	render() {
		return (
			<Fragment>
				<div className="body__Capitulos">
					<div>
						<Helmet>
							<meta charSet="utf-8" />
							<meta name="description" content="Codeando, aprender lenguages de programacion" /> 
    						<meta name="keywords" content="HTML, CSS, XML, JavaScript, PHP, bootstrap, jQuery programacion desarrollo codigo aprender" />
							{/* <link rel="canonical" href="http://mysite.com/example" /> */}
							<title>Codeando</title>
							<title>Entrada de Contraseña o Password Field</title>
						</Helmet>
					</div>
					<div>
						<h1 className="h1__tituloCapitulos">Entrada de Contraseña o Password Field</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Piense en todas esas veces que tenemos que poner
							información confidencial, como una contraseña o PIN, en un <code>&lt;formulario&gt;</code>.
							¡No quisiéramos que nuestra información sea vista por alguien que mira por encima del
							hombro! ¡Afortunadamente, tenemos el atributo type = "password" para{' '}
							<code>&lt;input&gt;</code>!
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Un elemento <code>&lt;</code>input type = "password"<code>&gt;</code>{' '}
							reemplazará el texto de entrada con otro carácter como un asterisco (*) o un punto (•). El
							siguiente código proporciona un ejemplo de cómo crear un campo de contraseña:
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Después de que un usuario escriba en el campo, se vería
							así:
						</p>
						<br />
						<div style={{ margin: 'auto', width: '50%' }}>
							<img
								className="materialboxed"
								width="550"
								height="150"
								alt="Campo Entrada de contrasena o Password"
								data-caption="Campo Entrada de contrasena o Password"
								src={entradaContrasena34}
							/>
						</div>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Aunque el campo de contraseña oculta el texto de la
							contraseña, cuando se envía el formulario, se envía el valor del texto. En otras palabras,
							si se escribe "hunter2" en el campo de contraseña, se envía "user-password = hunter2" junto
							con la otra información en el formulario..
						</p>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default EntradaContrasena34;
