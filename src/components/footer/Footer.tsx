import classes from "./Footer.module.css";

const Footer = () => {
  // we are using text links, which eslint will warn us about by default
  // remove this comment when adding actual links
  /* eslint-disable jsx-a11y/anchor-is-valid*/
  return (
    <div className={classes.container}>
      <hr />
      <div className={classes.linksContainer}>
        <div className={classes.linksContainerInner}>
          <a href="#">Terms and Conditions</a>
          <a href="#">Privacy Policy</a>
          <a href="#">About Us</a>
          <a href="#">Contact Us</a>
        </div>
      </div>
      <p className={classes.copyrightDisclaimer}>
        This site is not affiliated with H&M. No copyright infingement intended.
      </p>
    </div>
  );
  /* eslint-enable*/
};

export default Footer;
