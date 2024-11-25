import { Link } from 'react-router-dom'
import styles from './cabecalho.module.css'


function Header() {
 return(
    <header className={styles.header}>
            <Link to="/">
            <div>
                Loja
            </div>
            </Link>
        </header>
 )

}

export default Header