import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import imagenes16 from '../../../../styles/img/capitulosPics/imagenes16.jpg';
import imagenesAlt16 from '../../../../styles/img/capitulosPics/imagenesAlt16.jpg';

class Imagenes extends Component {
	render() {
		return (
			<Fragment>
				<div>
					<div>
						<Helmet>
							<meta charSet="utf-8" />
							<title>Codeando</title>
							<title>Las imagenes</title>
							{/* <link rel="canonical" href="http://mysite.com/example" /> */}
						</Helmet>
					</div>
					<div>
						<h1 className="h1__tituloCapitulos">Las imágenes</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Todos los elementos que ha aprendido hasta ahora
							(encabezados, párrafos, listas y espacios) comparten una cosa en común: ¡están compuestos
							completamente de texto!
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ahora vamos a ver que sucede si queremos agregar un
							contenido que no sea text como por ejemplo imagines.
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;La etiqueta <code>&lt;img&gt;</code> le permite agregar
							una imagen a una página web. La mayoría de los elementos requieren etiquetas de apertura y
							cierre, pero la etiqueta <code>&lt;img&gt;</code> es una etiqueta de cierre automático.
							Tenga en cuenta que el final de la etiqueta <code>&lt;img&gt;</code> tiene una barra
							diagonal /. Las etiquetas de cierre automático pueden incluir u omitir la barra diagonal
							final; ambas se mostrarán correctamente.
						</p>
						<div style={{ margin: 'auto', width: '50%' }}>
							<img
								className="materialboxed"
								width="550"
								height="150"
								alt="Las imagenes son una parte fundamental de la web"
								data-caption="Las imagenes son una parte fundamental la pagina web"
								src={imagenes16}
							/>
						</div>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;La etiqueta <code>&lt;img&gt;</code> tiene un atributo
							requerido llamado src que debe establecerse en la fuente de la imagen o en la ubicación de
							la imagen. En este caso, el valor de src debe ser el localizador uniforme de recursos (URL)
							de la imagen. Una URL es la dirección web o la dirección local donde se almacena un archivo.
						</p>
						<h1 className="h1__tituloCapitulos">Texto alternativo para las imágenes</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Parte de ser un desarrollador web excepcional es hacer
							que su sitio sea accesible para usuarios de todos los orígenes. Para que la Web sea más
							inclusiva, debemos considerar qué sucede cuando las tecnologías de asistencia, como los
							lectores de pantalla, se encuentran con etiquetas de imagen.
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;El atributo alt, que significa texto alternativo, aporta
							significado a las imágenes en nuestros sitios. El atributo de alta puede agregarse a la
							etiqueta de imagen al igual que el atributo de srcat. El valor de alt debe ser una
							descripción de la imagen.
						</p>
						<div style={{ margin: 'auto', width: '50%' }}>
							<img
								className="materialboxed"
								width="650"
								height="150"
								alt="Las imagenes son una parte fundamental de la web"
								data-caption="Las imagenes son una parte fundamental la pagina web"
								src={imagenesAlt16}
							/>
						</div>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;El atributo alt también sirve
							para los siguientes propósitos:
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Si una imagen no se carga en
							una página web, un usuario puede pasar el mouse sobre el área originalmente destinada para
							la imagen y leer una breve descripción de la imagen. Esto es posible gracias a la
							descripción que proporciona en el atributo alt.
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Los usuarios con discapacidad
							visual a menudo navegan por la web con la ayuda del software de lectura de pantalla. Cuando
							incluye el atributo de alta, el software de lectura de pantalla puede leer la descripción de
							la imagen en voz alta para el usuario con discapacidad visual.
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• El atributo alt también juega
							un papel en la optimización de motores de búsqueda (SEO), porque los motores de búsqueda no
							pueden "ver" las imágenes en los sitios web mientras navegan por Internet. Tener atributos
							alt descriptivos puede mejorar el ranking de su sitio.
						</p>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default Imagenes;
