import { useState } from 'react';
import { Github, Linkedin, Mail, ChevronDown, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { LanguageSwitch } from '@/components/LanguageSwitch';
import { useTranslation } from '@/hooks/useTranslation';

const projects = [
  {
    id: 1,
    name: 'Money On Chain - DeFi Protocol ',
    srcImage: './logo_isotipo.svg',
    description: {
      en: 'Money On Chain is a DeFi protocol built on the RSK blockchain, leveraging Bitcoin to offer a decentralized token ecosystem with stablecoin and leveraged token options. It provides users with DoC, a stablecoin pegged to the U.S. dollar, and BPRO, a token for Bitcoin holders seeking passive income and leverage on their Bitcoin',
      es: 'Money On Chain es un protocolo DeFi construido en la blockchain RSK, aprovechando Bitcoin para ofrecer un ecosistema de tokens descentralizado con opciones de stablecoin y tokens apalancados. Proporciona a los usuarios DoC, una stablecoin vinculada al dólar estadounidense, y BPRO, un token para los titulares de Bitcoin que buscan ingresos pasivos y apalancamiento en su Bitcoin'
    },
    techStack: {
      en: 'Technologies Used:\n\n\t•\tFrontend: React for building an interactive user interface\n\t•\tBackend: Node.js with the Meteor framework for efficient data handling and API integration\n\t•\tDatabase: MongoDB for managing user and transaction data\n\t•\tBlockchain and Smart Contracts: Solidity for developing secure smart contracts on the RSK blockchain',
      es: 'Tecnologías Utilizadas:\n\n\t•\tFrontend: React para construir una interfaz de usuario interactiva\n\t•\tBackend: Node.js con el framework Meteor para el manejo eficiente de datos e integración de API\n\t•\tBase de datos: MongoDB para gestionar datos de usuarios y transacciones\n\t•\tBlockchain y Smart Contracts: Solidity para desarrollar contratos inteligentes seguros en la blockchain RSK'
    }
  },
  {
    id: 2,
    name: 'Ping Wallet',
    srcImage: './placeholder.svg',
    description: {
      en: 'Ping Wallet is a global payments platform that allows users to receive payments and fees from anywhere in the world, with the flexibility to access funds at any time. The platform also enables users to exchange fiat currencies for cryptocurrencies, providing a seamless bridge between traditional and digital finance.',
      es: 'Ping Wallet es una plataforma de pagos global que permite a los usuarios recibir pagos y comisiones desde cualquier parte del mundo, con la flexibilidad de acceder a los fondos en cualquier momento. La plataforma también permite a los usuarios intercambiar monedas fiduciarias por criptomonedas, proporcionando un puente perfecto entre las finanzas tradicionales y digitales.'
    },
    techStack: {
      en: '\t•\tFrontend: React for building a responsive and user-friendly interface\n\t•\tBackend: Node.js for managing server-side operations, with the Express framework for API development\n\t•\tDatabase: MongoDB for secure and efficient data storage\n\t•\tBlockchain and Crypto Integrations: Solidity for smart contract development, enabling crypto-fiat exchange and secure transactions',
      es: '\t•\tFrontend: React para construir una interfaz responsive y amigable\n\t•\tBackend: Node.js para gestionar operaciones del servidor, con el framework Express para desarrollo de API\n\t•\tBase de datos: MongoDB para almacenamiento seguro y eficiente de datos\n\t•\tIntegraciones Blockchain y Crypto: Solidity para desarrollo de contratos inteligentes, permitiendo el intercambio crypto-fiat y transacciones seguras'
    }
  },
];

export default function HomePage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, language } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted', { name, email, message });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="py-4 px-4 md:py-6 md:px-6 lg:px-8 flex justify-between items-center border-b relative">
        <h1 className="text-xl md:text-2xl font-bold">Nicolas Lercari</h1>

        <div className="flex items-center space-x-4">
          <div className="md:hidden">
            <LanguageSwitch />
          </div>

          <button onClick={toggleMenu} className="md:hidden">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <nav className="hidden md:block">

          <ul className="flex space-x-4">

            <li>
              <a href="#about" className="hover:underline">
                {t('nav.about')}
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:underline">
                {t('nav.skills')}
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:underline">
                {t('nav.projects')}
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                {t('nav.contact')}
              </a>
            </li>

            <LanguageSwitch />
          </ul>
        </nav>

        {isMenuOpen && (
          <nav className="absolute top-full left-0 right-0 bg-background border-b md:hidden z-50">
            <ul className="flex flex-col p-4">
              <li className="py-2">
                <a href="#about" className="hover:underline" onClick={closeMenu}>
                  {t('nav.about')}
                </a>
              </li>
              <li className="py-2">
                <a href="#skills" className="hover:underline" onClick={closeMenu}>
                  {t('nav.skills')}
                </a>
              </li>
              <li className="py-2">
                <a href="#projects" className="hover:underline" onClick={closeMenu}>
                  {t('nav.projects')}
                </a>
              </li>
              <li className="py-2">
                <a href="#contact" className="hover:underline" onClick={closeMenu}>
                  {t('nav.contact')}
                </a>
              </li>
            </ul>
          </nav>
        )}
      </header>

      <main className="container mx-auto px-4 py-8">
        <section id="about" className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('about.title')}</h2>
          <p className="text-base md:text-xl mb-6 max-w-3xl mx-auto">
            {t('about.description')}
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://github.com/NicolasLercari"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/nicolas-lercari-37720b7a"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:nicolaslercari@email.com"
              className="hover:scale-110 transition-transform"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <a href="#skills" className="inline-block mt-8 animate-bounce">
            <ChevronDown className="w-8 h-8" />
          </a>
        </section>

        <section id="skills" className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">{t('skills.title')}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
            {[
              'JavaScript',
              'React',
              'Node.js',
              'TypeScript',
              'HTML',
              'CSS',
              'Git',
              'PostgreSQL',
              'AWS',
              'GCP',
            ].map((skill) => (
              <div
                key={skill}
                className="bg-secondary text-secondary-foreground rounded-lg p-3 md:p-4 text-center text-sm md:text-base hover:scale-105 transition-transform"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            {t('projects.title')}
          </h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={`${project.srcImage}`}
                  alt={`Project ${project.name}`}
                  className="w-full h-40 md:h-48 p-4 md:p-6 object-contain"
                />
                <div className="p-4">
                  <h3 className="text-lg md:text-xl font-semibold mb-2">{project.name}</h3>
                  <p className="text-sm md:text-base text-muted-foreground mb-4">
                    {project.description[language]}
                  </p>
                  <p className="text-sm md:text-base text-muted-foreground mb-4 whitespace-pre-line">
                    {project.techStack[language]}
                  </p>
                  <Button className="w-full sm:w-auto">{t('projects.viewMore')}</Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">{t('contact.title')}</h2>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                {t('contact.name')}
              </label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                {t('contact.email')}
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-1"
              >
                {t('contact.message')}
              </label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full min-h-[120px]"
              />
            </div>
            <Button type="submit" className="w-full">
              {t('contact.send')}
            </Button>
          </form>
        </section>
      </main>

      <footer className="bg-muted py-4 md:py-6 px-4 text-center text-sm md:text-base">
        <p>
          &copy; {new Date().getFullYear()} Nicolas Lercari. {t('footer.rights')}
        </p>
      </footer>
    </div>
  );
}