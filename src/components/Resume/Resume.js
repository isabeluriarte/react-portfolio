import React, { Component } from 'react';

export default class Resume extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="resume">
          {/* Education
      ----------------------------------------------- */}
          <div className="row education">
            <div className="three columns header-col">
              <h1><span>Education</span></h1>
            </div>
            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <h3>University of Washington</h3>
                  <p className="info">Certificate of Full Stack Web Development <span>•</span> <em className="date">Feb 2020</em></p>
                  <ul>
                    <li>• Browser-based Technolgies</li>
                    <li>• Databases</li>
                    <li>• Node.js</li>
                    <li>• Deployment</li>
                    <li>• Computer Science</li>
                  </ul>
                </div>
              </div> {/* item end */}
              <div className="row item">
                <div className="twelve columns">
                  <h3>University of Washington</h3>
                  <p className="info">Bachelor of Science in Environmental Science and Resource Management <span>•</span> <em className="date">June 2013</em></p>
                  <p className="info">Minor in Environmental Science</p>
                  <p>• GPA 3.7</p>
                </div>
              </div> {/* item end */}
            </div> {/* main-col end */}
          </div> {/* End Education */}
          {/* Work
      ----------------------------------------------- */}
          <div className="row work">
            <div className="three columns header-col">
              <h1><span>Work</span></h1>
            </div>
            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <h3>Glass & Light Society</h3>
                  <p className="info">Founder/Photographer <span>•</span> <em className="date">2014 - Present</em></p>
                  <ul>
                    <li>• Lead photographer and editor</li>
                    <li>• Social media management and marketing</li>
                    <li>• Managed and directed assistant photographers</li>
                    <li>• Designed branding</li>
                  </ul>
                </div>
              </div> {/* item end */}
              <div className="row item">
                <div className="twelve columns">
                  <h3>Just 2 Guys Creative</h3>
                  <p className="info">Assistant Photographer/Editor <span>•</span> <em className="date">2014 - 2017</em></p>
                  <ul>
                    <li>• Assisted with shooting on photo and video sets</li>
                    <li>• Lighting, set design, and related setup</li>
                    <li>• Assistant editor on photos and videos</li>
                    <li>• Social media management and marketing</li>
                  </ul>
                </div>
              </div> {/* item end */}
              <div className="row item">
                <div className="twelve columns">
                  <h3>John L. Scott</h3>
                  <p className="info">Marketing Coordinator <span>•</span> <em className="date">April 2017 - July 2017</em></p>
                  <ul>
                    <li>• Designed and created marketing materials for agents</li>
                    <li>• Managed branding, marketing, and social media accounts for office</li>
                  </ul>
                </div>
                </div> {/* item end */}
              </div> {/* main-col end */}
            </div> {/* End Work */}
            {/* Skills
      ----------------------------------------------- */}
            <div className="row skill">
              <div className="three columns header-col">
                <h1><span>Skills</span></h1>
              </div>
              <div className="nine columns main-col">
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                  eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                  voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                  voluptatem sequi nesciunt.
            </p>
                <div className="bars">
                  <ul className="skills">
                    <li><span className="bar-expand photoshop" /><em>Photoshop</em></li>
                    <li><span className="bar-expand illustrator" /><em>Illustrator</em></li>
                    <li><span className="bar-expand wordpress" /><em>Wordpress</em></li>
                    <li><span className="bar-expand css" /><em>CSS</em></li>
                    <li><span className="bar-expand html5" /><em>HTML5</em></li>
                    <li><span className="bar-expand jquery" /><em>jQuery</em></li>
                  </ul>
                </div>{/* end skill-bars */}
              </div> {/* main-col end */}
            </div> {/* End skills */}
        </section>
      </React.Fragment>
        );
      }
}