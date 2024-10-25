import { useState } from 'react'
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function HomePage() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        // Aquí iría la lógica para enviar el formulario
        console.log('Formulario enviado', { name, email, message })
    }

    return (
        <div className="min-h-screen bg-background text-foreground">
            <header className="py-6 px-4 md:px-6 lg:px-8 flex justify-between items-center border-b">
                <h1 className="text-2xl font-bold">Tu Nombre</h1>
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
                        <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer">
                            <Github className="w-6 h-6" />
                        </a>
                        <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="w-6 h-6" />
                        </a>
                        <a href="mailto:tu@email.com">
                            <Mail className="w-6 h-6" />
                        </a>
                    </div>
                    <a href="#skills" className="inline-block mt-8 animate-bounce">
                        <ChevronDown className="w-8 h-8" />
                    </a>
                </section>

                <section id="skills" className="mb-16">
                    <h2 className="text-3xl font-bold mb-6 text-center">Habilidades</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {['JavaScript', 'React', 'Node.js', 'TypeScript', 'HTML', 'CSS', 'Git', 'SQL'].map((skill) => (
                            <div key={skill} className="bg-secondary text-secondary-foreground rounded-lg p-4 text-center">
                                {skill}
                            </div>
                        ))}
                    </div>
                </section>

                <section id="projects" className="mb-16">
                    <h2 className="text-3xl font-bold mb-6 text-center">Proyectos Destacados</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {[1, 2].map((project) => (
                            <div key={project} className="border rounded-lg overflow-hidden">
                                <img src={`/placeholder.svg?height=200&width=400`} alt={`Proyecto ${project}`} className="w-full h-48 object-cover" />
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold mb-2">Nombre del Proyecto {project}</h3>
                                    <p className="text-muted-foreground mb-4">Breve descripción del proyecto y las tecnologías utilizadas.</p>
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