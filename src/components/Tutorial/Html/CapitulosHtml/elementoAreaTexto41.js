import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import elementoAreaTexto41 from '../../../../styles/img/capitulosPics/elementoAreaTexto41.jpg';
import MenuTutorialHtml from '../../../MenusTutorial/Html/menuTutorialHtml';

class ElementoAreaTexto41 extends Component {
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
							<title>Codeando</title>
							<title>Elementode Area de Texto - Aprender codigo con Codeando Html Css JavaScript jQuery Bootstrap</title>
						</Helmet>
					</div>
					<nav className="vertical_nav">
					<div className="left_section menu_left">
						<div className="left_section" style={{margin: "10px"}}>
							<MenuTutorialHtml />
						</div>
					</div>
					</nav>
					<div className="body__Capitulos">
						<h1 className="h1__tituloCapitulos">Elemento de Area de Texto</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Un elemento <code>&lt;input&gt;</code> con type = "text" crea un campo de entrada de una sola fila para que los usuarios escriban información. Sin embargo, hay casos en los que los usuarios necesitan escribir más información, como una publicación de blog. En tales casos, en lugar de usar un <code>&lt;input&gt;</code>, podríamos usar <code>&lt;textarea&gt;</code>.
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;El elemento <code>&lt;textarea&gt;</code> se usa para crear un campo de texto más grande para que los usuarios escriban más texto. Podemos agregar los atributos filas y columnas para determinar la cantidad de filas y columnas para el <code>&lt;textarea&gt;</code>. Echar un vistazo:
						</p>
						<div style={{ margin: '20px', textAlign: 'center' }}>
							<img
								className="materialboxed"
								width="600"
								height="550"
								alt="Elemento Area de Texto o input Area Text nos permite escribir en un area texto determinado"
								data-caption="Elemento Area de Texto o input Area Text"
								src={elementoAreaTexto41}
							/>
						</div>
						<br />
						<p>
                        En el código anterior, hay un <code>&lt;textarea&gt;</code> vacío que tiene 5 filas por 30 columnas se representa en la página de la siguiente manera:
						</p>
						<br />
                        <h2 className="h1__tituloCapitulos">Elemento de Area de Texto Vacío</h2>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Si quisiéramos un campo de texto aún más grande, podríamos hacer clic y arrastrar en la esquina inferior derecha para expandirlo.
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cuando enviamos el formulario, el valor de <code>&lt;textarea&gt;</code> es el texto escrito dentro del cuadro. Si queremos agregar un valor predeterminado al texto en <code>&lt;textarea&gt;</code>, lo incluiríamos dentro de las etiquetas de apertura y cierre de la siguiente manera:
						</p>
						<br />
                        <p><code>&lt;textarea&gt;</code> Agregar texto predeterminado <code>&lt;/textarea&gt;</code></p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Este código representará un <code>&lt;textarea&gt;</code> que contiene texto precargado: "Agregar texto predeterminado".
						</p>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default ElementoAreaTexto41;
