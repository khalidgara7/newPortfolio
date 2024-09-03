const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "22px",
      padding: "10px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <div className="socialIcons" style={styles.socialIcons}>
      <a className="icon" style={styles.icon} href="https://github.com/khalidgara7">
        <i className="fa-brands fa-github" aria-hidden="true" title="khalid's GitHub Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.linkedin.com/in/khalid-el-mati-079051214/">
        <i className="fa-brands fa-linkedin" aria-hidden="true" title="khalid's LinkedIn Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.instagram.com/kha.gara_/">
        <i className="fa-brands fa-instagram" aria-hidden="true" title="khalid's Instagram Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.facebook.com/khalid.gara.718">
        <i className="fa-brands fa-facebook" aria-hidden="true" title="khalid's Twitter Profile"></i>
      </a>
    </div>
  );
};

export default SocialIcons;
