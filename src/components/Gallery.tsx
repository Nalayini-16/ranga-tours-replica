import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import gallery4 from '@/assets/gallery-4.jpg';

const images = [
  { src: gallery1, alt: 'Mountain road trip destination' },
  { src: gallery2, alt: 'Beach destination travel' },
  { src: gallery3, alt: 'Temple heritage tour' },
  { src: gallery4, alt: 'Hill station tea plantations' },
];

const Gallery = () => {
  return (
    <section id="gallery" className="section-padding bg-background">
      <div className="container-custom px-4 md:px-6">
        <div className="text-center mb-12">
          <p className="text-accent font-medium mb-2">Gallery</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Travel Moments
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore the beautiful moments captured during our trips across various destinations.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl aspect-square"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors duration-300 flex items-center justify-center">
                <span className="text-primary-foreground font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                  View
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
