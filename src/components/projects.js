import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton,
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#000000",
                height: "176px",
                background:
                  "url(https://i.ibb.co/9cF4dkw/Screen-Shot-2020-06-20-at-5-13-59-PM.png) center / cover",
              }}
            >
              Weather Dashboard
            </CardTitle>
            <CardText>
              This assignment allows you to check the weather forecast through a
              3rd party API.
            </CardText>
            <CardActions border>
              <Button colored>
                <a
                  href="https://github.com/stephdedios/WeatherDashboard"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  GitHub
                </a>
              </Button>
              <Button colored>
                <a
                  href="https://stephdedios.github.io/WeatherDashboard/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Live Demo
                </a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#000000",
                height: "176px",
                background:
                  "url(https://i.ibb.co/CQ1w3Y8/Screen-Shot-2020-06-22-at-1-01-30-PM.png) center / cover",
              }}
            >
              NoteTaker
            </CardTitle>
            <CardText>
              The user will be able to add and save notes, along with deleting
              any notes no longer needed.
            </CardText>
            <CardActions border>
              <Button colored>
                <a
                  href="https://github.com/stephdedios/NoteTaker"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  GitHub
                </a>
              </Button>
              <Button colored>
                <a
                  href="https://intense-depths-38127.herokuapp.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Live Demo
                </a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#000000",
                height: "176px",
                background:
                  "url(https://i.ibb.co/9qWz4bv/Screen-Shot-2020-06-22-at-1-18-37-PM.png) center / cover",
              }}
            >
              Progressive Budget
            </CardTitle>
            <CardText>
              An app that would allow you to track your expenses by entering
              your daily transations.
            </CardText>
            <CardActions border>
              <Button colored>
                {" "}
                <a
                  href="https://github.com/stephdedios/ProgressiveBudget"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  GitHub
                </a>
              </Button>
              <Button colored>
                <a
                  href="https://salmon-budget.herokuapp.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Live Demo
                </a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#ffffff",
                height: "176px",
                background:
                  "url(https://i.ibb.co/8Pt9PRq/Screen-Shot-2020-06-20-at-8-37-01-AM.png) center / cover",
              }}
            >
              Guess The Lyric
            </CardTitle>
            <CardText>
              My first group project with my colleague, Michael Becker. We
              created an app where you guess the lyrics to Today's Top Hits
            </CardText>
            <CardActions border>
              <Button colored>
                {" "}
                <a
                  href="https://github.com/thetntm/guess-the-lyric"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  GitHub
                </a>
              </Button>
              <Button colored>
                <a
                  href="https://thetntm.github.io/guess-the-lyric/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Live Demo
                </a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}></CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#ffffff",
                height: "176px",
                background:
                  "url(https://i.ibb.co/WptBKFp/Screen-Shot-2020-06-20-at-8-41-32-AM.png) center / cover",
              }}
            >
              TrackSnax
            </CardTitle>
            <CardText>
              In the light of a pandemic, with my colleagues, Martin Funches and
              Emanuil Vartanyan; we created an app that allows you to track your
              essentials and keep you up to day on statistics.
            </CardText>
            <CardActions border>
              <Button colored>
                <a
                  href="https://github.com/VartanyanE/project-2"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  GitHub
                </a>
              </Button>
              <Button colored>
                <a
                  href="https://tracksnax.herokuapp.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Live Demo
                </a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Project 3 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#000000",
                height: "176px",
                background:
                  "url(https://i.ibb.co/mX7p9NP/Screen-Shot-2020-06-20-at-5-19-13-PM.png) center / cover",
              }}
            >
              Planthood
            </CardTitle>
            <CardText>
              For my final project, my team and I created a Plant app that
              allows you to view plant care details, and assign another user to
              "plant"-sit some of your plants.
            </CardText>
            <CardActions border>
              <Button colored>
                <a
                  href="https://github.com/VartanyanE/planthood"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  GitHub
                </a>
              </Button>
              <Button colored>
                <a
                  href="https://planthood.herokuapp.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Live Demo
                </a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>Assignments</Tab>
          <Tab>Group Projects</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
