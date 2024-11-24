import Image from "next/image";
import styles2 from "../../Assets/scss/page.module.scss";
import img4 from "../../Assets/images/img4.jpeg";
import img5 from "../../Assets/images/img5.jpeg";

const Introduction = () => {
  return (
    <div className={`container mt-5 ${styles2.page}`}>
      {/* Title Section */}
      <div className={`text-center mb-4 ${styles2.title}`}>
        <h3>Introduction</h3>
        <div className={styles2.line}></div>
      </div>

      {/* Main Content Section */}
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          {/* Image */}
          <div className="text-center mb-4">
            <Image src={img4} alt="not" className="img-fluid" />
          </div>

          {/* Bullet Points */}
          <div className={styles2.paragraph}>
            <ul>
              <li>
                The Great Gatsby explores whether it's possible to fix past
                mistakes.
              </li>
              <li>
                Gatsby's obsession with recreating his love with Daisy drives
                the plot.
              </li>
              <li>
                The story questions if longing for the past is harmful or
                hopeful.
              </li>
            </ul>
          </div>

          {/* Image */}
          <Image src={img5} alt="not" className="img-fluid" />
          <div className="text-center mb-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
