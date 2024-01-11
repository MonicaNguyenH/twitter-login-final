import Link from "next/link"
import styles from './Menu.module.css'

export default function Menu(){
    return(
        <>
            <ul className={styles.ul}>
                <li><Link href={'/'} className={styles.hyperlink}>About</Link></li>
                <li><Link href={'/'} className={styles.hyperlink}>Download the X app</Link></li>
                <li><Link href={'/'} className={styles.hyperlink}>Terms of Service</Link></li>
                <li><Link href={'/'} className={styles.hyperlink}>Privacy Policy</Link></li>
                <li><Link href={'/'} className={styles.hyperlink}>Cookie Policy</Link></li>
                <li><Link href={'/'} className={styles.hyperlink}>Accessibility</Link></li>
                <li><Link href={'/'} className={styles.hyperlink}>Ads info</Link></li>
                <li><Link href={'/'} className={styles.hyperlink}>Blog</Link></li>
                <li><Link href={'/'} className={styles.hyperlink}>Status</Link></li>
                <li><Link href={'/'} className={styles.hyperlink}>Careers</Link></li>
                <li><Link href={'/'} className={styles.hyperlink}>Brand Resources</Link></li>
                <li><Link href={'/'} className={styles.hyperlink}>Advertising</Link></li>
                <li><Link href={'/'} className={styles.hyperlink}>Marketing</Link></li>
                <li><Link href={'/'} className={styles.hyperlink}>X for Business</Link></li>
                <li><Link href={'/'} className={styles.hyperlink}>Developers</Link></li>
                <li><Link href={'/'} className={styles.hyperlink}>Directory</Link></li>
                <li><Link href={'/'} className={styles.hyperlink}>Settings</Link></li>
            </ul>
        </>
    )
}