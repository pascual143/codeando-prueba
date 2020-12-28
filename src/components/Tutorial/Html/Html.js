import React, { Fragment, Component } from 'react';

import '../../../styles/css/styles.css';
// Capitulos
import QueEsHtml from './CapitulosHtml/queEsHtml';
import AnatomiaHtml from './CapitulosHtml/anatomiaHtml';
import NormasStandar from './CapitulosHtml/normasStandard3';
import EtiquetaHtml from './CapitulosHtml/etiquetaHtml4';
import EstructuraHtml from './CapitulosHtml/estructuraHtml5';
import Divs from './CapitulosHtml/divs6';
import Head from './CapitulosHtml/head7';
import Title from './CapitulosHtml/title8';
import Headings from './CapitulosHtml/headings9';
import Atributos from './CapitulosHtml/atributos10';
import Texto from './CapitulosHtml/texto11';
import EstilosTexto from './CapitulosHtml/estilosTexto12';
import SaltosLinea from './CapitulosHtml/saltosLinea13';
import ListasNoOrdenadas from './CapitulosHtml/listasNoOrdenadas14';
import ListasOrdenadas from './CapitulosHtml/listasOrdenadas15';
import Imagenes from './CapitulosHtml/imagenes16';
import Videos from './CapitulosHtml/videos17';
import AnclasHyperlinks from './CapitulosHtml/anclasHyperlinks19';
import EnlacePagina from './CapitulosHtml/enlacePagina20';
import EnlaceOtra from './CapitulosHtml/enlaceOtra21';
import ImagenesHyperlink from './CapitulosHtml/imagenesHyperlinks22';
import Tabla from './CapitulosHtml/tabla23';
import TablasEncabezados24 from './CapitulosHtml/tablasEncabezados24';
import BordesTablas25 from './CapitulosHtml/bordesTablas25';
import ExpandiendoColumnas26 from './CapitulosHtml/expandiendoColumnas26';
import EnsanchandoFilas27 from './CapitulosHtml/ensanchandoFilas27';
import CuerpoTabla28 from "./CapitulosHtml/cuerpoTabla28";
import CabezaTabla29 from "./CapitulosHtml/cabezaTabla29";
import FooterTabla30 from "./CapitulosHtml/footerTabla30";
import IntroduccionFormularios31 from "./CapitulosHtml/introduccionFormularios31";
import EntradaTexto32 from "./CapitulosHtml/entradaTexto32";
import EntradaContrasena34 from "./CapitulosHtml/entradaContrasena34";
import AgregarEtiqueta33 from "./CapitulosHtml/agregarEtiqueta33";
import EntradaNumeros35 from "./CapitulosHtml/entradaNumeros35";
import RangoEntrada36 from './CapitulosHtml/rangoEntrada36';
import EntradaVerificaion37 from './CapitulosHtml/entradaVerificacion37';
import EntradaRadio38 from './CapitulosHtml/entradaRadio38';
import ListaDesplegable39 from './CapitulosHtml/listaDesplegable39';
import EntradaDataList40 from './CapitulosHtml/entradaDatalist40';
import ElementoAreaTexto41 from './CapitulosHtml/elementoAreaTexto41';
import ValidacionFormularios42 from './CapitulosHtml/validaciónFormularios42';
import RequerirEntrada43 from './CapitulosHtml/requerirEntrada43';
import EstablecerMinMax44 from './CapitulosHtml/establecerMinMax44';
import LongitudTexto45 from './CapitulosHtml/longitudTexto45';
import CoincidirPatron46 from './CapitulosHtml/coincidirPatron46';
import SemanticoHtml47 from './CapitulosHtml/semanticoHtml47';
import MainYPiePagina48 from './CapitulosHtml/mainYPiePagina48';
import ArticuloYSeccion49 from './CapitulosHtml/articuloYSeccion49';
import Aside50 from './CapitulosHtml/aside50';
import FigureFigcaption51 from './CapitulosHtml/figureFigcaption51';

import HomeFeatures from '../../Home/HomeFeatures.js';


// bootstrap
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import 'materialize-css';

// Slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import MagicSliderDots from 'react-magic-slider-dots';
import 'react-magic-slider-dots/dist/magic-dots.css';

import './arrows.js';
import MenuTutorialHtml from '../../MenusTutorial/Html/menuTutorialHtml';

export default class IntroHtml extends Component {
	constructor(props) {
		super(props);
		this.next = this.next.bind(this);
		this.previous = this.previous.bind(this);
	}

	next() {
		this.slider.slickNext();
	}
	previous() {
		this.slider.slickPrev();
	}

	render() {
		const settings = {
			dots: true,
			arrows: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			appendDots: (dots) => {
				return <MagicSliderDots dots={dots} numDotsToShow={50} dotWidth={40} />
			}
		};

		return (
			<Fragment>
				
				<div className="divBody">
					<div style={{ textAlign: 'center' }}>
						{/* <Button className="buttonCapitulos" onClick={this.previous}>
							Previous
						</Button>
						<Button className="buttonCapitulos" onClick={this.next}>
							Next
						</Button> */}
					</div>
					<nav className="vertical_nav">
					<div className="left_section menu_left" id="">
						<div className="left_section">
							<MenuTutorialHtml />
						</div>
					</div>
					</nav>
					<Slider
						ref={(c) => (this.slider = c)}
						{...settings}
						className="z-depth-5"
						style={{ margin: '30px', marginTop: '-150px' }}
					>
						<div>
							<div className="divBody2">
								<Button className="buttonPrev float-left" onClick={this.previous}>
									<span style={{color: "white"}}>P<br /><br />r<br /><br />e<br /><br />v</span>
								</Button>
								<Button className="buttonNext float-right" onClick={this.next}>
									<span style={{color: "white"}}>N<br /><br />e<br /><br /><br />x<br /><br />t</span>
								</Button>
								<Card className="cardHtmlInside body__Capitulos_2">
									<QueEsHtml />
								</Card>
							</div>
						</div>
							<div className="divBody2">
								<Button className="buttonPrev float-left" onClick={this.previous}>
									<span style={{color: "white"}}>P<br /><br />r<br /><br />e<br /><br />v</span>
								</Button>
								<Button className="buttonNext float-right" onClick={this.next}>
									<span style={{color: "white"}}>N<br /><br />e<br /><br /><br />x<br /><br />t</span>
								</Button>
								<Card className="cardHtmlInside body__Capitulos_2">
									<AnatomiaHtml />
								</Card>
							</div>
							<div className="divBody2">
							<Button className="buttonPrev float-left" onClick={this.previous}>
									<span style={{color: "white"}}>P<br /><br />r<br /><br />e<br /><br />v</span>
								</Button>
								<Button className="buttonNext float-right" onClick={this.next}>
									<span style={{color: "white"}}>N<br /><br />e<br /><br /><br />x<br /><br />t</span>
								</Button>
								<Card className="cardHtmlInside body__Capitulos_2">
									<NormasStandar />
								</Card>
							</div>
							<div className="divBody2">
								<Button className="buttonPrev float-left" onClick={this.previous}>
									<span style={{color: "white"}}>P<br /><br />r<br /><br />e<br /><br />v</span>
								</Button>
								<Button className="buttonNext float-right" onClick={this.next}>
									<span style={{color: "white"}}>N<br /><br />e<br /><br /><br />x<br /><br />t</span>
								</Button>
								<Card className="cardHtmlInside body__Capitulos_2">
									<EtiquetaHtml />
								</Card>
							</div>
							<div className="divBody2">
								<Button className="buttonPrev float-left" onClick={this.previous}>
									<span style={{color: "white"}}>P<br /><br />r<br /><br />e<br /><br />v</span>
								</Button>
								<Button className="buttonNext float-right" onClick={this.next}>
									<span style={{color: "white"}}>N<br /><br />e<br /><br /><br />x<br /><br />t</span>
								</Button>
								<Card className="cardHtmlInside body__Capitulos_2">
									<EstructuraHtml />
								</Card>
							</div>
							<div className="divBody2">
								<Button className="buttonPrev float-left" onClick={this.previous}>
									<span style={{color: "white"}}>P<br /><br />r<br /><br />e<br /><br />v</span>
								</Button>
								<Button className="buttonNext float-right" onClick={this.next}>
									<span style={{color: "white"}}>N<br /><br />e<br /><br /><br />x<br /><br />t</span>
								</Button>
								<Card className="cardHtmlInside body__Capitulos_2">
									<Divs />
								</Card>
							</div>
							<div className="divBody2">
								<Button className="buttonPrev float-left" onClick={this.previous}>
									<span style={{color: "white"}}>P<br /><br />r<br /><br />e<br /><br />v</span>
								</Button>
								<Button className="buttonNext float-right" onClick={this.next}>
									<span style={{color: "white"}}>N<br /><br />e<br /><br /><br />x<br /><br />t</span>
								</Button>
								<Card className="cardHtmlInside body__Capitulos_2">
									<Head />
								</Card>
							</div>
							<div className="divBody2">
								<Button className="buttonPrev float-left" onClick={this.previous}>
									<span style={{color: "white"}}>P<br /><br />r<br /><br />e<br /><br />v</span>
								</Button>
								<Button className="buttonNext float-right" onClick={this.next}>
									<span style={{color: "white"}}>N<br /><br />e<br /><br /><br />x<br /><br />t</span>
								</Button>
								<Card className="cardHtmlInside body__Capitulos_2">
									<Title />
								</Card>
							</div>
							<div className="divBody2">
								<Button className="buttonPrev float-left" onClick={this.previous}>
									<span style={{color: "white"}}>P<br /><br />r<br /><br />e<br /><br />v</span>
								</Button>
								<Button className="buttonNext float-right" onClick={this.next}>
									<span style={{color: "white"}}>N<br /><br />e<br /><br /><br />x<br /><br />t</span>
								</Button>
								<Card className="cardHtmlInside body__Capitulos_2 body__Capitulos_2">
									<Headings />
								</Card>
							</div>
							<div className="divBody2">
								<Button className="buttonPrev float-left" onClick={this.previous}>
									<span style={{color: "white"}}>P<br /><br />r<br /><br />e<br /><br />v</span>
								</Button>
								<Button className="buttonNext float-right" onClick={this.next}>
									<span style={{color: "white"}}>N<br /><br />e<br /><br /><br />x<br /><br />t</span>
								</Button>
								<Card className="cardHtmlInside body__Capitulos_2 body__Capitulos_2">
									<Atributos />
								</Card>
							</div>
							<div className="divBody2">
								<Button className="buttonPrev float-left" onClick={this.previous}>
									<span style={{color: "white"}}>P<br /><br />r<br /><br />e<br /><br />v</span>
								</Button>
								<Button className="buttonNext float-right" onClick={this.next}>
									<span style={{color: "white"}}>N<br /><br />e<br /><br /><br />x<br /><br />t</span>
								</Button>
								<Card className="cardHtmlInside body__Capitulos_2">
									<Texto />
								</Card>
							</div>
							<div className="divBody2">
								<Button className="buttonPrev float-left" onClick={this.previous}>
									<span style={{color: "white"}}>P<br /><br />r<br /><br />e<br /><br />v</span>
								</Button>
								<Button className="buttonNext float-right" onClick={this.next}>
									<span style={{color: "white"}}>N<br /><br />e<br /><br /><br />x<br /><br />t</span>
								</Button>
								<Card className="cardHtmlInside body__Capitulos_2">
									<EstilosTexto />
								</Card>
							</div>
							<div className="divBody2">
								<Button className="buttonPrev float-left" onClick={this.previous}>
									<span style={{color: "white"}}>P<br /><br />r<br /><br />e<br /><br />v</span>
								</Button>
								<Button className="buttonNext float-right" onClick={this.next}>
									<span style={{color: "white"}}>N<br /><br />e<br /><br /><br />x<br /><br />t</span>
								</Button>
								<Card className="cardHtmlInside body__Capitulos_2">
									<SaltosLinea />
								</Card>
							</div>
							<div className="divBody2">
								<Button className="buttonPrev float-left" onClick={this.previous}>
									<span style={{color: "white"}}>P<br /><br />r<br /><br />e<br /><br />v</span>
								</Button>
								<Button className="buttonNext float-right" onClick={this.next}>
									<span style={{color: "white"}}>N<br /><br />e<br /><br /><br />x<br /><br />t</span>
								</Button>
								<Card className="cardHtmlInside body__Capitulos_2">
									<ListasNoOrdenadas />
								</Card>
							</div>
							<div className="divBody2">
								<Button className="buttonPrev float-left" onClick={this.previous}>
									<span style={{color: "white"}}>P<br /><br />r<br /><br />e<br /><br />v</span>
								</Button>
								<Button className="buttonNext float-right" onClick={this.next}>
									<span style={{color: "white"}}>N<br /><br />e<br /><br /><br />x<br /><br />t</span>
								</Button>
								<Card className="cardHtmlInside body__Capitulos_2">
									<ListasOrdenadas />
								</Card>
							</div>
							<div className="divBody2">
								<Button className="buttonPrev float-left" onClick={this.previous}>
									<span style={{color: "white"}}>P<br /><br />r<br /><br />e<br /><br />v</span>
								</Button>
								<Button className="buttonNext float-right" onClick={this.next}>
									<span style={{color: "white"}}>N<br /><br />e<br /><br /><br />x<br /><br />t</span>
								</Button>
								<Card className="cardHtmlInside body__Capitulos_2">
									<Imagenes />
								</Card>
							</div>
							<div className="divBody2">
								<Button className="buttonPrev float-left" onClick={this.previous}>
									<span style={{color: "white"}}>P<br /><br />r<br /><br />e<br /><br />v</span>
								</Button>
								<Button className="buttonNext float-right" onClick={this.next}>
									<span style={{color: "white"}}>N<br /><br />e<br /><br /><br />x<br /><br />t</span>
								</Button>
								<Card className="cardHtmlInside body__Capitulos_2">
									<Videos />
								</Card>
							</div>
							<div className="divBody2">
								<Button className="buttonPrev float-left" onClick={this.previous}>
									<span style={{color: "white"}}>P<br /><br />r<br /><br />e<br /><br />v</span>
								</Button>
								<Button className="buttonNext float-right" onClick={this.next}>
									<span style={{color: "white"}}>N<br /><br />e<br /><br /><br />x<br /><br />t</span>
								</Button>
								<Card className="cardHtmlInside body__Capitulos_2">
									<AnclasHyperlinks />
								</Card>
							</div>
							<div className="divBody2">
								<Button className="buttonPrev float-left" onClick={this.previous}>
									<span style={{color: "white"}}>P<br /><br />r<br /><br />e<br /><br />v</span>
								</Button>
								<Button className="buttonNext float-right" onClick={this.next}>
									<span style={{color: "white"}}>N<br /><br />e<br /><br /><br />x<br /><br />t</span>
								</Button>
								<Card className="cardHtmlInside body__Capitulos_2">
									<EnlacePagina />
								</Card>
							</div>
							<div className="divBody2">
								<Button className="buttonPrev float-left" onClick={this.previous}>
									<span style={{color: "white"}}>P<br /><br />r<br /><br />e<br /><br />v</span>
								</Button>
								<Button className="buttonNext float-right" onClick={this.next}>
									<span style={{color: "white"}}>N<br /><br />e<br /><br /><br />x<br /><br />t</span>
								</Button>
								<Card className="cardHtmlInside body__Capitulos_2">
									<EnlaceOtra />
								</Card>
							</div>
							<div className="divBody2">
								<Button className="buttonPrev float-left" onClick={this.previous}>
									<span style={{color: "white"}}>P<br /><br />r<br /><br />e<br /><br />v</span>
								</Button>
								<Button className="buttonNext float-right" onClick={this.next}>
									<span style={{color: "white"}}>N<br /><br />e<br /><br /><br />x<br /><br />t</span>
								</Button>
								<Card className="cardHtmlInside body__Capitulos_2">
									<ImagenesHyperlink />
								</Card>
							</div>
							<div className="divBody2">
								<Button className="buttonPrev float-left" onClick={this.previous}>
									<span style={{color: "white"}}>P<br /><br />r<br /><br />e<br /><br />v</span>
								</Button>
								<Button className="buttonNext float-right" onClick={this.next}>
									<span style={{color: "white"}}>N<br /><br />e<br /><br /><br />x<br /><br />t</span>
								</Button>
								<Card className="cardHtmlInside body__Capitulos_2">
									<Tabla />
								</Card>
							</div>
							<div className="divBody2">
								<Button className="buttonPrev float-left" onClick={this.previous}>
									<span style={{color: "white"}}>P<br /><br />r<br /><br />e<br /><br />v</span>
								</Button>
								<Button className="buttonNext float-right" onClick={this.next}>
									<span style={{color: "white"}}>N<br /><br />e<br /><br /><br />x<br /><br />t</span>
								</Button>
								<Card className="cardHtmlInside body__Capitulos_2">
									<TablasEncabezados24 />
								</Card>
							</div>
							<div className="divBody2">
								<Button className="buttonPrev float-left" onClick={this.previous}>
									<span style={{color: "white"}}>P<br /><br />r<br /><br />e<br /><br />v</span>
								</Button>
								<Button className="buttonNext float-right" onClick={this.next}>
									<span style={{color: "white"}}>N<br /><br />e<br /><br /><br />x<br /><br />t</span>
								</Button>
								<Card className="cardHtmlInside body__Capitulos_2">
									<BordesTablas25 />
								</Card>
							</div>
							<div className="divBody2">
								<Button className="buttonPrev float-left" onClick={this.previous}>
									<span style={{color: "white"}}>P<br /><br />r<br /><br />e<br /><br />v</span>
								</Button>
								<Button className="buttonNext float-right" onClick={this.next}>
									<span style={{color: "white"}}>N<br /><br />e<br /><br /><br />x<br /><br />t</span>
								</Button>
								<Card className="cardHtmlInside body__Capitulos_2">
									<ExpandiendoColumnas26 />
								</Card>
							</div>
							<div className="divBody2">
								<Button className="buttonPrev float-left" onClick={this.previous}>
									<span style={{color: "white"}}>P<br /><br />r<br /><br />e<br /><br />v</span>
								</Button>
								<Button className="buttonNext float-right" onClick={this.next}>
									<span style={{color: "white"}}>N<br /><br />e<br /><br /><br />x<br /><br />t</span>
								</Button>
								<Card className="cardHtmlInside body__Capitulos_2">
									<EnsanchandoFilas27 />
								</Card>
							</div>
							<div className="divBody2">
								<Button className="buttonPrev float-left" onClick={this.previous}>
									<span style={{color: "white"}}>P<br /><br />r<br /><br />e<br /><br />v</span>
								</Button>
								<Button className="buttonNext float-right" onClick={this.next}>
									<span style={{color: "white"}}>N<br /><br />e<br /><br /><br />x<br /><br />t</span>
								</Button>
								<Card className="cardHtmlInside body__Capitulos_2">
									<CuerpoTabla28 />
								</Card>
							</div>
							<div className="divBody2">
								<Button className="buttonPrev float-left" onClick={this.previous}>
									<span style={{color: "white"}}>P<br /><br />r<br /><br />e<br /><br />v</span>
								</Button>
								<Button className="buttonNext float-right" onClick={this.next}>
									<span style={{color: "white"}}>N<br /><br />e<br /><br /><br />x<br /><br />t</span>
								</Button>
								<Card className="cardHtmlInside body__Capitulos_2">
									<CabezaTabla29 />
								</Card>
							</div>
							<div className="divBody2">
								<Button className="buttonPrev float-left" onClick={this.previous}>
									<span style={{color: "white"}}>P<br /><br />r<br /><br />e<br /><br />v</span>
								</Button>
								<Button className="buttonNext float-right" onClick={this.next}>
									<span style={{color: "white"}}>N<br /><br />e<br /><br /><br />x<br /><br />t</span>
								</Button>
								<Card className="cardHtmlInside body__Capitulos_2">
									<FooterTabla30 />
								</Card>
							</div>
							<div className="divBody2">
								<Button className="buttonPrev float-left" onClick={this.previous}>
									<span style={{color: "white"}}>P<br /><br />r<br /><br />e<br /><br />v</span>
								</Button>
								<Button className="buttonNext float-right" onClick={this.next}>
									<span style={{color: "white"}}>N<br /><br />e<br /><br /><br />x<br /><br />t</span>
								</Button>
								<Card className="cardHtmlInside body__Capitulos_2">
									<IntroduccionFormularios31 />
								</Card>
							</div>
							<div className="divBody2">
								<Button className="buttonPrev float-left" onClick={this.previous}>
									<span style={{color: "white"}}>P<br /><br />r<br /><br />e<br /><br />v</span>
								</Button>
								<Button className="buttonNext float-right" onClick={this.next}>
									<span style={{color: "white"}}>N<br /><br />e<br /><br /><br />x<br /><br />t</span>
								</Button>
								<Card className="cardHtmlInside body__Capitulos_2">
									<EntradaTexto32 />
								</Card>
							</div>
							<div className="divBody2">
								<Button className="buttonPrev float-left" onClick={this.previous}>
									<span style={{color: "white"}}>P<br /><br />r<br /><br />e<br /><br />v</span>
								</Button>
								<Button className="buttonNext float-right" onClick={this.next}>
									<span style={{color: "white"}}>N<br /><br />e<br /><br /><br />x<br /><br />t</span>
								</Button>
								<Card className="cardHtmlInside body__Capitulos_2">
									<AgregarEtiqueta33 />
								</Card>
							</div>
							<div className="divBody2">
								<Button className="buttonPrev float-left" onClick={this.previous}>
									<span style={{color: "white"}}>P<br /><br />r<br /><br />e<br /><br />v</span>
								</Button>
								<Button className="buttonNext float-right" onClick={this.next}>
									<span style={{color: "white"}}>N<br /><br />e<br /><br /><br />x<br /><br />t</span>
								</Button>
								<Card className="cardHtmlInside body__Capitulos_2">
									<EntradaContrasena34 />
								</Card>
							</div>
							<div className="divBody2">
								<Button className="buttonPrev float-left" onClick={this.previous}>
									<span style={{color: "white"}}>P<br /><br />r<br /><br />e<br /><br />v</span>
								</Button>
								<Button className="buttonNext float-right" onClick={this.next}>
									<span style={{color: "white"}}>N<br /><br />e<br /><br /><br />x<br /><br />t</span>
								</Button>
								<Card className="cardHtmlInside body__Capitulos_2">
									<EntradaNumeros35 />
								</Card>
							</div>
							<div className="divBody2">
								<Button className="buttonPrev float-left" onClick={this.previous}>
									<span style={{color: "white"}}>P<br /><br />r<br /><br />e<br /><br />v</span>
								</Button>
								<Button className="buttonNext float-right" onClick={this.next}>
									<span style={{color: "white"}}>N<br /><br />e<br /><br /><br />x<br /><br />t</span>
								</Button>
								<Card className="cardHtmlInside body__Capitulos_2">
									<RangoEntrada36 />
								</Card>
							</div>
							<div className="divBody2">
								<Button className="buttonPrev float-left" onClick={this.previous}>
									<span style={{color: "white"}}>P<br /><br />r<br /><br />e<br /><br />v</span>
								</Button>
								<Button className="buttonNext float-right" onClick={this.next}>
									<span style={{color: "white"}}>N<br /><br />e<br /><br /><br />x<br /><br />t</span>
								</Button>
								<Card className="cardHtmlInside body__Capitulos_2">
									<EntradaVerificaion37 />
								</Card>
							</div>
							<div className="divBody2">
								<Button className="buttonPrev float-left" onClick={this.previous}>
									<span style={{color: "white"}}>P<br /><br />r<br /><br />e<br /><br />v</span>
								</Button>
								<Button className="buttonNext float-right" onClick={this.next}>
									<span style={{color: "white"}}>N<br /><br />e<br /><br /><br />x<br /><br />t</span>
								</Button>
								<Card className="cardHtmlInside body__Capitulos_2">
									<EntradaRadio38 />
								</Card>
							</div>
							<div className="divBody2">
								<Button className="buttonPrev float-left" onClick={this.previous}>
									<span style={{color: "white"}}>P<br /><br />r<br /><br />e<br /><br />v</span>
								</Button>
								<Button className="buttonNext float-right" onClick={this.next}>
									<span style={{color: "white"}}>N<br /><br />e<br /><br /><br />x<br /><br />t</span>
								</Button>
								<Card className="cardHtmlInside body__Capitulos_2">
									<ListaDesplegable39 />
								</Card>
							</div>
							<div className="divBody2">
								<Button className="buttonPrev float-left" onClick={this.previous}>
									<span style={{color: "white"}}>P<br /><br />r<br /><br />e<br /><br />v</span>
								</Button>
								<Button className="buttonNext float-right" onClick={this.next}>
									<span style={{color: "white"}}>N<br /><br />e<br /><br /><br />x<br /><br />t</span>
								</Button>
								<Card className="cardHtmlInside body__Capitulos_2">
									<EntradaDataList40 />
								</Card>
							</div>
							<div className="divBody2">
								<Button className="buttonPrev float-left" onClick={this.previous}>
									<span style={{color: "white"}}>P<br /><br />r<br /><br />e<br /><br />v</span>
								</Button>
								<Button className="buttonNext float-right" onClick={this.next}>
									<span style={{color: "white"}}>N<br /><br />e<br /><br /><br />x<br /><br />t</span>
								</Button>
								<Card className="cardHtmlInside body__Capitulos_2">
									<ElementoAreaTexto41 />
								</Card>
							</div>
							<div className="divBody2">
								<Button className="buttonPrev float-left" onClick={this.previous}>
									<span style={{color: "white"}}>P<br /><br />r<br /><br />e<br /><br />v</span>
								</Button>
								<Button className="buttonNext float-right" onClick={this.next}>
									<span style={{color: "white"}}>N<br /><br />e<br /><br /><br />x<br /><br />t</span>
								</Button>
								<Card className="cardHtmlInside body__Capitulos_2">
									<ValidacionFormularios42 />
								</Card>
							</div>
							<div className="divBody2">
								<Button className="buttonPrev float-left" onClick={this.previous}>
									<span style={{color: "white"}}>P<br /><br />r<br /><br />e<br /><br />v</span>
								</Button>
								<Button className="buttonNext float-right" onClick={this.next}>
									<span style={{color: "white"}}>N<br /><br />e<br /><br /><br />x<br /><br />t</span>
								</Button>
								<Card className="cardHtmlInside body__Capitulos_2">
									<RequerirEntrada43 />
								</Card>
							</div>
							<div className="divBody2">
								<Button className="buttonPrev float-left" onClick={this.previous}>
									<span style={{color: "white"}}>P<br /><br />r<br /><br />e<br /><br />v</span>
								</Button>
								<Button className="buttonNext float-right" onClick={this.next}>
									<span style={{color: "white"}}>N<br /><br />e<br /><br /><br />x<br /><br />t</span>
								</Button>
								<Card className="cardHtmlInside body__Capitulos_2">
									<EstablecerMinMax44 />
								</Card>
							</div>
							<div className="divBody2">
								<Button className="buttonPrev float-left" onClick={this.previous}>
									<span style={{color: "white"}}>P<br /><br />r<br /><br />e<br /><br />v</span>
								</Button>
								<Button className="buttonNext float-right" onClick={this.next}>
									<span style={{color: "white"}}>N<br /><br />e<br /><br /><br />x<br /><br />t</span>
								</Button>
								<Card className="cardHtmlInside body__Capitulos_2">
									<LongitudTexto45 />
								</Card>
							</div>
							<div className="divBody2">
								<Button className="buttonPrev float-left" onClick={this.previous}>
									<span style={{color: "white"}}>P<br /><br />r<br /><br />e<br /><br />v</span>
								</Button>
								<Button className="buttonNext float-right" onClick={this.next}>
									<span style={{color: "white"}}>N<br /><br />e<br /><br /><br />x<br /><br />t</span>
								</Button>
								<Card className="cardHtmlInside body__Capitulos_2">
									<CoincidirPatron46 />
								</Card>
							</div>
							<div className="divBody2">
								<Button className="buttonPrev float-left" onClick={this.previous}>
									<span style={{color: "white"}}>P<br /><br />r<br /><br />e<br /><br />v</span>
								</Button>
								<Button className="buttonNext float-right" onClick={this.next}>
									<span style={{color: "white"}}>N<br /><br />e<br /><br /><br />x<br /><br />t</span>
								</Button>
								<Card className="cardHtmlInside body__Capitulos_2">
									<SemanticoHtml47 />
								</Card>
							</div>
							<div className="divBody2">
								<Button className="buttonPrev float-left" onClick={this.previous}>
									<span style={{color: "white"}}>P<br /><br />r<br /><br />e<br /><br />v</span>
								</Button>
								<Button className="buttonNext float-right" onClick={this.next}>
									<span style={{color: "white"}}>N<br /><br />e<br /><br /><br />x<br /><br />t</span>
								</Button>
								<Card className="cardHtmlInside body__Capitulos_2">
									<MainYPiePagina48 />
								</Card>
							</div>
							<div className="divBody2">
								<Button className="buttonPrev float-left" onClick={this.previous}>
									<span style={{color: "white"}}>P<br /><br />r<br /><br />e<br /><br />v</span>
								</Button>
								<Button className="buttonNext float-right" onClick={this.next}>
									<span style={{color: "white"}}>N<br /><br />e<br /><br /><br />x<br /><br />t</span>
								</Button>
								<Card className="cardHtmlInside body__Capitulos_2">
									<ArticuloYSeccion49 />
								</Card>
							</div>
							<div className="divBody2">
								<Button className="buttonPrev float-left" onClick={this.previous}>
									<span style={{color: "white"}}>P<br /><br />r<br /><br />e<br /><br />v</span>
								</Button>
								<Button className="buttonNext float-right" onClick={this.next}>
									<span style={{color: "white"}}>N<br /><br />e<br /><br /><br />x<br /><br />t</span>
								</Button>
								<Card className="cardHtmlInside body__Capitulos_2">
									<Aside50 />
								</Card>
							</div>
							<div className="divBody2">
								<Button className="buttonPrev float-left" onClick={this.previous}>
									<span style={{color: "white"}}>P<br /><br />r<br /><br />e<br /><br />v</span>
								</Button>
								<Button className="buttonNext float-right" onClick={this.next}>
									<span style={{color: "white"}}>N<br /><br />e<br /><br /><br />x<br /><br />t</span>
								</Button>
								<Card className="cardHtmlInside body__Capitulos_2">
									<FigureFigcaption51 />
								</Card>
							</div>
					</Slider>
					<div style={{ textAlign: 'center', marginTop: '25px' }}>
						<Button className="buttonCapitulos" onClick={this.previous}>
							Previous
						</Button>
						<Button className="buttonCapitulos" onClick={this.next}>
							Next
						</Button>
					</div>
				</div>
				<div className="homeFeatures">
					<HomeFeatures />
				</div>
			</Fragment>
		);
	}
}
