import { Outlet, useNavigate } from "react-router-dom";
import Nav from "../admin/nav";
import Aside from "../admin/aside";

type Props = {};

const AdminLayout = (props: Props) => {
  return (
    <>
      <Nav />
      <Aside />
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
