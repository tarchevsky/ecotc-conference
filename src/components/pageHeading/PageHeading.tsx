import Meta from '@/components/meta/Meta'
import FadeIn from '@/components/fadeIn/FadeIn'
import { PageHeadingProps } from '@/types'
import cn from 'clsx'

const PageHeading = ({
	title,
	metaDesc,
	children,
	prose = false
}: PageHeadingProps) => {
	return (
		<>
			<Meta title={title} metaDesc={metaDesc} />
			<FadeIn className={`mb-16 ${prose ? 'prose m-auto' : 'cont'}`}>
				<main>
					<h1 className={cn('text-4xl font-bold')}>{title}</h1>
					{children}
				</main>
			</FadeIn>
		</>
	)
}

export default PageHeading
