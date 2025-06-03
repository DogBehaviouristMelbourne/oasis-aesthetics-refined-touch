import React from 'react';
import { Clock, Star } from 'lucide-react';

const services = [
	{
		name: 'Eyebrow Wax',
		duration: '15 mins',
		price: '$20',
		description: 'Gentle hair removal to shape and define the natural brow line.',
		features: ['Shaping', 'Gentle wax', 'Aftercare advice'],
		popular: true,
	},
	{
		name: 'Eyebrow Wax and Tint',
		duration: '30 mins',
		price: '$45',
		description: 'Combines brow shaping with semi-permanent color enhancement.',
		features: ['Shaping', 'Wax', 'Tint', 'Color match'],
	},
	{
		name: 'Eyebrow Waxing, Tinting and Lamination',
		duration: '1 hr',
		price: '$70',
		description: 'Complete brow styling: wax, tint, and set for a polished look.',
		features: ['Wax', 'Tint', 'Lamination', 'Styling'],
	},
	{
		name: 'Eyebrow Threading',
		duration: '15 mins',
		price: '$20',
		description: 'Precision hair removal technique using thread for clean lines.',
		features: ['Threading', 'Shaping', 'Gentle technique'],
	},
	{
		name: 'Eyebrow Threading and Tint',
		duration: '30 mins',
		price: '$45',
		description: 'Clean threading paired with subtle brow tint for definition.',
		features: ['Threading', 'Tint', 'Color match'],
	},
	{
		name: 'Eyebrow Threading, Tinting and Lamination',
		duration: '1 hr',
		price: '$70',
		description: 'Full shaping and color package with lamination for structure.',
		features: ['Threading', 'Tint', 'Lamination'],
	},
	{
		name: 'Eyebrow Dye',
		duration: '20 mins',
		price: '$30',
		description: 'Semi-permanent dye to enhance or darken natural brow tone.',
		features: ['Dye', 'Color match', 'Aftercare'],
	},
	{
		name: 'Eyebrow Lamination',
		duration: '30 mins',
		price: '$30',
		description: 'Smooths and lifts brow hairs for a fuller, set-in-place finish.',
		features: ['Lamination', 'Styling', 'Aftercare'],
	},
	{
		name: 'Eyebrow Lamination and Dye',
		duration: '35 mins',
		price: '$40',
		description: 'Enhances brow color and shape with lamination and dye combo.',
		features: ['Lamination', 'Dye', 'Styling'],
	},
	{
		name: 'Eyebrow Lami, Dye and Thread',
		duration: '1 hr',
		price: '$70',
		description: 'A full brow makeover including shaping, dyeing, and lamination.',
		features: ['Threading', 'Dye', 'Lamination'],
	},
	{
		name: 'Eyebrow Thread & Lamination',
		duration: '30 mins',
		price: '$55',
		description: 'Clean threading paired with lamination for styled definition.',
		features: ['Threading', 'Lamination', 'Styling'],
	},
	{
		name: 'Eyebrow Wax and Lamination',
		duration: '30 mins',
		price: '$55',
		description: 'Shaping by wax followed by lamination for structure and hold.',
		features: ['Wax', 'Lamination', 'Styling'],
	},
	{
		name: 'Full Face Wax',
		duration: '35 mins',
		price: '$60',
		description: 'Hair removal across face including brow line, cheeks, and lip.',
		features: ['Brow', 'Cheeks', 'Lip', 'Chin'],
	},
	{
		name: 'Upper Lip Wax',
		duration: '10 mins',
		price: '$10',
		description: 'Quick and effective hair removal from the upper lip area.',
		features: ['Upper lip', 'Gentle wax'],
	},
];

export const ServiceCards = () => (
	<section className="py-16 px-4 lg:px-6 bg-oasis-base border-b border-oasis-taupe/10">
		<div className="container mx-auto max-w-6xl">
			<h2 className="text-3xl lg:text-4xl font-playfair font-bold text-oasis-espresso mb-3 text-center">
				Our Services
			</h2>
			<p className="text-lg text-oasis-hover mb-10 text-center max-w-2xl mx-auto">
				Discover our range of professional treatments designed to enhance your natural beauty
			</p>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
				{services.map((service, idx) => (
					<div
						key={idx}
						className="relative flex flex-col h-full min-h-[480px] bg-white border border-oasis-taupe/30 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-7 group"
					>
						{service.popular ? (
							<span className="absolute -top-4 left-4 flex items-center gap-1 px-3 py-1 rounded-full bg-oasis-taupe text-white text-xs font-semibold shadow-md z-10">
								<Star className="w-4 h-4 mr-1" fill="currentColor" /> Popular
							</span>
						) : null}
						<h3 className="text-xl font-playfair font-bold text-oasis-espresso mb-2">
							{service.name}
						</h3>
						<div className="flex items-center justify-between mb-2">
							<span className="flex items-center text-oasis-hover text-sm font-medium">
								<Clock className="w-4 h-4 mr-1 text-oasis-taupe" /> {service.duration}
							</span>
							<span className="text-2xl font-bold text-oasis-espresso">
								{service.price}
							</span>
						</div>
						<p className="text-oasis-hover text-sm mb-4 min-h-[48px]">
							{service.description}
						</p>
						<ul className="mb-6 text-oasis-espresso/90 text-sm space-y-1">
							{service.features.map((feature, i) => (
								<li key={i} className="flex items-start gap-2">
									<span className="mt-1 w-2 h-2 rounded-full bg-oasis-taupe/80 inline-block"></span>
									<span>{feature}</span>
								</li>
							))}
						</ul>
						<a
							href="https://booking.setmore.com/scheduleappointment/6b1b7b6e-2e2a-4e7e-8e2e-7e2e7e2e7e2e"
							target="_blank"
							rel="noopener noreferrer"
							className="mt-auto inline-block w-full text-center bg-oasis-espresso hover:bg-oasis-taupe text-white font-semibold py-2 rounded-lg shadow transition-colors duration-200"
						>
							Book Now
						</a>
					</div>
				))}
			</div>
		</div>
	</section>
);
