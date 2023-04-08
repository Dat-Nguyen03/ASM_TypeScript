import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IUser } from "../../../interfaces/user";
import { getUsers, removeUser } from "../../../api/user";

const ListUsers = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await getUsers();
        console.log(data);
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const onHandleRemove = async (id: number | string) => {
    const isConfirm = confirm("Are you sure?");
    if (isConfirm) {
      await removeUser(id);
      const newUsers = users.filter((user) => user.id !== id);
      setUsers(newUsers);
    }
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              #
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Phone Number
            </th>
            <th scope="col" className="px-6 py-3">
              Role
            </th>

            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user, index: number) => (
            <tr
              key={index}
              className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {index + 1}
              </th>
              <td className="px-6 py-4">{user.name}</td>
              <td className="px-6 py-4">{user.email}</td>
              <td className="px-6 py-4">{user.phoneNumber}</td>
              <td className="px-6 py-4">{user.role}</td>

              <td className="px-6 py-4 flex flex-col">
                <Link
                  to={`/admin/user/update/${user.id}`}
                  className="font-medium bg-green-400 px-4 py-2 text-white inline-block text-center mb-4"
                >
                  Edit
                </Link>
                <button
                  onClick={() => onHandleRemove(user.id)}
                  className="font-medium bg-red-500 px-4 py-2 text-white "
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListUsers;
