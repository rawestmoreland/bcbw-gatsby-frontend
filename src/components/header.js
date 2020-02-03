import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'
import {
  Container,
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  NavItem,
  NavLink,
  NavbarText,
  Collapse,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from 'reactstrap'
import Logo from '../images/bcbw_logo.png'
import Icon from '../images/gatsby-icon.png'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useStaticQuery } from 'gatsby'

import '../styles/Nav/nav.css'

library.add(fab, faBars, faTimes)

const Header = ({ siteTitle }) => {
  const [isOpen, setIsOpen] = useState(false)

  const menuQuery = useStaticQuery(graphql`
    query menuQuery {
      allWordpressWpApiMenusMenusItems {
        nodes {
          items {
            title
            url
            wordpress_id
            wordpress_children {
              title
              url
              wordpress_id
            }
          }
        }
      }
    }
  `)

  const data = menuQuery.allWordpressWpApiMenusMenusItems.nodes[0].items

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="site-header">
      <div className="nav-menu-toggle">
        <span>
          {!isOpen ? (
            <FontAwesomeIcon onClick={toggle} icon={faBars} size="lg" />
          ) : (
            <FontAwesomeIcon onClick={toggle} icon={faTimes} size="lg" />
          )}
        </span>
      </div>
      <nav className={`nav-menu ${isOpen ? 'nav-open' : ''}`}>
        <ul className="nav-items">
          {data &&
            data.map(menuItem =>
              menuItem.wordpress_children ? (
                <UncontrolledDropdown key={menuItem.wordpress_id}>
                  <DropdownToggle nav caret>
                    {menuItem.title}
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu-center" right>
                    {menuItem.wordpress_children.map(subItem => (
                      <DropdownItem key={subItem.wordpress_id}>
                        <Link to={subItem.url}>{subItem.title}</Link>
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                </UncontrolledDropdown>
              ) : (
                <Link key={menuItem.wordpress_id} to={menuItem.url}>
                  {menuItem.title}
                </Link>
              )
            )}
        </ul>
      </nav>
      <Link to="/" className="logo-wrap">
        <span className="logo-text">BCBW</span>
      </Link>
      <div className="social-sidebar-toggle">
        <FontAwesomeIcon icon={['fab', 'instagram']} />
        <FontAwesomeIcon icon={['fab', 'facebook']} />
        <FontAwesomeIcon icon={['fab', 'twitter']} />
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

// export const query = graphql`
//   query {
//     allWordpressWpApiMenusMenusItems {
//       nodes {
//         items {
//           title
//           url
//           wordpress_children {
//             title
//             url
//           }
//         }
//       }
//     }
//   }
// `
