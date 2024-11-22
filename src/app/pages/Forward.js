import Image from "next/image";

import styles2 from "../../Assets/scss/page.module.scss";
import img12 from "../../Assets/images/img12.jpeg";

const Forward = () => {
  return (
    <div className={`container mt-5 ${styles2.page}`}>
      {/* Title Section */}
      <div className={`text-center mb-4 ${styles2.title}`}>
        <h3>Living in the Past vs. Moving Forward</h3>
        <div className={styles2.line}></div>
      </div>

      {/* Main Content Section */}
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          {/* Image */}
          <div className="text-center mb-4">
            <Image src={img12} alt="not" className="img-fluid" />
          </div>

          {/* Paragraph */}
          <div className={styles2.paragraph}>
            <p>-Nick’s development -The key message</p>
          </div>

          <div className="text-center mb-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Forward;
