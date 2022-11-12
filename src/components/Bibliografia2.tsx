import React from 'react';

const bibligraphy = [
	{
		text: 'Bezobrazov, Sergei & Sachenko, Anatoly & Komar,Myroslav & Rubanau,Vladimir. The methods of artificial intelligence for malicious applications detection in Android OS. [En línea]. 2017. Disponible en ',
		link: 'http://www.computingonline.net/computing/article/view/851'
	},

	{
		text: 'Muñoz, Alfonso & Escribano, Jose. Criptografía adversaria usando deep learning limitaciones y oportunidades. [En línea]. Madrid. 2015. Disponible en ',
		link: 'https://docplayer.es/97438695-Criptografia-adversaria-usando-deep-learning-limitaciones-y-oportunidades.html'
	},

	{
		text: 'Rojas, Jaime. Sistema de autenticación de individuos mediante señales de voz usando métodos de inteligencia artificial (VoID), Universidad de los Andes [En línea]. 2005. Disponible en ',
		link: 'https://repositorio.uniandes.edu.co/handle/1992/22019'
	},

	{
		text: 'Almaza, Andrés. XXII Encuesta Nacional de Seguridad Informática, Aprendiendo del futuro de la ciberseguridad. Asociación Colombiana de Ingenieros de Sistemas. [En línea]. 2022. Disponible en: ',
		link: 'https://sistemas.acis.org.co/index.php/sistemas/article/view/186/146'
	},

	{
		text: 'Kerravala, Zeus. Machine Learning Powers the Next Wave of BUSINESS-CRITICAL SERVICES. 2018. [En línea] Disponible en: ',
		link: 'https://www.cisco.com/c/dam/en/us/services/collateral/se/business-critical-services-zk-machine-learning.pdf'
	},
  {
    text:'Inteligencia artificial y poder   ',
    link:'https://www.realinstitutoelcano.org/analisis/inteligencia-artificial-y-poder '
  },
  {
    text:'El SOC “Autónomo”: Inteligencia Artificial para la nueva ciberseguridad ',
    link:'https://revista.uclm.es/index.php/ruiderae/article/view/3088'
  },
  {
    text:'Retos para la regulación jurídica de la Inteligencia Artificial en el ámbito de la Ciberseguridad ',
    link:'https://www.scielo.org.mx/scielo.php?script=sci_arttext&pid=S1870-21472021000200009'
  },
  {
    text:'Ataques de denegación de servicio: estudio y aplicación de técnicas de Machine Learning aplicadas a la Ciberseguridad para su detección y análisis ',
    link:'https://oa.upm.es/68267/'
  },
  {
    text:'ESTADO ACTUAL DE LA CIBERSEGURIDAD APLICADA A SISTEMAS DEFENSIVOS Y OFENSIVOS A PARTIR DE INTELIGENCIA ARTIFICIAL ',
    link:'https://repository.unad.edu.co/bitstream/handle/10596/34627/lecasallasr.pdf?sequence=1&isAllowed=y'
  },
  {
    text:'Prospectiva de ciberseguridad nacional para  Colombia a 2030 ',
    link:'https://revistacientificaesmic.com/index.php/esmic/article/view/866/836'
  },
  {
    text:'Inteligencia artificial y computación avanzada ',
    link:'https://cdv.dei.uc.pt/wp-content/uploads/2014/03/ms07.pdf'
  }
];

const Bibliografia2 = () => {
	return (
		<div className={`py-12 bg-background`} id='bibliografia'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='lg:text-center'>
					<p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
						Bibliografía
					</p>
				</div>
				<div className='p-16'>
					{bibligraphy.map((item, index) => (
						<div className='flex flex-col gap-4' key={index}>
							<p className='text-gray-600 mb-8 text-justify'>
								{item.text}
								<a href={item.link} target='_blank'>
									{item.link}
								</a>
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Bibliografia2;
