import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={classes.container}>
      <div className={classes.logo}>
        <h1>The Great Gatsby</h1>
      </div>
      <div className={classes.links}>
        <h3>Docs</h3>
        <h3>About</h3>
        <h3>Certifications</h3>
        <h3>Projects</h3>
      </div>
      <div className={classes.profile}>
        <h3>Profile</h3>
        <img src="./profile.jpg"></img>
      </div>
    </nav>
  );
};

export default Navbar;
