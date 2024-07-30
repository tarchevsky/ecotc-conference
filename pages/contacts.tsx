import { NextPage } from 'next'
import FadeIn from '@/components/fadeIn/FadeIn'
import Meta from '@/components/meta/Meta'
import ContactForm from '@/components/contactForm/ContactForm'
import Link from 'next/link'

const title = 'Контакты'

const ContactsPage: NextPage = () => {
	return (
		<>
			<Meta title={title} metaDesc='Описание страницы контактов' />
			<FadeIn className='cont mb-16'>
				<main>
					<h1 className={`text-4xl font-bold`}>{title}</h1>
				</main>
			</FadeIn>
			<FadeIn className='cont mb-16'>
				<p>
					Адрес: Россия, г. Москва, Ленинградский пр-кт 37, корп. 3, офис 1024,
					125167
					<br />
					Тел.:<span> </span>
					<Link
						href='tel:+7 (495) 785 33 83'
						aria-label='Ссылка на телефон для быстрого звонка'
					>
						+7 (495) 785 33 83
					</Link>
					<br />
					Почта:<span> </span>
					<Link href='mailto:etc@ecotc.com' aria-label='Ссылка на почту'>
						etc@ecotc.com
					</Link>
				</p>
			</FadeIn>
			<FadeIn className='cont mb-40'>
				<ContactForm title={title} />
			</FadeIn>
		</>
	)
}

export default ContactsPage
