import styles from "@styles/Menu.module.scss"

const Menu = () => {
  return (
    <div className={styles.menu}>
      <ul>
        <li>
          <a href="/" className="title">
            My orders
          </a>
        </li>
        <li>
          <a href="/">My account</a>
        </li>
        <li>
          <a href="/">Sign out</a>
        </li>
      </ul>
    </div>
  )
}

export default Menu
