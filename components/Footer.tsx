import Link from 'next/link'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Facebook, 
  Instagram, 
  MessageCircle, 
  Twitter, 
  Youtube,
  Calendar,
  ShieldCheck,
  CreditCard,
  Wifi,
  Coffee,
  Wind,
  Utensils,
  Star,
  ChevronRight,
  Heart
} from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { href: '/', label: 'Accueil', icon: <ChevronRight className="w-3 h-3" /> },
    { href: '/rooms', label: 'Chambres', icon: <ChevronRight className="w-3 h-3" /> },
    { href: '/booking', label: 'Réservation', icon: <ChevronRight className="w-3 h-3" /> },
    { href: '/gallery', label: 'Galerie', icon: <ChevronRight className="w-3 h-3" /> },
    { href: '/about', label: 'À propos', icon: <ChevronRight className="w-3 h-3" /> },
    { href: '/contact', label: 'Contact', icon: <ChevronRight className="w-3 h-3" /> },
  ]

  const services = [
    { name: 'Wi-Fi Fibre', icon: <Wifi className="w-4 h-4" /> },
    { name: 'Petit-déjeuner', icon: <Coffee className="w-4 h-4" /> },
    { name: 'Climatisation', icon: <Wind className="w-4 h-4" /> },
    { name: 'Restaurant', icon: <Utensils className="w-4 h-4" /> },
    { name: 'Paiement Sécurisé', icon: <CreditCard className="w-4 h-4" /> },
    { name: 'Annulation Gratuite', icon: <ShieldCheck className="w-4 h-4" /> },
  ]

  const socialLinks = [
    { 
      name: 'Facebook', 
      icon: <Facebook className="w-5 h-5" />, 
      href: 'https://facebook.com/hotelmoukawama',
      color: 'hover:bg-blue-600'
    },
    { 
      name: 'Instagram', 
      icon: <Instagram className="w-5 h-5" />, 
      href: 'https://instagram.com/hotelmoukawama',
      color: 'hover:bg-pink-600'
    },
    { 
      name: 'WhatsApp', 
      icon: <MessageCircle className="w-5 h-5" />, 
      href: 'https://wa.me/212528930307',
      color: 'hover:bg-green-500'
    },
    { 
      name: 'Twitter', 
      icon: <Twitter className="w-5 h-5" />, 
      href: 'https://twitter.com/hotelmoukawama',
      color: 'hover:bg-blue-400'
    },
    { 
      name: 'YouTube', 
      icon: <Youtube className="w-5 h-5" />, 
      href: 'https://youtube.com/hotelmoukawama',
      color: 'hover:bg-red-600'
    },
  ]

  const contactInfo = [
    { icon: <MapPin className="w-4 h-4" />, text: '401 AV. Imlili, Dakhla, Morocco' },
    { icon: <Phone className="w-4 h-4" />, text: '+212 5289-30307', href: 'tel:+212528930307' },
    { icon: <Mail className="w-4 h-4" />, text: 'contact@hotelmoukawama.com', href: 'mailto:contact@hotelmoukawama.com' },
    { icon: <Globe className="w-4 h-4" />, text: 'www.hotelmoukawama.com' },
  ]

  return (
    <footer className="bg-gradient-to-b from-primary-dark to-primary pt-12 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Hotel Info */}
          <div className="space-y-4">
            <Link href="/" className="inline-block group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-secondary-dark flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">HM</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold group-hover:text-secondary transition-colors">
                    Hôtel Moukawama
                  </h2>
                  <p className="text-sm text-gray-300">Dakhla, Morocco</p>
                </div>
              </div>
            </Link>
            
            <p className="text-gray-300">
              Un havre de paix au cœur de Dakhla, alliant confort moderne et hospitalité traditionnelle.
            </p>
            
            {/* Rating */}
            <div className="flex items-center gap-2 mt-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-sm font-medium">4.8/5</span>
              <span className="text-sm text-gray-400">(247 avis)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 pb-2 border-b border-white/20">
              Navigation Rapide
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="flex items-center gap-2 text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 group"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                      {link.icon}
                    </span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 pb-2 border-b border-white/20">
              Nos Services
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {services.map((service) => (
                <div key={service.name} className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                  <div className="text-secondary">
                    {service.icon}
                  </div>
                  <span className="text-sm">{service.name}</span>
                </div>
              ))}
            </div>
            
            {/* Newsletter */}
            <div className="mt-8">
              <h4 className="font-semibold mb-3">Newsletter</h4>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary placeholder-gray-400"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 px-3 py-1 bg-secondary text-white text-sm rounded hover:bg-secondary-dark transition-colors">
                  S'abonner
                </button>
              </div>
            </div>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-lg font-bold mb-6 pb-2 border-b border-white/20">
              Contact & Social
            </h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="text-secondary mt-0.5">
                    {info.icon}
                  </div>
                  {info.href ? (
                    <a 
                      href={info.href} 
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {info.text}
                    </a>
                  ) : (
                    <span className="text-gray-300">{info.text}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <h4 className="font-semibold mb-3">Suivez-nous</h4>
              <div className="flex gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:scale-110 transition-all duration-300 group"
                    aria-label={social.name}
                  >
                    <div className="text-white group-hover:text-white">
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-6">
          <div className="text-gray-300 text-sm">
            © {currentYear} Hôtel Moukawama. Tous droits réservés.
          </div>
          
          <div className="flex items-center gap-6 text-sm text-gray-300">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Politique de confidentialité
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Conditions d'utilisation
            </Link>
            <Link href="/cookies" className="hover:text-white transition-colors">
              Cookies
            </Link>
            <Link href="/sitemap" className="hover:text-white transition-colors">
              Plan du site
            </Link>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <span>Fait avec</span>
            <Heart className="w-4 h-4 text-red-400 fill-red-400" />
            <span>à Dakhla</span>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-secondary/20 to-primary/20 rounded-xl p-6 mb-8 border border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h4 className="text-xl font-bold mb-2">Prêt pour un séjour inoubliable ?</h4>
              <p className="text-gray-300">Réservez maintenant et profitez de nos meilleures offres</p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/booking"
                className="px-6 py-3 bg-secondary text-white font-medium rounded-lg hover:bg-secondary-dark hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Réserver Maintenant
              </Link>
              <a
                href="tel:+212528930307"
                className="px-6 py-3 bg-white/10 text-white font-medium rounded-lg hover:bg-white/20 transition-all duration-300 inline-flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Nous Appeler
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}