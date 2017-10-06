import { List, ListItem, ListItemText, Typography } from "material-ui"
import Grid from "material-ui/Grid"
import * as React from "react"
import Icon from "material-ui/Icon"
import { map } from "ramda"

import * as styles from "./services.module.css"

type Props = {
  services: Array<Service>
}

const renderServices = (services: Array<Service>) =>
  map(
    (service: Service) => (
      <Grid item xs={12} md={3} sm={4} key={service.header+service.icon}>
        <div className={styles.item}>
          <Icon color="primary" style={{ fontSize: 80 }}>{service.icon}</Icon>
          <Typography type="headline" gutterBottom align="center">
            {service.header}
          </Typography>
          <Typography type="body1" gutterBottom align="center">
            {service.description}
          </Typography>
        </div>
      </Grid>
    ),
    services
  )

const ServicesComponent = ({ services }: Props) => (
  <Grid container justify="center" className={styles.outer}>
    {renderServices(services)}
  </Grid>
)

export default ServicesComponent

type Service = {
  header: string
  icon: string
  description: string
}
