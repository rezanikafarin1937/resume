import styles from "./template1.module.scss";
import Progressbar from "@/components/progressbar/Progressbar";

const templateFrontend = () => {
  const skills = [
    { title: "Html", full: 95 },
    { title: "Css", full: 95 },
    { title: "Sass", full: 95 },
    { title: "BEM", full: 100 },
    { title: "Tailwind", full: 85 },
    { title: "javaScript", full: 90 },
    { title: "Typescript", full: 80 },
    { title: "React", full: 90 },
    { title: "Next", full: 85 },
    { title: "ReactNative", full: 15 },
    { title: "Jest", full: 20 },
    { title: "Php", full: 40 },
    { title: "Laravel", full: 30 },
    { title: "Git", full: 80 },
  ];
  return (
    <div className={styles.box}>
      <div className={styles.box__header}>
        <div className={styles.box__avatar}>
          <img src="../../../images/image.jpg" alt="" />
        </div>
        <div className={styles.box__present}>
          <div className={styles.box__title}>
            <h1>Reza Nikafarin</h1>
            <h2>Front End Developer</h2>
          </div>
          <div className={styles.box__contact}>
            <div><span className={styles.box__email}>mobile : </span> 09186936959</div>
            <div><span className={styles.box__email}>email : </span>  rezanikafarin100@gmail.com</div>
          </div>
        </div>
      </div>
      <div className={styles.box__body}>
        <div className={styles.box__skills}>
          <i>
            <a href="#" style={{ width: "100%" }}>
              Reza Nikafarin Portfolio
            </a>
          </i>
          <div className="space-big"></div>

          <i className="title-bold">Skills</i>
          <hr />
          <br />
          {skills.map((skill, index) => (
            <div key={index}>
              <i className={styles.box__skills__skill}>{skill.title}</i>
              <Progressbar full={skill.full} />
            </div>
          ))}
        </div>
        <div className={styles.box__profile}>
          <div className="title-bold">Profile</div>
          <div className="space"></div>
          <p>
            Highly accomplished and user-focused Front-end Developer adept in
            collaborating with UX and design teams to plan the technical writing
            and execution of functional specifications for websites and
            applications. Experienced in building multi-platform websites using
            Responsive Web Design/RWD.
          </p>
          <div className="space-big"></div>
          <div className="title-bold">
            Front-end Developer resume examples & templates
          </div>
          <div className="title">Senior Front-end Developer</div>
          <div className={styles.box__contact}>Agust 2015 - present</div>
          <ul className={styles.box__contact}>
            <li>
              Design, develop, test and deploy design features in a timely
              manner.
            </li>
            <li>
              Continually work to ensure the user experience determines design
              choices.
            </li>
            <li>
              Work to achieve a balance between functional and aesthetic
              designs.
            </li>
            <li>Maintain brand consistency throughout the design process. </li>
            <li>Apply engineering best practices. </li>
            <li>
              Work to solve complex challenges with the utilization of modern
              web application development processes and standard
              methodologies.{" "}
            </li>
            <li>
              Create wireframes to illustrate advanced solutions for
              applications.{" "}
            </li>
          </ul>
          <div className="space-big"></div>
          <div className="title">Senior Front-end Developer</div>
          <div className={styles.box__contact}>Agust 2015 - present</div>
          <ul className={styles.box__contact}>
            <li>
              Design, develop, test and deploy design features in a timely
              manner.
            </li>
            <li>
              Continually work to ensure the user experience determines design
              choices.
            </li>
            <li>
              Work to achieve a balance between functional and aesthetic
              designs.
            </li>
            <li>Maintain brand consistency throughout the design process. </li>
            <li>Apply engineering best practices. </li>
            <li>
              Work to solve complex challenges with the utilization of modern
              web application development processes and standard
              methodologies.{" "}
            </li>
            <li>
              Create wireframes to illustrate advanced solutions for
              applications.{" "}
            </li>
          </ul>

          <div className="title">Education</div>
          <div className={styles.box__contact}>
            09/2008 - 05/2012, Bachelor of Science in Computer Science,
            University of Central Florida, Orlando
          </div>
          <div className="space-big"></div>
          <div className="title">Languages</div>
          <div className={styles.box__contact}>English</div>
        </div>
      </div>
    </div>
  );
};

export default templateFrontend;
