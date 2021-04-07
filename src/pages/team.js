import React, { useEffect } from "react";
import Layout from "@theme/Layout";
import clsx from "clsx";
import styles from "./styles.module.css";
const TITLE = "Our Team";
const DESCRIPTION = "Awesome people who working with";
// We don't hide, we stand bravely in front of challenges

function Team() {
  return (
    <Layout title={TITLE} description={DESCRIPTION}>
      <main className="container margin-vert--lg">
        <div className="text--center margin-bottom--xl">
          <h1>{TITLE}</h1>
          <p>{DESCRIPTION}</p>
        </div>
        <div className="container padding-bottom--xl">
          <div className="row">
            {/* div 1 */}
            <div className="col col--3 margin-bottom--lg">
              <div
                className={clsx("card", styles.showcaseUser)}
                className="card item shadow--md"
              >
                <div className="card__header">
                  <h2>Project Manager</h2>
                </div>
                <div className="card__image">
                  {/* image source */}
                  <img src="/img/team.svg" loading="lazy" />
                </div>
                <div className="card__body">
                  <div className="avatar">
                    <div className="avatar__intro margin-left--none">
                      <h4 className="avatar__name">Wahyudi Heru Prasetyo</h4>
                      <small className="avatar__subtitle">
                        Hangudi Anggayuh Lelakuning Becik
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* div 2 */}
            <div className="col col--3 margin-bottom--lg">
              <div
                className={clsx("card", styles.showcaseUser)}
                className="card item shadow--md"
              >
                <div className="card__header">
                  <h2>Marketing</h2>
                </div>
                <div className="card__image" loading="lazy">
                  {/* image source */}
                  <img src="/img/team.svg" />
                </div>
                <div className="card__body">
                  <div className="avatar">
                    <div className="avatar__intro margin-left--none">
                      <h4 className="avatar__name">Syamsul Anam</h4>
                      <small className="avatar__subtitle text--justify">
                        Beberapa orang memimpikan kesuksesan, sementara yang
                        lain bangun setiap pagi untuk mewujudukannya
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* div 3 */}
            <div className="col col--3 margin-bottom--lg">
              <div
                className={clsx("card", styles.showcaseUser)}
                className="card item shadow--md"
              >
                <div className="card__header">
                  <h2>Software Engineer</h2>
                </div>
                <div className="card__image" loading="lazy">
                  {/* image source */}
                  <img src="/img/team.svg" />
                </div>
                <div className="card__body">
                  <div className="avatar">
                    <div className="avatar__intro margin-left--none">
                      <h4 className="avatar__name">Khotibul Umam</h4>
                      <small className="avatar__subtitle text--justify">
                        Kebahagiaan sama dengan kenyataan dikurangi ekspektasi
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* div 4 */}
          <div className="row">
            <div className="col col--3 margin-bottom--lg">
              <div
                className={clsx("card", styles.showcaseUser)}
                className="card item shadow--md"
              >
                <div className="card__header">
                  <h2>Software Engineer</h2>
                </div>
                <div className="card__image">
                  {/* image source */}
                  <img src="/img/team.svg" loading="lazy" />
                </div>
                <div className="card__body">
                  <div className="avatar">
                    <div className="avatar__intro margin-left--none">
                      <h4 className="avatar__name">Yoki Hidayatur Rohman</h4>
                      <small className="avatar__subtitle text--justify">
                        Kamu tidak perlu menjadi luar biasa untuk memulai,
                        tetapi kamu harus memulai untuk menjadi luar biasa
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
            <div className="col col--3 margin-bottom--lg"></div>
            {/* div 5 */}
          <div className="row">
            <div className="col col--3 margin-bottom--lg">
              <div
                className={clsx("card", styles.showcaseUser)}
                className="card item shadow--md"
              >
                <div className="card__header">
                  <h2>Software Engineer</h2>
                </div>
                <div className="card__image">
                  {/* image source */}
                  <img src="/img/team.svg" loading="lazy" />
                </div>
                <div className="card__body">
                  <div className="avatar">
                    <div className="avatar__intro margin-left--none">
                      <h4 className="avatar__name">David Wahyu Pradana</h4>
                      <small className="avatar__subtitle text--justify">
                        Selalu bersyukur, dengan profesionalitas untuk tanggung jawab di masa yang akan datang
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
            <div className="col col--3 margin-bottom--lg"></div>
            {/* div 6 */}
            <div className="col col--3 margin-bottom--lg">
              <div
                className={clsx("card", styles.showcaseUser)}
                className="card item shadow--md"
              >
                <div className="card__header">
                  <h2>Database Engineer</h2>
                </div>
                <div className="card__image">
                  {/* image source */}
                  <img src="/img/team.svg" loading="lazy" />
                </div>
                <div className="card__body">
                  <div className="avatar">
                    <div className="avatar__intro margin-left--none">
                      <h4 className="avatar__name">Astrid Inggit</h4>
                      <small className="avatar__subtitle text--justify">
                        suka bertemu orang baru, sebab semakin banyak bertemu
                        orang baru semakin saya tahu bahwa saya belum banyak
                        tahu apa-apa
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
export default Team;
