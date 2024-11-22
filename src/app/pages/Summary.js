import Image from "next/image";
import styles2 from "../../Assets/scss/page.module.scss";
import img1 from "../../Assets/images/img1.jpg";

const Summary = () => {
  return (
    <div className={`container mt-5 ${styles2.page}`}>
      {/* Title Section */}
      <div className={`text-center mb-4 ${styles2.title}`}>
        <h3>Can you really repeat the past?!</h3>
        <div className={styles2.line}></div>
      </div>

      {/* Main Content Section */}
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          {/* Image */}
          <div className="text-center mb-4">
            <Image src={img1} alt="not" className="img-fluid" />
          </div>

          {/* Paragraph */}
          <div className={styles2.paragraph}>
            <h4> Presented by: Fiona Oruqi Egzona Xhemajli</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
