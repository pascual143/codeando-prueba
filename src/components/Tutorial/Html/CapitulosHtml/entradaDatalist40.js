import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import entradaDatalist40 from '../../../../styles/img/capitulosPics/entradaDatalist40.jpg';

class ListaDesplegable39 extends Component {
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
							<title>Entrada de Lista de Datos o Input Data-List</title>
						</Helmet>
					</div>
					<div>
						<h1 className="h1__tituloCapitulos">Entrada de Lista de Datos o Input Data-List</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Incluso si tenemos una lista desplegable organizada, si
							la lista tiene muchas opciones, podría ser tedioso para los usuarios desplazarse por toda la
							lista para localizar una opción. Ahí es donde usar el elemento <code>&lt;datalist&gt;</code>{' '}
							es útil.
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;El <code>&lt;datalist&gt;</code> se usa con un elemento{' '}
							<code>&lt;</code>input type = "text"<code>&gt;</code>. El <code>&lt;input&gt;</code> crea un
							campo de texto en el que los usuarios pueden escribir y filtrar opciones desde el{' '}
							<code>&lt;datalist&gt;</code>. Veamos un ejemplo concreto:
						</p>
						<div style={{ margin: 'auto', width: '50%' }}>
							<img
								className="materialboxed"
								width="650"
								height="500"
								alt="Entrada de Lista de Datos o Input Data-List"
								data-caption="Entrada de Lista de Datos o Input Data-List"
								src={entradaDatalist40}
							/>
						</div>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Observe que, en el código anterior, tenemos un{' '}
							<code>&lt;input&gt;</code> que tiene un atributo de lista. El <code>&lt;input&gt;</code>{' '}
							está asociado al <code>&lt;datalist&gt;</code> a través del atributo de lista{' '}
							<code>&lt;input&gt;</code> ands y el id del <code>&lt;datalist&gt;</code>.
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A partir del código provisto, se representa el siguiente
							formulario: el campo de entrada con una etiqueta '¿Ciudad ideal para visitar?'
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Y cuando se selecciona el campo: hacer clic en el campo
							de entrada revela un menú desplegable
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Si bien <code>&lt;select&gt;</code> y{' '}
							<code>&lt;datalist&gt;</code> comparten algunas similitudes, existen algunas diferencias
							importantes. En el elemento <code>&lt;input&gt;</code> asociado, los usuarios pueden
							escribir en el campo de entrada para buscar una opción en particular. Si ninguna de las{' '}
							<code>&lt;option&gt;</code> coincide, el usuario aún puede usar lo que escribió. Cuando se
							envía el formulario, el valor del nombre de <code>&lt;entrada&gt;</code> y el valor de la
							opción seleccionada, o lo que escribió el usuario , se envía como un par.
						</p>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default ListaDesplegable39;
