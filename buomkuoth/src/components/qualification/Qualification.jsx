import { useState } from 'react';
import './Qualification.css';

const Qualification = () => {
  const [toggelState, setToggleState] = useState(1);

  const toggleTap = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggelState === 1
                ? 'qualification__button qualification-active button--flex'
                : 'qualification__button button--flex'
            }
            onClick={() => toggleTap(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>{' '}
            Education
          </div>

          <div
            className={
              toggelState === 2
                ? 'qualification__button qualification-active button--flex'
                : 'qualification__button button--flex'
            }
            onClick={() => toggleTap(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>{' '}
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggelState === 1
                ? 'qualification__content qualification__content-active'
                : 'qualification__content'
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Software Engineering</h3>
                <span className="qualification__subtitle">ALX Africa</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"> Jun 2022 to Oct 2023</i>
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Computer Science</h3>
                <span className="qualification__subtitle">
                  Bahir Dar University
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"> Sep 2019 to Jul 2023</i>
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Computer Applications and Entrepreneuarship
                </h3>
                <span className="qualification__subtitle">
                  Don Bosco Institute of Technology
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"> Jun 2018 to Dec 2018</i>
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  Kenya Certificate of Secondary Education (KCSE)
                </h3>
                <span className="qualification__subtitle">
                  Onjiko High School
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"> Feb 2014 to Dec 2017</i>
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Kenya Certificate of Primary Education (KCPE)
                </h3>
                <span className="qualification__subtitle">
                  Greenfield Primary School
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"> 2011 to 2013</i>
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          <div
            className={
              toggelState === 2
                ? 'qualification__content qualification__content-active'
                : 'qualification__content'
            }
          >
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">IT Technician</h3>
                <span className="qualification__subtitle">JICTS limited</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"> Dec 2023 to present</i>
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Backend Developer</h3>
                <span className="qualification__subtitle">
                  Tech Project On Budget (TPOB)
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"> Oct 2023 to present</i>
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Networking</h3>
                <span className="qualification__subtitle">
                  Bahir Dar Institute of Technology (ICT Development)
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"> Jun 2022 to Oct 2022</i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
