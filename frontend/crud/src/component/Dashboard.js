import React,{useState, useEffect} from "react";
import axios from 'axios'
// react plugin for creating charts
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import Typography from "@material-ui/core/Typography";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import Done from "@material-ui/icons/Done";
import Timelapse from "@material-ui/icons/Timelapse";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "./Grid/GridItem.js";
import Grid from "@material-ui/core/Grid";
import GridContainer from "./Grid/GridContainer.js";
import Card from "./Card/Card.js";
import CardHeader from "./Card/CardHeader.js";
import CardIcon from "./Card/CardIcon.js";
import CardBody from "./Card/CardBody.js";
import CardFooter from "./Card/CardFooter.js";

import Label from "@material-ui/core";
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
  let [ projects, setProjects] = useState([])
  const [projectName, setProjectName] = useState(0)
  const [status, setStatus] = useState(0)
  const [duration, setDuration] = useState(0)
  const [countJsExpected, setCountJsExpected] = useState(0)
  const [countJsActual, setCountJsActual] = useState(0)
  const [executedAt, setExecutedAt] = useState("")
  const flexContainer = {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
  };

  const fileNames = [
  "./p1.json"
  ,"./p2.json"
  ]
  useEffect(()=>{
    alert("yes")
//    setProjects({...projects, d})
      console.log("before project is: ", projects)

    fileNames.map(fileName=>{
        loadJson(fileName).then(data => {
          console.log("data is: ",  { ...projects, ...data } )
          console.log("project is: ", projects)
    //      setProjects({ ...projects, ...data } )
          setProjectName(fileName.replace(".json", ""))
          setStatus(data['ui-analysis']['status'])
          setExecutedAt(data['ui-analysis']['executedAt'])
          setDuration(data['ui-analysis']['duration(s)'])
          setCountJsExpected(data['ui-analysis']['issues']['expected'])
          setCountJsActual(data['ui-analysis']['issues']['actual'])

        const d = {
                  projectName: projectName,
                  status: status,
                  executedAt: executedAt,
                  duration: duration,
                  countJsExpected: countJsExpected,
                  countJsActual: countJsExpected
                }
      console.log("d:", d)
//      projects = {
//        ...projects,
//        d
//      }
      projects.push(d)
      console.log(projects)
      console.log(projects instanceof Array)

    })
  }
  )}
    , [status, executedAt, duration, countJsExpected, countJsActual]
  )

    function createCard(){
    console.log("projects in createCard:", projects)
          return projects.map(project=>{
                   return <Card>
                      <CardHeader color="warning" stats icon>

                        <CardIcon color="danger">
                          <Icon>{project['projectName']}</Icon>
                        </CardIcon>
                        <p className={classes.cardCategory}>

                        </p>
                        <h3 className={classes.cardTitle}>
                          <Typography><Done/>{project['status']}</Typography>
                          <Typography><Timelapse/>{project['duration']}s</Typography>
                        <CardBody>
                          <Typography>JS: {project['countJsActual']}/{project['countJsExpected']} </Typography>

                        </CardBody>
                           <p>{projects['ui-analysis']}</p>

                        </h3>
                      </CardHeader>
                      <CardFooter stats>
                        <div className={classes.stats}>
                        <Grid container direction="row" justify="center" alignItems="center">
                         <GridItem lg={24}>

                          <DateRange />
                          {project['executedAt']}
                        </GridItem>
                         <GridItem lg={12}></GridItem>

                         <GridItem lg={12}>
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            View Details
                          </a>
                        </GridItem>
                        </Grid>
                        </div>
                      </CardFooter>
                    </Card>

          })
    }

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

            {createCard()}

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
