import React from 'react';

const Analisis = () => {
	return (
		<div className={`py-12 bg-background`} id='problema'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 '>
				<div className={`w-full p-6 mt-20 text-center`}>
					<div className='lg:text-center'>
						<h1 className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl pb-16'>
							Analisis de los resultados
						</h1>
					</div>
					<div className={`align-middle flex items-center`}>
						<p className={`text-gray-600 mb-8 flex-grow text-center`}>
							En esta sección daremos a conocer los principales hallazgos de
							nuestro proceso investigativo
						</p>{' '}
					</div>
				</div>{' '}
			</div>
			<div>
				<div className={`w-full p-6 text-center`}>
					<div className='w-full p-6 text-center'>
						<p className='text-lg text-gray-800 font-bold pb-10'>Discusión</p>
						<p className={`text-gray-600 mb-8 text-justify flex-grow`}>
							Teniendo en cuenta la información que se relaciona en los puntos
							anteriores se tiene como resultado de la investigación realizada
							en fuentes documentales una contextualización sobre el
							funcionamiento de los métodos que utilizan inteligencia artificial
							tales como: “aprendizaje automático, redes neuronales, aprendizaje
							profundo, algoritmos genéticos, etc” por medio de los cuales se
							puede imitar comportamientos similares a los de un ser humano.
							Pero, basado en los estudios referenciados se puede deducir que a
							diferencia de la búsqueda de una inteligencia global en donde se
							busca crear a un ser independiente, se están buscando potenciar
							características propias de los seres humanos relacionándose con el
							entorno y tomando decisiones para poder interactuar reaccionando
							según el entrenamiento que haya recibido el sistema. Esto nos
							lleva a que en un escenario cercano no presente la posibilidad de
							que se reemplace al ser humano en su totalidad y que solo se
							potencialice las labores para las cuales los sistemas han sido
							entrenados, cumpliendo con tareas específicas.
						</p>
					</div>
				</div>
			</div>
			<div className={` bg-background`} id='problema'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex'>
					<div className={`w-full p-6 text-center`}>
						<div className='lg:text-center'>
							<p className='text-lg text-gray-800 font-bold pb-10'>
								Conclusiones
							</p>
						</div>
						<p className='text-gray-600 mb-8 text-justify flex-grow'>
							Las organizaciones pueden tomar medidas para poder contrarrestar
							este tipo de ataques por medio de técnicas de inteligencia
							artificial, utilizando un enfoque diferente y que permita un
							sistema inmunitario adaptativo que como en un cuerpo humano
							trabaje de forma autónoma para combatir la infección mientras
							envía la información a un sistema centralizado para que tome
							acciones más efectivas en la contención basado en grandes
							capacidades de procesamiento de datos que evalúan gran cantidad de
							información comportándose como una red neuronal con inteligencia
							distribuida. Otro punto a tener en cuenta es el aprendizaje que se
							puede tener por medio de técnicas de aprendizaje automático en
							combinación con análisis estadístico para poder predecir ataques,
							descifrar patrones y predecir el comportamiento incluso para
							detectar la fuente del ataque para evitar próximos ataques e
							incluso el atacante en sí. Para finalizar en el caso de
							ciberseguridad en Colombia es importante tener en cuenta que
							mecanismos son utilizados para poder brindar seguridad a los
							activos de información de una empresa. Siendo un punto de
							discusión donde se plantea la eficacia de los métodos que utiliza
							inteligencia artificial para labores de ciberseguridad en las
							empresas colombianas sobre los métodos tradicionales de
							ciberseguridad, esto nos permite validar que realmente en los
							puntos en los que se puede tener ventajas son los puntos en los
							que se puede entrenar un sistema para tomar acciones ante
							escenarios apoyándose en grandes capacidades de cómputo y en el
							aumento de estas día a día.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Analisis;
