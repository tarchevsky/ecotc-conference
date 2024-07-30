import Link from 'next/link'

const Footer = () => {
	return (
		<footer className='footer footer-center p-10 bg-base-200 text-base-content'>
			<aside>
				<Link href='/requisites'>Реквизиты</Link>
				<p>Copyright © 2024</p>
			</aside>
		</footer>
	)
}

export default Footer
