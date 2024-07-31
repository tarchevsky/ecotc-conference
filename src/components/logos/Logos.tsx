import Image from 'next/image'

const Logos = () => {
	return (
		<>
			<h4 className='text-3xl mb-5'>Партнеры</h4>
			<div className='grid grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-14 items-center mb-10 md:mb-16'>
				<Image
					src='/logos/gubkina.png'
					alt='logo'
					width={200}
					height={200}
					className='object-contain justify-self-center'
				/>
				<Image
					src='/logos/uop.png'
					alt='logo'
					width={200}
					height={200}
					className='object-contain justify-self-center'
				/>
				<Image
					src='/logos/platts.webp'
					alt='logo'
					width={200}
					height={200}
					className='object-contain justify-self-center'
				/>
				<Image
					src='/logos/refco.webp'
					alt='logo'
					width={200}
					height={200}
					className='object-contain justify-self-center'
				/>
				<Image
					src='/logos/argus.png'
					alt='logo'
					width={200}
					height={200}
					className='object-contain justify-self-center'
				/>
				<Image
					src='/logos/sng.jpg'
					alt='logo'
					width={200}
					height={200}
					className='object-contain justify-self-center'
				/>
				<Image
					src='/logos/ifp.jpg'
					alt='logo'
					width={200}
					height={200}
					className='object-contain justify-self-center'
				/>
				<Image
					src='/logos/gazprom.png'
					alt='logo'
					width={200}
					height={200}
					className='object-contain justify-self-center'
				/>
			</div>
			<h4 className='text-3xl mb-5'>Основные участники</h4>
			<div className='grid grid-cols-3 gap-14 items-center justify-center mb-10 md:mb-16'>
				<Image
					src='/logos/lukoil.jpg'
					alt='logo'
					width={80}
					height={80}
					className='object-contain justify-self-center'
				/>
				<Image
					src='/logos/socar.jpg'
					alt='logo'
					width={80}
					height={80}
					className='object-contain justify-self-center'
				/>
				<Image
					src='/logos/kaz.jpg'
					alt='logo'
					width={80}
					height={80}
					className='object-contain justify-self-center'
				/>
			</div>
			<h4 className='text-3xl mb-5'>Информационные спонсоры</h4>
			<div className='grid grid-cols-2 gap-14 items-center justify-center mb-10 md:mb-16'>
				<Image
					src='/logos/oilspace.png'
					alt='logo'
					width={150}
					height={150}
					className='object-contain justify-self-center'
				/>
				<Image
					src='/logos/interfax.jpg'
					alt='logo'
					width={150}
					height={150}
					className='object-contain justify-self-center'
				/>
			</div>
		</>
	)
}

export default Logos
