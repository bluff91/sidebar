import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'
import { useAppContext } from './Context'

const Sidebar = () => {
  const { toggleSidebar, closeSidebar } = useAppContext()
  return (
    <aside className={`${toggleSidebar ? 'sidebar show-sidebar' : 'sidebar'}`}>
      <div className="sidebar-header">
        <img src={logo} alt="logo" />
        <FaTimes className="close-btn" onClick={closeSidebar} />
      </div>
      <ul className="links">
        {links.map((item) => {
          return (
            <li key={item.id}>
              <a href={item.url}>
                {item.icon} {item.text}
              </a>
            </li>
          )
        })}
      </ul>
      <ul className="social-icons">
        {social.map((item) => {
          return (
            <li key={item.id}>
              <a href={item.url}>{item.icon}</a>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}
export default Sidebar
