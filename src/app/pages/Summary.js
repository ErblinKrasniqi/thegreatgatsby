import Image from "next/image";
import styles from "../../Assets/scss/page.module.scss";
import headerImage from "../../Assets/images/img1.jpg";
import qrCode from "../../Assets/images/qrcode.png";

const Summary = () => {
  return (
    <div className={`container mt-5 ${styles.page}`}>
      {/* Title Section */}
      <div className={`text-center mb-4 ${styles.title}`}>
        <h3>Can you really repeat the past?!</h3>
        <div className={styles.line}></div>
      </div>

      {/* Main Content Section */}
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          {/* Header Image */}
          <div className="text-center mb-4">
            <Image
              src={headerImage}
              alt="Presentation Header"
              className="img-fluid"
            />
          </div>

          {/* Presenter Details */}
          <div className={styles.paragraph}>
            <h5>
              Presented by: Fiona Oruqi <br /> Egzona Xhemajli
            </h5>
          </div>

          {/* QR Code */}
          <div className="text-center">
            <Image src={qrCode} alt="QR Code" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
