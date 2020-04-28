import React,{useState, useEffect} from "react";
import axios from 'axios'
// react plugin for creating charts
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "./Grid/GridItem.js";
import GridContainer from "./Grid/GridContainer.js";
import Card from "./Card/Card.js";
import CardHeader from "./Card/CardHeader.js";
import CardIcon from "./Card/CardIcon.js";
import CardBody from "./Card/CardBody.js";
import CardFooter from "./Card/CardFooter.js";

import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
//import { bugs, website, server } from "variables/general.js";

//import data from '..../data/sam-ui.json'


import styles from "../assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

 function loadJson(fileName) {
  return fetch(fileName)
    .then(response => {
      console.log(response.ok)
      if (!response.ok) {
        throw new Error("HTTP Error: " + response.status)
      }
      return response.json()
    }).catch(error =>
      console.log("Error: ", error)
    )
}

export default function Dashboard() {
  const classes = useStyles();
  const [ projects, setProjects] = useState({})
  const [status, setStatus] = useState(0)
  const [executedAt, setExecutedAt] = useState("")
  const flexContainer = {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
  };

  const fileName = "./project.json"
  useEffect(()=>{
//    alert("yes")
  const d = {"test":123}
setProjects({...projects, d})
      console.log("before project is: ", projects)
    loadJson(fileName).then(data => {
      console.log("data is: ",  { ...projects, data } )
      setProjects({ ...projects, data })
      console.log("project is: ", projects)
      setStatus(data['ui-analysis']['status'])
      setExecutedAt(data['ui-analysis']['executedAt'])
    })
  }
    , [1]
  )


   return (
      <div>

        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
              <div className={classes.center}>
              <List style={flexContainer}>
                      <ListItem><a href="#ALL" className={classes.block}>
                                          All Projects
                                        </a></ListItem>
                    <ListItem><a href="#OTHERS" className={classes.block}>
                                                OTHERS
                                              </a></ListItem>
              </List>
              </div>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="warning" stats icon>
                <CardIcon color="warning">
                  <Icon>UI</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>

                </p>
                <h3 className={classes.cardTitle}>
                  <p>{status}</p>
                  <p>{executedAt}</p>
                   <p>{projects['ui-analysis']}</p>

                </h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>

                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    View Details
                  </a>
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="success" stats icon>
                <CardIcon color="success">
                  <Store />
                </CardIcon>
                <p className={classes.cardCategory}>Revenue</p>
                <h3 className={classes.cardTitle}>$34,245</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <DateRange />
                  Last 24 Hours
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="danger" stats icon>
                <CardIcon color="danger">
                  <Icon>info_outline</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>Fixed Issues</p>
                <h3 className={classes.cardTitle}>75</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <LocalOffer />
                  Tracked from Github
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="info" stats icon>
                <CardIcon color="info">
                  <Accessibility />
                </CardIcon>
                <p className={classes.cardCategory}>Followers</p>
                <h3 className={classes.cardTitle}>+245</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Update />
                  Just Updated
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>

          </GridItem>
          <GridItem xs={12} sm={12} md={4}>

          </GridItem>
          <GridItem xs={12} sm={12} md={4}>

          </GridItem>
        </GridContainer>

      </div>
    );
}
