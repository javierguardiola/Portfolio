import { Bot, GitBranch, Briefcase, CodeXml, Github, Linkedin, Mail } from "lucide-react";
import { PlaceHolderImages } from "./placeholder-images";

export const navLinks = [
  { name: "Inicio", href: "#home" },
  { name: "Sobre mí", href: "#about" },
  { name: "Habilidades", href: "#skills" },
  { name: "Proyectos", href: "#projects" },
  { name: "Contacto", href: "#contact" },
];

export const socialLinks = [
    { name: "LinkedIn", href: "#", icon: Linkedin },
    { name: "GitHub", href: "#", icon: Github },
];

export const content = {
    hero: {
        title: "Javier Guardiola",
        subtitle: "Portfolio Profesional en RPA y BPM",
        description: "Técnico Superior con más de 2 años de experiencia en consultoría tecnológica, especializado en la automatización y optimización de procesos de negocio."
    },
    about: "Soy Javier Guardiola, Técnico Superior en Desarrollo de Aplicaciones Multiplataforma con más de 2 años de experiencia en consultoría tecnológica. Mi carrera profesional se ha desarrollado en EY Technology Consulting, donde he trabajado en proyectos de automatización de procesos (RPA) y gestión de procesos de negocio (BPM) para grandes compañías. Me apasiona la optimización de procesos mediante la tecnología y la implementación de soluciones que aporten eficiencia, escalabilidad y valor al negocio.",
    cta: "Mi perfil combina experiencia en consultoría, habilidades técnicas en las principales herramientas de RPA y BPM, y un enfoque práctico orientado a resultados. Me adapto con rapidez a nuevas tecnologías y entornos, aportando soluciones escalables y robustas que generan valor para la empresa.",
    contact: {
        title: "¿Quieres hablar sobre un proyecto o colaboración?",
        description: "Escríbeme y estaré encantado de conversar sobre cómo la automatización y la gestión de procesos pueden ayudar a tu organización."
    },
};

export const skills = [
  {
    icon: Bot,
    title: "RPA (Robotic Process Automation)",
    description: "Experiencia en el diseño y desarrollo de procesos con Blue Prism para automatizar tareas críticas en banca y telecomunicaciones.",
  },
  {
    icon: GitBranch,
    title: "BPM (Business Process Management)",
    description: "Desarrollo de flujos complejos en Appian, integrando datos, sistemas y usuarios para lograr procesos más ágiles y controlados.",
  },
  {
    icon: CodeXml,
    title: "Programación y Automatización",
    description: "Conocimientos sólidos en Java y experiencia con n8n para integraciones low-code y automatización de workflows.",
  },
  {
    icon: Briefcase,
    title: "Consultoría Tecnológica",
    description: "Participación en proyectos de gran impacto en clientes internacionales, garantizando calidad y cumplimiento de objetivos.",
  },
];

const findImage = (id: string) => PlaceHolderImages.find(img => img.id === id);

export const projects = [
  {
    title: "Banca March – Blue Prism",
    description: "Desarrollo de soluciones RPA para automatizar procesos financieros críticos, mejorando la eficiencia operativa y reduciendo errores manuales.",
    image: findImage("project-banca-march"),
    tags: ["RPA", "Blue Prism", "Banca"],
  },
  {
    title: "Telefónica – Blue Prism y Appian",
    description: "Implementación de flujos de automatización y BPM para optimizar la gestión de operaciones internas, integrando datos y sistemas de manera más ágil.",
    image: findImage("project-telefonica"),
    tags: ["RPA", "BPM", "Appian", "Telecom"],
  },
];

export const testimonials = [
    {
        quote: "La experiencia de Javier en Blue Prism fue un factor decisivo para nuestro proyecto de automatización financiera. Entregó una solución robusta que mejoró significativamente nuestra eficiencia.",
        author: "Gerente de Proyectos",
        company: "Sector Bancario",
        avatar: "https://picsum.photos/seed/test1/100/100"
    },
    {
        quote: "Trabajar con Javier en nuestra implementación de Appian fue muy fácil. Su comprensión de BPM y la optimización de procesos nos ayudó a agilizar operaciones internas complejas en Telefónica.",
        author: "Jefe de Operaciones",
        company: "Cliente de Telecomunicaciones",
        avatar: "https://picsum.photos/seed/test2/100/100"
    },
    {
        quote: "La solución de integración low-code que Javier construyó con n8n nos ahorró innumerables horas de trabajo manual. Su capacidad para captar rápidamente nuestras necesidades y ofrecer una solución práctica fue impresionante.",
        author: "Dueño de Pequeña Empresa",
        company: "Startup Tecnológica",
        avatar: "https://picsum.photos/seed/test3/100/100"
    }
];

export const avatarImage = findImage("avatar");
