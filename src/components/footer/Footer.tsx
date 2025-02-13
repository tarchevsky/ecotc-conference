import Link from 'next/link'

const year = new Date().getFullYear()

const Footer = () => {
	return (
		<footer className='footer footer-center p-10 bg-base-200 text-base-content'>
			<aside>
				<Link href='/requisites'>Реквизиты</Link>
				<p>Copyright © {year}</p>
			</aside>
		</footer>
	)
}

export default Footer
