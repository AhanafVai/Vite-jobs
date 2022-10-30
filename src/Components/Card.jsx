import React, { useContext } from "react";
import SearchContext from "../Context/SearchContext";

const Card = ({ info }) => {
  const { filterRole } = useContext(SearchContext);

  return (
    <div className="card container">
      <figure className="hidden">
        <img
          className="card__img card__img-mobile"
          src={info.logo}
          alt="photosnap"
        />
      </figure>
      <article className="card__description card__description--p ">
        <div className="card__description-left">
          <figure className="hidden-mobile">
            <img
              className="card__img card__img-desktop"
              src={info.logo}
              alt="photosnap"
            />
          </figure>
          <div className="card__description-left--articles">
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
          </div>
        </div>

        <hr className="hidden" />

        <div className="card__description-right ">
          <section className="card__categories ">
            <span
              onClick={() => filterRole(info.role)}
              className="card__category"
            >
              {info.role}
            </span>
            <span className="card__category">{info.level}</span>
            {info.languages.map((language, i) => (
              <span key={i} className="card__category">
                {language}
              </span>
            ))}
            {info.tools.map((tool, i) => (
              <span key={i} className="card__category">
                {tool}
              </span>
            ))}
          </section>
        </div>
      </article>
    </div>
  );
};

export default Card;
