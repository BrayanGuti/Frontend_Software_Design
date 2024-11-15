import React from 'react'
import { MapPin, Sun, Users, Sliders, Map, ThumbsUp, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom';


const Header: React.FC = () => (
  <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg">
    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      <div className="flex items-center">
        <MapPin className="h-8 w-8" />
        <span className="ml-2 text-2xl font-bold">Tour Mate</span>
      </div>
      <nav className="flex items-center space-x-6">
        <ul className="flex space-x-6">
          {['Inicio', '¿Cómo Funciona?', 'Características', 'Contacto'].map((item) => (
            <li key={item}>
              <Link to="/" className="hover:text-yellow-300 transition-colors">
                {item}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex space-x-4 ml-8">
          <Link to='/login' className="bg-transparent text-white border border-white px-4 py-2 rounded hover:bg-white hover:text-blue-700 transition-colors">
            Iniciar sesión
          </Link>
          <Link to='/register' className="bg-yellow-400 text-blue-900 px-4 py-2 rounded hover:bg-yellow-300 transition-colors">
            Registrarse
          </Link>
        </div>
      </nav>
    </div>
  </header>
)
const WelcomeSection: React.FC = () => (
  <section className="relative h-[90vh] bg-cover bg-center overflow-hidden" style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2013/03/12/13/48/view-92860_1280.jpg')" }}>
    <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-teal-800 opacity-30" />
    <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-start">
      <h1 className="text-6xl font-bold text-white mb-4 animate-fade-in-up">Viaja Inteligentemente</h1>
      <p className="text-2xl text-white mb-8 max-w-2xl animate-fade-in-up animation-delay-300">
        Descubre itinerarios personalizados en tiempo real con Tour Mate. Tu compañero de viaje inteligente que se adapta a tus preferencias y las condiciones actuales.
      </p>
      <button className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-300 transition-all transform hover:scale-105 animate-fade-in-up animation-delay-600">
        Comienza tu aventura
      </button>
    </div>
    <div className="absolute bottom-0 left-0 w-full overflow-hidden">
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-24 transform rotate-180">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-current text-white"></path>
      </svg>
    </div>
  </section>
)

const ProjectDescription: React.FC = () => (
  <section className="py-16 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-8 text-blue-800">¿Qué es Tour Mate?</h2>
      <p className="text-xl text-center text-gray-700 mb-12 max-w-4xl mx-auto">
        Tour Mate es una plataforma de recomendaciones turísticas impulsada por IA que crea itinerarios personalizados basados en tus preferencias, el clima actual y la afluencia de gente en tiempo real.
      </p>
      <div className="flex flex-wrap justify-center gap-8">
        {[
          { icon: Sliders, text: 'Personalización', color: 'bg-blue-100 text-blue-600' },
          { icon: Sun, text: 'Sostenibilidad', color: 'bg-yellow-100 text-yellow-600' },
          { icon: Users, text: 'Accesibilidad', color: 'bg-green-100 text-green-600' },
        ].map(({ icon: Icon, text, color }) => (
          <div key={text} className={`flex flex-col items-center p-6 rounded-lg ${color} transform hover:scale-105 transition-all`}>
            <Icon className="h-16 w-16 mb-4" />
            <span className="text-lg font-semibold">{text}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
)

const FeatureCard: React.FC<{ icon: React.ElementType; title: string; description: string; color: string }> = ({
  icon: Icon,
  title,
  description,
  color,
}) => (
  <div className={`${color} p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all`}>
    <Icon className="h-12 w-12 mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </div>
)

const FeaturesSection: React.FC = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-800">Características Principales</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <FeatureCard
          icon={Sliders}
          title="Itinerarios Personalizados"
          description="Planifica tu viaje con itinerarios adaptados a tus preferencias y actualizados en tiempo real."
          color="bg-blue-50 text-blue-600"
        />
        <FeatureCard
          icon={Users}
          title="Preferencias Configurables"
          description="Ajusta tus preferencias de viaje para obtener recomendaciones más precisas y relevantes."
          color="bg-green-50 text-green-600"
        />
        <FeatureCard
          icon={Map}
          title="Mapas Interactivos"
          description="Navega fácilmente con nuestros mapas interactivos integrados en la plataforma."
          color="bg-yellow-50 text-yellow-600"
        />
        <FeatureCard
          icon={ThumbsUp}
          title="Sistema de Retroalimentación"
          description="Mejora tus futuras experiencias compartiendo tu opinión sobre las recomendaciones."
          color="bg-purple-50 text-purple-600"
        />
      </div>
    </div>
  </section>
)

const CallToAction: React.FC = () => (
  <section className="py-16 bg-gradient-to-r from-blue-600 to-teal-400 text-white">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-4xl font-bold mb-4">¿Listo para explorar el mundo con Tour Mate?</h2>
      <p className="text-xl mb-8">Regístrate ahora y comienza a planificar tu próxima aventura.</p>
      <button className="bg-blue-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition-all transform hover:scale-105 flex items-center mx-auto">
        Registrarse Gratis
        <ChevronRight className="ml-2" />
      </button>
    </div>
  </section>
)

const TestimonialCard: React.FC<{ name: string; location: string; quote: string; image: string }> = ({ name, location, quote, image }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all">
    <img src={image} alt={name} className="w-20 h-20 rounded-full mx-auto mb-4" />
    <p className="text-gray-700 mb-4 italic">"{quote}"</p>
    <div className="font-semibold text-blue-600">{name}</div>
    <div className="text-sm text-gray-500">{location}</div>
  </div>
)

const TestimonialsSection: React.FC = () => (
  <section className="py-16 bg-gray-100">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-800">Lo que dicen nuestros usuarios</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <TestimonialCard
          name="Ana García"
          location="Madrid, España"
          quote="Tour Mate hizo que mi viaje a París fuera inolvidable. Las recomendaciones se adaptaron perfectamente a mis intereses y al clima cambiante."
          image="https://writestylesonline.com/wp-content/uploads/2016/08/Follow-These-Steps-for-a-Flawless-Professional-Profile-Picture.jpg"
        />
        <TestimonialCard
          name="Carlos Rodríguez"
          location="Buenos Aires, Argentina"
          quote="Increíble cómo Tour Mate optimizó mi tiempo en Nueva York. Pude ver todo lo que quería sin estrés ni largas esperas."
          image="https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png"
        />
        <TestimonialCard
          name="Sofía Martínez"
          location="Ciudad de México, México"
          quote="La función de mapas interactivos de Tour Mate fue un salvavidas en Tokio. Nunca me había sentido tan segura explorando una ciudad extranjera."
          image="https://media.licdn.com/dms/image/C4E03AQHF55pmDjiKPg/profile-displayphoto-shrink_800_800/0/1561584108063?e=2147483647&v=beta&t=8hrIrailTXl-XtSG4mFtOOrzxlJ8SE7dkb1nUSvvaHM"
        />
      </div>
    </div>
  </section>
)

const Footer: React.FC = () => (
  <footer className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-12">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-between">
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h3 className="text-2xl font-semibold mb-2">Tour Mate</h3>
          <p className="text-blue-200">Tu compañero de viaje inteligente</p>
        </div>
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h4 className="text-xl font-semibold mb-2">Enlaces Rápidos</h4>
          <ul className="space-y-2">
            {['Inicio', '¿Cómo Funciona?', 'Características', 'Contacto'].map((item) => (
              <li key={item}>
                <a href="#" className="text-blue-200 hover:text-white transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h4 className="text-xl font-semibold mb-2">Legal</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                Términos y Condiciones
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                Política de Privacidad
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-blue-700 text-center text-blue-200">
        <p>&copy; {new Date().getFullYear()} Tour Mate. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
)

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <WelcomeSection />
        <ProjectDescription />
        <FeaturesSection />
        <CallToAction />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  )
}