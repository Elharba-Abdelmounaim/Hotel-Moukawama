import GalleryGrid from '../components/GalleryGrid'
import { Filter, Grid, List, Camera, Home, Utensils, Wind, Users } from 'lucide-react'
import { useState } from 'react'

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [viewMode, setViewMode] = useState('grid')

  const galleryImages = {
    all: [
      '/images/chambre1.jpeg',
      '/images/chambre2.jpeg',
      '/images/IMG_8424.JPG',
      '/images/IMG_8431.JPG',
      '/images/Petit-déjeuner.jpeg',
      '/images/Photo_de_lhotel.jpg',
      '/images/Petit-déjeuner.jpeg',
      '/images/Photo_de_lhotel.jpg',
      '/images/chambre1.jpeg',
      '/images/IMG_8424.JPG',
      '/images/Petit-déjeuner.jpeg',
      '/images/chambre2.jpeg'
    ],
    rooms: [
      '/images/chambre1.jpeg',
      '/images/chambre2.jpeg',
      '/images/suite.jpg',
      '/images/chambre1.jpeg',
      '/images/chambre2.jpeg',
      '/images/suite.jpg'
    ],
    restaurant: [
      '/images/restaurant.jpg',
      '/images/breakfast.jpg',
      '/images/bar.jpg',
      '/images/restaurant.jpg',
      '/images/breakfast.jpg',
      '/images/bar.jpg'
    ],
    amenities: [
      '/images/pool.jpg',
      '/images/spa.jpg',
      '/images/garden.jpg',
      '/images/lobby.jpg',
      '/images/pool.jpg',
      '/images/spa.jpg'
    ]
  }

  const categories = [
    {
      id: 'all',
      icon: <Grid className="w-5 h-5" />,
      label: 'Tout Voir',
      count: galleryImages.all.length
    },
    {
      id: 'rooms',
      icon: <Home className="w-5 h-5" />,
      label: 'Chambres',
      count: galleryImages.rooms.length
    },
    {
      id: 'restaurant',
      icon: <Utensils className="w-5 h-5" />,
      label: 'Restaurant',
      count: galleryImages.restaurant.length
    },
    {
      id: 'amenities',
      icon: <Wind className="w-5 h-5" />,
      label: 'Équipements',
      count: galleryImages.amenities.length
    }
  ]

  const highlights = [
    {
      title: "Design Moderne",
      description: "Intérieurs pensés pour votre confort",
      icon: <Home className="w-6 h-6" />
    },
    {
      title: "Cuisine Raffinée",
      description: "Saveurs locales et internationales",
      icon: <Utensils className="w-6 h-6" />
    },
    {
      title: "Espaces Communs",
      description: "Lieux de détente et de socialisation",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Vues Imprenables",
      description: "Panoramas uniques sur Dakhla",
      icon: <Camera className="w-6 h-6" />
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 font-semibold uppercase tracking-wider text-sm mb-6">
              <span className="w-8 h-0.5 bg-secondary"></span>
              Visite Virtuelle
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Galerie <span className="text-secondary">Photos</span>
            </h1>
            <p className="text-xl text-gray-200">
              Découvrez l'ambiance unique de l'Hôtel Moukawama à travers nos espaces
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Highlights */}
        <div className="mb-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <div className="text-primary">
                      {highlight.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{highlight.title}</h4>
                    <p className="text-sm text-gray-600">{highlight.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filter Controls */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Explorez Notre <span className="text-primary">Univers</span>
              </h2>
              <p className="text-gray-600 mt-2">
                {galleryImages[activeFilter].length} photos disponibles
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              {/* View Mode Toggle */}
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-4 py-2 ${viewMode === 'grid' ? 'bg-primary text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`px-4 py-2 ${viewMode === 'list' ? 'bg-primary text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
              
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
                <Filter className="w-4 h-4" />
                Filtrer
              </button>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.icon}
                <span>{category.label}</span>
                <span className={`px-2 py-0.5 text-xs rounded-full ${
                  activeFilter === category.id
                    ? 'bg-white/20'
                    : 'bg-gray-200'
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Gallery */}
        <div className="mb-12">
          {viewMode === 'grid' ? (
            <GalleryGrid 
              images={galleryImages[activeFilter]} 
              mode="grid"
            />
          ) : (
            <GalleryGrid 
              images={galleryImages[activeFilter]} 
              mode="list"
            />
          )}
        </div>

        {/* Video Tour */}
        <div className="mb-16 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-secondary font-semibold uppercase tracking-wider text-sm mb-4">
                <Camera className="w-4 h-4" />
                Visite Virtuelle
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Visitez Notre Hôtel en <span className="text-primary">Vidéo</span>
              </h3>
              <p className="text-gray-600 mb-6">
                Découvrez l'ambiance de l'Hôtel Moukawama à travers notre visite guidée virtuelle. 
                Parcourez nos espaces comme si vous y étiez.
              </p>
              <button className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors duration-300 inline-flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Lancer la Visite
              </button>
            </div>
            
            <div className="relative">
              <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden shadow-xl">
                {/* Video Placeholder */}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <p className="text-gray-700 font-medium">Visite Virtuelle 360°</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary/10 rounded-full -z-10"></div>
            </div>
          </div>
        </div>

        {/* Photo Guidelines */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Partagez Vos <span className="text-primary">Souvenirs</span>
          </h3>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-gray-900 mb-4">Hashtag Officiel</h4>
                <div className="inline-block px-4 py-2 bg-primary/10 text-primary font-mono text-lg rounded-lg mb-4">
                  #HotelMoukawama
                </div>
                <p className="text-gray-600">
                  Partagez vos photos avec notre hashtag officiel pour figurer dans notre galerie communautaire.
                </p>
              </div>
              
              <div>
                <h4 className="font-bold text-gray-900 mb-4">Conditions de Partage</h4>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                    <span>Photos prises dans l'enceinte de l'hôtel uniquement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                    <span>Respect de la vie privée des autres clients</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                    <span>Pas de photos dans les zones privées</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">
              Prêt à Créer Vos <span className="text-secondary">Propres Souvenirs</span> ?
            </h3>
            <p className="text-gray-200 mb-8">
              Réservez votre séjour et immortalisez vos moments inoubliables à l'Hôtel Moukawama
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/booking"
                className="px-8 py-3 bg-secondary text-white font-medium rounded-lg hover:bg-secondary-dark transition-colors duration-300"
              >
                Réserver Maintenant
              </a>
              <a
                href="/contact"
                className="px-8 py-3 bg-white text-primary font-medium rounded-lg hover:bg-gray-100 transition-colors duration-300"
              >
                Demander une Visite
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}