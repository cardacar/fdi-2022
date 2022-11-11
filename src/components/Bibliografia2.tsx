import React from 'react';

const bibligraphy = [
	{
		text: 'Bezobrazov, Sergei & Sachenko, Anatoly & Komar,Myroslav & Rubanau,Vladimir. The methods of artificial intelligence for malicious applications detection in Android OS. [En línea]. 2017. Disponible en',
		link: 'http://www.computingonline.net/computing/article/view/851'
	},

	{
		text: 'Muñoz, Alfonso & Escribano, Jose. Criptografía adversaria usando deep learning limitaciones y oportunidades. [En línea]. Madrid. 2015. Disponible en',
		link: 'https://docplayer.es/97438695-Criptografia-adversaria-usando-deep-learning-limitaciones-y-oportunidades.html'
	},

	{
		text: 'Rojas, Jaime. Sistema de autenticación de individuos mediante señales de voz usando métodos de inteligencia artificial (VoID), Universidad de los Andes [En línea]. 2005. Disponible en',
		link: 'https://repositorio.uniandes.edu.co/handle/1992/22019'
	},

	{
		text: 'Almaza, Andrés. XXII Encuesta Nacional de Seguridad Informática, Aprendiendo del futuro de la ciberseguridad. Asociación Colombiana de Ingenieros de Sistemas. [En línea]. 2022. Disponible en:',
		link: 'https://sistemas.acis.org.co/index.php/sistemas/article/view/186/146'
	},

	{
		text: 'Kerravala, Zeus. Machine Learning Powers the Next Wave of BUSINESS-CRITICAL SERVICES. 2018. [En línea] Disponible en:',
		link: 'https://www.cisco.com/c/dam/en/us/services/collateral/se/business-critical-services-zk-machine-learning.pdf'
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
