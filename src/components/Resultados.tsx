import React from 'react';
import { GiBrain } from 'react-icons/gi';
import { MdSupportAgent } from 'react-icons/md';
import { FaShieldVirus } from 'react-icons/fa';
import { AiFillAndroid, AiFillLock } from 'react-icons/ai';
import { MdRecordVoiceOver } from 'react-icons/md';
import { RiSpam2Fill } from 'react-icons/ri';
import Divider from './Divider';

const Resultados = () => {
	return (
		<div className={`py-12 bg-background`} id='problema'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 '>
				<div className={`w-full p-6 mt-20 text-center`}>
					<div className='lg:text-center'>
						<h1 className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl pb-16'>
							Resultados
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
					<div className='lg:text-center'>
						<p className='text-lg text-gray-800 font-bold pb-10'>
							Elementos importantes encontrados:
						</p>
					</div>
					<div className={`align-middle flex gap-16 justify-center flex-wrap`}>
						<div>
							<h3 className='text-lg text-gray-800 font-bold leading-none mb-3 flex gap-2 justify-center items-center'>
								<GiBrain className='text-4xl' />
								Redes Neuronales Artificiales
							</h3>
							<p className={`text-gray-600 mb-8 text-justify max-w-xs`}>
								Las redes neuronales artificiales simulan el comportamiento de
								un sistema nervioso de orden biológico y trabajan bajo esa
								estructura de correlación buscando trabajar bajo estructuras
								relativamente simples que facilitan predicción de ataques,
								clasificación en entornos cambiantes y complejos en un perímetro
								de seguridad.
							</p>
						</div>
						<div>
							<h3 className='text-lg text-gray-800 font-bold leading-none mb-3 flex gap-2 justify-center items-center'>
								<MdSupportAgent className='text-4xl' />
								Agentes inteligentes
							</h3>
							<p className={`text-gray-600 mb-8 text-justify max-w-xs`}>
								Cada agente funciona de manera autónoma y se comunica con los
								demás agentes compartiendo datos, los agentes trabajan
								cooperando entre sí para llegar a la respuesta más adecuada para
								resolver la situación a resolver que para el caso de
								ciberseguridad es un ataque.
							</p>
						</div>
						<div>
							<h3 className='text-lg text-gray-800 font-bold leading-none mb-3 flex gap-2 justify-center items-center'>
								<FaShieldVirus className='text-4xl' />
								Sistemas inmunes artificiales
							</h3>
							<p className={`text-gray-600 mb-8 text-justify max-w-xs`}>
								Este sistema trabaja como un sistema inmune de un ser vivo
								reaccionando ante agentes patógenos externos, estos generan
								anticuerpos que tienen parámetros propios y que reaccionan según
								el tipo de ataque recibido generando la cantidad de anticuerpos
								para contrarrestar la infección.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className={` bg-background`} id='problema'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex'>
					<div className={`w-full p-6 text-center`}>
						<div className='lg:text-center'>
							<p className='text-lg text-gray-800 font-bold pb-10'>
								A continuación, se citan múltiples trabajos previos donde se
								aborda la problemática de la ciberseguridad y se presentan
								soluciones a través de la inteligencia artificial.
							</p>
						</div>
						<div className={`align-middle flex items-center gap-20`}>
							<p className={`text-gray-600 mb-8 text-justify flex-grow`}>
								<ul className='flex flex-col gap-10 '>
									<li>
										<div className='flex gap-5 items-center justify-center'>
											<AiFillLock size='50px' className='' />
											<b>
												Técnicas Deep Learning para el desarrollo de métodos
												criptográficos
											</b>
										</div>
										<Divider />
										En este caso se valida la utilización de Deep Learning para
										el uso de criptografía adversaria que se basa en variación
										del contenido incluyendo datos adicionales ocultos, se
										utiliza una arquitectura llamada GAN (Generative Adversarial
										Network) que consiste en dos redes neuronales que se
										encuentran compitiendo por llegar al objetivo. Para este
										caso la competencia es entre un generador de ruido en la
										imagen que busca engañar y un detector de las imágenes
										erradas, finalizando la competencia al estabilizar el
										sistema por medio de un punto de equilibrio.
									</li>
									<li>
										<div className='flex gap-5 items-center justify-center'>
											<MdRecordVoiceOver size='50px' className='' />
											<b>
												Identificación de individuos mediante señales de voz
											</b>
										</div>
										<Divider />
										Se realiza la utilización de biometría por medio de un
										método basado en comportamiento para la detección de las
										señales de voz y comparación entre los dos patrones el
										almacenado y con el que se compara al realizar la entrada al
										sistema. Se utilizan dos sistemas uno de reconocimiento y
										otro de generación de voz que aprenden simultáneamente
										correlacionando las dos señales la original y copia
										desfasada. Con este trabajo se encontró la viabilidad de
										realizar la autenticación por medio de patrones de voz como
										elemento para autenticación biométrica.
									</li>
									<li className=''>
										<div className='flex gap-5 items-center justify-center'>
											<AiFillAndroid size='50px' className='' />
											<b>Detección de aplicaciones maliciosas en Android</b>
										</div>
										<Divider /> En esta investigación se buscó poder detectar
										malware en dispositivos Android. Se basa en la aplicación de
										la teoría de sistema inmune artificial y redes neuronales
										generando un programa que actúa como un antivirus. El método
										utilizado de inteligencia artificial es Aprendizaje profundo
										(Deep Learning). Se obtuvo como resultado identificación de
										los datos anómalos se debe tener en cuenta que debido al
										alcance del proyecto no se realizó la clasificación de los
										tipos de ataques.
									</li>
									<li>
										<div className='flex gap-5 items-center justify-center'>
											<RiSpam2Fill size='50px' className='' />
											<b>Detección de Spam</b>
										</div>
										<Divider />
										Se realizó un análisis por medio de técnicas de inteligencia
										artificial para la detección de spam obteniendo resultados
										con bajas tasas de falsos positivos y falsos negativos por
										encima de otras plataformas con esquemas tradicionales.
									</li>
								</ul>
							</p>
						</div>
					</div>
				</div>
			</div>
			<div>
				<div className={`w-full p-6 text-center`}>
					<div className='lg:text-center'>
						<p className='text-lg text-gray-800 font-bold pb-10'>
							Panorama actual en cifras
						</p>
					</div>
					<div className={`align-middle flex gap-16 justify-center flex-wrap`}>
						<p className='text-gray-600 mb-8 text-justify flex-grow'>
							A continuación, se muestran algunos datos con la finalidad de
							poder mostrar el estado actual de la ciberseguridad y dar un
							contexto sobre los posibles avances que se pueden tener en este
							campo con la implementación de la IA en la búsqueda de
							vulnerabilidades Los siguientes gráficos fueron tomados de “XXII
							Encuesta Nacional de Seguridad Informática” ,la cual fue soportada
							por la Asociación Colombiana de Ingenieros de Sistemas (ACIS) y
							realizada a través de Internet, entre los meses de marzo y mayo de
							2022, que contó con la participación de 206 encuestados.
						</p>
						<img src='/assets/images/encuesta.png' />
						<p className='text-gray-600 mb-8 text-justify flex-grow'>
							Pero al involucrar técnicas de inteligencia artificial tales como
							el aprendizaje automático se puede optimizar ostensiblemente este
							tipo de resolución. Cisco le ha apostado a la visibilidad de los
							componentes de red buscando mejorar analítica avanzada y
							automatización de los servicios optimizando en muchos campos
							reduciendo los costos por pérdidas en ciberataques. En el estudio
							de IBM(IBM, 2022), se resalta que las empresas están tendiendo a
							usar herramientas de automatización para la seguridad, tales como
							herramientas de inteligencia artificial y máquinas de aprendizaje,
							movimiento que también se ve como tendencia en Colombia. El
							incremento en soluciones de seguridad orientadas a la red como
							IDS/IPS, Firewall de nueva generación, soluciones de Data Loss
							Prevention(DLP),están entre los principales rubros de inversión.
							En relación con la protección de estaciones de trabajo el mismo
							informe resalta que las soluciones anti malware, cifrado de
							discos, antivirus avanzados basados en inteligencia artificial
							también están considerados. Distribución de las herramientas de
							seguridad usadas en los sectores de industria.
						</p>
						<img src='/assets/images/cifras.png' />
						<p className='text-gray-600 mb-8 text-justify flex-grow'>
							Adicional se hace énfasis en que se debe tener en cuenta que se
							considera que el atacante siempre ha tenido la ventaja teniendo en
							cuenta el paradigma de la seguridad informática tradicional y como
							se despliega en donde se cubren siempre los mismos vectores de
							ataque.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Resultados;
