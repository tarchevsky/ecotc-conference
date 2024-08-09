import { NextPage } from 'next'
import FadeIn from '@/components/fadeIn/FadeIn'
import Meta from '@/components/meta/Meta'
import Carousel from '@/components/carousel/Carousel'
import Announces from '@/components/announces/Announces'
import Logos from '@/components/logos/Logos'
import Figure from '@/components/figure/Figure'

const title = 'Главная'
const metaDesc = 'Описание страницы'

const HomePage: NextPage = () => {
	return (
		<>
			<Meta title={title} metaDesc={metaDesc} />
			<FadeIn>
				<Carousel />
			</FadeIn>
			<Announces title={title} />
			<FadeIn className='w-[80vw] md:w-[40vw] m-auto mb-16 prose'>
				<h2>
					Международные конференции по торговле нефтью и нефтепродуктами для
					трейдеров стран СНГ, организованные&nbsp;
					<span
						className='font-bold text-[#229624]'
						style={{
							fontFamily: 'Times New Roman',
							fontWeight: '700',
							letterSpacing: '0.7px'
						}}
					>
						Eco-Technics Consulting Ltd
					</span>
				</h2>
				<p>
					С 2001 года по инициативе Eco -Technics Consulting Ltd (ООО
					«Эко-Техник Консалтинг») было проведено пять ежегодных конференций
					трейдеров нефти и газа стран СНГ под эгидой Межправительственного
					Совета по нефти и газу СНГ.
				</p>
				<Figure
					src='/logos/sng.jpg'
					caption='CНГ'
					width={150}
					height={150}
					imageClass='m-auto'
				/>
				<p>
					Наша инициатива была поддержана ведущими нефтяными компаниями, такими
					как ЛУКОЙЛ, Роснефть, SOCAR, Казмунайгаз и др. Под спонсорством этих
					компаний были проведены конференции и учебно-консультационные семинары
					с участием ведущих мировых информационно-аналитических компаний
					Platt's, Argus, IP, IPE, SAP, PWC наряду с российскими
					специализированными информационно-аналитическими изданиями и
					академическими инстититутами, такими как РГУ нефти и газа им. Губкина,
					Финансовая Академия при Правительстве РФ.
				</p>
				<p>
					Конференция и учебно-консультационный семинар для трейдеров нефти и
					газа стран СНГ проходили в -одно или двухдневном формате, включая
					доклады, семинары и симуляционные практические занятия с применением
					свопов, фьючерсов и инструментов хеджирования.
				</p>
				<p>Основными задачами организации конференций и семинаров были:</p>
				<ul>
					<li>текущий анализ коньюнктуры рынка;</li>
					<li>повышение квалификации специалистов;</li>
					<li>
						освоение новых методик продаж, биржевой торговли, хеджирования и
						управления контрактными и иными рисками;
					</li>
					<li>
						создание благоприятной среды для контактов между покупателями и
						экспортерами нефти и нефтепродуктов, сжиженного газа.
					</li>
				</ul>
				<p>
					По завершении конференции участники получали сертификаты о повышении
					квалификации.
				</p>
				<p>
					Конференции трейдеров нефти и газа были проведены в «Президент-отеле»
					в Москве и в отеле «InterContinental» в Астане. Общее число участников
					конференций превысило 300 делегатов.
				</p>
				<p>
					Инициатором всех конференций и семинаров выступало Eco-Technics
					Consulting Ltd
				</p>
			</FadeIn>
			<FadeIn className='cont mb-10 xl:mb-16'>
				<Logos />
			</FadeIn>
		</>
	)
}

export default HomePage
