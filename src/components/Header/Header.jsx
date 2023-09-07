import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";

const Header = () => {
  return (
    <header className="border-bottom header-height">
      <div className="container-fluid">
        <div className="d-flex align-items-center justify-content-between">
          <Link to="/">
            <div className="d-flex align-items-center">
              <img src={Logo} alt="Nagarro Logo" width={100} />
              <p className="color-gray">FinOps</p>
            </div>
          </Link>
          <div className="flex-shrink-0">
            <img
              src={Logo}
              alt="mdo"
              width="32"
              height="32"
              className="rounded-circle border"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
