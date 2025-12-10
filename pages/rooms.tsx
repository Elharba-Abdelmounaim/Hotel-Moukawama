import RoomCard from '../components/RoomCard'
import { Search, Filter, Star, Users, Maximize2, Coffee, Wifi, Tv, Wind, Utensils } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
 import { Calendar, ArrowRight } from 'lucide-react'


export default function Rooms() {
  const roomTypes = [
    {
      title: "Chambre Single",
      price: "€45",
      size: "20 m²",
      image: "/images/chambre1.jpeg",
      features: ['Wi-Fi Haut Débit', 'Climatisation', 'Salle de Bain Privée', 'Mini-bar'],
      description: "Idéale pour les voyageurs solo, avec tout le confort nécessaire",
      rating: 4.2,
      reviews: 45,
      popular: false
    },
    {
      title: "Chambre Double Deluxe",
      price: "€70",
      size: "28 m²",
      image: "/images/chambre2.jpeg",
      features: ['Lit King Size', 'Vue sur Mer', 'TV Écran Plat', 'Terrasse Privée'],
      description: "Parfaite pour les couples, avec vue imprenable sur la mer",
      rating: 4.8,
      reviews: 68,
      popular: true
    },
    {
      title: "Suite Familiale",
      price: "€110",
      size: "40 m²",
      image: "/images/chambre1.jpeg",
      features: ['2 Chambres Séparées', 'Cuisine Équipée', 'Grand Balcon', 'Service VIP'],
      description: "Spacieuse et confortable pour toute la famille",
      rating: 4.6,
      reviews: 32,
      popular: false
    },
    {
      title: "Suite Présidentielle",
      price: "€180",
      size: "55 m²",
      image: "/images/chambre2.jpeg",
      features: ['Salon Privé', 'Jacuzzi', 'Service Majordome', 'Vue Panoramique'],
      description: "L'ultime expérience de luxe et d'intimité",
      rating: 4.9,
      reviews: 24,
      popular: false
    },
    {
      title: "Chambre Affaires",
      price: "€65",
      size: "25 m²",
      image: "/images/chambre1.jpeg",
      features: ['Bureau Ergonomique', 'Wi-Fi Fibre', 'Imprimante', 'Service de Blanchisserie'],
      description: "Conçue pour les professionnels en déplacement",
      rating: 4.4,
      reviews: 28,
      popular: false
    },
    {
      title: "Suite Honeymoon",
      price: "€150",
      size: "35 m²",
      image: "/images/chambre2.jpeg",
      features: ['Lit à Baldaquin', 'Jacuzzi Romantique', 'Champagne offert', 'Décor Florale'],
      description: "Pour une lune de miel inoubliable à Dakhla",
      rating: 4.7,
      reviews: 18,
      popular: true
    }
  ]

  const facilities = [
    { icon: <Wifi className="w-5 h-5" />, name: "Wi-Fi Fibre", desc: "Gratuit dans tout l'hôtel" },
    { icon: <Coffee className="w-5 h-5" />, name: "Petit-déjeuner", desc: "Buffet inclus" },
    { icon: <Wind className="w-5 h-5" />, name: "Climatisation", desc: "Contrôle individuel" },
    { icon: <Tv className="w-5 h-5" />, name: "TV Satellite", desc: "Chaînes internationales" },
    { icon: <Utensils className="w-5 h-5" />, name: "Room Service", desc: "Disponible 24h/24" },
    { icon: <Maximize2 className="w-5 h-5" />, name: "Espace", desc: "Chambres spacieuses" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary to-primary-dark text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 font-semibold uppercase tracking-wider text-sm mb-6 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="w-8 h-0.5 bg-secondary"></span>
              Hébergement Premium
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Nos <span className="text-secondary">Chambres</span> & Suites
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Découvrez nos hébergements soigneusement conçus pour votre confort et bien-être à Dakhla
            </p>
            
            {/* Search Bar */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="grid md:grid-cols-4 gap-4">
                <div className="relative">
                  <label className="block text-sm font-medium text-white mb-2">Dates</label>
                  <input
                    type="date"
                    className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-secondary"
                    placeholder="Choisir dates"
                  />
                </div>
                <div className="relative">
                  <label className="block text-sm font-medium text-white mb-2">Invités</label>
                  <select className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-secondary">
                    <option>1 Personne</option>
                    <option className="text-black" >2 Personnes</option>
                    <option className="text-black" >3 Personnes</option>
                    <option className="text-black"> 4+ Personnes</option>
                  </select>
                </div>
                <div className="relative">
                  <label className="block text-sm font-medium text-white mb-2">Type</label>
                  <select className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-secondary">
                    <option>Tous les types</option>
                    <option className="text-black">Single</option>
                    <option className="text-black">Double</option>
                    <option className="text-black">Suite</option>
                    <option className="text-black">Familiale</option>
                  </select>
                </div>
                <div className="flex items-end">
                  <button className="w-full px-6 py-2 bg-secondary text-primary font-semibold rounded-lg hover:bg-white transition-colors duration-300 flex items-center justify-center gap-2">
                    <Search className="w-4 h-4" />
                    Rechercher
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Facilities Overview */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Équipements & <span className="text-primary">Services</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Profitez de nos installations premium incluses dans tous nos hébergements
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <div className="text-primary">
                      {facility.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{facility.name}</h4>
                    <p className="text-sm text-gray-600">{facility.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Rooms Grid */}
        <div className="mb-12">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Tous Nos <span className="text-primary">Hébergements</span>
              </h2>
              <p className="text-gray-600 mt-2">
                {roomTypes.length} chambres disponibles • Prix à partir de €45/nuit
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
                <Filter className="w-4 h-4" />
                Filtrer
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                Trier par: Popularité
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roomTypes.map((room, index) => (
              <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                {/* Popular Badge */}
                {room.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-4 py-1 bg-secondary text-white text-sm font-semibold rounded-full shadow-lg">
                      Plus Populaire
                    </span>
                  </div>
                )}
                
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={room.image}
                    alt={room.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-900 text-sm font-medium rounded-full">
                      {room.size}
                    </span>
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{room.title}</h3>
                      <p className="text-gray-500 text-sm mt-1">{room.description}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-primary">{room.price}</span>
                      <p className="text-gray-500 text-sm">par nuit</p>
                    </div>
                  </div>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(room.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      {room.rating} ({room.reviews} avis)
                    </span>
                  </div>
                  
                  {/* Features */}
                  <ul className="space-y-3 mb-6">
                    {room.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-600">
                        <div className="w-2 h-2 bg-secondary rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                    {room.features.length > 3 && (
                      <li className="text-primary text-sm font-medium">
                        +{room.features.length - 3} autres équipements
                      </li>
                    )}
                  </ul>
                  
                  {/* Action Buttons */}
                
                    <div className="flex gap-3">
                      <Link href="/booking" className="flex-1">
                        <button className="w-full py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg flex items-center justify-center gap-2 group">
                          <Calendar className="w-5 h-5" />
                          Réserver Maintenant
                        </button>
                      </Link>
                      
                      <Link
                        href={`/rooms/${room.title.toLowerCase().replace(/ /g, '-')}`}
                        className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-md inline-flex items-center justify-center gap-2 group"
                      >
                        Plus de Détails
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mb-16 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Comparatif des <span className="text-primary">Chambres</span>
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Type de Chambre</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Surface</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Capacité</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Prix/Nuit</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Petit-déj</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Wi-Fi</th>
                </tr>
              </thead>
              <tbody>
                {roomTypes.slice(0, 4).map((room, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-6 font-medium text-gray-900">{room.title}</td>
                    <td className="py-4 px-6 text-gray-600">{room.size}</td>
                    <td className="py-4 px-6 text-gray-600">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        {room.title.includes('Single') ? '1' : 
                         room.title.includes('Double') ? '2' : '4'} pers.
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="font-bold text-primary">{room.price}</span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-green-600 font-semibold">✓</span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-green-600 font-semibold">✓</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Questions <span className="text-primary">Fréquentes</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                question: "Quelle est la politique d'annulation ?",
                answer: "Annulation gratuite jusqu'à 48h avant l'arrivée. Après cette période, des frais équivalents à une nuit peuvent s'appliquer."
              },
              {
                question: "Le petit-déjeuner est-il inclus ?",
                answer: "Oui, un buffet petit-déjeuner est inclus dans tous nos tarifs. Il est servi de 7h à 11h dans notre restaurant."
              },
              {
                question: "Y a-t-il un service de navette ?",
                answer: "Un service de navette depuis l'aéroport est disponible sur demande. Contactez-nous à l'avance pour réserver."
              },
              {
                question: "Les animaux sont-ils acceptés ?",
                answer: "Les petits animaux de compagnie sont acceptés sous certaines conditions. Un supplément peut s'appliquer."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h4 className="font-semibold text-gray-900 mb-3">{faq.question}</h4>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">
              Besoin d'une <span className="text-secondary">Chambre Spéciale</span> ?
            </h3>
            <p className="text-gray-200 mb-8">
              Contactez-nous directement pour les réservations de groupe, séjours prolongés ou demandes particulières.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+212528930307"
                className="px-8 py-3 bg-secondary text-white font-medium rounded-lg hover:bg-secondary-dark transition-colors duration-300"
              >
                Appelez-nous au +212 5289-30307
              </a>
              <Link
                href="/contact"
                className="px-8 py-3 bg-white text-primary font-medium rounded-lg hover:bg-gray-100 transition-colors duration-300"
              >
                Nous Écrire
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}