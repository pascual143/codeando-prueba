import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import listasOrdenadas15 from '../../../../styles/img/capitulosPics/listasOrdenadas15.jpg';

class ListasOrdenadas15 extends Component {
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
							<title>Listas Ordenadas Ordered List</title>
						</Helmet>
					</div>
					<div>
						<h1 className="h1__tituloCapitulos">Listas Ordenadas - (Ordered List)</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Las listas ordenadas (<code>&lt;ol&gt;</code>) son como
							listas no ordenadas, excepto que cada elemento de la lista está numerado. Son útiles cuando
							necesita enumerar diferentes pasos en un proceso o clasificar elementos del primero al
							último.
						</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Puede crear la lista ordenada con la etiqueta{' '}
							<code>&lt;ol&gt;</code> y luego agregar elementos de lista individuales a la lista usando
							etiquetas <code>&lt;li&gt;</code>.
						</p>
						<br />
						<div style={{ margin: 'auto', width: '50%' }}>
							<img
								className="materialboxed"
								width="650"
								height="450"
								alt="Lista ordenada o orderer list"
								data-caption="Lista ordenada o orderer list"
								src={listasOrdenadas15}
							/>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default ListasOrdenadas15;
