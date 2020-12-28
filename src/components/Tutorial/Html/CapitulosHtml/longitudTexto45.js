import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import longitudTexto45 from '../../../../styles/img/capitulosPics/longitudTexto45.jpg';

class LongitudTexto45 extends Component {
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
							<title>Comprobacion de Longitud del Texto</title>
						</Helmet>
					</div>
					<div>
						<h1 className="h1__tituloCapitulos">Comprobacion de Longitud del Texo</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;En el ejercicio anterior, pudimos usar min y max para
							establecer valores mínimos y máximos aceptables en un campo numérico. ¿Pero qué pasa con los
							campos de texto? Ciertamente, hay casos en los que no queremos que nuestros usuarios
							escriban más de un cierto número de caracteres (piense en el límite de mensajes para
							Twitter). Incluso podríamos querer establecer un número mínimo de caracteres.
							Convenientemente, hay validaciones HTML5 incorporadas para estas situaciones.
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Para establecer un número mínimo de caracteres para un
							campo de texto, agregamos el atributo de longitud mínima y un valor para establecer un valor
							mínimo. Del mismo modo, para establecer el número máximo de caracteres para un campo de
							texto, utilizamos el atributo maxlength y establecemos un valor máximo. Echemos un vistazo a
							estos atributos en el código:
						</p>
						<div style={{ margin: 'auto', width: '60%' }}>
							<img
								className="materialboxed"
								width="650"
								height="250"
								alt="Establecer un Minimo y un Maximo numerico en el input o entrada"
								data-caption="Establecer un Minimo y un Maximo numerico en el input o entrada"
								src={longitudTexto45}
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

export default LongitudTexto45;
