import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import videos17 from '../../../../styles/img/capitulosPics/videos17.jpg';

class Videos extends Component {
	render() {
		return (
			<Fragment>
				<div className="body__Capitulos">
					<div>
						<Helmet>
							<meta charSet="utf-8" />
							<meta name="description" content="Codeando, aprender lenguages de programacion" /> 
    						<meta name="keywords" content="HTML, CSS, XML, JavaScript, PHP, bootstrap, jQuery, programacion desarrollo codigo aprender" />
							{/* <link rel="canonical" href="http://mysite.com/example" /> */}
							<title>Codeando</title>
							<title>Los videos</title>
						</Helmet>
					</div>
					<div>
						<h1 className="h1__tituloCapitulos">Video</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Además de las imágenes, HTML también admite la
							visualización de videos. Al igual que la etiqueta <code>&lt;img&gt;</code>, la etiqueta{' '}
							<code>&lt;video&gt;</code> requiere un atributo src con un enlace a la fuente de video. Sin
							embargo, a diferencia de la etiqueta <code>&lt;img&gt;</code>, el elemento{' '}
							<code>&lt;video&gt;</code> requiere una etiqueta de apertura y una de cierre.
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ahora vamos a ver que sucede si queremos agregar un
							contenido que no sea text como por ejemplo imagines.
						</p>
						<br />

						<div style={{ margin: 'auto', width: '50%' }}>
							<img
								className="materialboxed"
								width="750"
								height="100"
								alt="Las videos son una parte fundamental de la web"
								data-caption="Las videos son una parte fundamental la pagina web"
								src={videos17}
							/>
						</div>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;En este ejemplo, la fuente de video (src) es myVideo.mp4
							La fuente puede ser un archivo de video alojado junto a su página web, o una URL que apunta
							a un archivo de video alojado en otra página web.
						</p>

						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;En este ejemplo, la fuente de video (src) es myVideo.mp4
							La fuente puede ser un archivo de video alojado junto a su página web, o una URL que apunta
							a un archivo de video alojado en otra página web.
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Después del atributo src, los atributos de ancho y
							altura se utilizan para establecer el tamaño del video que se muestra en el navegador.
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;El atributo de controles indica al navegador que incluya
							controles de video básicos: pausa, reproducción y omisión.
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;El texto, "Video no compatible", entre las etiquetas de
							video de apertura y cierre solo se mostrará si el navegador no puede cargar el video.
						</p>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default Videos;
