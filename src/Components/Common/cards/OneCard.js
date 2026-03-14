const OneCard = ({ attributes }) => {
  const { cardsData=[],options={} } = attributes;


  return (
    <section className="one-card-section-wrapper">
      <div className="container">
        <div className="wrapper">
          <ul className="card-list">
       
            {cardsData.map((card) => (
              <li key={card.id}>
                <div className="card bordered">
                  <div className="state-layer"></div>
                  <div className="card-wrapper">
                    <div className="visual">
                      <img className="img" src={card.image?.url} alt="" />
                    </div>
                    <div className="content">
                      <div className="content-wrapper">
                        <div className="meta">
                          {options.isTitle && <h3 className="title">{card.title}</h3>}
                          {options.isDescription && <p className="desc">{card.description}</p>}
                        </div>
                        
                          {options.isButton && <a href={card.linkUrl} target={options.isOpenLink ? "_blank" : "_self"} rel="noopener noreferrer" className="link">
                          {card.linkText}
                          <span dangerouslySetInnerHTML={{__html:options.icon}}></span>
                        </a>}
                        
                        
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OneCard;
