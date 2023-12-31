import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
    return (
        <main className='container mx-auto max-w-6xl'>
            <Hero />
            <About />
            <Projects />
            <Contact />
        </main>
    );
}
