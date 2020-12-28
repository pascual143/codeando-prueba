import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';

class SemanticoHtml47 extends Component {
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
							<title>Introduccion al Html Semantico</title>
						</Helmet>
					</div>
					<div>
						<h1 className="h1__tituloCapitulos">Introduccion al Html Semantico</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Al crear páginas web, utilizamos una combinación de HTML
							no semántico y HTML semántico. La palabra semántica significa "relacionado con el
							significado", por lo que los elementos semánticos proporcionan información sobre el
							contenido entre las etiquetas de apertura y cierre.
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Al usar HTML semántico, seleccionamos elementos HTML en
							función de su significado, no de cómo se presentan. Elementos como <code>&lt;div&gt;</code>{' '}
							y <code>&lt;span&gt;</code> no son elementos semánticos ya que no proporcionan contexto en
							cuanto a lo que hay dentro de esas etiquetas.
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Por ejemplo, en lugar de usar un elemento{' '}
							<code>&lt;div&gt;</code> para contener nuestra información de encabezado, podríamos usar un
							elemento <code>&lt;header&gt;</code>, que se usa como una sección de encabezado. Al usar una
							etiqueta <code>&lt;header&gt;</code> en lugar de una <code>&lt;div&gt;</code>,
							proporcionamos contexto en cuanto a qué información está dentro de la etiqueta de apertura y
							cierre.
						</p>
						<br />
						<h2 className="h2__tituloCapitulos">&nbsp;&nbsp;&nbsp;¿Por qué usar HTML semántico?</h2>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Accesibilidad: HTML semántico hace que las páginas web
							sean accesibles para dispositivos móviles y también para personas con discapacidades. Esto
							se debe a que los lectores de pantalla y los navegadores pueden interpretar mejor el código.
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SEO: Mejora el SEO del sitio web, o la optimización de
							motores de búsqueda, que es el proceso de aumentar el número de personas que visitan su
							página web. Con un mejor SEO, los motores de búsqueda pueden identificar mejor el contenido
							de su sitio web y ponderar adecuadamente el contenido más importante.
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fácil de entender: el HTML semántico también hace que el
							código fuente del sitio web sea más fácil de leer para otros desarrolladores web.
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Para comprender mejor esto, puede pensar en comparar
							HTML no semántico con ir a una tienda sin carteles en los pasillos. Como los pasillos no
							están etiquetados, no sabes qué productos hay en esos pasillos. Sin embargo, las tiendas que
							tienen letreros para cada pasillo hacen que sea mucho más fácil encontrar los artículos que
							necesita, al igual que HTML semántico.
						</p>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default SemanticoHtml47;
