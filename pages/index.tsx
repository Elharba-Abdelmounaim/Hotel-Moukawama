import Hero from '../components/Hero'
import RoomCard from '../components/RoomCard'
import BookingForm from '../components/BookingForm'
import GalleryGrid from '../components/GalleryGrid'
import Map from '../components/Map'
import Link from 'next/link'
import Image from "next/image"

export default function Home() {
  return (
    <>
      <Hero />

      {/* ABOUT SECTION */}
      <section id="about" className="relative py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="absolute inset-0 bg-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 text-secondary font-semibold uppercase tracking-wider text-sm mb-2">
                <span className="w-8 h-0.5 bg-secondary"></span>
                Notre Histoire
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Un Havre de Paix à <span className="text-primary">Dakhla</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Situé au cœur de Dakhla, Hôtel Moukawama incarne l'élégance saharienne 
                moderne. Chaque détail a été pensé pour vous offrir une expérience 
                mémorable, où le luxe discret rencontre l'authenticité du désert.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold">✓</span>
                  </div>
                  <span className="text-gray-700">Design Moderne</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold">✓</span>
                  </div>
                  <span className="text-gray-700">Service Premium</span>
                </div>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 mt-8 px-8 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl group"
              >
                Découvrir Notre Histoire
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                <Image
                  src="/images/chambre2.jpeg"
                  alt="Hôtel Moukawama Dakhla"
                  width={600}
                  height={700}
                  className="w-full h-[500px] object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-secondary/10 rounded-2xl -z-10"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ROOMS SECTION */}
      <section id="rooms" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-secondary font-semibold uppercase tracking-wider text-sm mb-4">
              <span className="w-8 h-0.5 bg-secondary"></span>
              Nos Chambres
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Élégance et <span className="text-primary">Confort</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez nos suites soigneusement conçues pour votre bien-être
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Chambre Single",
                price: "€45",
                size: "20 m²",
                image: "/images/chambre1.jpeg",
                features: ['Wi-Fi Haut Débit', 'Climatisation', 'Salle de Bain Privée', 'Mini-bar'],
                popular: false
              },
              {
                title: "Chambre Double Deluxe",
                price: "€70",
                size: "28 m²",
                image: "/images/chambre2.jpeg",
                features: ['Lit King Size', 'Vue sur Mer', 'TV Écran Plat', 'Terrasse Privée'],
                popular: true
              },
              {
                title: "Suite Familiale",
                price: "€110",
                size: "40 m²",
                image: "/images/chambre1.jpeg",
                features: ['2 Chambres Séparées', 'Cuisine Équipée', 'Grand Balcon', 'Service VIP'],
                popular: false
              }
            ].map((room, index) => (
              <div key={index} className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                {room.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-4 py-1 bg-secondary text-white text-sm font-semibold rounded-full">
                      Plus Populaire
                    </span>
                  </div>
                )}
                
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={room.image}
                    alt={room.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{room.title}</h3>
                      <p className="text-gray-500 text-sm mt-1">{room.size}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-primary">{room.price}</span>
                      <p className="text-gray-500 text-sm">par nuit</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {room.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-600">
                        <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors duration-300">
                    Réserver Maintenant
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/rooms"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300"
            >
              Voir Toutes Nos Chambres
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES + BOOKING */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Services Side */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 text-secondary font-semibold uppercase tracking-wider text-sm mb-4">
                  <span className="w-8 h-0.5 bg-secondary"></span>
                  Nos Services
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Des Services <span className="text-primary">Exceptionnels</span>
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { icon: '☕', title: 'Petit-déjeuner Gourmet', desc: 'Buffet varié avec produits locaux' },
                    { icon: '📶', title: 'Wi-Fi Haut Débit', desc: 'Gratuit dans tout l\'hôtel' },
                    { icon: '🚗', title: 'Navette VIP', desc: 'Service aéroport sur demande' },
                    { icon: '🕒', title: 'Réception 24/24', desc: 'Service continu jour et nuit' },
                    { icon: '🏊', title: 'Piscine', desc: 'Piscine chauffée avec vue' },
                    { icon: '💼', title: 'Business Center', desc: 'Espace de travail équipé' },
                  ].map((service, idx) => (
                    <div key={idx} className="bg-gray-50 p-5 rounded-xl hover:bg-primary/5 transition-all duration-300 group">
                      <div className="text-2xl mb-3 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                      <h4 className="font-semibold text-gray-900 mb-2">{service.title}</h4>
                      <p className="text-sm text-gray-600">{service.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Testimonials */}
              <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-8 rounded-2xl border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold">A</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Amira B.</h4>
                    <p className="text-sm text-gray-500">Client Fidèle</p>
                  </div>
                </div>
                <p className="text-gray-700 italic mb-4">
                  "Un séjour magique ! Le personnel était extrêmement attentionné, 
                  les chambres spacieuses et le service impeccable. Nous reviendrons certainement !"
                </p>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-2 text-sm font-semibold">4.8/5</span>
                  <span className="text-gray-500 text-sm ml-1">(247 avis)</span>
                </div>
              </div>
            </div>
            
            {/* Booking Side */}
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <div className="inline-flex items-center gap-2 text-secondary font-semibold uppercase tracking-wider text-sm mb-4">
                <span className="w-8 h-0.5 bg-secondary"></span>
                Réservez Votre Séjour
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Offre <span className="text-primary">Spéciale</span>
              </h3>
              <p className="text-gray-600 mb-8">
                Réservez maintenant et bénéficiez d'un service de bienvenue gratuit
              </p>
              
              <div className="space-y-6">
                <BookingForm />
                
                <div className="pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-700">Meilleur Prix Garanti</span>
                    <span className="text-green-600 font-semibold">✓</span>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-700">Annulation Gratuite</span>
                    <span className="text-green-600 font-semibold">✓</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Paiement Sécurisé</span>
                    <span className="text-green-600 font-semibold">✓</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-secondary font-semibold uppercase tracking-wider text-sm mb-4">
              <span className="w-8 h-0.5 bg-secondary"></span>
              Galerie
            </div>
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Notre <span className="text-primary">Univers</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez l'ambiance unique de l'Hôtel Moukawama à travers nos photos
            </p>
          </div>
          
          <div className="mb-8">
            <GalleryGrid
              images={[
                '/images/Petit-déjeuner.jpeg',
                '/images/chambre2.jpeg',
                '/images/chambre1.jpeg',
                '/images/Petit-déjeuner.jpeg',
                '/images/chambre2.jpeg',
                '/images/chambre1.jpeg',
              ]}
            />
          </div>
          
          <div className="text-center">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-primary border-2 border-primary font-medium rounded-lg hover:bg-primary hover:text-white transition-all duration-300 group"
            >
              Explorer la Galerie Complète
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-secondary font-semibold uppercase tracking-wider text-sm mb-4">
              <span className="w-8 h-0.5 bg-secondary"></span>
              Localisation
            </div>
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Notre <span className="text-primary">Emplacement</span> Privilégié
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Situé au cœur de Dakhla, profitez d'un accès facile aux attractions principales
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg">
            <Map />
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {[
                { icon: '📍', title: 'Adresse', desc: 'Centre Ville, Dakhla, Maroc' },
                { icon: '🚗', title: 'Parking', desc: 'Parking privé gratuit' },
                { icon: '✈️', title: 'Aéroport', desc: 'À 15 minutes en voiture' },
              ].map((info, idx) => (
                <div key={idx} className="text-center p-4">
                  <div className="text-2xl mb-2">{info.icon}</div>
                  <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                  <p className="text-gray-600 text-sm">{info.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* QUICK CONTACT */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Contactez-<span className="text-primary">Nous</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nous sommes à votre disposition pour répondre à toutes vos questions
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h4 className="text-2xl font-bold text-gray-900 mb-6">
                  Informations de Contact
                </h4>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900">Téléphone</h5>
                      <a 
                        href="tel:+212528930307" 
                        className="text-lg text-primary hover:text-primary-dark transition-colors font-medium mt-1 block"
                      >
                        +212 5289-30307
                      </a>
                      <p className="text-sm text-gray-500 mt-1">Disponible 24h/24</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900">Email</h5>
                      <a 
                        href="mailto:contact@hotelmoukawama.com" 
                        className="text-lg text-primary hover:text-primary-dark transition-colors font-medium mt-1 block"
                      >
                        contact@hotelmoukawama.com
                      </a>
                      <p className="text-sm text-gray-500 mt-1">Réponse sous 24h</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900">Adresse</h5>
                      <p className="text-lg text-gray-700 font-medium mt-1">
                        Centre Ville, Dakhla<br />
                        Maroc
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h5 className="font-semibold text-gray-900 mb-4">Disponible sur WhatsApp</h5>
                  <a 
                    href="https://wa.me/212528930307" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.675-.236-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.9 6.994c-.004 5.45-4.438 9.88-9.888 9.88m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.495-8.411" />
                    </svg>
                    Chat sur WhatsApp
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">
                Envoyez-nous un Message
              </h4>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Prénom *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Votre prénom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Votre nom"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="votre@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sujet
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all">
                    <option value="">Sélectionnez un sujet</option>
                    <option value="reservation">Réservation</option>
                    <option value="information">Demande d'information</option>
                    <option value="group">Réservation de groupe</option>
                    <option value="other">Autre</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Votre message..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-all duration-300 transform hover:-translate-y-1"
                >
                  Envoyer le Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}