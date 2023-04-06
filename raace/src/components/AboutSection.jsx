import React, { Component } from "react";
import Alert from "./Alert";
import Image from "../assets/img/intro-bg.jpeg";
import Image1 from "../assets/img/CE.jpg";
import department from "../assets/img/book.svg";
import IGBC from "../assets/img/IGBC.png";
import ICI from "../assets/img/ICI.png";

class AboutSection extends Component {
  render() {
    return (
      <>
        <Alert />
        <div className="about">
          <div className="about-container">
            {" "}
            <div className="about-text">
              <div className="about-skit">
                <h1>About SKIT</h1>
              </div>
              <p>
                Swami Keshvanand Institute of Technology, Management & Gramothan
                (SKIT) inspired from the learnings of Swami Keshvanand, was
                established in the year 2000 by Technocrats and Managers Society
                for Advanced Learning and Gramothan.Today the institute is
                recognized as one of the centers of academic excellence in
                Northern India.The Institute is affiliated to Rajasthan
                Technical University, Kota for offering Postgraduate and
                Graduate Courses in Engineering & Management and recently
                accredited by{" "}
                <b>
                  National Accreditation and Assessment Council (NAAC) with A++
                  grade
                </b>
                .Located in the Pink City Jaipur, which is a blend of
                traditional history and modern outlook, SKIT is putting in
                efforts for making industry ready engineers and managers through
                effective Industry –Institute Interface. Apart from University
                curriculum SKIT also pursues activities for research and
                development in various fields. The green landscaping, aesthetic
                elegance of arches and the vibrant pursuit of knowledge by the
                young aspirants make the environment serene, pleasant and
                dynamic. Students joining the institute share the box full of
                opportunities for professional and personal development through
                an environment of practical orientation, industrial interaction
                and student led activities which help the students to develop
                good communication skills, integrated personality and greater
                competitive spirit.{" "}
              </p>
            </div>
            <img src={Image} alt="" srcset="" />
          </div>
          <div className="about-department">
            <img src={Image1} alt="" srcset="" />
            <div className="about-text-department">
              <div className="department">
                <h1>About Department</h1>
                <img src={department} alt="" />
              </div>
              <p>
                Due to extraordinary growth in the infrastructure development in
                India and abroad, demand of skilled civil engineers is growing
                with high pace. To meet the growing demand of construction
                industries, our institute started B. Tech. course in civil
                engineering from the academic session 2011-12. All laboratories
                of the department are having latest technological instruments as
                per requirement of curriculum and also for research purpose.
                Civil Engineering Department also provides consultancy services
                on various technical issues to the society and government
                departments. The department is supported by a team of faculty
                members having excellent research credentials as well as
                extensive industrial experience.
              </p>
            </div>
          </div>
          <div className="technical">
            <div className="collaboration">
              <h1>Technical Collaborations</h1>
            </div>
            <div className="logos">
              <img src={IGBC} alt="" srcset="" />

              <img src={ICI} alt="" srcset="" />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AboutSection;
