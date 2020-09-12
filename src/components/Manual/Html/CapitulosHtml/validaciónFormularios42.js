import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';

class ValidacionFormularios42 extends Component {
	render() {
		return (
			<Fragment>
				<div>
					<div>
						<Helmet>
							<meta charSet="utf-8" />
							<title>Codeando</title>
							<title>Introduccion a la Valizacion de Formularios de Html</title>
							{/* <link rel="canonical" href="http://mysite.com/example" /> */}
						</Helmet>
					</div>
					<div>
						<h1 className="h1__tituloCapitulos">Introduccion a la Valizacion de Formularios de Html</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;¿Alguna vez se preguntó cómo funciona realmente una
							página de inicio de sesión? ¿O por qué la combinación de un nombre de usuario y contraseña
							le otorga acceso a un sitio web? Las respuestas se encuentran en la validación. La
							validación es el concepto de verificar los datos proporcionados por el usuario con los datos
							requeridos.
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Existen diferentes tipos de validación. Un tipo es la
							validación del lado del servidor, esto sucede cuando los datos se envían a otra máquina
							(generalmente un servidor) para su validación. Un ejemplo de este tipo de validación es el
							uso de una página de inicio de sesión. El formulario en la página de inicio de sesión acepta
							el ingreso de nombre de usuario y contraseña, luego envía los datos a un servidor que
							verifica que el par coincida correctamente.
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Por otro lado, utilizamos la validación del lado del
							cliente si queremos verificar los datos en el navegador (el cliente). Esta validación ocurre
							antes de que los datos se envíen al servidor. Los diferentes navegadores implementan la
							validación del lado del cliente de manera diferente, pero conduce al mismo resultado.
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Compartidos entre los diferentes navegadores se
							encuentran los beneficios de usar la validación integrada del lado del cliente de HTML5. Nos
							ahorra tiempo al tener que enviar información al servidor y esperar a que el servidor envíe
							la confirmación o el rechazo de los datos. Esto también puede ayudarnos a proteger nuestro
							servidor de códigos maliciosos o datos de un usuario malintencionado. También nos permite
							dar retroalimentación rápidamente a los usuarios para campos específicos en lugar de hacer
							que completen un formulario nuevamente si los datos que ingresaron en el formulario fueron
							rechazados.
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cuando enviamos el formulario, el valor de{' '}
							<code>&lt;textarea&gt;</code> es el texto escrito dentro del cuadro. Si queremos agregar un
							valor predeterminado al texto en <code>&lt;textarea&gt;</code>, lo incluiríamos dentro de
							las etiquetas de apertura y cierre de la siguiente manera:
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;En esta lección, aprenderemos cómo agregar algunas
							comprobaciones de validación a nuestros <code>&lt;form&gt;</code>s.
						</p>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default ValidacionFormularios42;
