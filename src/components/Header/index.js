import {Link} from 'react-router-dom'
const Header = () => {
    return(
        <header>
            <nav>
                <Link to='/'> Home </Link>
                <Link to='/Information'>Informativo</Link>
                <Link to='/Dashboard'> Postos de Coleta </Link>
            </nav>
        </header>
    )
}
export default Header