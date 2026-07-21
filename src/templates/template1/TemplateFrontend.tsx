import styles from "./template1.module.scss";

const templateFrontend = () => {
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
          <a href="#" style={{ width: "100%" }}>Reza Nikafarin Portfolio</a>
          <div className="space"></div>

          <div className="title">Skills</div>
          <hr />
          <div className="space">Html</div>
          <div className="space">Css</div>
          <div className="space">Sass</div>
          <div className="space">Tailwind</div>
          <div className="space">javaScript</div>
          <div className="space">Typescript</div>
          <div className="space">React</div>
          <div className="space">Next</div>
          <div className="space">Git</div>
          <div className="space">Jest</div>
          <div className="space">Php</div>
          <div className="space">Laravel</div>
        </div>
        <div className={styles.box__profile}>
          <div className="title-bold">Profile</div>
          <div className="space"></div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error non
            debitis ut quo! Eveniet laboriosam nesciunt, numquam obcaecati
            temporibus quaerat minus dolorem tempora! Reprehenderit ipsum natus
            maxime, possimus deserunt officia.
          </p>
        </div>
      </div>
    </div>
  );
};

export default templateFrontend;
