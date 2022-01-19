import CSSLogo from '../svg/tech/CSSLogo';
import './../style/slides.scss';

const Slides = () => {
    return (
        <div className="cards-container">
			<ul id="cards">
                <li className="card">
                    <div className="content">
                        <h1>tech stack</h1>
                        <p className="under-header">Technologies I'm familiar with</p>

                        <div className="tech-stack-container">
                            <div className="technologies">
                                <div className="item"><CSSLogo /></div>
                            </div>
                        </div>
                    </div>
                </li>
				<li className="card">
					<div className="content">
						
					</div>
				</li>
				<li className="card">
					<div className="content">
						
					</div>
				</li>
			</ul>
		</div>
    )
}

export default Slides;
