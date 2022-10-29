import React from "react";

const Card = ({ info }) => {
  return (
    <div className="card container">
      <figure>
        <img className="card__img" src={info.logo} alt="photosnap" />
      </figure>
      <article className="card__description--p">
        <article className="card__header flex  flex-ai-c">
          <h3 className="company">{info.company}</h3>
          {info.new === true ? <h3 className="label">NEW!</h3> : null}
          {info.featured === true ? (
            <h3 className="label label-dark ">FEATURED</h3>
          ) : null}
        </article>
        <article className="card__title">
          <h3>{info.position}</h3>
        </article>
        <article className="card__status flex ">
          <p>{info.postedAt}</p>
          <p className="px">{info.contract}</p>
          <p>{info.location}</p>
        </article>
        <hr />
        <section className="card__categories ">
          {info.languages.map((language) => (
            <span className="card__category">{language}</span>
          ))}
          {info.tools.map((tool) => (
            <span className="card__category">{tool}</span>
          ))}
        </section>
      </article>
    </div>
  );
};

export default Card;
