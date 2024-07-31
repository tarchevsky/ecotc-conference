import { NextPage } from 'next'
import PageHeading from '@/components/pageHeading/PageHeading'
import FadeIn from '@/components/fadeIn/FadeIn'

const title = 'Реквизиты'
const metaDesc = 'Страница Реквизиты'

const RequisitesPage: NextPage = () => {
	return (
		<>
			<PageHeading title={title} metaDesc={metaDesc} />
			<FadeIn className='cont overflow-x-auto mb-10 xl:mb-16'>
				<table className='table'>
					{/* head */}
					<thead>
						<tr>
							<th colSpan={2} className='text-center'>
								Наименование
							</th>
						</tr>
					</thead>
					<tbody>
						{/* row 1 */}
						<tr>
							<td>Полное наименование на русском языке</td>
							<td>
								Общество с Ограниченной Ответственностью «Эко Техник Консалтинг»
							</td>
						</tr>
						{/* row 2 */}
						<tr>
							<td>
								ГРН и дата внесения в ЕГЮРЛ записи, содержащей указанные
								сведения
							</td>
							<td>
								1197746368939Б
								<br />
								06.06.2019
							</td>
						</tr>
					</tbody>
					{/* head */}
					<thead>
						<tr>
							<th colSpan={2} className='text-center'>
								Место нахождения и адрес юридического лица
							</th>
						</tr>
					</thead>
					<tbody>
						{/* row 1 */}
						<tr>
							<td>Адрес юридического лица</td>
							<td>
								1291919, <br />
								г.Москва, <br />
								пр-кт Ленинградский, <br />
								д. 37к3, <br />
								эт. 10, пом. XII, ком. 37, 37
							</td>
						</tr>
					</tbody>
					{/* head */}
					<thead>
						<tr>
							<th colSpan={2} className='text-center'>
								Сведения о регистрирующем органе по месту нахождения
								юридического лица
							</th>
						</tr>
					</thead>
					<tbody>
						{/* row 1 */}
						<tr>
							<td>Наименование регистрирующего органа</td>
							<td>
								Межрайонная инспекция Федеральной налоговой службы № 46 по
								г.Москве
							</td>
						</tr>
						{/* row 2 */}
						<tr>
							<td>Генеральный директор</td>
							<td>Рахмани Шукрулла Муртаза кул</td>
						</tr>
						{/* row 3 */}
						<tr>
							<td>Реквизиты для платежей</td>
							<td>
								ИНН 7714445978, КПП 771401001, <br />
								Р/с № 40702810738000200344 в ПАО «Сбербанк России г. Москва,{' '}
								<br />
								БИК 044525225, <br />
								к/с 30101810400000000225
							</td>
						</tr>
					</tbody>
				</table>
			</FadeIn>
		</>
	)
}

export default RequisitesPage
