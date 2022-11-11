import React from 'react';
import Instrumentos from './Instrumentos';
import Keywords from './Keywords';
import Procedimiento from './Procedimiento';
import Tecnicas from './Tecnicas';

const Abstract = () => {
	return (
		<div className={`py-12 bg-background`} id='problema'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 '>
				<div className={`w-full p-6 mt-20 text-center`}>
					<div className='lg:text-center'>
						<h1 className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl pb-16'>
							Abstract
						</h1>
					</div>
					<div className={`align-middle flex items-center gap-20`}>
						<p className={`text-gray-600 mb-8 text-justify flex-grow`}>
            In this research project an approach is made on artificial intelligence, its main concepts
             and how AI acts on the systems based on this technology, this is done based on the documentation
            that is collected through external sources and public information repositories. It also explains
            its interaction with computer security and how the concepts of artificial intelligence are
            applied in the development of applications in the field of cybersecurity, emphasizing the
            progress of defensive and offensive systems that are used to protect or violate the 
            information of Colombian companies.
						</p>{' '}
					</div>
				</div>{' '}
			</div>
			<Keywords />
		</div>
	);
};

export default Abstract;