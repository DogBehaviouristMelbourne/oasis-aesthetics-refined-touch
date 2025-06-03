import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const galleryImages = [
	{
		id: 1,
		src: '/our-work1.JPG',
		alt: 'Brow transformation 1',
		category: 'Before & After',
		title: 'Brow Transformation 1',
	},
	{
		id: 2,
		src: '/our-work2.jpg',
		alt: 'Brow transformation 2',
		category: 'Sculpting',
		title: 'Brow Transformation 2',
	},
	{
		id: 3,
		src: '/our-work3.png',
		alt: 'Brow transformation 3',
		category: 'Tinting',
		title: 'Brow Transformation 3',
	},
	{
		id: 4,
		src: '/our-work4.png',
		alt: 'Brow transformation 4',
		category: 'Studio',
		title: 'Brow Transformation 4',
	},
	{
		id: 5,
		src: '/our-work5.png',
		alt: 'Brow transformation 5',
		category: 'Process',
		title: 'Brow Transformation 5',
	},
];

export const Gallery = () => {
	const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
	const [filter, setFilter] = useState('All');

	const categories = [
		'All',
		...Array.from(new Set(galleryImages.map((img) => img.category))),
	];

	const filteredImages = filter === 'All' ? galleryImages : galleryImages.filter((img) => img.category === filter);

	const openLightbox = (index: number) => {
		const actualIndex = galleryImages.findIndex((img) => img.id === filteredImages[index].id);
		setSelectedImageIndex(actualIndex);
	};

	const nextImage = () => {
		if (selectedImageIndex !== null) {
			setSelectedImageIndex((selectedImageIndex + 1) % galleryImages.length);
		}
	};

	const prevImage = () => {
		if (selectedImageIndex !== null) {
			setSelectedImageIndex(selectedImageIndex === 0 ? galleryImages.length - 1 : selectedImageIndex - 1);
		}
	};

	return (
		<section className="py-16 px-4 lg:px-6 bg-oasis-contrast">
			<div className="container mx-auto max-w-6xl">
				<h2 className="text-2xl lg:text-3xl font-playfair font-semibold text-oasis-espresso text-center mb-4">
					Our Work
				</h2>
				<p className="text-center text-oasis-hover mb-8">
					See the beautiful results we achieve for our clients
				</p>

				{/* Image Grid */}
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
					{filteredImages.map((image, index) => (
						<div
							key={image.id}
							className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square"
							onClick={() => openLightbox(index)}
						>
							<img
								src={image.src}
								alt={image.alt}
								className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
							/>
							<div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
								<div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
									<p className="text-sm font-medium">{image.title}</p>
									<p className="text-xs">{image.category}</p>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Lightbox */}
				{selectedImageIndex !== null && (
					<Dialog open={true} onOpenChange={() => setSelectedImageIndex(null)}>
						<DialogContent className="max-w-4xl w-full h-full max-h-[90vh] p-0 bg-black/95">
							<div className="relative w-full h-full flex items-center justify-center">
								<Button
									variant="ghost"
									size="icon"
									className="absolute top-4 right-4 text-white hover:bg-white/20 z-10"
									onClick={() => setSelectedImageIndex(null)}
								>
									<X className="h-6 w-6" />
								</Button>

								<Button
									variant="ghost"
									size="icon"
									className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20"
									onClick={prevImage}
								>
									<ChevronLeft className="h-8 w-8" />
								</Button>

								<img
									src={galleryImages[selectedImageIndex].src}
									alt={galleryImages[selectedImageIndex].alt}
									className="max-w-full max-h-full object-contain"
								/>

								<Button
									variant="ghost"
									size="icon"
									className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20"
									onClick={nextImage}
								>
									<ChevronRight className="h-8 w-8" />
								</Button>

								<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center">
									<p className="text-lg font-medium">
										{galleryImages[selectedImageIndex].title}
									</p>
									<p className="text-sm opacity-80">
										{galleryImages[selectedImageIndex].category}
									</p>
								</div>
							</div>
						</DialogContent>
					</Dialog>
				)}
			</div>
		</section>
	);
};
