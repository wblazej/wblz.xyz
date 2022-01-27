import Slider from '../components/Slider';
import TechStack from '../components/slides/TechStack';
import Projects from '../components/slides/Projects';
import About from '../components/slides/About';

const Slides = () => {
    return (
        <Slider scrollFactor={1.2} items={[<TechStack/>, <Projects/>, <About/>]} />
    )
}

export default Slides;
