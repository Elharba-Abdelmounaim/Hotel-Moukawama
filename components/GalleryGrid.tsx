import Image from 'next/image'
import { ZoomIn, Heart, Share2 } from 'lucide-react'
import { useState } from 'react'

export default function GalleryGrid({ images, mode = 'grid' }: { images: string[], mode?: 'grid' | 'list' }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const openLightbox = (src: string) => {
    setSelectedImage(src)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  if (mode === 'list') {
    return (
      <div className="space-y-4">
        {images.map((src, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="grid md:grid-cols-3 gap-4 p-4">
              <div className="relative h-48 md:h-full rounded-lg overflow-hidden group">
                <Image
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <button
                  onClick={() => openLightbox(src)}
                  className="absolute top-3 right-3 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <ZoomIn className="w-5 h-5" />
                </button>
              </div>
              <div className="md:col-span-2">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-900">Image #{index + 1}</h3>
                  <div className="flex gap-2">
                    <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                      <Heart className="w-4 h-4 text-gray-500" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                      <Share2 className="w-4 h-4 text-gray-500" />
                    </button>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>Ajoutée: 12/12/2023</span>
                  <span>•</span>
                  <span>Résolution: 1920×1080</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
            {/* Image */}
            <div className="aspect-square relative overflow-hidden">
              <Image
                src={src}
                alt={`Gallery ${index + 1}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex justify-between items-center">
                  <span className="text-white text-sm font-medium">Image #{index + 1}</span>
                  <span className="text-white/80 text-xs">12/12/2023</span>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={() => openLightbox(src)}
                  className="bg-white/90 backdrop-blur-sm text-gray-900 p-2 rounded-full hover:bg-white transition-colors"
                  title="Zoom"
                >
                  <ZoomIn className="w-5 h-5" />
                </button>
                <button className="bg-white/90 backdrop-blur-sm text-gray-900 p-2 rounded-full hover:bg-white transition-colors" title="Favoris">
                  <Heart className="w-5 h-5" />
                </button>
              </div>
              
              {/* Zoom Indicator */}
              <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  Cliquer pour zoomer
                </div>
              </div>
            </div>
            
            {/* Caption */}
            <div className="absolute -bottom-16 group-hover:bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transition-all duration-300">
              <h4 className="text-white font-semibold mb-1">Titre de la photo</h4>
              <p className="text-white/80 text-sm line-clamp-2">
                Description de la photo avec quelques détails intéressants...
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-6xl max-h-[90vh]">
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="relative w-full h-full">
              <Image
                src={selectedImage}
                alt="Full size"
                width={1200}
                height={800}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4">
                <button className="bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-colors">
                  <Heart className="w-6 h-6" />
                </button>
                <button className="bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-colors">
                  <Share2 className="w-6 h-6" />
                </button>
                <a 
                  href={selectedImage} 
                  download
                  className="bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}