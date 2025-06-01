
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop",
    alt: "Natural eyebrow sculpting result",
    category: "Before & After",
    title: "Natural Brow Enhancement"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&h=400&fit=crop",
    alt: "Professional eyebrow shaping",
    category: "Sculpting",
    title: "Precision Shaping"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=400&h=400&fit=crop",
    alt: "Eyebrow tinting service",
    category: "Tinting",
    title: "Color Enhancement"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=400&fit=crop",
    alt: "Relaxing spa environment",
    category: "Studio",
    title: "Peaceful Environment"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1559599101-f09722fb4948?w=400&h=400&fit=crop",
    alt: "Professional treatment tools",
    category: "Studio",
    title: "Professional Tools"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&h=400&fit=crop",
    alt: "Brow mapping and consultation",
    category: "Process",
    title: "Brow Mapping"
  }
];

export const Gallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...Array.from(new Set(galleryImages.map(img => img.category)))];
  
  const filteredImages = filter === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  const openLightbox = (index: number) => {
    const actualIndex = galleryImages.findIndex(img => img.id === filteredImages[index].id);
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
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(category)}
              className={`text-xs ${
                filter === category 
                  ? "bg-oasis-espresso text-white" 
                  : "border-oasis-taupe/30 text-oasis-espresso hover:border-oasis-taupe"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>
        
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
                  <p className="text-lg font-medium">{galleryImages[selectedImageIndex].title}</p>
                  <p className="text-sm opacity-80">{galleryImages[selectedImageIndex].category}</p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </section>
  );
};
