import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import introduccionFormularios31 from '../../../../styles/img/capitulosPics/introduccionFormularios31.jpg';

class IntroduccionFormularios31 extends Component {
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
							<title>Introduccion a los Formularios HTML</title>
						</Helmet>
					</div>
					<div>
						<h1 className="h1__tituloCapitulos">Introduccion a los formularios Html</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cuando usamos un formulario física en la vida real,
							anotamos información y se la damos a alguien para que la procese. Piensa cuando tienes que
							completar la información para una solicitud, como un trabajo o una cuenta bancaria, oen el
							hospital. Cada una de esas instancias es un formulario!.
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Podemos pensar en Internet como una red de ordenadores
							que envían y reciben información. Las prdenadores necesitan una solicitud HTTP para saber
							cómo comunicarse. La solicitud HTTP le indica a la ordenador receptora cómo manejar la
							información entrante.
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Al igual que una forma física, los formularios en las
							paginas web son un numero de com ponentes HTML5 que envian informacion al servidor para
							procesar esa informacion. Cada uno de estos elementos incluye un atributo nombre y un valor
							asi que la informacion asignada a estos atributos puede ser procesada por la asociacion
							nombre=valor emparejados. Por ejemplo, donde el nombre del atributo de un element is
							asignado como “fruta” y su valor es “mango”, la pareja nombre=valor representa la
							informacion como fruta=mango
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Todas los formularios estan encerrados entre{' '}
							<form> </form> etiquetas. Cada etiqueta de aperture deberia llevar un metodo como atributo,
							especificando cual metodo HTTP va ser utilizado para enviar el formulario, y un atributo
							accion especificando la URL del sevidor que va a procesar la informacion.
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Al igual que una forma física, los formularios en las
							paginas web son un numero de com ponentes HTML5 que envian informacion al servidor para
							procesar esa informacion. Cada uno de estos elementos incluye un atributo nombre y un valor
							asi que la informacion asignada a estos atributos puede ser procesada por la asociacion
							nombre=valor emparejados. Por ejemplo, donde el nombre del atributo de un element is
							asignado como “fruta” y su valor es “mango”, la pareja nombre=valor representa la
							informacion como fruta=mango
						</p>
                        <h2 className="h2__tituloCapitulos">&nbsp;&nbsp;&nbsp;Cómo funciona un formulario?</h2>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;El atributo method puede ser asignado a los valores
							“GET” o “POST”. Asignar el atributo a través del método GET agrega los datos a la URL,
							mientras que el envío a través del método POST codifica los datos de manera diferente y
							puede usarse cuando falla el método GET.
						</p>
						<br />
						<div style={{ margin: 'auto', width: '50%' }}>
							<img
								className="materialboxed"
								width="550"
								height="200"
								alt="Introduccion a los formularios Html. Este es un codigo de ejemplo de un formulario sencillo."
								data-caption="Introduccion a los formularios Html. Este es un codigo de ejemplo de un formulario sencillo."
								src={introduccionFormularios31}
							/>
						</div>
                        <br />
							<p>
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Por lo general, un formulario HTML tendrá un botón
								"enviar" en el que el usuario hace clic para enviar datos para su procesamiento. Esto se
								crea asignando el valor "submit" a un atributo de tipo <code>&lt;input&gt;</code> de una
								etiqueta. Además, esta etiqueta puede incluir atributos de nombre y valor para enviar
								datos asignados a ellos como un par nombre = valor.
							</p>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default IntroduccionFormularios31;
