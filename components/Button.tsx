import styles from '../styles/Button.module.css'
import Link from 'next/link'

interface ButtonProps {
  href?: string
  text: string
  onClick?: (e: any) => void

}

const Button = ({ href, text, onClick }: ButtonProps) => {
  return (
    <Link href={ href || '#'}>
      <button className={styles.button} onClick={onClick}>
        { text }
      </button>
    </Link>
  );
}

export default Button;