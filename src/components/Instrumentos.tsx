import React from 'react';

const Instrumentos = () => {
	return (
		<div className={` bg-background`} id='problema'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex'>
				<div className={`w-full p-6 text-center`}>
					<div className='lg:text-center'>
						<p className='text-lg text-gray-800 font-bold pb-10'>
							Instrumentos de investigación:
						</p>
					</div>
					<div className={`align-middle flex items-center gap-20`}>
						<div className='flex-grow-0 flex-shrink-0 w-36'>
							<img src='/assets/images/tools.jpeg' />
						</div>
						<p className={`text-gray-600 mb-8 text-justify flex-grow`}>
							Los instrumentos usados para la recolección de información fueron
							las inteligencias artificiales que ya se encuentran en el mercado,
							ya que mediante estas IA pudimos recopilar la información
							necesaria para resolver nuestro problema.
						</p>{' '}
					</div>
				</div>{' '}
			</div>
		</div>
	);
};

export default Instrumentos;
