import { NextPage } from 'next'
import PageHeading from '@/components/pageHeading/PageHeading'
import FadeIn from '@/components/fadeIn/FadeIn'
import Image from 'next/image'
import Link from 'next/link'

const title = 'Архив'
const metaDesc = 'Страница Архива'

const Archive: NextPage = () => {
	return (
		<>
			<PageHeading title={title} metaDesc={metaDesc} prose>
				<FadeIn className='m-auto'>
					<p>
						Здесь представлены систематизированные данные о мероприятиях,
						организованных нашей компанией с 2001 по 2005 год.
					</p>
					<p>
						За этот период были проведены семинары и конференции, посвященные
						ключевым вопросам в области торговли нефтью и нефтегазом, проектного
						финансирования и управления рисками. Нами была создана платформа для
						обмена знаниями и опытом среди профессионалов отрасли, что
						способствовало развитию и укреплению деловых связей.
					</p>
					<p>
						По завершении конференции участники получали сертификаты о повышении
						квалификации.
					</p>
					<p>
						В данном архиве содержатся презентационные и фотоматериалы,
						позволяющие получить представление о контексте и значимости каждого
						события.
					</p>
					<p>
						Мы стремимся сохранить и предоставить доступ к этим данным и
						надеемся, что материалы архива будут полезны и станут ценным
						ресурсом для вашего профессионального поиска.
					</p>
					<p>
						Ваше участие в наших будущих конференциях, семинарах и других
						мероприятиях позволит вам не только углубить свои знания, но и
						поделиться своим опытом с коллегами, способствуя общему развитию
						отрасли.
					</p>
					<Link href='/OGT4Rus.pdf' target='_blank' rel='noopener noreferrer'>
						<figure>
							<Image
								src='/sng-pdf-2.png'
								alt='logo'
								width={800}
								height={1200}
								className='object-contain hover:brightness-90 transition-all ease-in-out'
							/>
							<figcaption className={'text-center'}>
								PDF ко второй конференции
							</figcaption>
						</figure>
					</Link>
					<Link href='/sng.pdf' target='_blank' rel='noopener noreferrer'>
						<figure>
							<Image
								src='/sng-pdf.png'
								alt='logo'
								width={800}
								height={1200}
								className='object-contain hover:brightness-90 transition-all ease-in-out'
							/>
							<figcaption className={'text-center'}>
								PDF к третьей конференции
							</figcaption>
						</figure>
					</Link>
				</FadeIn>
			</PageHeading>
		</>
	)
}

export default Archive
