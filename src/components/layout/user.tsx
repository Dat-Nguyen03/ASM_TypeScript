import { Outlet, Link } from "react-router-dom";
import { IUser } from "../../interfaces/user";
import HeaderUser from "../headerUser";
import FooterUser from "../footerUser";

// type Props = {
//   currentUser: IUser | null;
//   handleLogout: () => void;
// };
const UserLayout = () => {
  return (
    <>
      <HeaderUser />
      <Outlet />
      <FooterUser />
    </>
  );
};

export default UserLayout;
