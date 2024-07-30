import { NextPage } from 'next'
import FadeIn from '@/components/fadeIn/FadeIn'
import ContactForm from '@/components/contactForm/ContactForm'
import Link from 'next/link'
import PageHeading from '@/components/pageHeading/PageHeading'

const title = 'Контакты'
const metaDesc = 'Описание страницы контактов'

const ContactsPage: NextPage = () => {
	return (
		<>
			<PageHeading title={title} metaDesc={metaDesc} />
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
