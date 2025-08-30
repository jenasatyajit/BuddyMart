import { useMemo, useState } from 'react'
import { Iphone15Pro } from '@/components/magicui/iphone'
import { PulsatingButton } from '@/components/ui/pulsating-button'

type CategoryKey =
	| 'grocery'
	| 'food'
	| 'pharmacy'
	| 'shop'
	| 'parcel'
	| 'rental'

interface FloatingLabel {
	text: string
	className: string
}

interface CategoryConfig {
	key: CategoryKey
	label: string
	accentFrom: string
	accentTo: string
	labels: FloatingLabel[]
	image: string
	icon?: string
}

function CategoryPill({
	active,
	children,
	onClick,
	gradientFrom,
	gradientTo,
	icon,
	compact = false,
}: {
	active: boolean
	children: string
	onClick: () => void
	gradientFrom: string
	gradientTo: string
	icon?: string
	compact?: boolean
}) {
	// Map gradient colors to solid background colors for inactive state
	const getBackgroundColor = (gradientFrom: string) => {
		if (gradientFrom.includes('green')) return 'bg-green-500'
		if (gradientFrom.includes('teal')) return 'bg-teal-500'
		if (gradientFrom.includes('amber')) return 'bg-amber-500'
		if (gradientFrom.includes('yellow')) return 'bg-yellow-500'
		return 'bg-blue-500'
	}

	if (active) {
		return (
			<PulsatingButton
				onClick={onClick}
				className={
					`w-full ${compact ? 'h-24 p-4' : 'h-32 p-6'} rounded-2xl font-semibold bg-gradient-to-br ${gradientFrom} ${gradientTo} text-white shadow-lg`
				}
				pulseColor="#ffffff66"
				duration="1.6s"
			>
				<div className="flex flex-col items-center justify-center gap-2">
					{icon && (
						<div className="bg-white/20 rounded-full p-3">
							<span className={compact ? 'text-xl' : 'text-2xl'}>{icon}</span>
						</div>
					)}
					<span className={compact ? 'text-sm font-semibold' : 'text-base font-semibold'}>
						{children}
					</span>
				</div>
			</PulsatingButton>
		)
	}

	return (
		<button
			onClick={onClick}
			className={
				`w-full ${compact ? 'h-24 p-4' : 'h-32 p-6'} rounded-2xl font-semibold transition-all bg-white border border-gray-200 text-gray-700 hover:shadow-md hover:-translate-y-0.5 hover:border-gray-300`
			}
		>
			<div className="flex flex-col items-center justify-center gap-2">
				{icon && (
					<div className={`${getBackgroundColor(gradientFrom)} rounded-full p-3`}>
						<span className={`${compact ? 'text-xl' : 'text-2xl'} text-white`}>{icon}</span>
					</div>
				)}
				<span className={compact ? 'text-sm font-semibold' : 'text-base font-semibold'}>
					{children}
				</span>
			</div>
		</button>
	)
}

// Floating speech bubbles removed per latest design

export default function About() {
	const categories: CategoryConfig[] = useMemo(
		() => [
			{
				key: 'grocery',
				label: 'Grocery',
				accentFrom: 'from-green-500',
				accentTo: 'to-emerald-500',
				icon: '🛒',
				labels: [
					{ text: 'Vegetables', className: 'left-[-12%] top-[65%] bg-emerald-500' },
					{ text: 'Seafood', className: 'left-[-8%] top-[28%] bg-cyan-500' },
					{ text: 'Bakery', className: 'left-[20%] top-[5%] bg-orange-500' },
					{ text: 'Meat', className: 'left-[55%] top-[38%] bg-rose-400' },
					{ text: 'Dairy', className: 'left-[52%] top-[78%] bg-amber-500' },
				],
				image:
					'/grocery.png'
			},
			{
				key: 'food',
				label: 'Food',
				accentFrom: 'from-green-500',
				accentTo: 'to-lime-500',
				icon: '🍔',
				labels: [
					{ text: 'Desserts', className: 'left-[-6%] top-[40%] bg-rose-400' },
					{ text: 'Barbecue', className: 'left-[6%] top-[78%] bg-orange-500' },
					{ text: 'Vegetarian', className: 'left-[18%] top-[8%] bg-emerald-500' },
					{ text: 'Fast Food', className: 'left-[56%] top-[38%] bg-sky-500' },
					{ text: 'Noodles', className: 'left-[54%] top-[78%] bg-amber-500' },
				],
				image:
					'/food.png',
			},
			{
				key: 'pharmacy',
				label: 'Pharmacy',
				accentFrom: 'from-teal-500',
				accentTo: 'to-cyan-500',
				icon: '💊',
				labels: [
					{ text: 'Capsules', className: 'left-[-10%] top-[38%] bg-orange-500' },
					{ text: 'Inhalers', className: 'left-[-2%] top-[78%] bg-rose-400' },
					{ text: 'Vitamins', className: 'left-[18%] top-[8%] bg-sky-500' },
					{ text: 'Injections', className: 'left-[54%] top-[40%] bg-orange-500' },
					{ text: 'Equipment', className: 'left-[52%] top-[78%] bg-emerald-500' },
				],
				image:
					'/pharmacy.png',
			},
			{
				key: 'shop',
				label: 'Shop',
				accentFrom: 'from-teal-500',
				accentTo: 'to-primary',
				icon: '🛍️',
				labels: [
					{ text: 'Personal Care', className: 'left-[-8%] top-[36%] bg-rose-400' },
					{ text: 'Fashion', className: 'left-[-2%] top-[78%] bg-sky-500' },
					{ text: 'Electronics', className: 'left-[20%] top-[8%] bg-orange-500' },
					{ text: 'Sports', className: 'left-[54%] top-[40%] bg-emerald-500' },
					{ text: 'Gadgets', className: 'left-[52%] top-[78%] bg-orange-500' },
				],
				image:
					'/catering.png',
			},
			{
				key: 'parcel',
				label: 'Parcel',
				accentFrom: 'from-amber-500',
				accentTo: 'to-orange-500',
				icon: '📦',
				labels: [
					{ text: 'Documents', className: 'left-[-10%] top-[36%] bg-amber-500' },
					{ text: 'Fragile', className: 'left-[12%] top-[8%] bg-rose-400' },
					{ text: 'Same-day', className: 'left-[52%] top-[38%] bg-primary' },
				],
				image:
					'/tutoring.png',
			},
			{
				key: 'rental',
				label: 'Rental',
				accentFrom: 'from-yellow-500',
				accentTo: 'to-orange-500',
				icon: '🚗',
				labels: [
					{ text: 'Cars', className: 'left-[-6%] top-[36%] bg-orange-500' },
					{ text: 'Bikes', className: 'left-[18%] top-[8%] bg-amber-500' },
					{ text: 'Hourly', className: 'left-[54%] top-[40%] bg-primary' },
				],
				image:
					'https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=1080&auto=format&fit=crop',
			},
		],
		[]
	)

	const [active, setActive] = useState<CategoryKey>('grocery')
	const current = useMemo(
		() => categories.find(c => c.key === active)!,
		[active, categories]
	)

	return (
		<section id="about" className="w-full py-16 md:py-20">
			<div className="container mx-auto px-6">
				{/* Heading at the top */}
				<div className="text-center max-w-3xl mx-auto">
					<h2 className="text-3xl md:text-5xl font-extrabold text-black tracking-tight">
						Turn Your Super App into a{' '}
						<span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
							One‑stop Solution
						</span>
					</h2>
					<p className="mt-4 text-base md:text-lg text-black/70">
						Offer food delivery, groceries, pharmacy services, daily commodities,
						car rentals, and more — all from a single platform.
					</p>
				</div>

				{/* Mobile: 3x2 buttons above phone */}
				<div className="mt-8 grid grid-cols-3 gap-3 md:hidden max-w-md mx-auto">
					{categories.map(cat => (
						<CategoryPill
							key={`m-${cat.key}`}
							active={active === cat.key}
							onClick={() => setActive(cat.key)}
							gradientFrom={cat.accentFrom}
							gradientTo={cat.accentTo}
							icon={cat.icon}
							compact
						>
							{cat.label}
						</CategoryPill>
					))}
				</div>

				{/* Mobile: centered phone */}
				<div className="mt-6 relative flex justify-center md:hidden">
					<div className="w-[220px] overflow-hidden">
						<Iphone15Pro
							className="w-full h-auto select-none pointer-events-none"
							src={current.image}
						/>
					</div>
				</div>

				{/* Desktop: 3-column layout: left buttons, center buttons, right phone (mirrored) */}
				<div className="mt-6 hidden md:grid md:grid-cols-3 gap-8 items-center">
					{/* Left 3 buttons */}
					<div className="order-1 grid gap-4 max-w-xs mx-auto w-full">
						{categories.slice(0, 3).map(cat => (
							<CategoryPill
								key={cat.key}
								active={active === cat.key}
								onClick={() => setActive(cat.key)}
								gradientFrom={cat.accentFrom}
								gradientTo={cat.accentTo}
							>
								{cat.label}
							</CategoryPill>
						))}
					</div>

					{/* Center 3 buttons */}
					<div className="order-2 grid gap-4 max-w-xs mx-auto w-full">
						{categories.slice(3, 6).map(cat => (
							<CategoryPill
								key={cat.key}
								active={active === cat.key}
								onClick={() => setActive(cat.key)}
								gradientFrom={cat.accentFrom}
								gradientTo={cat.accentTo}
							>
								{cat.label}
							</CategoryPill>
						))}
					</div>

					{/* Right phone */}
					<div className="order-3 relative flex justify-center">
						<div className="w-[200px] sm:w-[220px] md:w-[260px] overflow-hidden">
							<Iphone15Pro
								className="w-full h-auto select-none pointer-events-none"
								src={current.image}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
