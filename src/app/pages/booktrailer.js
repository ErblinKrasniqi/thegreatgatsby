import Image from "next/image";

import styles2 from "../../Assets/scss/page.module.scss";

const Forward = () => {
  return (
    <div className={`container mt-5 ${styles2.page}`}>
      {/* Title Section */}

      {/* Main Content Section */}
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          {/* Image */}
          <div className="text-center mb-4"></div>
          <video width="640" height="360" controls>
            <source src="/vid.mp4" type="video/mp4" />
            <source src="/video.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
          {/* Paragraph */}

          <div className="text-center mb-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Forward;
