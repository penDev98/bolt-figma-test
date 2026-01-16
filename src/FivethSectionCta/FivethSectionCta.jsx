import "./FivethSectionCta.css";

export const FivethSectionCta = ({ className, ...props }) => {
  return (
    <div className={"fiveth-section-cta " + className}>
      <div className="rectangle-34"></div>
      <div className="div">ЗАПИТВАНЕ </div>
      <img className="arrow-2" src="arrow-20.svg" />
    </div>
  );
};
