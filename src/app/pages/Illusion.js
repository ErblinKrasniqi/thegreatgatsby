import Image from "next/image";

import styles2 from "../../Assets/scss/page.module.scss";
import img15 from "../../Assets/images/img15.jpg";

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
            <Image src={img15} alt="not" className="img-fluid" />
          </div>

          {/* Paragraph */}
          <div className={styles2.paragraph}>
            <p>
              The Illusion of Recapturing the Past The Great Gatsby ultimately
              shows us that the past is irreversible. No matter how much we long
              to bring back a perfect moment, time, people, and circumstances
              change. Gatsby’s destruction serves as a stark reminder that we
              must embrace the present in order to grow. Reflective prompt: “So
              we beat on, boats against the current, borne back ceaselessly into
              the past.” What does this quote mean to you? Click to reflect.
            </p>
          </div>

          <div className="text-center mb-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Illusion;
