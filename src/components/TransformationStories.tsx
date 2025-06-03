import React from 'react';
import { Clock } from 'lucide-react';

const reviews = [
	{
		name: 'Alexis',
		date: '4 months ago',
		text:
			'I had an amazing experience with Vean, She is incredibly professional and pays great attention to detail. Truly my eyebrows have never looked better she took the time to shape them perfectly and made sure I was happy with the result throughout the process.I highly recommend her to anyone looking for amazing quality eyebrows!',
	},
	{
		name: 'Taylah',
		date: '6 months ago',
		text:
			'Best customer service so friendly and such a relaxing environment! My eyebrows are stunning and have lasted so well, would highly recommend.',
	},
	{
		name: 'Sophie Hards',
		date: '6 months ago',
		text: 'Best eyebrows I’ve ever had!',
	},
	{
		name: 'Nina N',
		date: '6 months ago',
		text:
			'Had an amazingly simple and easy brow service with Vean, she was extremely efficient and tentative to my wishes and my original brow shape & face. Will definitely be returning in the future x',
	},
	{
		name: 'caty',
		date: '6 months ago',
		text:
			'i had my eyebrows done and had an absolutely amazing experience! From the moment I walked in, The atmosphere was clean, relaxing, and chic—perfect for a little self-care session. Vean’s incredibly skilled, taking the time to shape my brows exactly how I wanted while offering expert advice. The precision and attention to detail were beyond impressive. I left feeling like a brand new person with perfectly sculpted brows! Highly recommend oasisaesthetic.co to anyone looking for top-notch service and amazing results. I\'ll definitely be returning!',
	},
];

export const TransformationStories = () => {
	return (
		<section className="py-12 px-2 lg:px-4 bg-white border-b border-oasis-taupe/10">
			<div className="container mx-auto max-w-4xl">
				<h2 className="text-2xl lg:text-3xl font-playfair font-semibold text-oasis-espresso mb-2 text-center">
					Transformation Stories
				</h2>
				<p className="text-base text-oasis-hover mb-8 text-center">
					See the incredible transformations our clients have experienced
				</p>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{/* Left card: Emma's Confidence Boost */}
					<div className="flex flex-col h-full bg-white border border-oasis-taupe/20 rounded-xl shadow p-4">
						<div className="relative mb-3 bg-white rounded-lg overflow-hidden flex items-center justify-center">
							<img
								src="/before-and-after.JPG"
								alt="Before and after brow transformation"
								className="object-contain w-full h-full"
							/>
							<span className="absolute top-2 left-2 bg-black/80 text-white text-xs font-bold px-2 py-0.5 rounded">
								Before
							</span>
							<span className="absolute bottom-2 left-2 bg-black/80 text-white text-xs font-bold px-2 py-0.5 rounded">
								After
							</span>
						</div>
						<h3 className="text-base font-playfair font-bold text-oasis-espresso mb-1">
							Emma's Confidence Boost
						</h3>
						<span className="flex items-center text-oasis-hover text-xs font-medium mb-1">
							<Clock className="w-3 h-3 mr-1 text-oasis-taupe" /> 45 minutes
						</span>
						<p className="text-oasis-hover text-xs mb-2">
							Emma came in feeling self-conscious about her uneven brows. After a
							gentle wax, tint, and expert shaping, she left with a natural,
							defined look—and a big smile!
						</p>
						<ul className="mb-2 text-oasis-espresso/90 text-xs space-y-0.5">
							<li className="flex items-start gap-2">
								<span className="mt-1 w-1.5 h-1.5 rounded-full bg-oasis-taupe/80 inline-block"></span>
								Wax & Tint
							</li>
							<li className="flex items-start gap-2">
								<span className="mt-1 w-1.5 h-1.5 rounded-full bg-oasis-taupe/80 inline-block"></span>
								Shaping
							</li>
							<li className="flex items-start gap-2">
								<span className="mt-1 w-1.5 h-1.5 rounded-full bg-oasis-taupe/80 inline-block"></span>
								Aftercare
							</li>
						</ul>
					</div>
					{/* Right card: Reviews */}
					<div className="flex flex-col h-full bg-white border border-oasis-taupe/20 rounded-xl shadow p-4">
						<h3 className="text-base font-playfair font-bold text-oasis-espresso mb-4 text-center">
							What Our Clients Say
						</h3>
						<div className="space-y-4">
							{reviews.map((review, index) => (
								<div
									key={index}
									className="p-4 bg-oasis-taupe/10 rounded-lg shadow-sm"
								>
									<p className="text-oasis-hover text-xs mb-2">
										{review.text}
									</p>
									<div className="flex justify-between text-oasis-espresso text-xs">
										<span>{review.name}</span>
										<span>{review.date}</span>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
