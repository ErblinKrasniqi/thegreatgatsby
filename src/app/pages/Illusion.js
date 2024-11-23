import Image from "next/image";

import styles2 from "../../Assets/scss/page.module.scss";
import img15 from "../../Assets/images/img15.jpg";
import img24 from "../../Assets/images/img24.jpg";

const Illusion = () => {
  return (
    <div className={`container mt-5 ${styles2.page}`}>
      {/* Title Section */}
      <div className={`text-center mb-4 ${styles2.title}`}>
        <h3>Conclusion</h3>
        <div className={styles2.line}></div>
      </div>

      {/* Main Content Section */}
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          {/* Image */}
          <div className="text-center mb-4">
            <Image src={img24} alt="not" className="img-fluid" />
          </div>

          {/* Paragraph */}
          <div className={styles2.paragraph}>
            <p>- Growth Comes from the Present - Gatsby’s Tragic Fate</p>
          </div>
          <Image src={img15} alt="not" className="img-fluid" />
          <div className="text-center mb-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Illusion;
