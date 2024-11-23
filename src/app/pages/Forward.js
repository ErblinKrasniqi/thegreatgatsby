import Image from "next/image";

import styles2 from "../../Assets/scss/page.module.scss";
import img12 from "../../Assets/images/img12.jpeg";

const Forward = () => {
  return (
    <div className={`container mt-5 ${styles2.page}`}>
      {/* Title Section */}
      <div className={`text-center mb-4 ${styles2.title}`}>
        <h3>Nick&apos;s Perspective</h3>
        <div className={styles2.line}></div>
      </div>

      {/* Main Content Section */}
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          {/* Image */}
          <div className="text-center mb-4">
            <Image src={img12} alt="not" className="img-fluid" />
          </div>

          {/* Paragraph */}
          <div className={styles2.paragraph}>
            <p>
              Learning to Move Forward While Nick begins the novel idealizing
              Gatsby, by the end, he realizes the danger of clinging to the
              past. His growth comes from accepting the present and moving
              forward. Visuals: Show Nick&apos;s journey from admiration to
              disillusionment, highlighting the contrast between his grounded
              perspective and Gatsby&apos;s obsession. This can be paired with a
              reflective prompt: “What does Nick&apos;s growth teach us about
              the importance of living in the present?”
            </p>
          </div>

          <div className="text-center mb-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Forward;
