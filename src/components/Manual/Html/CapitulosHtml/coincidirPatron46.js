import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import coincidirPatron46 from '../../../../styles/img/capitulosPics/coincidirPatron46.jpg';

class CoincidirPatron46 extends Component {
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
							<title>Codeando</title>
							<title>Hacer coincidir un Patron</title>
						</Helmet>
					</div>
					<div>
						<h1 className="h1__tituloCapitulos">Hacer coincidir un Patron</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Además de verificar la longitud de un texto, también podríamos agregar una validación para verificar cómo se proporcionó el texto. Para los casos en que queremos que la entrada del usuario siga pautas específicas, usamos el atributo de patrón y le asignamos una expresión regular o expresión regular. Las expresiones regulares son una secuencia de caracteres que forman un patrón de búsqueda. Si la entrada coincide con la expresión regular, se puede enviar el formulario.
						</p>
						<br />
						<p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Supongamos que deseamos verificar un número de tarjeta de crédito válido (un número de 14 a 16 dígitos). Podríamos usar la expresión regular: [0-9] y 14, 16 entre llaves{} que verifica que el usuario proporcionó solo números y que ingresó al menos 14 dígitos y como máximo 16 dígitos. Para agregar esto a un formulario:
						</p>
						<div style={{ margin: 'auto', width: '60%' }}>
							<img
								className="materialboxed"
								width="650"
								height="250"
								alt="Hacer coincidir un Patron para obligar al usuario a poner en el area del texto lo que esperamos"
								data-caption="Hacer coincidir un Patron para obligar al usuario a poner en el area del texto lo que esperamos"
								src={coincidirPatron46}
							/>
						</div>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Si un usuario intenta escribir más del número máximo
							permitido de caracteres, no recibe un mensaje de advertencia, ¡pero no puede escribirlo!
						</p>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default CoincidirPatron46;
