import React from 'react';
import Instrumentos from './Instrumentos';
import Procedimiento from './Procedimiento';
import Tecnicas from './Tecnicas';

const Metodologia = () => {
	return (
		<div className={`py-12 bg-background`} id='problema'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 '>
				<div className={`w-full p-6 mt-20 text-center`}>
					<div className='lg:text-center'>
						<h1 className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl pb-16'>
							Metodología
						</h1>
					</div>
					<div className={`align-middle flex items-center gap-20`}>
						<p className={`text-gray-600 mb-8 text-justify flex-grow`}>
							El <b>diseño de nuestra investigación</b> fue de caracter
							cuantitativo y no experimental, por lo tanto basamos toda la
							metodología en un acercamiento exploratorio hacia las diferentes
							inteligencias artificiales aplicadas al campo de la ciberseguridad
							que ya se encuentran en el mercado y las métricas y resultados que
							se generan.
						</p>{' '}
						<div className='flex-grow-0 flex-shrink-0 w-52'>
							<img src='/assets/images/investigation.png' />
						</div>
					</div>
				</div>{' '}
			</div>
			<Tecnicas />
			<Instrumentos />
			<Procedimiento />
		</div>
	);
};

export default Metodologia;
