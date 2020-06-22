import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://i.ibb.co/XC0rxjw/avatar-icon.png"
                alt="avatar"
                style={{ height: "300px" }}
              />
            </div>

            <h2 style={{ paddingTop: "2em" }}>Stephanie De Dios</h2>
            <h4 style={{ color: "grey" }}>Programmer</h4>
            <hr style={{ borderTop: "3px solid #9BC4C2", width: "50%" }} />
            <p>
              Enthusiastic, out-going, tech-savvy processional whom is
              proficient at building positive relationships with new and
              existing customers by offering outstanding customer service.
            </p>
            <hr style={{ borderTop: "3px solid #9BC4C2", width: "50%" }} />

            <h5>Phone</h5>
            <p>(310) 920-6660</p>
            <h5>Email</h5>
            <p>stephtdedios@gmail.com</p>
            <hr style={{ borderTop: "3px solid #9BC4C2", width: "50%" }} />
            <a
              to="/public/Stephanie DeDios-Resume.pdf"
              target="_blank"
              download
            >
              Download
            </a>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>

            <Education
              startYear={2009}
              endYear={2013}
              schoolName="La Sierra Military Academy"
              schoolDescription="Located in Visalia, CA. I attend a military academy to complete my high school diploma. During this time, I gained a lot of expierence about the military and was able to focus on my education."
            />

            <Education
              startYear={2019}
              endYear={2020}
              schoolName="UCLA Extension"
              schoolDescription="I attended UCLA's extension program for Full-Stack Web Development."
            />
            <hr style={{ borderTop: "3px solid #FFFFFF" }} />

            <h2>Experience</h2>

            <Experience
              startYear={2015}
              endYear={2020}
              jobName="Mirror Image/Remi"
              jobDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            />

            <Experience
              startYear={2018}
              endYear={2020}
              jobName="Rosenberg Property"
              jobDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            />
            <hr style={{ borderTop: "3px solid #FFFFFF" }} />
            <h2>Skills</h2>
            <Skills skill="javascript" progress={85} />
            <Skills skill="HTML/CSS" progress={90} />
            <Skills skill="NodeJS" progress={75} />
            <Skills skill="React" progress={35} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
