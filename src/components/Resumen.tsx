import React from 'react';
import PalabrasClave from './PalabrasClave';


const Resumen = () => {
	return (
		<div className={`py-12 bg-background`} id='problema'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 '>
				<div className={`w-full p-6 mt-20 text-center`}>
					<div className='lg:text-center'>
						<h1 className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl pb-16'>
							Resumen
						</h1>
					</div>
					<div className={`align-middle flex items-center gap-20`}>
						<p className={`text-gray-600 mb-8 text-justify flex-grow`}>
            En este proyecto investigativo se realiza un acercamiento sobre la inteligencia artificial,
            sus principales conceptos y cómo actúa la IA sobre los sistemas que se basan en esta tecnología,
            esto se realiza basándonos en la documentación que se recopila a través de fuentes externas y
            los repositorios de información públicos. Se explica también su interacción con la seguridad
            informática y como los conceptos propios de la inteligencia artificial son aplicados en el
            desarrollo de aplicaciones en la rama de la ciberseguridad haciendo énfasis en los avances
            de los sistemas defensivos y ofensivos que son utilizados para proteger o vulnerar la
            información de las empresas Colombianas.
						</p>{' '}
					</div>
				</div>{' '}
			</div>
			<PalabrasClave />
		</div>
	);
};

export default Resumen;