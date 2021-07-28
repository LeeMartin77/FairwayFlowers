import { useRouter } from 'next/router'
import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap"


interface NavigationPage {
  path: string,
  text: string,
}
const NavigationPages: NavigationPage[] = [
  { path: "/bespoke-arrangements", text: "Bespoke Arrangements" },
  { path: "/cut-flowers", text: "Cut Flowers" },
  { path: "/petal-confetti", text: "Petal Confetti" },
  { path: "/workshops", text: "Workshops" },
  { path: "/about", text: "About" },
  { path: "/contact", text: "Contact" }
]

export default function Header() {
  const router = useRouter();
  const currentPage = router.pathname;
  return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Container>
            <Navbar.Brand href="/">
                Fairway Flowers
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                {NavigationPages.map((navlink, i) => navigationLink(currentPage, navlink, i))}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
  )
}

function navigationLink(currentPage: string, navlink: NavigationPage, key: number) {
  return (
        <Nav.Item key={key}>
          <Nav.Link className={(currentPage == navlink.path) ? "active" : ""} href={navlink.path}>
            {navlink.text}
          </Nav.Link>
        </Nav.Item>
  )
}