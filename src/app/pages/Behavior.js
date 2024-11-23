import Image from "next/image";

import styles2 from "../../Assets/scss/page.module.scss";
import img10 from "../../Assets/images/img10.jpeg";
import img11 from "../../Assets/images/img11.jpeg";

const Behavior = () => {
  return (
    <div className={`container mt-5 ${styles2.page}`}>
      {/* Title Section */}
      <div className={`text-center mb-4 ${styles2.title}`}>
        <h3>Gatsby&apos;s Longing</h3>
        <div className={styles2.line}></div>
      </div>

      {/* Main Content Section */}
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          {/* Image */}
          <div className="text-center mb-4">
            <Image src={img10} alt="not" className="img-fluid" />
          </div>
          <div className={styles2.paragraph}>
            <p>
              A Universal Desire or a Destructive Obsession? While Gatsb&apos;s
              obsession is extreme, it taps into a universal longing to relive
              better times. We often yearn for the past, whether it's our
              childhood or an idealized relationship. However, Gatsby takes this
              desire to a tragic extreme by reshaping his entire identity.
              Interactive idea: Share modern examples of nostalgia—reviving
              80s/90s fashion or remaking old films—to show how our society,
              much like Gatsby, often seeks to bring the past back.
            </p>
          </div>
          {/* Paragraph */}

          <div className="text-center mb-4">
            <Image src={img11} alt="not" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Behavior;
