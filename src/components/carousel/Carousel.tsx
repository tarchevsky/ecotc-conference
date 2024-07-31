import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, EffectFade, Autoplay } from 'swiper/modules'
import styles from './Carousel.module.scss'
import cn from 'clsx'
import FadeIn from '@/components/fadeIn/FadeIn'

import Image from 'next/image'

const Carousel = () => {
	return (
		<FadeIn className='lg:mb-16'>
			<Swiper
				slidesPerView={1}
				spaceBetween={30}
				loop={true}
				navigation={true}
				autoplay={{
					delay: 2000,
					disableOnInteraction: false
				}}
				effect={'fade'}
				modules={[EffectFade, Navigation, Autoplay]}
				className={cn(styles.carousel, 'carousel')}
			>
				<SwiperSlide>
					<div className='relative h-full flex flex-col justify-center'>
						<Image
							className='absolute top-0 left-0 h-full w-full -z-10 brightness-75 object-bottom'
							src='/main-bunner-1.jpg'
							alt='more-dark'
							width={1000}
							height={1000}
							style={{
								objectFit: 'cover'
							}}
							quality={10}
						/>
						<FadeIn className='flex flex-col gap-5 w-full lg:w-[50vw] 2xl:w-[60vw] px-10 lg:px-0 lg:pl-[100px] 2xl:pl-[200px]'>
							<h2 className='font-semibold text-5xl text-white'>
								Организация конференций по торговле нефти, нефтепродуктов и
								сжиженного газа
							</h2>
						</FadeIn>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='relative h-full flex flex-col justify-center'>
						<Image
							className='absolute top-0 left-0 h-full w-full -z-10 brightness-75 object-bottom'
							src='/main-bunner-2.webp'
							alt='forest-river'
							width={1000}
							height={1000}
							style={{
								objectFit: 'cover'
							}}
							quality={10}
						/>
						<FadeIn className='flex flex-col gap-5 w-full lg:w-[50vw] 2xl:w-[60vw] px-10 lg:px-0 lg:pl-[100px] 2xl:pl-[200px]'>
							<h2 className='font-semibold text-5xl text-white'>
								Организация конференций по торговле нефти, нефтепродуктов и
								сжиженного газа
							</h2>
						</FadeIn>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='relative h-full flex flex-col justify-center '>
						<Image
							className='absolute top-0 left-0 h-full w-full -z-10 brightness-75'
							src='/main-bunner-3.webp'
							alt='fog-sea'
							width={1000}
							height={1000}
							style={{
								objectFit: 'cover'
							}}
							quality={10}
						/>
						<FadeIn className='flex flex-col gap-5 w-full lg:w-[50vw] 2xl:w-[60vw] px-10 lg:px-0 lg:pl-[100px] 2xl:pl-[200px]'>
							<h2 className='font-semibold text-5xl text-white'>
								Организация конференций по торговле нефти, нефтепродуктов и
								сжиженного газа
							</h2>
						</FadeIn>
					</div>
				</SwiperSlide>
			</Swiper>
		</FadeIn>
	)
}

export default Carousel
