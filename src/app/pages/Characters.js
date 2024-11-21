import Image from "next/image";

import styles2 from "../../Assets/scss/page.module.scss";
import img1 from "../../Assets/images/img2.png";

const Characters = () => {
  return (
    <div className={`container mt-5 ${styles2.page}`}>
      {/* Title Section */}
      <div className={`text-center mb-4 ${styles2.title}`}>
        <h3>This is it</h3>
        <div className={styles2.line}></div>
      </div>

      {/* Main Content Section */}
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          {/* Image */}
          <div className="text-center mb-4">
            <Image src={img1} alt="not" className="img-fluid" />
          </div>

          {/* Paragraph */}
          <div className={styles2.paragraph}>
            <p>
              The Great Gatsby is a story about the impossibility of recapturing
              the past and also the difficulty of altering one’s future. The
              protagonist of the novel is Jay Gatsby, who is the mysterious and
              one that stands between Gatsby and Daisy becomes an antagonist.
              Although Daisy’s brutish husband Tom is the most obvious
              antagonist, a variety of more abstract concepts—such as class.
            </p>
          </div>

          <div className="text-center mb-4">
            <Image src={img1} alt="not" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Characters;
