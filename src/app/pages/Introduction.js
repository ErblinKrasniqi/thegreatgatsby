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

          {/* Paragraph */}
          <div className={styles2.paragraph}>
            <p>
              Have you ever wished you could undo a mistake or relive your best
              moment? What if someone told you it was impossible?” This dilemma
              plays out in The Great Gatsby, where the central question is: Can
              you really repeat the past? Gatsby's obsessive pursuit to recreate
              a specific moment in time—his romance with Daisy—drives the
              novel’s tragic arc. But is living in the past destructive, or does
              it reflect a lost ideal? Can Gatsby's longing for the past be
              universal, or is it uniquely his own?
            </p>
          </div>
          <Image src={img5} alt="not" className="img-fluid" />
          <div className="text-center mb-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
