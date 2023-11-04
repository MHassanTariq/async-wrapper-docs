import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Easy to Use",
    Svg: require("@site/static/img/easy_to_use.svg").default,
    description: (
      <>
        wrapper-async wraps around your async functions in a very convenient
        fashion, enabling you to focus on what's important.
      </>
    ),
  },
  {
    title: "Lightweight",
    Svg: require("@site/static/img/light_weight.svg").default,
    description: (
      <>
        This zero dependency library works smoothly without stressing your
        server, making it lightweight and highly useable.
      </>
    ),
  },
  {
    title: "Event Tracking",
    Svg: require("@site/static/img/events_tracking.svg").default,
    description: (
      <>
        This library, enriched with functionalities, does not hinder your event
        tracking, and logging by giving step-by-step update.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
