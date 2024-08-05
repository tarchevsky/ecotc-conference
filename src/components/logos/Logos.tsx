import Image from 'next/image'

const Logos = () => {
	return (
		<>
			<h4 className='font-semibold text-2xl mb-5'>
				<span
					className='font-bold text-[#229624]'
					style={{
						fontFamily: 'Times New Roman',
						fontWeight: '700',
						letterSpacing: '0.7px'
					}}
				>
					Eco Technics Consulting LLC
				</span>
				&nbsp;проводили конференции в партнерстве с:
			</h4>
			<div className='grid grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 gap-14 items-center mb-10 md:mb-16'>
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
				<Image
					src='/logos/lukoil.jpg'
					alt='logo'
					width={30}
					height={30}
					className='object-contain justify-self-center md:w-[80px] xl:w-[100px]'
				/>
				<Image
					src='/logos/socar.jpg'
					alt='Socar'
					width={40}
					height={40}
					className='object-contain justify-self-center md:w-[80px] xl:w-[100px]'
				/>
				<Image
					src='/logos/kaz.jpg'
					alt='КазМунайГаз'
					width={50}
					height={50}
					className='object-contain justify-self-center md:w-[100px] xl:w-[130px]'
				/>
				<Image
					src='/logos/pwc.png'
					alt='Price water house Coopers'
					width={80}
					height={80}
					className='object-contain justify-self-center md:w-[200px] xl:w-[250px]'
				/>
			</div>
			<h4 className='font-semibold text-2xl mb-5'>Информационные спонсоры</h4>
			<div className='grid grid-cols-4 gap-14 items-center justify-center mb-10 md:mb-16'>
				<Image
					src='/logos/oilspace.png'
					alt='Oil space'
					width={80}
					height={80}
					className='object-contain justify-self-center md:w-[150px] xl:w-[180px]'
				/>
				<Image
					src='/logos/interfax.png'
					alt='Интерфакс Ани'
					width={80}
					height={80}
					className='object-contain justify-self-center md:w-[150px] xl:w-[180px]'
				/>
				<Image
					src='/logos/vertical.png'
					alt='Нефте газовая вертикаль'
					width={80}
					height={80}
					className='object-contain justify-self-center md:w-[50px] xl:w-[70px]'
				/>
				<Image
					src='/logos/riatek.png'
					alt='Риатек'
					width={80}
					height={80}
					className='object-contain justify-self-center md:w-[80px] xl:w-[100px]'
				/>
				<Image
					src='/logos/rus-neft.png'
					alt='Нефть России'
					width={80}
					height={80}
					className='object-contain justify-self-center md:w-[80px] xl:w-[100px]'
				/>
				<Image
					src='/logos/capital.png'
					alt='Нефть капитал'
					width={80}
					height={80}
					className='object-contain justify-self-center md:w-[80px] xl:w-[120px]'
				/>
				<Image
					src='/logos/oilandgazjournal.png'
					alt='Oil and gaz journal'
					width={80}
					height={80}
					className='object-contain justify-self-center md:w-[80px] xl:w-[100px]'
				/>
				<Image
					src='/logos/integration.png'
					alt='Интеграция'
					width={80}
					height={80}
					className='object-contain justify-self-center md:w-[800px] xl:w-[120px]'
				/>
			</div>
		</>
	)
}

export default Logos
