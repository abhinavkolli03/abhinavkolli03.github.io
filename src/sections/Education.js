import React from "react";
import "../styles/Education.css";
import EducationFeature from "../components/EducationFeature";
import { GiBullHorns, GiMagnetMan, GiWorld, GiLightBulb } from "react-icons/gi";
import { IconContext } from "react-icons";

const Education = () => {
  return (
    <section
      style={{ background: "linear-gradient(#181B46, #4C1B76)" }}
      id="education"
    >
      <h1
        data-aos="fade-zoom-in"
        data-aos-offset="100"
        data-aos-easing="ease-in-sine"
        data-aos-duration="200"
        style={{ color: "#fff", marginBottom: -60 }}
      >
        Education & Organizations
      </h1>
      <div
        data-aos="fade-in"
        data-aos-offset="100"
        data-aos-easing="ease-in-sine"
        data-aos-duration="200"
        className="education__tab section__margin"
        style={{ color: "white" }}
      >
        <div className="education__tab-feature">
          <EducationFeature title1="2022-2026" text={["Austin, TX"]} />
        </div>
        <div className="education__tab-heading">
          <h2 className="gradient__text" style={{ marginRight: 20 }}>
            The University of Texas at Austin
          </h2>
          <IconContext.Provider value={{ color: "#ff8606", size: "80px" }}>
            <GiBullHorns />
          </IconContext.Provider>
          <p className="gradient__text" style={{ marginLeft: 20 }}>
            <b>
              BS Computer Science Honors
              <br />
              <br />
              BBA Canfield Business Honors
            </b>
          </p>
          <p className="gradient__text" style={{ marginLeft: 20 }}>
            Minor: Statistics and Data Sciences
          </p>
          <p className="gradient__text" style={{ marginLeft: 20 }}>
            Cumulative GPA: 3.61/4.00
          </p>
        </div>
        <div className="education__tab-container">
          <EducationFeature
            title1="Relevant Coursework"
            text={[
              "Computer Science: Data Structures (H), Discrete Math (H), Computer Organization & Architecture (H), Algorithms and Complexity (H), Principles of Computer Systems (H), Machine Learning (H), Cloud Computing, Computer Vision, Programming Correctness & Performance, Symbolic Programming, Longhorn Startup Seminar",
              "Mathematics/Statistics: Multivariable Calculus, Matrices/Matrix Calculations, Probability & Statistics, Elements of Data Science, Decision Science (H), Data Science for Business (H)",
              "Business: Business Communications (H), Financial Accounting (H), Managerial Accounting (H), Business Finance (H), Operations Management (H), Principles of Marketing (H), Management Information Systems (H), Innovation & Entrepreneurship (H)",
            ]}
          />
          <EducationFeature
            title1="Achievements"
            text={[
              "University Honors Outstanding",
              "USA Computing Olympiad Gold",
              "Coca-Cola Scholar Semifinalist",
              "First Place HackSMU State Farm Sponsor Award",
              "Second Place EarthXHack State Farm and Oxy Awards",
            ]}
          />
        </div>
      </div>
      <div
        data-aos="fade-in"
        data-aos-offset="100"
        data-aos-easing="ease-in-sine"
        data-aos-duration="200"
        className="education__tab section__margin"
        style={{ color: "white", marginBottom: "0px" }}
      >
        <div className="education__tab-feature">
          <EducationFeature
            title1="September 2022 – Present"
            text={["Austin, TX"]}
          />
        </div>
        <div className="education__tab-heading">
          <h2 className="gradient__text" style={{ marginRight: 40 }}>
            Convergent Forge Startups
          </h2>
          <IconContext.Provider value={{ color: "#ff8606", size: "80px" }}>
            <GiMagnetMan />
          </IconContext.Provider>
          <p className="gradient__text" style={{ marginLeft: 20 }}>
            <b>Tech Lead and Finance Chair</b>
          </p>
        </div>
        <div className="education__tab-container">
          <EducationFeature
            title1="Leadership & Impact"
            text={[
              "Led projects for 4 Austin-based startups, managing 6 engineers using Jira boards and securing 94% average stakeholder satisfaction.",
              "Increased notetaking startup Journal365’s engagement by 33% while enhancing LLM, Naïve Bayes classifier, and MongoDB cluster.",
              "Optimized AWS costs to $18/month or 65% reduction, securing QOTD (cleaning company) data using Cognito, DynamoDB, and S3.",
            ]}
          />
        </div>
      </div>

      <div
        data-aos="fade-in"
        data-aos-offset="100"
        data-aos-easing="ease-in-sine"
        data-aos-duration="200"
        className="education__tab section__margin"
        style={{ color: "white", marginBottom: "0px" }}
      >
        <div className="education__tab-feature">
          <EducationFeature
            title1="January 2023 – April 2024"
            text={["Austin, TX"]}
          />
        </div>
        <div className="education__tab-heading">
          <h2 className="gradient__text" style={{ marginRight: 40 }}>
            Texas 180 Degrees Consulting
          </h2>
          <IconContext.Provider value={{ color: "#ff8606", size: "80px" }}>
            <GiWorld />
          </IconContext.Provider>
          <p className="gradient__text" style={{ marginLeft: 20 }}>
            <b>Project Lead and Senior Consultant</b>
          </p>
        </div>
        <div className="education__tab-container">
          <EducationFeature
            title1="Consulting Projects"
            text={[
              "Created Austin Disaster Relief’s security scanner with React Native and Envoy to enable 93 admins to verify 6.5K volunteer badges.",
              "Utilized React-Redux, Figma, and Tailwind in Rainforest Project’s site, showcasing 16 key research findings and RP custom metrics.",
              "Delivered “Re:wild Your Campus” case study, revealing $12K annual savings from 6 sites using organic practices over fertilizers.",
            ]}
          />
        </div>
      </div>

      <div
        data-aos="fade-in"
        data-aos-offset="100"
        data-aos-easing="ease-in-sine"
        data-aos-duration="200"
        className="education__tab section__margin"
        style={{ color: "white", marginBottom: "0px" }}
      >
        <div className="education__tab-feature">
          <EducationFeature title1="2023-Present" text={["Austin, TX"]} />
        </div>
        <div className="education__tab-heading">
          <h2 className="gradient__text" style={{ marginRight: 40 }}>
            Product@TX Fellowship
          </h2>
          <IconContext.Provider value={{ color: "#ff8606", size: "80px" }}>
            <GiLightBulb />
          </IconContext.Provider>
          <p className="gradient__text" style={{ marginLeft: 20 }}>
            <b>June 2023 - Present: Fellow</b>
          </p>
        </div>
        <div className="education__tab-container">
          <EducationFeature
            title1="Experience"
            text={[
              "Learning about current events and new technological advancements to foster technical PM mindset. Also, understanding roles/responsibilities of product managers in the workforce.",
              "Grasping techniques on helpful presentation tips and techniques during interviews, conducting networking events with senior PMs, and engaging in mock interviews.",
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Education;
