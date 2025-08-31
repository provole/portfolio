import ScrollSpyWrapper from "./components/ScrollSpyWrapper";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import CustomCursor from "./components/CustomCursor";

export default function Home() {
    return (
        <>
            <CustomCursor />
            <ScrollSpyWrapper>
                <About />
                <Experience />
                <Projects />
            </ScrollSpyWrapper>
        </>
    );
}
