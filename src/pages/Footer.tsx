import LinksFooter from "../components/footer/LinksFooter";
import NetworksFooter from "../components/footer/NetworksFooter";
import PrivacityFooter from "../components/footer/PrivacityFooter";
import LogoFooter from "../components/footer/LogoFooter";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <LogoFooter />
        <div className="footer__container--title">
          <h2 className="">Hacienda las Heliconias</h2>
        </div>
        <div className="footer__container--info">
          <LinksFooter />
          <NetworksFooter />
          {/* <PrivacityFooter /> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
