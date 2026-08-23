import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.aboutSection}>
      <div className={styles.block}>
        <h3 className={styles.title}>Experience</h3>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Cras pharetra, eros ac porttitor ultricies, ligula ligula bibendum nulla, 
          vitae interdum ipsum felis id lorem.
        </p>
      </div>

      <div className={styles.block}>
        <h3 className={styles.title}>Bio</h3>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Cras pharetra, eros ac porttitor ultricies, ligula ligula bibendum nulla, 
          vitae interdum ipsum felis id lorem. Vestibulum ante ipsum primis in faucibus orci luctus 
          et ultrices posuere cubilia curae; Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
          per inceptos himenaeos. Duis tincidunt felis vel quam ultricies, 
          dapibus gravida lorem maximus. Donec tempus risus eu orci lobortis, 
          ut convallis lacus sagittis.
        </p>
      </div>
    </div>
  );
};

export default About;
