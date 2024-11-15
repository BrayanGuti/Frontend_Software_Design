import { MapPin, Calendar, Star, Settings, Map, Bookmark, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <MapPin className="h-8 w-8" />
          <span className="ml-2 text-2xl font-bold">Tour Mate</span>
        </div>
        <nav className="flex items-center space-x-6">
          <ul className="flex space-x-6">
            {['Inicio', 'Explorar', 'Mis Viajes', 'Perfil'].map((item) => (
              <li key={item}>
                <Link to="/" className="hover:text-yellow-300 transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          <button className="bg-yellow-400 text-blue-900 px-4 py-2 rounded hover:bg-yellow-300 transition-colors">
            Cerrar sesión
          </button>
        </nav>
      </div>
    </header>
  );
}

function ProfileHeader() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <img
            src="https://i.pravatar.cc/150?img=68"
            alt="Foto de perfil"
            className="w-32 h-32 rounded-full border-4 border-white shadow-lg mb-4 md:mb-0 md:mr-8"
          />
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold mb-2">María González</h1>
            <p className="text-xl mb-4">Aventurera entusiasta | Amante de la fotografía</p>
            <div className="flex justify-center md:justify-start space-x-4">
              <span className="flex items-center">
                <MapPin className="h-5 w-5 mr-1" />
                Madrid, España
              </span>
              <span className="flex items-center">
                <Calendar className="h-5 w-5 mr-1" />
                Miembro desde 2022
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { label: 'Viajes Realizados', value: '12' },
            { label: 'Países Visitados', value: '8' },
            { label: 'Reseñas Escritas', value: '24' },
            { label: 'Fotos Compartidas', value: '156' },
          ].map(({ label, value }) => (
            <div key={label} className="bg-white p-4 rounded-lg shadow">
              <div className="text-3xl font-bold text-blue-600">{value}</div>
              <div className="text-gray-600">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function UpcomingTrip() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
      <h3 className="text-2xl font-semibold mb-4 text-blue-800">Próximo Viaje</h3>
      <div className="flex items-center mb-4">
        <Map className="h-6 w-6 mr-2 text-blue-600" />
        <span className="text-lg">París, Francia</span>
      </div>
      <div className="flex items-center mb-4">
        <Calendar className="h-6 w-6 mr-2 text-blue-600" />
        <span>15 - 22 Julio, 2023</span>
      </div>
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
        Ver Detalles
      </button>
    </div>
  );
}

function RecentActivity() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl font-semibold mb-4 text-blue-800">Actividad Reciente</h3>
      <ul className="space-y-4">
        {[
          { action: 'Reseña añadida', place: 'Museo del Louvre', date: '2 días atrás' },
          { action: 'Viaje completado', place: 'Roma, Italia', date: '1 semana atrás' },
          { action: 'Foto compartida', place: 'Torre Eiffel', date: '2 semanas atrás' },
        ].map(({ action, place, date }, index) => (
          <li key={index} className="flex items-center">
            <Star className="h-5 w-5 mr-2 text-yellow-500" />
            <div>
              <span className="font-semibold">{action}</span> - {place}
              <div className="text-sm text-gray-500">{date}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProfileContent() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <UpcomingTrip />
            <RecentActivity />
          </div>
          <div>
            <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">Mis Intereses</h3>
              <div className="flex flex-wrap gap-2">
                {['Museos', 'Gastronomía', 'Playa', 'Senderismo', 'Fotografía'].map((interest) => (
                  <span key={interest} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">Acciones Rápidas</h3>
              <ul className="space-y-2">
                {[
                  { text: 'Editar Perfil', icon: Settings },
                  { text: 'Mis Itinerarios', icon: Map },
                  { text: 'Lugares Guardados', icon: Bookmark },
                ].map(({ text, icon: Icon }) => (
                  <li key={text}>
                    <button className="w-full text-left flex items-center justify-between p-2 hover:bg-gray-100 rounded transition-colors">
                      <span className="flex items-center">
                        <Icon className="h-5 w-5 mr-2 text-blue-600" />
                        {text}
                      </span>
                      <ChevronRight className="h-5 w-5 text-gray-400" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ProfilePage() {
  const { id } = useParams()
  return (
    <div className="min-h-screen flex flex-col">
      <h1>{id}</h1>
      <Header />
      <main className="flex-grow">
        <ProfileHeader />
        <StatsSection />
        <ProfileContent />
      </main>
    </div>
  );
}
