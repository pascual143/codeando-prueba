import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import atributos10 from '../../../styles/img/capitulosPics/atributos10.jpg';
import ButtonBack from '../buttonBack';
import MenuApuntesHtml from '../MenuApuntes/menuApuntesHtml';

class RefAtributos extends Component {
	render() {
		return (
			<Fragment>
				<div>
					<div>
						<Helmet>
							<meta charSet="utf-8" />
							<meta name="description" content="Codeando, aprender lenguages de programacion" /> 
    						<meta name="keywords" content="HTML, CSS, XML, JavaScript, PHP, bootstrap, jQuery programacion desarrollo codigo aprender" />
							{/* <link rel="canonical" href="http://mysite.com/example" /> */}
							<title>Duddle</title>
							<title>Atributos (id y classes) - Aprende Codigo con Codeando Html Css Bootstrap jQuery</title>
						</Helmet>
					</div>
					<nav className="vertical_nav">
					<div className="left_section menu_left">
						<div className="left_section" style={{margin: "10px"}}>
							<MenuApuntesHtml />
						</div>
					</div>
					</nav>
					<div className="body__Capitulos">
						<h1 className="h1__tituloCapitulos">Atributos (id y classes)</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Los atributos son contenido agregado a
							la etiqueta de apertura de un elemento y facilitan la referencia a elementos de HTML y hojas
							de estilos. Los atributos se componen de las siguientes dos partes:
						</p>
						<br />
						<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• El nombre del atributo</p>
						<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• El valor del atributo</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Los atributos mas utilizados son las
							classes y los IDs. El atributo de clase puede ser usado en una o más etiquetas y CSS lo usa
							para diseñar. Sin embargo, los ID están destinados a referirse a un solo elemento, lo que
							significa que la misma ID nunca debe usarse dos veces. Las ID generalmente se usan con
							JavaScript y documentos internos, y no se recomiendan en CSS.
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Se puede utilizar una clase y un id en
							un mismo tag, o un id y varias classes indistintamente.
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;un ejemplo de atributo seria, poder
							decir que los id son nombres y las clases son los apellidos. Podras poner un solo nombre
							pero tantos apellidos como quieras.
						</p>
						<div style={{ margin: '50px', textAlign: 'center' }}>
							<img
								width={700}
								height={350}
								alt="Los atributos se utilizan para referenciar elementos para poder ser editados"
								data-caption="Atributos dan nombre a los elementos del contenido"
								src={atributos10}
							/>
						</div>
                        <ButtonBack />
					</div>
				</div>
			</Fragment>
		);
	}
}

export default RefAtributos;
