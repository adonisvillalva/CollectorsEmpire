import Link from 'next/link'
import styles from '@/styles/components/header.module.scss'
import Image from 'next/image'
import logo from '@/public/Logo.png'

const links = [{
    label: 'Inicio',
    route: '/'
},{
    label: 'Blog',
    route: '/posts'
},{
    label: 'Tienda',
    route: 'https://store.collectors-empire.com/'
},{
    label: 'Contáctanos',
    route: '/about'
},{
    label: 'Nosotros',
    route: '/about'
}]
export default function Header(){
    return(
        <header className={styles.header}>
            <Link href="/">
                <Image width={30} height={47.79} className={styles.logo} src={logo} alt='Collectors Empire'/>
            </Link>
            <nav className={styles.block_navigation}>
                <ul className={styles.navigation}>
                    {links.map (({label, route}) =>(
                        <li className={styles.items_menu} key = {route}>
                            <Link href = {route} data-text={label}>
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>                
            </nav>
        </header>
    )
}