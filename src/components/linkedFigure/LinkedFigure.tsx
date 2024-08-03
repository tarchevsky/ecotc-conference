import Link from 'next/link'
import Image from 'next/image'

interface LinkedFigureProps {
	link: string
	src: string
	caption: string
}

const LinkedFigure = ({ link, src, caption }: LinkedFigureProps) => {
	return (
		<Link href={link} target='_blank' rel='noopener noreferrer'>
			<figure>
				<Image
					src={src}
					alt={caption}
					width={800}
					height={1200}
					className='object-contain hover:brightness-90 transition-all ease-in-out'
				/>
				<figcaption className={'text-center'}>{caption}</figcaption>
			</figure>
		</Link>
	)
}
export default LinkedFigure
