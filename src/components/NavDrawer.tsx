import {
  Drawer,
  Icon,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "material-ui"
import { map } from "ramda"
import * as React from "react"
import { navigateTo } from "gatsby-link"

type Link = {
  name: string
  link: string
}

type Props = {
  links: Array<Link>
}

type State = {
  open: boolean
  links: Array<Link>
}

export class NavDrawer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      open: false,
      links: props.links,
    }
  }

  openDrawer = (open: boolean) => () => {
    this.setState({
      open,
    })
  }

  public render() {
    const linksList = (
      <List>
        {map(link => navigateButton(link.name, link.link), this.state.links)}
      </List>
    )

    return (
      <div>
        <IconButton
          color="contrast"
          aria-label="Menu"
          onClick={this.openDrawer(true)}
        >
          <Icon>menu</Icon>
        </IconButton>
        <Drawer
          anchor="right"
          open={this.state.open}
          onRequestClose={this.openDrawer(false)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.openDrawer(false)}
            onKeyDown={this.openDrawer(false)}
          >
            {linksList}
          </div>
        </Drawer>
      </div>
    )
  }
}

const navigateButton = (pageName: string, url: string) =>
  url.substr(0, 1) === "/" ? (
    <ListItem
      button
      key={pageName + "-drawer-link"}
      onClick={() => navigateTo(url)}
    >
      <ListItemText primary={pageName} />
    </ListItem>
  ) : (
    <a
      href={url}
      style={{ textDecoration: "none" }}
      key={pageName + "-drawer-link"}
    >
      <ListItem button>
        <ListItemText primary={pageName} />
      </ListItem>
    </a>
  )
