import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import headings9 from '../../../../styles/img/capitulosPics/headings9.jpg';

class Headings extends Component {
	render() {
		return (
			<Fragment>
				<div style={{ margin: '60px' }}>
					<div>
						<Helmet>
							<meta charSet="utf-8" />
							<title>Duddle</title>
							<title>Headings o encabezados</title>
							{/* <link rel="canonical" href="http://mysite.com/example" /> */}
						</Helmet>
					</div>
					<div>
						<h1 className="h1__tituloCapitulos">Encabezados o "Headings" (h1, h2, h3, h4, h5, h6)</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Los encabezados en HTML son similares
							a los encabezados en otros tipos de medios. Por ejemplo, en los periódicos, los encabezados
							grandes se usan típicamente para captar la atención del lector. Otras veces, los títulos se
							usan para describir contenido, como el título de una película o un artículo educativo.
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HTML sigue un patrón similar. Los
							encabezados se pueden usar para una variedad de propósitos, como secciones de títulos,
							artículos u otras formas de contenido.
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hay 6 tipos de encabezados y se
							ordenan de mayor a menor siendo <code>&lt;h1&gt;</code> grande y el mas importantey todos
							los demás son mas pequeos y son utilizados para subencabezados. <code>&lt;h2&gt;</code>,{' '}
							<code>&lt;h3&gt;</code>, <code>&lt;h4&gt;</code>
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HTML a veces se llama un lenguaje de
							programación pero no tiene lógica, por lo que es un lenguaje de marcado.{' '}
						</p>
						<br />
						<div style={{ margin: 'auto', width: '50%' }}>
							<img
								width={550}
								height={400}
								alt="La estructura basica en html consta de elementos divisores"
								data-caption="La estructura basica en html consta de elementos divisores"
								src={headings9}
							/>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default Headings;
