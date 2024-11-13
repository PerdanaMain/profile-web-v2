import Navbar from "../components/Admin/Navbar";
import Sidebar from "../components/Admin/Sidebar";

// eslint-disable-next-line react/prop-types
const AdminLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen  w-full min-w-full 2xl:max-w-7xl 2xl:mx-auto 2xl:border-x-2 2xl:border-indigo-50">
      <Sidebar />

      <main className="container bg-indigo-50 w-full py-10 px-3 sm:px-10">
        <Navbar />
        <div className="container mx-auto my-10">{children}</div>
      </main>
    </div>
  );
};

export default AdminLayout;
