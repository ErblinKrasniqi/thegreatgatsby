import React from "react";
import styles from "../Assets/scss/categories.module.scss";
import styles2 from "../Assets/scss/page.module.scss";
import Navbar from "./shared/Navbar/Navbar";
import Link from "next/link";

const categorieContent = [
  {
    id: 1,
    name: "Summary",

    active: true,
  },
  {
    id: 2,
    name: "Characters",

    active: false,
  },
  {
    id: 3,
    name: "Literary Device",

    active: false,
  },
  {
    id: 4,
    name: "Questions & Answers",

    active: false,
  },
  {
    id: 5,
    name: "Quotes",

    active: false,
  },
  {
    id: 6,
    name: "Quick Quizzes",

    active: false,
  },
  {
    id: 7,
    name: "Essays",

    active: false,
  },
  {
    id: 8,
    name: "Further Study",

    active: false,
  },
];

export default function Home() {
  return (
    <React.Fragment>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.subContainer}>
          <div className={styles.categories}>
            {categorieContent.map((categorie) => (
              <div key={categorie.id} className={styles.block}>
                <h3>{categorie.name}</h3>
                <div className={styles.line}></div>

                {/* Conditionally render popup based on active state */}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles2.page}>
          <div className={styles2.title}>
            <h3>This is it</h3>
            <div className={styles2.line}></div>
          </div>
          <div className={styles2.paragraph}>
            <p>
              The Great Gatsby is a story about the impossibility of recapturing
              the past and also the difficulty of altering one’s future. The
              protagonist of the novel is Jay Gatsby, who is the mysterious and
              wealthy neighbor of the narrator, Nick Carraway. Although we know
              little about Gatsby at first, we know from Nick’s introduction—and
              from the book’s title—that Gatsby’s story will be the focus of the
              novel. As the novel progresses and Nick becomes increasingly drawn
              into Gatsby’s complicated world, we learn what Gatsby wants:
              Daisy, Nick’s cousin, the girl he once loved. Anything and anyone
              that stands between Gatsby and Daisy becomes an antagonist.
              Although Daisy’s brutish husband Tom is the most obvious
              antagonist, a variety of more abstract concepts—such as class
              <br />m the book’s title—that Gatsby’s story will be the focus of
              the novel. As the novel progresses and Nick becomes increasingly
              drawn into Gatsby’s complicated world, we learn what Gatsby wants:
              Daisy, Nick’s cousin, the girl he once loved. Anything and anyone
              that stands between Gatsby and Daisy becomes an antagonist.
              Although Daisy’s brutish husband Tom is the most obvious
              antagonist, a variety of more abstract concepts—such as class
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
