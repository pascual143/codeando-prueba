import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import figureFigcaption51 from '../../../../styles/img/capitulosPics/figureFigcaption51.jpg';

class FigureFigcaption51 extends Component {
	render() {
		return (
			<Fragment>
				<div>
					<div>
						<Helmet>
							<meta charSet="utf-8" />
							<title>Codeando</title>
							<title>Figure y Figcaption</title>
							{/* <link rel="canonical" href="http://mysite.com/example" /> */}
						</Helmet>
					</div>
					<div>
						<h1 className="h1__tituloCapitulos">Figure y Figcaption</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Con <code>&lt;aside&gt;</code>, aprendimos que podemos
							poner información adicional al lado de una pieza principal de contenido, pero ¿y si
							quisiéramos agregar una imagen o ilustración? Ahí es donde entran{' '}
							<code>&lt;figure&gt;</code> y <code>&lt;figurecaption&gt;</code>.
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>&lt;figure&gt;</code> es un elemento utilizado
							para encapsular medios como una imagen, ilustración, diagrama, fragmento de código, etc., al
							que se hace referencia en el flujo principal del documento.
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>&lt;figure&gt;</code>
						</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>&lt;img&gt;</code> src = "overwatch.jpg"{' '}
							<code>&lt;/&gt;</code>
						</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>&lt;/figure&gt;</code>
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;En este código, creamos un elemento{' '}
							<code>&lt;figure&gt;</code> para poder encapsular nuestra etiqueta <code>&lt;img&gt;</code>.
							En <code>&lt;figure&gt;</code> utilizamos la etiqueta <code>&lt;img&gt;</code> para insertar
							una imagen en la página web. Utilizamos el atributo src dentro de la etiqueta{' '}
							<code>&lt;img&gt;</code> para poder vincular la fuente de la imagen.
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Es posible agregar un título a la imagen usando{' '}
							<code>&lt;figcaption&gt;</code>.
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>&lt;figcaption&gt;</code> es un elemento utilizado
							para describir los medios en la etiqueta <code>&lt;figure&gt;</code>. Por lo general,{' '}
							<code>&lt;figcaption&gt;</code> irá dentro de <code>&lt;figure&gt;</code>. Esto es diferente
							de usar un elemento <code>&lt;p&gt;</code> para describir el contenido; si decidimos cambiar
							la ubicación de <code>&lt;figure&gt;</code>, la etiqueta de párrafo puede desplazarse de la
							figura mientras que una <code>&lt;figcaption&gt;</code> se moverá con la figura. Esto es
							útil para agrupar una imagen con un título.
						</p>
						<br />

						<div style={{ margin: 'auto', width: '70%' }}>
							<img
								className="materialboxed"
								width="750"
								height="250"
								alt="Main y pie de pagina"
								data-caption="Main y pie de pagina"
								src={figureFigcaption51}
							/>
						</div>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;En el ejemplo anterior, agregamos una{' '}
							<code>&lt;figcaption&gt;</code> en el elemento <code>&lt;figure&gt;</code> para describir la
							imagen del ejemplo anterior. Esto ayuda a agrupar el contenido de{' '}
							<code>&lt;figure&gt;</code> con el contenido de <code>&lt;figcaption&gt;</code>.
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Si bien el contenido de <code>&lt;figure&gt;</code> está
							relacionado con el flujo principal del documento, su posición es independiente. Esto
							significa que puede eliminarlo o moverlo a otro lugar sin afectar el flujo del documento.
						</p>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default FigureFigcaption51;
