import React from 'react';
import { FaPoll } from 'react-icons/fa';
import { AiOutlineMonitor } from 'react-icons/ai';
import { BiTestTube } from 'react-icons/bi';

export default function Tecnicas() {
	return (
		<div>
			<div className={`w-full p-6 text-center`}>
				<div className='lg:text-center'>
					<p className='text-lg text-gray-800 font-bold pb-10'>
						Técnicas usadas:
					</p>
				</div>
				<div className={`align-middle flex gap-16 justify-center flex-wrap`}>
					<div>
						<h3 className='text-lg text-gray-800 font-bold leading-none mb-3 flex gap-2 justify-center items-center'>
							<AiOutlineMonitor className='text-4xl' />
							Monitoreo
						</h3>
						<p className={`text-gray-600 mb-8 text-justify max-w-xs`}>
							Con esta técnica pudimos recopilar la información de una
							inteligencia artificial que ya se encuentra en uso a nivel
							empresarial la cual nos ayuda a obtener un panorama más amplio de
							la información que se puede obtener cuando se hace uso de dichas
							herramientas
						</p>
					</div>
					<div>
						<h3 className='text-lg text-gray-800 font-bold leading-none mb-3 flex gap-2 justify-center items-center'>
							<BiTestTube className='text-4xl' />
							Test
						</h3>
						<p className={`text-gray-600 mb-8 text-justify max-w-xs`}>
							Con está técnica pudimos vislumbrar el testeo de algunas IA en el
							ámbito de la ciberseguridad realizados por diferentes entes y los
							resultados obtenidos.
						</p>
					</div>
					<div>
						<h3 className='text-lg text-gray-800 font-bold leading-none mb-3 flex gap-2 justify-center items-center'>
							<FaPoll className='text-4xl' />
							Encuestas
						</h3>
						<p className={`text-gray-600 mb-8 text-justify max-w-xs`}>
							Tomamos los datos de encuestas realizadas en el panorama nacional
							en la actualidad (2022) con respecto a la ciberseguridad y la
							influencia de las inteligencias artificiales en la misma
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
