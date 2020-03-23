import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="about">
          <div className="row">
            <div className="twelve columns main-col">
              <h2>About Me</h2>
              <p>I am a junior web developer seeking to align myself with a passionate organization where I can pursue a fulfilling career and apply my leadership, web development, and design skills.
            </p>
              <div className="row">
                <div className="columns download">
                  <p>
                    <a href="/images/isabel-uriarte-resume.pdf" className="button" download="Isabel-Uriarte-Resume"><i className="fa fa-download" />Download Resume</a>
                  </p>
                </div>
              </div> {/* end row */}
            </div> {/* end .main-col */}
          </div>
        </section>
      </React.Fragment>
    );
  }
}