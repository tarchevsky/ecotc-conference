import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, EffectFade, Pagination } from 'swiper/modules'
import styles from './Carousel.module.scss'
import cn from 'clsx'
import FadeIn from '@/components/fadeIn/FadeIn'

import Image from 'next/image'
import Button from '@/components/button/Button'

const Carousel = () => {
	return (
		<FadeIn className='lg:mb-16'>
			<Swiper
				slidesPerView={1}
				spaceBetween={30}
				loop={true}
				navigation={true}
				effect={'fade'}
				modules={[EffectFade, Navigation]}
				className={cn(styles.carousel, 'carousel')}
			>
				<SwiperSlide>
					<div className='relative h-full flex flex-col justify-center'>
						<Image
							className='absolute top-0 left-0 h-full w-full -z-10 brightness-75'
							src='/main-bunner-1.jpg'
							alt='more-dark'
							width={1000}
							height={1000}
							style={{
								objectFit: 'cover'
							}}
							quality={10}
						/>
						<FadeIn className='flex flex-col gap-5 w-full lg:w-[40vw] xl:w-[30vw] px-10 lg:px-0 lg:pl-16'>
							<h2 className='font-semibold text-5xl text-white'>
								Организация конференций по торговле нефти, нефтепродуктов и
								сжиженного газа
							</h2>
							<div className='text-white'>Текст на слайде</div>
							<Button
								tag='button'
								ariaLabel='Какая-то кнопка'
								text='Кнопка'
								className='btn-wide'
							/>
						</FadeIn>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='relative h-full flex flex-col justify-center'>
						<Image
							className='absolute top-0 left-0 h-full w-full -z-10 brightness-75'
							src='/main-bunner-2.webp'
							alt='forest-river'
							width={1000}
							height={1000}
							style={{
								objectFit: 'cover'
							}}
							quality={10}
						/>
						<FadeIn className='flex flex-col gap-5 w-full lg:w-[40vw] xl:w-[30vw] px-10 lg:px-0 lg:pl-16'>
							<h2 className='font-semibold text-5xl text-white'>
								Организация конференций по торговле нефти, нефтепродуктов и
								сжиженного газа
							</h2>
							<div className='text-white'>Текст на слайде</div>
							<Button
								tag='button'
								ariaLabel='Какая-то кнопка'
								text='Кнопка'
								className='btn-wide'
							/>
						</FadeIn>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='relative h-full flex flex-col justify-center '>
						<Image
							className='absolute top-0 left-0 h-full w-full  -z-10 brightness-75'
							src='/main-bunner-3.jpg'
							alt='fog-sea'
							width={1000}
							height={1000}
							style={{
								objectFit: 'cover'
							}}
							quality={10}
						/>
						<FadeIn className='flex flex-col gap-5 w-full lg:w-[40vw] xl:w-[30vw] px-10 lg:px-0 lg:pl-16'>
							<h2 className='font-semibold text-5xl text-white'>
								Организация конференций по торговле нефти, нефтепродуктов и
								сжиженного газа
							</h2>
							<div className='text-white'>Текст на слайде</div>
							<Button
								tag='button'
								ariaLabel='Какая-то кнопка'
								text='Кнопка'
								className='btn-wide'
							/>
						</FadeIn>
					</div>
				</SwiperSlide>
			</Swiper>
		</FadeIn>
	)
}

export default Carousel
