import Image from "next/image";

import styles2 from "../../Assets/scss/page.module.scss";
import img22 from "../../Assets/images/img22.jpg";
import img23 from "../../Assets/images/img23.jpg";

const Forward = () => {
  return (
    <div className={`container mt-5 ${styles2.page}`}>
      {/* Title Section */}
      <div className={`text-center mb-4 ${styles2.title}`}>
        <h3>Nick&apos;s Perspective: Learning to Move Forward</h3>
        <div className={styles2.line}></div>
      </div>

      {/* Main Content Section */}
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          {/* Image */}
          <div className="text-center mb-4">
            <Image src={img22} alt="not" className="img-fluid" />
          </div>

          {/* Paragraph */}
          <div className={styles2.paragraph}>
            <p>-Nick&apos;s development -The key message</p>
          </div>
          <Image src={img23} alt="not" className="img-fluid" />
          <div className="text-center mb-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Forward;
