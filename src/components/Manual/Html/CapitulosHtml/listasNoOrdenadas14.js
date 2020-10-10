import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import listasNoOrdenadas14 from '../../../../styles/img/capitulosPics/listasNoOrdenadas14.jpg';
import listasNoOrdenadas14b from '../../../../styles/img/capitulosPics/listasNoOrdenadas14b.jpg';


class ListasNoOrdenadas extends Component {
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
							<title>Listas sin orden or unorderer list</title>
						</Helmet>
					</div>
					<div>
						<h1 className="h1__tituloCapitulos">Listas sin orden or Unorderer list</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Además de organizar el texto en forma de párrafo, también puede mostrar el contenido en una lista fácil de leer.
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;En HTML, puede usar una etiqueta de lista desordenada (<code>&lt;ul&gt;</code>) para crear una lista de elementos sin ningún orden en particular. Una lista desordenada describe elementos de lista individuales con una viñeta.Puede crear la lista ordenada con la etiqueta{' '}
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;El elemento <code>&lt;ul&gt;</code> no debe contener texto sin formato y no formateará automáticamente el texto sin formato en una lista desordenada de elementos. Los elementos de la lista individual deben agregarse a la lista desordenada utilizando la etiqueta <code>&lt;li&gt;</code>. La etiqueta <code>&lt;li&gt;</code> o elemento de lista se utiliza para describir un elemento en una lista.
						</p>
						<div style={{ margin: 'auto', width: '50%' }}>
							<img
								className="materialboxed"
								width="450"
								height="350"
								alt="Listas desordenadas, no ordenadas, unorderer list, clasifican el orden en una lista"
								data-caption="Listas desordenadas, no ordenadas, unorderer list"
								src={listasNoOrdenadas14}
							/>
						</div>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;En el ejemplo anterior, la lista se creó usando la etiqueta <code>&lt;ul&gt;</code> y todos los elementos de la lista individual se agregaron usando las etiquetas <code>&lt;li&gt;</code>.
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;La salida se verá así:
						</p>
						<div style={{ margin: 'auto', width: '50%' }}>
							<img
								className="materialboxed"
								width="350"
								height="250"
								alt="output o salida en el navegador de una lista desordenada o sin orden o unorderer list"
								data-caption="output o salida en el navegador de una lista desordenada o sin orden o unorderer list"
								src={listasNoOrdenadas14b}
							/>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default ListasNoOrdenadas;
