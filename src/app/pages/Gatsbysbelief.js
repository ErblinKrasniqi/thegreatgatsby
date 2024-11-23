import Image from "next/image";

import styles2 from "../../Assets/scss/page.module.scss";
import img2 from "../../Assets/images/img2.jpg";
import img3 from "../../Assets/images/img3.jpg";

const Gatsbysbelief = () => {
  return (
    <div className={`container mt-5 ${styles2.page}`}>
      {/* Title Section */}
      <div className={`text-center mb-4 ${styles2.title}`}>
        <h3>Gatsby&apos;s Belief: Can He Recapture the Past?</h3>
        <div className={styles2.line}></div>
      </div>

      {/* Main Content Section */}
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          {/* Image */}
          <div className="text-center mb-4">
            <Image src={img2} alt="not" className="img-fluid" />
          </div>

          {/* Paragraph */}
          <div className={styles2.paragraph}>
            <p>
              A Romantic Ideal or a Tragic Flaw? Gatsby firmly believes in the
              possibility of recapturing the past, saying, “Can't repeat the
              past? Why of course you can!” His entire life revolves around
              winning Daisy back and re-creating the golden moment they shared.
              However, his fixation on this ideal distorts his reality. Key
              visual: A timeline showing Gatsby’s rise to wealth, his lavish
              parties, and his obsession with Daisy. This includes a clickable
              symbol map featuring the green light and Dr. T.J. Eckleburg’s
              eyes, inviting users to explore their meanings.
            </p>
          </div>

          <div className="text-center mb-4">
            <Image src={img3} alt="not" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gatsbysbelief;
