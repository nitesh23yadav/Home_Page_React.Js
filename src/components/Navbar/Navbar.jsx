import './Navbar.css'
const Navbar = () => {
  return (
    <div className='nav'>
      <div className="nav-logo">Ev-olution</div>
      <ul className='nav-menu'>
     <li className='nav-home'>Home</li>
     <li className='nav-explore'>Explore</li>
     <li className='nav-about'>About</li>
     <li className='nav-contact'>Contact</li>
      </ul>
    </div>
  )
}

export default Navbar
