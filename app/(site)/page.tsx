import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";

export default function Home() {
    return (
        <main className='container mx-auto max-w-6xl'>
            <Hero />
            <About />
            <Projects />
        </main>
    );
}
