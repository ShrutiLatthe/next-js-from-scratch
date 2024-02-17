import Link from 'next/link'
import React from 'react'

const LeftAside = () => {
  return (
    <aside className="col-3  nx-main">
    <ul className="nav flex-column">
      <li className="nav-item">
        <Link className="nav-link" href="/city">
          The City
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="/lakes">
          The Lakes
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link "href="/hotels" >
          The Hotels
        </Link>
      </li>
    </ul>
  </aside>
  )
}

export default LeftAside