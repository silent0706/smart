import React, { useEffect } from "react";
import Layout from "@theme/Layout";
import clsx from "clsx";
import styles from "./styles.module.css";
const TITLE = "Team";
const DESCRIPTION = "Awesome people working";

function Team() {
  return (
    <Layout title={TITLE} description={DESCRIPTION}>
      <main className="container margin-vert--lg">
        <div className="text--center margin-bottom--xl">
          <h1>{TITLE}</h1>
          <p>{DESCRIPTION}</p>
        </div>
        <div className="row">
          <div className="col col--4 margin-bottom--lg">
            <div className={clsx("card", styles.showcaseUser)}>
              <div className="card__image">
                <img src="/img/fast.svg" />
              </div>
              <div className="card__body">
                <div className="avatar">
                  <div className="avatar__intro margin-left--none">
                    <h4 className="avatar__name">Anshul Goyal</h4>
                    <small className="avatar__subtitle">Coder for Fun :)</small>
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