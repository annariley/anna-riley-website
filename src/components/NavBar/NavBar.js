import me from '../../me.JPG';
import { Routes, Route, Link } from "react-router-dom";
import { Home } from '../Home/Home'
import { Work } from '../Work/Work'

function NavBar() {
    return (
        <>
            <div styles={{ height: '500px', overflowY: 'scroll' }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="about" element={<About />} />
                </Routes>

                <div className="TopNav">
                    <div className="LeftNav">
                        <p>
                            w o r k
                        </p>
                    </div>
                    <div className="RightNav">
                        <p>
                            l i f e
                        </p>
                    </div>
                </div>
                <header className="App-header">
                    <img src={me} className="App-logo" alt="logo" />
                    <p>
                        anna marie riley dot com
                    </p>
                </header>
            </div>
        </>
    );
}

export { NavBar };

function About() {
    return (
        <>
            <main>
                <h2>Who are we?</h2>
                <p>
                    That feels like an existential question, don't you
                    think?
                </p>
            </main>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </>
    );
}

