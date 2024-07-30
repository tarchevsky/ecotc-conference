import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import FadeIn from '@/components/fadeIn/FadeIn'
import { LayoutProps } from '@/types'
// Supports weights 200-800
// import '@fontsource-variable/manrope'
// Supports weights 100-900
import '@fontsource-variable/commissioner'

const Layout = ({ children }: LayoutProps) => {
	return (
		<>
			<FadeIn>
				<Header />
			</FadeIn>

			{children}

			<FadeIn>
				<Footer />
			</FadeIn>
		</>
	)
}

export default Layout
