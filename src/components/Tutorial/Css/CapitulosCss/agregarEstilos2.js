import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import MenuTutorialCss from '../../../MenusTutorial/Css/menuTutorialCss';
import agregarEstilos2 from '../../../../styles/img/capitulosPics/agregarEstilos2.jpg';
import agregarEstilosExt2 from '../../../../styles/img/capitulosPics/agregarEstilosExt2.jpg';
import agregarEstilosInline2 from '../../../../styles/img/capitulosPics/agregarEstilosInline2.jpg';

class AgregarEstilos2 extends Component {
	render() {
		return (
			<Fragment>
				<div className="body__Capitulos">
					<div>
						<Helmet>
							<meta charSet="utf-8" />
							<meta name="description" content="Codeando, aprender lenguages de programacion" />
							<meta
								name="keywords"
								content="HTML, CSS, XML, JavaScript, PHP, bootstrap, jQuery programacion desarrollo codigo aprender"
							/>
							{/* <link rel="canonical" href="http://mysite.com/example" /> */}
							<title>TandGo</title>
							<title>
								Introduccion. Agregar los estilos a Html - TandGo - Aprende a programar con Html Css
								JavaScript jQuery
							</title>
						</Helmet>
					</div>
					<nav className="vertical_nav">
						<div className="left_section menu_left">
							<div className="left_section" style={{ margin: '10px' }}>
								<MenuTutorialCss />
							</div>
						</div>
					</nav>
					<div>
						<h1 className="h1__tituloCapitulos">Agregar CSS a nuestro HTML</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hay tres formas de agregar estilos a una
							pagina: interno, externo y en linea.
						</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Interno: Los estilos CSS hechos de esta
							manera se cargan cada vez que se actualiza la web, lo que puede aumentar el tiempo de carga.
							Además, no se puede usar el mismo estilo CSS en varias páginas, ya que está contenido en una
							sola página. Sin embargo, esto también tiene sus beneficios. Tener todo en una página
							facilita compartir la plantilla para una vista previa. Puede ser util para páginas muy
							pequeñas.
						</p>
						<div style={{ margin: '20px', textAlign: 'center' }}>
							<img
								className="materialboxed"
								width="500"
								height="400"
								alt="Agregar estilos css dentro del documento Html (internal)"
								data-caption="Agregar estilos de forma interna"
								src={agregarEstilos2}
							/>
						</div>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Externo es el mas utilizado. Todo se hace
							externamente en un archivo .css. Esto significa que puedes hacer todo el estilizado en un
							archivo separado y aplicar el CSS a cualquier página que quieras. El estilo Externo también
							puede mejorar los tiempos de carga.
						</p>
						<div style={{ margin: '10px', textAlign: 'center' }}>
							<img
								className="materialboxed"
								width="600"
								height="400"
								alt="Agregar estilos css dentro del documento Html (external)"
								data-caption="Agregar estilos de forma externa"
								src={agregarEstilosExt2}
							/>
						</div>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Inline(en linea) trabaja con elementos
							específicos que tienen la etiqueta <code>&lt;style&gt;</code>. Cada componente tiene que ser
							estilizado, por lo que podría no ser la mejor forma, ni la más rápida para manejar CSS. Pero
							puede ser útil, por ejemplo, si quieres cambiar un solo elemento, tener una vista previa
							rápida de los cambios o tal vez no tengas acceso a los archivos CSS.
						</p>
						<div style={{ margin: '10px', textAlign: 'center' }}>
							<img
								className="materialboxed"
								width="600"
								height="150"
								alt="Agregar estilos css dentro del documento Html (external)"
								data-caption="Agregar estilos de forma externa"
								src={agregarEstilosInline2}
							/>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default AgregarEstilos2;
