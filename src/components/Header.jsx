import { BsFillMicFill, BsGraphUpArrow } from 'react-icons/bs';
import { IoSettingsSharp } from 'react-icons/io5';
import '../styles/header.css';
import { FaChartLine } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="header-wrapper" data-testid="header">
      <FaChartLine className='stock-view-logo' />
      <h1 className="header-text">
        Stock View
      </h1>
      <div className="header-icon-wrapper">
        <BsFillMicFill className="header-icon"/>
        <IoSettingsSharp className="header-icon"/>
      </div>
    </header>
  )
}