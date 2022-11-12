const Keywords = () => {
	return (
		<div className={` bg-background`} id='problema'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex'>
				<div className={`w-full p-6 text-center`}>
					<div className='lg:text-center'>
						<p className='text-lg text-gray-800 font-bold pb-10'>
							Keywords:
						</p>
					</div>
					<div className={`align-middle flex items-center gap-20`}>
						<div className='flex-grow-0 flex-shrink-0 w-36'>
							<img src='/assets/images/key.png' />
						</div>
						<p className={`text-gray-600 mb-8 text-justify flex-grow`}>
            Machine Learning, Cybersecurity, Ethical Hacker, Artificial Intelligence,
            Computer Security, Information Security.
						</p>{' '}
					</div>
				</div>{' '}
			</div>
		</div>
	);
};

export default Keywords;