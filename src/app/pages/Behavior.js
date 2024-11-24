import Image from "next/image";
import styles2 from "../../Assets/scss/page.module.scss";
import img10 from "../../Assets/images/img10.jpeg";
import img11 from "../../Assets/images/img11.jpeg";

const Behavior = () => {
  return (
    <div className={`container mt-5 ${styles2.page}`}>
      {/* Title Section */}
      <div className={`text-center mb-4 ${styles2.title}`}>
        <h3>
          Gatsby&apos;s Longing: A Universal Desire or a Destructive Obsession
        </h3>
        <div className={styles2.line}></div>
      </div>

      {/* Main Content Section */}
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          {/* Image */}
          <div className="text-center mb-4">
            <Image src={img10} alt="not" className="img-fluid" />
          </div>

          {/* Bullet Points */}
          <div className={styles2.paragraph}>
            <ul>
              <li>Many people long to relive the past, like Gatsby.</li>
              <li>Gatsby’s obsession is extreme, changing his whole life.</li>
              <li>
                His desire connects to a universal human feeling but becomes
                destructive.
              </li>
            </ul>
          </div>

          {/* Image */}
          <div className="text-center mb-4">
            <Image src={img11} alt="not" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Behavior;
