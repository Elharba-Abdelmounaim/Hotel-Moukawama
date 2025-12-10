import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Phone, Calendar, MapPin, Globe } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Accueil' },
    { href: '/rooms', label: 'Chambres' },
    { href: '/booking', label: 'Réservation' },
    { href: '/gallery', label: 'Galerie' },
    { href: '/about', label: 'À propos' },
    { href: '/contact', label: 'Contact' }
  ]

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-primary to-primary-dark text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+212528930307" className="hover:text-secondary transition-colors">
                  +212 5289-30307
                </a>
              </div>
              
              <div className="hidden md:flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Dakhla, Morocco</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-2">
                <Globe className="w-4 h-4" />
                <select className="bg-transparent text-sm focus:outline-none">
                  <option value="fr">Français</option>
                  <option value="ar">العربية</option>
                  <option value="en">English</option>
                </select>
              </div>
              
              <a
                href="/booking"
                className="px-3 py-1 bg-secondary text-white text-sm font-medium rounded-full hover:bg-secondary-dark transition-colors duration-300 flex items-center gap-2"
              >
                <Calendar className="w-3 h-3" />
                Réserver
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  HM
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-secondary rounded-full"></div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                  Hôtel Moukawama
                </h1>
                <div className="text-xs text-gray-500">Dakhla, Morocco</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-gray-700 hover:text-primary font-medium rounded-lg hover:bg-gray-50 transition-all duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-8 transition-all duration-300"></span>
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link
                href="/contact"
                className="px-6 py-3 bg-gradient-to-r from-primary to-primary-dark text-white font-medium rounded-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 inline-flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Nous Contacter
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-xl animate-slideDown">
            <div className="max-w-7xl mx-auto px-4 py-6">
              <div className="space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors duration-300 font-medium"
                  >
                    {link.label}
                  </Link>
                ))}
                
                <div className="pt-4 border-t border-gray-200 mt-4">
                  <div className="space-y-3">
                    <a
                      href="tel:+212528930307"
                      className="flex items-center gap-3 px-4 py-3 bg-primary/5 text-primary rounded-lg hover:bg-primary/10 transition-colors"
                    >
                      <Phone className="w-5 h-5" />
                      +212 5289-30307
                    </a>
                    
                    <Link
                      href="/booking"
                      className="block px-4 py-3 bg-primary text-white text-center rounded-lg hover:bg-primary-dark transition-colors font-medium"
                    >
                      Réserver Maintenant
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}