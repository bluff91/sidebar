import { FaBars } from 'react-icons/fa'
import { useAppContext } from './Context'

const Home = () => {
  const { openSidebar, openModal } = useAppContext()

  return (
    <main>
      <FaBars className="sidebar-toggle" onClick={openSidebar} />
      <button className="btn" onClick={openModal}>
        show modal
      </button>
    </main>
  )
}
export default Home
