import { PageSection } from "../components/PageSection"
import { Grid, Typography } from "material-ui"
import { StyleRulesCallback, withStyles } from "material-ui/styles"
import * as React from "react"

import { BigImg } from "../components/BigImg"
import { Hero } from "../components/Hero"
import { InfoWithCard } from "../components/InfoWithCard"
import { MobileLogoRow } from "../components/MobileLogoRow"
import { OurServices } from "../components/OurServices"
import * as heroImg from "./img/hero/hallingskarvet-min.jpg"
import * as hallingdalLogo from "./img/hallingdal-logo-min.png"

type Props = {
  data: {
    aboutPage1: {
      childMarkdownRemark: {
        frontmatter: Frontmatter
        html: any
      }
    }
    aboutPage2: {
      childMarkdownRemark: {
        frontmatter: Frontmatter
        html: any
      }
    }
  }
}

type Frontmatter = {
  header: string
}

// https://github.com/callemall/material-ui/issues/7466
const gridFix = {
  width: "100%",
  overflowX: "hidden" as any,
}

const webpagesPage: React.SFC<Props & { classes: StyleClassNames }> = ({
  data,
  classes,
}) => {
  const {
    header: headerPart1,
  } = data.aboutPage1.childMarkdownRemark.frontmatter
  const {
    header: headerPart2,
  } = data.aboutPage2.childMarkdownRemark.frontmatter
  const html = data.aboutPage1.childMarkdownRemark.html
  return (
    <div style={gridFix}>
      <Hero
        header={headerPart1}
        type="small"
        img={heroImg}
        imgPosition="center"
      />
      <Grid container className={classes.contentContainer} spacing={0}>
        <Grid item xs={12}>
          <Typography
            type="body1"
            gutterBottom
            align="justify"
            className={classes.content}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </Grid>
      </Grid>
      <PageSection header={headerPart2} className={classes.reginalSection}>
        <div className={classes.hallingdalLogoContainer}>
          <img
            src={hallingdalLogo}
            alt="Hallingdal logo"
            className={classes.hallingdalLogo}
          />
        </div>
        <Typography
          type="body1"
          gutterBottom
          align="justify"
          className={`${classes.contentContainer} ${classes.content}`}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </PageSection>
      <div
        dangerouslySetInnerHTML={{
          __html: `
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d272542.8852827196!2d8.675458863205185!3d60.700397816894636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463ff4885b8e13a7%3A0x27e4c964520d2cd!2sGamlevegen+6%2C+3550+Gol!5e0!3m2!1sen!2sno!4v1508334100413" 
            width="100%" 
            height="450" 
            frameborder="0" 
            style="border:0" 
            allowfullscreen></iframe>
      `,
        }}
      />
    </div>
  )
}

type StyleClassNames = {
  content: string
  contentContainer: string
  hallingdalLogo: string
  hallingdalLogoContainer: string
  reginalSection: string
}

const styles: StyleRulesCallback = theme => ({
  contentContainer: {
    maxWidth: 850,
    margin: "auto",
  },
  content: {
    fontSize: 16,
    padding: 20,
  },
  hallingdalLogo: {
    height: 60,
    marginBottom: 20,
  },
  hallingdalLogoContainer: {
    textAlign: "center",
  },
  reginalSection: {
    backgroundColor: "#F9F7F3",
  },
})

export default withStyles(styles)<Props>(webpagesPage)

export const pageQuery = graphql`
  query AboutContent {
    aboutPage1: file(relativePath: { eq: "content/about-page-part1.md" }) {
      childMarkdownRemark {
        html
        frontmatter {
          header
        }
      }
    }
    aboutPage2: file(relativePath: { eq: "content/about-page-part2.md" }) {
      childMarkdownRemark {
        html
        frontmatter {
          header
        }
      }
    }
  }
`
