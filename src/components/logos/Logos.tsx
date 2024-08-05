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
			<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-8 items-center mb-10 md:mb-16'>
				<Image
					src='/logos/gubkina.png'
					alt='logo'
					width={100}
					height={100}
					className='object-contain justify-self-center'
				/>
				<Image
					src='/logos/uop.png'
					alt='logo'
					width={100}
					height={100}
					className='object-contain justify-self-center'
				/>
				<Image
					src='/logos/platts.webp'
					alt='logo'
					width={100}
					height={100}
					className='object-contain justify-self-center'
				/>
				<Image
					src='/logos/argus.png'
					alt='logo'
					width={120}
					height={120}
					className='object-contain justify-self-center'
				/>
				<Image
					src='/logos/sng.jpg'
					alt='logo'
					width={100}
					height={100}
					className='object-contain justify-self-center'
				/>
				<Image
					src='/logos/ifp.jpg'
					alt='logo'
					width={100}
					height={100}
					className='object-contain justify-self-center'
				/>
				<Image
					src='/logos/gazprom.png'
					alt='logo'
					width={120}
					height={120}
					className='object-contain justify-self-center'
				/>
				<Image
					src='/logos/lukoil.jpg'
					alt='logo'
					width={80}
					height={80}
					className='object-contain justify-self-center'
				/>
				<Image
					src='/logos/socar.jpg'
					alt='Socar'
					width={80}
					height={80}
					className='object-contain justify-self-center'
				/>
				<Image
					src='/logos/kaz.jpg'
					alt='КазМунайГаз'
					width={100}
					height={100}
					className='object-contain justify-self-center'
				/>
				<Image
					src='/logos/pwc.png'
					alt='Price water house Coopers'
					width={80}
					height={80}
					className='object-contain justify-self-center w-[200px] md:w-[200px]'
				/>
				<Image
					src='/logos/sap.png'
					alt='Price water house Coopers'
					width={120}
					height={120}
					className='object-contain justify-self-center md:w-[200px]'
				/>
				<Image
					src='/logos/ipe.png'
					alt='ipe'
					width={70}
					height={70}
					className='object-contain justify-self-center'
				/>
				<Image
					src='/logos/ip.png'
					alt='ip'
					width={200}
					height={200}
					className='object-contain justify-self-center'
				/>
			</div>
			<h4 className='font-semibold text-2xl mb-5'>Информационные спонсоры</h4>
			<div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-14 items-center justify-center mb-10 md:mb-16'>
				<Image
					src='/logos/oilspace.png'
					alt='Oil space'
					width={180}
					height={180}
					className='object-contain justify-self-center'
				/>
				<Image
					src='/logos/interfax.png'
					alt='Интерфакс Ани'
					width={200}
					height={200}
					className='object-contain justify-self-center'
				/>
				<Image
					src='/logos/vertical.png'
					alt='Нефте газовая вертикаль'
					width={80}
					height={80}
					className='object-contain justify-self-center'
				/>
				<Image
					src='/logos/riatek.png'
					alt='Риатек'
					width={120}
					height={120}
					className='object-contain justify-self-center'
				/>
				<Image
					src='/logos/rus-neft.png'
					alt='Нефть России'
					width={120}
					height={120}
					className='object-contain justify-self-center'
				/>
				<Image
					src='/logos/capital.png'
					alt='Нефть капитал'
					width={180}
					height={180}
					className='object-contain justify-self-center'
				/>
				<Image
					src='/logos/oilandgazjournal.png'
					alt='Oil and gaz journal'
					width={120}
					height={120}
					className='object-contain justify-self-center'
				/>
				<Image
					src='/logos/integration.png'
					alt='Интеграция'
					width={180}
					height={180}
					className='object-contain justify-self-center'
				/>
			</div>
		</>
	)
}

export default Logos
