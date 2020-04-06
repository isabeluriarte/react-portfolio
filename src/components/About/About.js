import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="about">
          <div className="row">
            <div className="twelve columns main-col">
              <h2>ABOUT ME</h2>
              <p>Front-End Web Developer leveraging a background in photography to help build a more beautiful user experience on the web.
                
                I am seeking to align myself with a passionate organization where I can pursue a fulfilling career and apply my leadership, web development, and design skills.
            </p>
              <div className="row">
                <div className="columns download">
                  <div>
                    <a href="/images/isabel-uriarte-resume.pdf" className="button" download="Isabel-Uriarte-Resume"><i className="fa fa-download" />Download Resume</a>
                  </div>
                </div>
              </div> {/* end row */}
            </div> {/* end .main-col */}
          </div>
        </section>
      </React.Fragment>
    );
  }
}