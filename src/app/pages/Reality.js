import Image from "next/image";
import styles2 from "../../Assets/scss/page.module.scss";
import img20 from "../../Assets/images/img20.jpeg";
import img21 from "../../Assets/images/img21.jpeg";

const Reality = () => {
  return (
    <div className={`container mt-5 ${styles2.page}`}>
      {/* Title Section */}
      <div className={`text-center mb-4 ${styles2.title}`}>
        <h3>⁠The Reality of Recapturing the Past: Illusion vs. Reality</h3>
        <div className={styles2.line}></div>
      </div>

      {/* Main Content Section */}
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          {/* Image */}
          <div className="text-center mb-4">
            <Image src={img20} alt="not" className="img-fluid" />
          </div>

          {/* Bullet Points */}
          <div className={styles2.paragraph}>
            <ul>
              <li>
                Gatsby’s reunion with Daisy shows the past can’t be relived.
              </li>
              <li>Daisy is different, and time has changed everything.</li>
              <li>The past is often not what we remember.</li>
            </ul>
          </div>

          {/* Image */}
          <div className="text-center mb-4">
            <Image src={img21} alt="not" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reality;
