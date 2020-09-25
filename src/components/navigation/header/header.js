import React from "react"
import headerStyles from './header.module.scss'

import NavItems from "../navItems/nav-items"
import Toggler from '../../toggler/toggler'
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from 'gatsby-image'

const Header = (props) => {
const data = useStaticQuery(
  graphql`
    query {
      logo: file(relativePath: {eq: "logo-black.png"}) {
      id
        childImageSharp {
          fixed(height: 80, width: 80) {
            ...GatsbyImageSharpFixed
        }
      }
    }
   }
  `
)
  return (
    <div className={headerStyles.headerContainer}>
      <header className={headerStyles.header}>
        <Link to="/">
          <Img fixed={data.logo.childImageSharp.fixed} alt="Company Logo"/>
        </Link>
        <nav className={headerStyles.navigation}>
          <NavItems/>
        </nav>
        <Toggler clicked={props.open}/>
      </header>
    </div>

  )
}

export default Header;