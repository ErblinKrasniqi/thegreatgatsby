import Image from "next/image";

import styles2 from "../../Assets/scss/page.module.scss";
import img6 from "../../Assets/images/img6.jpeg";
import img7 from "../../Assets/images/img7.jpeg";

const Livingpast = () => {
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
            <Image src={img6} alt="not" className="img-fluid" />
          </div>

          {/* Paragraph */}
          <div className={styles2.paragraph}>
            <p>
              Gatsby’s refusal to accept the passage of time leads him to
              destructive decisions, like bootlegging and manipulating others.
              His obsessive need to revive a past that no longer exists
              ultimately leads to his downfall. Interactive idea: A poll where
              viewers vote: “Can the past be repeated?” Live results could spark
              further discussion on whether nostalgia hinders personal growth or
              serves as an obstacle to living in the present.
            </p>
          </div>

          <div className="text-center mb-4">
            <Image src={img7} alt="not" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Livingpast;
