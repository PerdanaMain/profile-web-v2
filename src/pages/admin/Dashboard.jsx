import { Listbox, ListboxItem } from "@nextui-org/react";
import React from "react";
import Hamburger from "../../assets/icons/List.png";
import Stars from "../../components/Stars";
import MainLayout from "../../containers/MainLayout";
import TableProject from "../../components/Admin/TableProject";

const Dashboard = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <MainLayout>
      <div className="container mx-auto relative z-10">
        <Stars />

        <div className="flex my-10">
          {/* Konten yang tersembunyi di layar kecil dan muncul di layar besar */}

          <Listbox
            aria-label="Actions"
            onAction={(key) => alert(key)}
            className={`flex-auto ${
              menuOpen ? "block" : "hidden"
            } sm:block mx-3 w-5 p-4 border-[1px] rounded-2xl bg-white`}
          >
            <ListboxItem key="new">New file</ListboxItem>
            <ListboxItem key="copy">Copy link</ListboxItem>
            <ListboxItem key="edit">Edit file</ListboxItem>
            <ListboxItem key="delete" className="text-danger" color="danger">
              Delete file
            </ListboxItem>
          </Listbox>

          <div className="flex-auto w-96 rounded-2xl p-4">
            <div className="sm:hidden">
              <button onClick={() => setMenuOpen(!menuOpen)}>
                <img src={Hamburger} alt="Menu" />
              </button>
            </div>
            <TableProject />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
