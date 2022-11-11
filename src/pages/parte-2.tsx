import React from 'react';

import About from '../components/About';
import Canvas from '../components/Canvas';
import Header from '../components/Header';
import LazyShow from '../components/LazyShow';
import MainHero from '../components/MainHero';
import MainHeroImage from '../components/MainHeroImage';
import Metodologia from '../components/Metodologia';
import Bibliografia2 from '../components/Bibliografia2';
import Resultados from '../components/Resultados';
import Analisis from '../components/Analisis';

const App = () => {
	return (
		<div className={`bg-background grid gap-y-16 overflow-hidden`}>
			<LazyShow>
				<>
					<Metodologia />
				</>
			</LazyShow>
			<Canvas />
			<LazyShow>
				<>
					<Resultados />
				</>
			</LazyShow>
			<Canvas />
			<LazyShow>
				<>
					<Analisis />
				</>
			</LazyShow>
			<Canvas />

			<LazyShow>
				<>
					<Bibliografia2 />
				</>
			</LazyShow>

			<LazyShow>
				<>
					<About />
				</>
			</LazyShow>
		</div>
	);
};

export default App;
