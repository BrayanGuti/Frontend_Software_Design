import React, { useState } from 'react'
import { MapPin, ChevronLeft, Mail, Lock, ArrowRight, Key } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function LoginPage() {
  const [showRecoveryForm, setShowRecoveryForm] = useState(false)
  const [recoveryEmailSent, setRecoveryEmailSent] = useState(false)
  const [recoveryEmail, setRecoveryEmail] = useState('')

  const toggleRecoveryForm = (e: React.MouseEvent) => {
    e.preventDefault()
    setShowRecoveryForm(!showRecoveryForm)
    setRecoveryEmailSent(false)
    setRecoveryEmail('')
  }

  const handleRecoverySubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el código de recuperación
    setRecoveryEmailSent(true)
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
      <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <MapPin className="h-8 w-8 " />
            <span className="ml-2 text-2xl font-bold">Tour Mate</span>
          </div>
          <Link to="/" className="flex items-center text-white hover:text-yellow-300 transition-colors">
            <ChevronLeft className="h-5 w-5 mr-1" />
            Volver al inicio
          </Link>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden transform ">
          <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 px-6 py-8 text-white">
            <h2 className="text-3xl font-bold text-center">
              {showRecoveryForm ? 'Recuperar Contraseña' : 'Iniciar Sesión'}
            </h2>
            <p className="mt-2 text-center">
              {showRecoveryForm ? 'Recupera el acceso a tu cuenta' : 'Accede a tu cuenta de Tour Mate'}
            </p>
          </div>
          <div className="px-6 py-8">
            <div className={`transition-all duration-500 ease-in-out ${showRecoveryForm ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}>
              <form className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo electrónico</label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-indigo-500" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-300 sm:text-sm"
                      placeholder="tu@ejemplo.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">Contraseña</label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-indigo-500" />
                    </div>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      required
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-300 sm:text-sm"
                      placeholder="••••••••"
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 transform hover:scale-105"
                  >
                    Iniciar Sesión
                  </button>
                </div>
              </form>
              <div className="mt-4 text-center">
                <a
                  href="#"
                  onClick={toggleRecoveryForm}
                  className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors"
                >
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
            </div>

            <div className={`transition-all duration-500 ease-in-out ${showRecoveryForm ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
              <form onSubmit={handleRecoverySubmit} className="space-y-6">
                <div>
                  <label htmlFor="recovery-email" className="block text-sm font-medium text-gray-700">Correo electrónico</label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-indigo-500" />
                    </div>
                    <input
                      type="email"
                      id="recovery-email"
                      name="recovery-email"
                      required
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-300 sm:text-sm"
                      placeholder="tu@ejemplo.com"
                      value={recoveryEmail}
                      onChange={(e) => setRecoveryEmail(e.target.value)}
                    />
                  </div>
                </div>
                {recoveryEmailSent && (
                  <div>
                    <label htmlFor="recovery-code" className="block text-sm font-medium text-gray-700">Código de recuperación</label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Key className="h-5 w-5 text-indigo-500" />
                      </div>
                      <input
                        type="text"
                        id="recovery-code"
                        name="recovery-code"
                        required
                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-300 sm:text-sm"
                        placeholder="Ingresa el código"
                      />
                    </div>
                  </div>
                )}
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition-all duration-300 transform hover:scale-105"
                  >
                    {recoveryEmailSent ? 'Verificar código' : 'Enviar código de recuperación'}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </form>
              <div className="mt-4 text-center">
                <a
                  href="#"
                  onClick={toggleRecoveryForm}
                  className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors"
                >
                  Volver al inicio de sesión
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}