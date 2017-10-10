import { AppBar, Button, Hidden, Toolbar, withStyles } from "material-ui"
import { map } from "ramda"
import * as React from "react"
import { navigateTo } from "gatsby-link"

import { Logo } from "../logo/logo.component"
import { NavDrawer } from "../nav-drawer/nav-drawer.component"
import * as style from "./nav-bar.module.css"

type Props = {}

export const NavBar = (props: Props) => (
  <AppBar position="absolute" className={style.appBar}>
    <Toolbar>
      <Logo height="40px" color="white-transparent" />
      <span style={{ flex: 1 }} />
      <Hidden smDown>
        {map(page => {
          if (page.name == "Kontakt") {
            return (
              <Button
                className={style.contactButton}
                color="accent"
                raised
                key={page.name + "-navBarButton"}
              >
                Kontakt
              </Button>
            )
          } else {
            return (
              <Button
                className={style.navButton}
                key={page.name + "-navBarButton"}
                onClick={() => navigateTo("/" + page.link)}
              >
                {page.name}
              </Button>
            )
          }
        }, pages)}
      </Hidden>
      <Hidden mdUp>
        <NavDrawer links={pages} />
      </Hidden>
    </Toolbar>
  </AppBar>
)

const pages = [
  {
    name: "Hjem",
    link: ""
  },
  {
    name: "Nettsider",
    link: "webpages"
  },
  {
    name: "Apper",
    link: ""
  },
  {
    name: "Tjenester",
    link: ""
  },
  {
    name: "Tidligere arbeid",
    link: ""
  },
  {
    name: "Om oss",
    link: ""
  },
  {
    name: "Kontakt",
    link: ""
  }
]
