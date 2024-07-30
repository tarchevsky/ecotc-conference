import { NextPage } from 'next'
import PageHeading from '@/components/pageHeading/PageHeading'

const title = 'О нас'
const metaDesc = 'Страница о нас'

const AboutPage: NextPage = () => {
	return (
		<>
			<PageHeading title={title} metaDesc={metaDesc} />
		</>
	)
}

export default AboutPage
