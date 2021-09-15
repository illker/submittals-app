import SubmittalsLogo from "../assets/img/submittals-logo.svg";

const logo: React.FC = () => {
  return (
    <img
      src={SubmittalsLogo}
      alt="Submittals logo App"
      data-testid="logo"
      style={{
        width: "250px",
        padding: "5px",
        margin: "15px",
      }}
    />
  );
};

export default logo;
