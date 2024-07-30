import { NextPage } from 'next'
import FadeIn from '@/components/fadeIn/FadeIn'
import Meta from '@/components/meta/Meta'

const Archive: NextPage = () => {
	return (
		<>
			<Meta title='Архив' metaDesc='Страница Архива' />
			<FadeIn className='cont'>
				<main>
					<h1 className={`text-4xl font-bold`}>Архив</h1>
				</main>
			</FadeIn>
		</>
	)
}

export default Archive
