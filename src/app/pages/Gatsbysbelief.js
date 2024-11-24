import Image from "next/image";
import styles2 from "../../Assets/scss/page.module.scss";
import img2 from "../../Assets/images/img2.jpg";
import img3 from "../../Assets/images/img3.jpg";

const Gatsbysbelief = () => {
  return (
    <div className={`container mt-5 ${styles2.page}`}>
      {/* Title Section */}
      <div className={`text-center mb-4 ${styles2.title}`}>
        <h3> Gatsby&apos;s Belief: A Romantic Ideal or a Tragic Flaw?</h3>
        <div className={styles2.line}></div>
      </div>

      {/* Main Content Section */}
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          {/* Image */}
          <div className="text-center mb-4">
            <Image src={img2} alt="not" className="img-fluid" />
          </div>

          {/* Content */}
          <div className={styles2.paragraph}>
            {/* Famous Quote */}

            {/* Bullet Points */}
            <ul>
              <li>Gatsby believes the past can be repeated.</li>
              <li>His life is consumed with winning Daisy back.</li>
              <li>This belief makes him lose touch with reality.</li>
            </ul>
          </div>

          {/* Image */}
          <div className="text-center mb-4">
            <Image src={img3} alt="not" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gatsbysbelief;
