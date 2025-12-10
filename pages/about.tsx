import Image from "next/image"
import Link from "next/link"

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary/90 to-primary-dark/90 text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Photo_de_lhotel.jpg"
            alt="Hôtel Moukawama Dakhla"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 font-semibold uppercase tracking-wider text-sm mb-6">
              <span className="w-8 h-0.5 bg-secondary"></span>
              Notre Histoire
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              L'Art de l'<span className="text-secondary">Hospitalité</span> Saharienne
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Depuis 2010, nous créons des souvenirs inoubliables au cœur de Dakhla
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-secondary font-semibold uppercase tracking-wider text-sm">
              <span className="w-8 h-0.5 bg-secondary"></span>
              Bienvenue
            </div>
            <h2 className="text-4xl font-bold text-gray-900">
              Hôtel <span className="text-primary">Moukawama</span> - Un Havre de Paix
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Situé au cœur de Dakhla, l'Hôtel Moukawama incarne l'harmonie parfaite entre 
              le design contemporain et l'authenticité saharienne. Notre établissement 
              a été pensé pour offrir une expérience unique, où chaque détail contribue 
              à votre bien-être et à votre confort.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Depuis notre ouverture, nous nous engageons à offrir un service personnalisé 
              et une hospitalité chaleureuse, fidèle à la tradition d'accueil marocaine.
            </p>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/Photo_de_lhotel.jpg"
                alt="Lobby de l'Hôtel Moukawama"
                width={600}
                height={400}
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full -z-10"></div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Notre Mission</h3>
            <p className="text-gray-600 mb-4">
              Offrir une expérience hôtelière exceptionnelle qui combine confort moderne, 
              authenticité culturelle et service personnalisé.
            </p>
            <ul className="space-y-3">
              {['Excellence du service', 'Confort optimal', 'Authenticité culturelle', 'Développement durable'].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-600">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
              <span className="text-2xl">👁️</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Notre Vision</h3>
            <p className="text-gray-600 mb-4">
              Devenir la référence en matière d'hospitalité de luxe au Sahara, 
              tout en préservant et valorisant le patrimoine culturel local.
            </p>
            <ul className="space-y-3">
              {['Innovation continue', 'Responsabilité sociale', 'Expansion régionale', 'Leadership du marché'].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-600">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* History Timeline */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-secondary font-semibold uppercase tracking-wider text-sm mb-4">
              <span className="w-8 h-0.5 bg-secondary"></span>
              Notre Parcours
            </div>
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Une Histoire en <span className="text-primary">Évolution</span>
            </h3>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20 hidden md:block"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {[
                {
                  year: "2010",
                  title: "Fondation",
                  description: "Ouverture de l'Hôtel Moukawama avec 20 chambres",
                  image: "/images/opening.jpg"
                },
                {
                  year: "2014",
                  title: "Première Expansion",
                  description: "Ajout de 15 nouvelles chambres et du restaurant principal",
                  image: "/images/expansion.jpg"
                },
                {
                  year: "2018",
                  title: "Certification",
                  description: "Obtention de la certification 4 étoiles et ouverture du spa",
                  image: "/images/certification.jpg"
                },
                {
                  year: "2023",
                  title: "Innovation",
                  description: "Modernisation complète et mise en place d'une politique écoresponsable",
                  image: "/images/renovation.jpg"
                }
              ].map((item, index) => (
                <div key={index} className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Year Circle */}
                  <div className="relative z-10 w-24 h-24 bg-white border-4 border-primary rounded-full flex items-center justify-center shadow-lg mb-6 md:mb-0">
                    <span className="text-2xl font-bold text-primary">{item.year}</span>
                  </div>

                  {/* Content */}
                  <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-gray-600">{item.description}</p>
                      <div className="mt-4 rounded-lg overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={400}
                          height={200}
                          className="w-full h-48 object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-secondary font-semibold uppercase tracking-wider text-sm mb-4">
              <span className="w-8 h-0.5 bg-secondary"></span>
              Nos Valeurs
            </div>
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Ce Qui Nous <span className="text-primary">Distingue</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "❤️",
                title: "Hospitalité",
                description: "Accueil chaleureux et service personnalisé"
              },
              {
                icon: "⭐",
                title: "Excellence",
                description: "Recherche constante de la perfection"
              },
              {
                icon: "🌱",
                title: "Durabilité",
                description: "Engagement envers l'environnement"
              },
              {
                icon: "🤝",
                title: "Communauté",
                description: "Support et développement local"
              }
            ].map((value, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="text-3xl mb-4">{value.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-secondary font-semibold uppercase tracking-wider text-sm mb-4">
              <span className="w-8 h-0.5 bg-secondary"></span>
              Notre Équipe
            </div>
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Des Professionnels <span className="text-primary">Dévoués</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Notre équipe passionnée travaille chaque jour pour rendre votre séjour inoubliable
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Karim Alami",
                role: "Directeur Général",
                image: "/images/Monim_Elharba_A_photorealistic_image_of_a_young_man_with_a_light_eb816df2-23c7-49fa-bdd0-a518f8c9dbcb.png",
                description: "15 ans d'expérience dans l'hôtellerie de luxe"
              },
              {
                name: "Fatima Zahra",
                role: "Chef de Réception",
                image: "/images/per1.jpg",
                description: "Spécialiste en relations clientèles"
              },
              {
                name: "Mehdi Bennani",
                role: "Chef Cuisinier",
                image: "/images/Monim_Elharba_A_photorealistic_image_of_a_young_man_with_a_light_eb816df2-23c7-49fa-bdd0-a518f8c9dbcb.png",
                description: "Expert en cuisine marocaine moderne"
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900">{member.name}</h4>
                  <p className="text-primary font-semibold mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">
              Prêt à Vivre l'Expérience <span className="text-secondary">Moukawama</span> ?
            </h3>
            <p className="text-gray-200 mb-8">
              Réservez votre séjour dès maintenant et profitez de notre hospitalité légendaire
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/rooms"
                className="px-8 py-3 bg-secondary text-white font-medium rounded-lg hover:bg-secondary-dark transition-colors duration-300"
              >
                Voir Nos Chambres
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 bg-white text-primary font-medium rounded-lg hover:bg-gray-100 transition-colors duration-300"
              >
                Nous Contacter
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}