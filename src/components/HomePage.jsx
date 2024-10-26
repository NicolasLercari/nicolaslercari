import {useState} from 'react'
import {Github, Linkedin, Mail, ChevronDown} from 'lucide-react'
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Textarea} from "@/components/ui/textarea"

const projects = [{
    id: 1,
    name: 'Money On Chain - DeFi Protocol ',
    srcImage: './logo_isotipo.svg',
    description: 'Money On Chain is a DeFi protocol built on the RSK blockchain, leveraging Bitcoin to offer a decentralized token ecosystem with stablecoin and leveraged token options. It provides users with DoC, a stablecoin pegged to the U.S. dollar, and BPRO, a token for Bitcoin holders seeking passive income and leverage on their Bitcoin',
    techStack: 'Technologies Used:\n' +
        '\n' +
        '\t•\tFrontend: React for building an interactive user interface\n' +
        '\t•\tBackend: Node.js with the Meteor framework for efficient data handling and API integration\n' +
        '\t•\tDatabase: MongoDB for managing user and transaction data\n' +
        '\t•\tBlockchain and Smart Contracts: Solidity for developing secure smart contracts on the RSK blockchain'
}, {id: 2, name: 'Ping Wallet', srcImage: './placeholder.svg', description: 'Ping Wallet is a global payments platform that allows users to receive payments and fees from anywhere in the world, with the flexibility to access funds at any time. The platform also enables users to exchange fiat currencies for cryptocurrencies, providing a seamless bridge between traditional and digital finance.', techStack: '\t•\tFrontend: React for building a responsive and user-friendly interface\n' +
        '\t•\tBackend: Node.js for managing server-side operations, with the Express framework for API development\n' +
        '\t•\tDatabase: MongoDB for secure and efficient data storage\n' +
        '\t•\tBlockchain and Crypto Integrations: Solidity for smart contract development, enabling crypto-fiat exchange and secure transactions'}]

export default function HomePage() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Formulario enviado', {name, email, message})
    }

    return (
        <div className="min-h-screen bg-background text-foreground">
            <header className="py-6 px-4 md:px-6 lg:px-8 flex justify-between items-center border-b">
                <h1 className="text-2xl font-bold">Nicolas Lercari</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li><a href="#about" className="hover:underline">Sobre mí</a></li>
                        <li><a href="#skills" className="hover:underline">Habilidades</a></li>
                        <li><a href="#projects" className="hover:underline">Proyectos</a></li>
                        <li><a href="#contact" className="hover:underline">Contacto</a></li>
                    </ul>
                </nav>
            </header>

            <main className="container mx-auto px-4 py-8">
                <section id="about" className="mb-16 text-center">
                    <h2 className="text-4xl font-bold mb-4">Software Engineer</h2>
                    <p className="text-xl mb-6">Apasionado por crear soluciones innovadoras y eficientes</p>
                    <div className="flex justify-center space-x-4">
                        <a href="https://github.com/NicolasLercari" target="_blank" rel="noopener noreferrer">
                            <Github className="w-6 h-6"/>
                        </a>
                        <a href="https://www.linkedin.com/in/nicolas-lercari-37720b7a" target="_blank"
                           rel="noopener noreferrer">
                            <Linkedin className="w-6 h-6"/>
                        </a>
                        <a href="mailto:nicolaslercari@email.com">
                            <Mail className="w-6 h-6"/>
                        </a>
                    </div>
                    <a href="#skills" className="inline-block mt-8 animate-bounce">
                        <ChevronDown className="w-8 h-8"/>
                    </a>
                </section>

                <section id="skills" className="mb-16">
                    <h2 className="text-3xl font-bold mb-6 text-center">Habilidades</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {['JavaScript', 'React', 'Node.js', 'TypeScript', 'HTML', 'CSS', 'Git', 'PostgreSQL', 'AWS', 'GCP'].map((skill) => (
                            <div key={skill}
                                 className="bg-secondary text-secondary-foreground rounded-lg p-4 text-center">
                                {skill}
                            </div>
                        ))}
                    </div>
                </section>

                <section id="projects" className="mb-16">
                    <h2 className="text-3xl font-bold mb-6 text-center">Proyectos Destacados</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {projects.map((project) => (
                            <div key={project.id} className="border rounded-lg overflow-hidden">
                                <img src={`${project.srcImage}`} alt={`Project ${project.name}`}
                                     className="w-full h-48 object-cover"/>
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                                    <p className="text-muted-foreground mb-4">{project.description}</p>
                                    <p className="text-muted-foreground mb-4">{project.techStack}</p>
                                    <Button>Ver más</Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section id="contact" className="mb-16">
                    <h2 className="text-3xl font-bold mb-6 text-center">Contacto</h2>
                    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium mb-1">Nombre</label>
                            <Input
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                            <Input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-sm font-medium mb-1">Mensaje</label>
                            <Textarea
                                id="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            />
                        </div>
                        <Button type="submit" className="w-full">Enviar</Button>
                    </form>
                </section>
            </main>

            <footer className="bg-muted py-6 px-4 text-center">
                <p>&copy; {new Date().getFullYear()} Tu Nombre. Todos los derechos reservados.</p>
            </footer>
        </div>
    )
}