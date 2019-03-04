import React from "react";
import Media from "react-media";
import styles from "../CSS/about.styl";

// About Functional Component
function About() {
  return (
    <div id="about">
      <Media query="(max-width: 968px)">
        {matches =>
          matches ? (
            <div className={styles["about-mobile"]}>
              <div className={styles["about__wrap-mobile"]}>
                <img
                  src="../../public/images/about_cover.jpg"
                  alt="About cover"
                />
              </div>
              <div className={styles["about__content-mobile"]}>
                <h1>Delivering Pizza The Right Way</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dignissimos minima sapiente error aliquam eveniet
                  reprehenderit, ipsa similique laborum, vel beatae culpa alias!
                  Nam fuga ex, corporis eos vel vero soluta. Unde eligendi neque
                  ab nesciunt quia fuga at laudantium rerum porro soluta vero
                  repellendus nisi eos maiores ex error harum, aspernatur
                  accusamus repellat quae fugiat! Maiores unde ipsa ipsum ullam?
                  Ducimus, laboriosam. Doloremque distinctio ea minima fugit ex
                  maxime amet error dolor, expedita commodi, doloribus magnam
                  voluptatum officia vel, nostrum molestiae consequuntur sed.
                  Est ad nisi blanditiis? Aliquid, nesciunt molestias. Quam
                  voluptas sed tempora, itaque dolores adipisci minus officia
                  debitis maxime sequi similique qui earum iusto molestiae
                  aspernatur natus ab omnis fugiat architecto dignissimos
                  pariatur vero ipsa ipsam. Accusamus, laborum.
                </p>
              </div>
            </div>
          ) : (
            <div className={styles["about"]}>
              <div className={styles["about__wrap"]}>
                <img
                  className={styles["about__img"]}
                  src="../../public/images/about_cover.jpg"
                />
              </div>
              <div className={styles["about__wrap-content"]}>
                <div>
                  <h1>Delivering Pizza The Right Way</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime quos et rerum architecto animi? Eius fugit dicta
                    aperiam totam tempore nobis minima quia molestiae sed
                    maiores, voluptatibus dolore quam repudiandae! Architecto
                    sunt, assumenda quidem dolorum debitis atque placeat ducimus
                    fugiat. Harum possimus impedit nam inventore, cumque
                    accusantium nulla repellat facere quisquam. Numquam illo
                    nemo quo quae necessitatibus odio magni nostrum! Dignissimos
                    eius aperiam, amet in cum sit enim assumenda ullam, dolorem
                    quis repudiandae necessitatibus natus! Similique et animi,
                    recusandae pariatur eius enim, labore quae nesciunt esse
                    alias distinctio cumque unde. Architecto blanditiis quis
                    maiores ad debitis iste. Doloremque similique commodi ad
                    exercitationem saepe id velit mollitia iure autem possimus
                    illum ratione officiis inventore corporis distinctio nemo
                    voluptatibus aut, ducimus dolorum?
                  </p>
                </div>
              </div>
            </div>
          )
        }
      </Media>
    </div>
  );
}
export default About;
