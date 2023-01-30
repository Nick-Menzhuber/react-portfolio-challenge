import Navigation from './Navigation';
import '../styles/Header.css';

export default function Header() {
    return (
        <div className="header">
            <h1 className='devName'><i class="fa-solid fa-less-than"></i> Nick Menzhuber <i class="fa-solid fa-slash-forward"></i><i class="fa-solid fa-greater-than"></i></h1>
            <Navigation />
        </div>
    )
}
