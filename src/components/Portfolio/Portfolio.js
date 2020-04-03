import React, { Component } from 'react';

export default class Portfolio extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="portfolio">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Check Out Some of My Projects</h1>
              {/* portfolio-wrapper */}
              <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-01" title>
                      <img alt="" src="images/portfolio/leftoversimage.png" />
                      <div className="centered-text">LEFTOVERS</div>
                      <div className="overlay"></div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div> {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-02" title>
                      <img alt="" src="images/portfolio/notetakerimage.png" />
                      <div className="centered-text">NOTE TAKER</div>
                      <div className="overlay"></div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div> {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-03" title>
                      <img alt="" src="images/portfolio/employeedirectoryimage.png" />
                      <div className="centered-text">EMPLOYEE DIRECTORY</div>
                      <div className="overlay"></div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div> {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-04" title>
                      <img alt="" src="images/portfolio/budgettrackerimage.png" />
                      <div className="centered-text">BUDGET TRACKER</div>
                      <div className="overlay"></div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div> {/* item end */}
              </div> {/* portfolio-wrapper end */}
            </div> {/* twelve columns end */}
            {/* Modal Popup
	      --------------------------------------------------------------- */}
            <div id="modal-01" className="popup-modal mfp-hide">
            <a href="https://food-savers.herokuapp.com/" target="_blank">
              <img className="scale-with-grid" src="images/portfolio/modals/leftovers.png" alt="" />
              </a>
              <div className="description-box">
                <p>Leftōvers is a React app that connects food suppliers with those in need to help facilitate a less wasteful world.</p>
              </div>
              <div className="link-box">
                <a href="https://food-savers.herokuapp.com/" target="_blank">Link</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>{/* modal-01 End */}
            <div id="modal-02" className="popup-modal mfp-hide">
            <a href="https://dry-savannah-28841.herokuapp.com/" target="_blank">
              <img className="scale-with-grid" src="images/portfolio/modals/notetaker.png" alt="" />
              </a>
              <div className="description-box">
                <h4>Note Taker</h4>
                <p>This application that can be used to write, save, and delete notes. It uses an Express backend to save and retrieve note data from a JSON file.</p>
              </div>
              <div className="link-box">
                <a href="https://dry-savannah-28841.herokuapp.com/" target="_blank">Link</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>{/* modal-02 End */}
            <div id="modal-03" className="popup-modal mfp-hide">
            <a href="https://employee-directory-iu.herokuapp.com/" target="_blank">
              <img className="scale-with-grid" src="images/portfolio/modals/employeedirectory.png" alt="" />
              </a>
              <div className="description-box">
                <h4>Employee Directory</h4>
                <p>A React app that allows employees and/or managers to view non-sensitive data about other employees, and filter employees by name.</p>
              </div>
              <div className="link-box">
                <a href="https://employee-directory-iu.herokuapp.com/" target="_blank">Link</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>{/* modal-03 End */}
            <div id="modal-04" className="popup-modal mfp-hide">
            <a href="https://budget-tracker2.herokuapp.com/" target="_blank">
              <img className="scale-with-grid" src="images/portfolio/modals/budgettracker.png" alt="" />
              </a>
              <div className="description-box">
                <h4>Budget Tracker</h4>
                <p>A budget tracking app that allows the user to add expenses and deposits to their budget with or without an internet connection. When entering transactions offline, entries will populate and adjust the total when brought back online.</p>
              </div>
              <div className="link-box">
                <a href="https://budget-tracker2.herokuapp.com/" target="_blank">Link</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>{/* modal-04 End */}
          </div> {/* row End */}
        </section>
      </React.Fragment>
    );
  }
}