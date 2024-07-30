import { NextPage } from 'next'
import PageHeading from '@/components/pageHeading/PageHeading'

const title = 'Архив'
const metaDesc = 'Страница Архива'

const Archive: NextPage = () => {
	return (
		<>
			<PageHeading title={title} metaDesc={metaDesc} />
		</>
	)
}

export default Archive
