import * as React from "react"
import Link from "gatsby-link"
import { Helmet } from "react-helmet"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import getMuiTheme from "material-ui/styles/getMuiTheme"
import {darkBlack} from 'material-ui/styles/colors';
import {
  Toolbar,
  ToolbarGroup,
  ToolbarSeparator,
  ToolbarTitle
} from "material-ui/Toolbar"
import FlatButton from "material-ui/FlatButton"
import RaisedButton from "material-ui/RaisedButton"
import * as styles from "./index.module.css"
import * as logo from "./logo-white-transparent.png"

type Props = {
  children: () => React.ReactNode
}

const TemplateWrapper = ({ children }: Props) => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <div>
      <Helmet
        title="Hallingdata"
        meta={[
          { name: "description", content: "Sample" },
          { name: "keywords", content: "sample, something" }
        ]}
      />
      <AppBar />
      <div>{children()}</div>
    </div>
  </MuiThemeProvider>
)

export default TemplateWrapper

const AppBar = () => (
  <Toolbar className={styles.toolbar}>
    <ToolbarGroup>
      <img src={logo} alt="Hallingdata logo" height="60px" />
    </ToolbarGroup>
    <ToolbarGroup>
      <FlatButton label="Hjem" className={styles.navButton} />
      <FlatButton label="Tjenester" className={styles.navButton} />
      <FlatButton label="Om oss" className={styles.navButton} />
      <RaisedButton
        label="Kontakt"
        secondary={true}
        className={styles.navButton}
      />
    </ToolbarGroup>
  </Toolbar>
)

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: "#5f00be",
    primary2Color: "#20008c",
    accent1Color: "#ffca28",
    alternateTextColor: darkBlack
  },
  button: {
    
  },
  toolbar: {
    color: "#000"
  }
})
