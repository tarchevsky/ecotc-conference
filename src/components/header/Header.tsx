import Link from 'next/link'
import cn from 'clsx'
import styles from './Header.module.scss'
import Burger from '@/components/burger/Burger'
import { useEffect, useState } from 'react'

const Header = () => {
	const [isMenuActive, setIsMenuActive] = useState(false)
	const toggleMenu = () => {
		setIsMenuActive(!isMenuActive)
	}

	useEffect(() => {
		if (isMenuActive) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'unset'
		}
	}, [isMenuActive])

	return (
		<header className='relative flex flex-col md:mb-16'>
			<Link href='/' className='px-4 py-4 font-bold'>
				ecotc-conference
			</Link>
			<nav
				className={cn(
					{ [styles.active]: isMenuActive },
					'fixed md:static z-10 w-full h-full md:w-auto md:h-auto end-0 bottom-0 -translate-y-full md:translate-y-0 opacity-0 md:opacity-100 md:bg-[#103159] md:text-white transition-all duration-300 ease-out'
				)}
			>
				<ul
					tabIndex={0}
					className='absolute md:static menu flex-nowrap gap-5 md:menu-horizontal start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:translate-y-0 md:translate-x-0'
				>
					<li
						className={cn(
							styles.item,
							'block text-center opacity-0 md:opacity-100'
						)}
					>
						<Link
							className='px-[10px] btn btn-ghost font-normal text-lg'
							href='/'
						>
							Главная
						</Link>
					</li>
					<li
						className={cn(
							styles.item,
							'block text-center opacity-0 md:opacity-100'
						)}
					>
						<Link
							className='px-[10px] btn btn-ghost font-normal text-lg'
							href='/archive'
						>
							Архив
						</Link>
					</li>
					<li
						className={cn(
							styles.item,
							'block text-center opacity-0 md:opacity-100'
						)}
					>
						<Link
							className='px-[10px] btn btn-ghost font-normal text-lg'
							href='/contacts'
						>
							Контакты
						</Link>
					</li>
				</ul>
			</nav>
			<Burger toggleMenu={toggleMenu} />
		</header>
	)
}

export default Header
