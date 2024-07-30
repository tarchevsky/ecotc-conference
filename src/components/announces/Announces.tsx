import Button from '@/components/button/Button'
import ContactForm from '@/components/contactForm/ContactForm'
import Link from 'next/link'

interface AnnouncesProps {
	title: string
}

const Announces = ({ title }: AnnouncesProps) => {
	return (
		<div className='lg:absolute lg:z-10 lg:top-[530px] lg:right-16 flex flex-col gap-5 lg:w-[400px]'>
			<div className='flex flex-col gap-5 px-10 py-16 bg-white lg:shadow-md'>
				<h3 className='text-2xl font-semibold'>Мероприятие</h3>
				<b>Дата</b>
				<b>Место</b>
				<Button
					tag='button'
					ariaLabel='Кнопка записаться, вызывыющая модальное окно'
					text='Зарегистрироваться'
					modalContent={
						<div>
							<h4 className='text-2xl font-semibold mb-16'>
								Оставьте свои данные, мы с Вами свяжемся
							</h4>
							<ContactForm title={title} />
						</div>
					}
					className='rounded-none btn-lg'
				/>
				<p className='text-[#103159]'>
					Связаться с нами<span> </span>
					<Link
						aria-label='Ссылка, чтобы перезволнить по телефону'
						href='tel:+7 495 785 33 83'
					>
						+7 495 785 33 83
					</Link>
					<br />
					Напишите на почту:<span> </span>
					<Link
						aria-label='Ссылка, чтобы написать на почту'
						href='mailto:etc@ecotc.com'
					>
						etc@ecotc.com
					</Link>
				</p>
			</div>
		</div>
	)
}

export default Announces
