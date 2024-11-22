import Image from "next/image";

import styles2 from "../../Assets/scss/page.module.scss";
import img9 from "../../Assets/images/img8.jpg";
import img8 from "../../Assets/images/img9.jpg";

const Reality = () => {
  return (
    <div className={`container mt-5 ${styles2.page}`}>
      {/* Title Section */}
      <div className={`text-center mb-4 ${styles2.title}`}>
        <h3>Is Living in the Past Destructive?</h3>
        <div className={styles2.line}></div>
      </div>

      {/* Main Content Section */}
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          {/* Image */}
          <div className="text-center mb-4">
            <Image src={img8} alt="not" className="img-fluid" />
          </div>

          {/* Paragraph */}
          <div className={styles2.paragraph}>
            <p>-Gatsby’s Downfall - Consequences - Nick’s Perspective</p>
          </div>

          <div className="text-center mb-4">
            <Image src={img9} alt="not" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reality;
