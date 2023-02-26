import { Navigation } from './Navigation';
import '../styles/Header.css';

export default function Header() {
    return (
        <div className="header">
            <h1 className='devName'><i className="fa-solid fa-less-than"></i> Nick Menzhuber <i className="fa-solid fa-slash-forward"></i><i className="fa-solid fa-greater-than"></i></h1>
            <Navigation />
        </div>
    )
}
