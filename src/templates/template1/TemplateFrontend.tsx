import styles from "./template1.module.scss";
import Progressbar from "@/components/progressbar/Progressbar";

const templateFrontend = () => {
  const skills = [
    { title: "Html", full: 90 },
    { title: "Css", full: 95 },
    { title: "Sass", full: 80 },
    { title: "Tailwind", full: 85 },
    { title: "javaScript", full: 80 },
    { title: "Typescript", full: 70 },
    { title: "React", full: 85 },
    { title: "Next", full: 80 },
    { title: "Jest", full: 30 },
    { title: "Php", full: 40 },
    { title: "Laravel", full: 30 },
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
            <div>mobile : 09186936959</div>
            <div>email : rezanikafarin100@gmail.com</div>
          </div>
        </div>
      </div>
      <div className={styles.box__body}>
        <div className={styles.box__skills}>
          <a href="#" style={{ width: "100%" }}>
            Reza Nikafarin Portfolio
          </a>
          <div className="space"></div>

          <div className="title">Skills</div>
          <hr />
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="space">{skill.title}</div>
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
            Responsive Web Design/RWD.{" "}
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
