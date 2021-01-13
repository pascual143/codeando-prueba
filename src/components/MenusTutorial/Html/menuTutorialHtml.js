import React, { Component } from 'react'
import Helmet from "react-helmet";
import { Link } from 'react-router-dom';

// import QueEsHtml from '../../Tutorial/Html/CapitulosHtml/queEsHtml';
// import AnatomiaHtml from '../../Tutorial/Html/CapitulosHtml/anatomiaHtml';

export default class MenuTutorialHtml extends Component {
    	render() {
		return (
			<div>
				<div>
					<Helmet>
						<meta charSet="utf-8" />
						<title>Codeando</title>
						<title>Categorias Menu Navegacion - Aprende codigo con Codeando Html Css JavaScript Bootstrap jQuery</title>
					</Helmet>
				</div>
				<div>
				<li className="menu--link fontMainButtons">
				<i className=''></i>
								<div className="font" style={{minHeight:"250px"}}>

								<Link to={"/queEsHtml"} className="menu--link menuDropdown">Que es Html</Link>
								<Link to={"/anatomiaHtml"} className="menu--link menuDropdown">Anatomia Standard</Link>
								<Link to={"/normasStandard"} className="menu--link menuDropdown">Normas Standard</Link>
								<Link to={"/etiquetaHtml"} className="menu--link menuDropdown">La etiqueta Html</Link>
								<Link to={"/estructuraHtml"} className="menu--link menuDropdown">Estructura Html</Link>
								<Link to={"/divs"} className="menu--link menuDropdown">Divs</Link>
								<Link to={"/head"} className="menu--link menuDropdown">Head</Link>
								<Link to={"/title"} className="menu--link menuDropdown">Title</Link>
								<Link to={"/headings"} className="menu--link menuDropdown">Headings</Link>
								<Link to={"/atributos"} className="menu--link menuDropdown">Atributos</Link>
								<Link to={"/texto"} className="menu--link menuDropdown">Texto</Link>
								<Link to={"/estilosTexto"} className="menu--link menuDropdown">Estilos Texto</Link>
								<Link to={"/saltosLinea"} className="menu--link menuDropdown">Saltos Linea</Link>
								<Link to={"/listasNoOrdenadas"} className="menu--link menuDropdown">Listas No Ordenadas</Link>
								<Link to={"/listasOrdenadas"} className="menu--link menuDropdown">Listas Ordenadas</Link>
								<Link to={"/imagenes"} className="menu--link menuDropdown">Imagenes</Link>
								<Link to={"/videos"} className="menu--link menuDropdown">Videos</Link>
								<Link to={"/anclasHyperlinks"} className="menu--link menuDropdown">Anclas e Hyperlinks</Link>
								<Link to={"/enlacePagina"} className="menu--link menuDropdown">Enlace a Pagina</Link>
								<Link to={"/enlaceOtra"} className="menu--link menuDropdown">Enlace Externo</Link>
								<Link to={"/imagenesHyperlink"} className="menu--link menuDropdown">Imagenes Hyperlink</Link>
								<Link to={"/tabla"} className="menu--link menuDropdown">Tablas</Link>
								<Link to={"/encabezadoTabla"} className="menu--link menuDropdown">Encabezado Tabla</Link>
								<Link to={"/bordesTabla"} className="menu--link menuDropdown">Borde Tabla</Link>
								<Link to={"/expandiendoColumnas"} className="menu--link menuDropdown">Expandir Columnas</Link>
								<Link to={"/ensanchandoFilas"} className="menu--link menuDropdown">Ensanchando Filas</Link>
								<Link to={"/cuerpoTabla"} className="menu--link menuDropdown">Cuerpo Tabla</Link>
								<Link to={"/cabezaTabla"} className="menu--link menuDropdown">Cabeza Tabla</Link>
								<Link to={"/footerTabla"} className="menu--link menuDropdown">Pie de Tabla</Link>
								<Link to={"/introduccionFormularios"} className="menu--link menuDropdown">Intro Formularios</Link>
								<Link to={"/entradaTexto"} className="menu--link menuDropdown">Entrada Texto</Link>
								<Link to={"/agregarEtiqueta"} className="menu--link menuDropdown">Agregar Etiqueta</Link>
								<Link to={"/entradaContrasena"} className="menu--link menuDropdown">Entrada Contraseña</Link>
								<Link to={"/entradaNumeros"} className="menu--link menuDropdown">Entrada Numeros</Link>
								<Link to={"/rangoEntrada"} className="menu--link menuDropdown">Rango de Entrada</Link>
								<Link to={"/entradaVerificacion"} className="menu--link menuDropdown">Entrada Verificacion</Link>
								<Link to={"/entradaRadio"} className="menu--link menuDropdown">Entrada Radio</Link>
								<Link to={"/listaDesplegable"} className="menu--link menuDropdown">Lista Desplegable</Link>
								<Link to={"/entradaDataList"} className="menu--link menuDropdown">Entrada DataList</Link>
								<Link to={"/elementoAreaTexto"} className="menu--link menuDropdown">Area de Texto</Link>
								<Link to={"/validacionFormularios"} className="menu--link menuDropdown">Validacion Formularios</Link>
								<Link to={"/requerirEntrada"} className="menu--link menuDropdown">Requerir Entrada</Link>
								<Link to={"/establecerMinMax"} className="menu--link menuDropdown">Establecer Minimo y Maximo</Link>
								<Link to={"/longitudTexto"} className="menu--link menuDropdown">Longitud Texto</Link>
								<Link to={"/coincidirPatron"} className="menu--link menuDropdown">Coincidir Patron</Link>
								<Link to={"/semanticoHtml"} className="menu--link menuDropdown">Semantico Html</Link>
								<Link to={"/piePagina"} className="menu--link menuDropdown">Pie Pagina</Link>
								<Link to={"/articuloSeccion"} className="menu--link menuDropdown">Article Section</Link>
								<Link to={"/aside"} className="menu--link menuDropdown">Aside</Link>
								<Link to={"/figureFigcaption"} className="menu--link menuDropdown">Figure Figcaption</Link>

							</div>
					</li>
					</div>
			</div>
		);
	}
}
