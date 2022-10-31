import React, { useContext } from "react";
import SearchContext from "../Context/SearchContext";

const Card = ({ info }) => {
  const { addFilterKeywords } = useContext(SearchContext);
  // ?destructure props
  const {
    company,
    logo,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  } = info;

  // taking all the key values in a single array
  let keywords = [role, level, ...languages, ...tools];

  return (
    <div className="card container">
      <figure className="hidden">
        <img
          className="card__img card__img-mobile"
          src={logo}
          alt="photosnap"
        />
      </figure>
      <article className="card__description card__description--p ">
        <div className="card__description-left">
          <figure className="hidden-mobile">
            <img
              className="card__img card__img-desktop"
              src={logo}
              alt="photosnap"
            />
          </figure>
          <div className="card__description-left--articles">
            <article className="card__header flex  flex-ai-c">
              <h3 className="company">{company}</h3>
              {info.new && <h3 className="label">NEW!</h3>}
              {info.featured && <h3 className="label label-dark ">FEATURED</h3>}
            </article>
            <article className="card__title">
              <h3>{position}</h3>
            </article>
            <article className="card__status flex ">
              <p>{postedAt}</p>
              <p className="px">{contract}</p>
              <p>{location}</p>
            </article>
          </div>
        </div>
        <hr className="hidden" />
        <div className="card__description-right ">
          <section className="card__categories ">
            {keywords.map((key, i) => (
              <button
                onClick={() => addFilterKeywords(key)}
                key={i}
                className="card__category"
              >
                {key}
              </button>
            ))}
          </section>
        </div>
      </article>
    </div>
  );
};

export default Card;
