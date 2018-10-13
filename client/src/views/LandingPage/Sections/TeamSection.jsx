import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import teamStyle from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.jsx";

import team1 from "assets/img/faces/avatar.jpg";
import team2 from "assets/img/faces/christian.jpg";
import team3 from "assets/img/faces/kendall.jpg";

class TeamSection extends React.Component {
  render() {
    const { classes } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    return (
      <div className={classes.section}>
        <h2 className={classes.title}>Here is our team</h2>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                {/* LEAVING OUT THE IMAGE*
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={team1} alt="..." className={imageClasses} />
                </GridItem> */}
                <h3 className={classes.cardTitle}>
                  Daniel Chen
                  <br />
                  <small className={classes.smallTitle}>Full-Stack Developer</small>
                </h3>
                <CardBody>
                  <p className={classes.description}>
                  I am a graduate of the University of Toronto with a specialization in Full Stack Development.
                  with a passion for programming and problem solving. 
                  I love developing great user experiences as well as learning new things about the field. 
                  Skilled in both team and individual work environments, 
                  I strive to be an integral and valued part of any workplace. 
                  Interested in Web Development and Network Engineering.
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-twitter"} />
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-instagram"} />
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-facebook"} />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                {/* LEAVING OUT THE IMAGE*
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={team2} alt="..." className={imageClasses} />
                </GridItem> */}
                <h3 className={classes.cardTitle}>
                  Celia Ho
                  <br />
                  <small className={classes.smallTitle}>Full-stack Developer (Product Manager)</small>
                </h3>
                <CardBody>
                  <p className={classes.description}>
                  Full stack developer with interest in software development in the scientific, 
                  healthcare or pharmaceutical industry. 
                  Enthusiastic about developing web applications that can make a meaningful impact to society.
                  Passionate about the integration of cyber security in web development.
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-twitter"} />
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-linkedin"} />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                {/* LEAVING OUT IMAGE*
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={team3} alt="..." className={imageClasses} />
                </GridItem> */}
                <h3 className={classes.cardTitle}>
                  Roberto Gonzalez
                  <br />
                  <small className={classes.smallTitle}>Model</small>
                </h3>
                <CardBody>
                  <p className={classes.description}>
                  Technology! In addition to being a nurse I have worked as IT help-desk level-2, 
                  built my own websites as well as computers. Currently learning JavaScript and Python. 
                  I seek to work with like-minded individuals/teams to entangle technology and healthcare. 
                  My goal is to provide clients with outstanding and unique health-care experiences. 
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-twitter"} />
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-instagram"} />
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-facebook"} />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(teamStyle)(TeamSection);