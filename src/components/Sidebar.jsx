import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { SvgHome, SvgDocuments, SvgUser, SvgCopy, SvgUpdate, SvgRename, SvgDelete, SvgDeleteUser, SvgRenameUser } from "./Svgcomp";
import { IconFolderPlus, IconLogout } from "@tabler/icons-react";
import { useRecoilState, useRecoilValue } from "recoil";
import { authAtom } from "../store/atoms/authAtom";
import { sidebarAtom } from "../store/atoms/sidebarAtom";
import { IconMenu2 } from "@tabler/icons-react";

const Sidebar = () => {
  const auth = useRecoilValue(authAtom);
  const [isSidebarOpen, setIsSidebarOpen] = useRecoilState(sidebarAtom);
  const location = useLocation();
  const navigate = useNavigate();

  const sideBarItems = [
    { id: 1, name: "Home", href: "/dashboard", icon: <SvgHome /> },
    { id: 2, name: "Docs", href: "/docs", icon: <SvgDocuments /> },
  ];

  const featureSidebar1 = [
    { id: 3, name: "Add Document", href: "/addDoc", icon: <IconFolderPlus color="red" />, disabledColor: "gray" }
  ];

  const featureSidebar2 = [
    { id: 4, name: "Copy Public Link", href: '/doc/copy', icon: <SvgCopy /> },
    { id: 5, name: "Update Doc", href: '/doc/update', icon: <SvgUpdate /> },
    { id: 6, name: "Rename Doc", href: '/doc/rename', icon: <SvgRename /> },
    { id: 7, name: "Delete Connection", href: '/doc/delete', icon: <SvgDelete /> },
  ];

  const featureSidebar3 = [
    { id: 8, name: "Rename User", href: '/user/rename', icon: <SvgRenameUser /> },
    { id: 9, name: "Delete User", href: '/user/delete', icon: <SvgDeleteUser /> }
  ];

  const bottomItems = [
    { id: 10, name: "User", href: "/profile", icon: <SvgUser /> },
    { id: 11, name: "Logout", href: "/logout", icon: <IconLogout color="red" /> }
  ];

  const buttonsClass = `inline-flex text-center items-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors py-2 gap-2 text-black hover:font-bold hover:shadow-lg hover:bg-[#dcf8d7] hover:font-bold hover:shadow-lg  hover:bg-[#dcf8d7]`;
  const buttonSidebarClass = `${isSidebarOpen ? "px-4 justify-start" : "h-8 w-8 justify-center"}`;

  return (
    <>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <input type="file" className="file-input file-input-bordered file-input-info w-full max-w-xs" />{"   "}
          <button className="btn btn-active btn-neutral">Submit</button>
        </div>
      </dialog>

      <aside className={`py-8 px-6 flex felx-col rounded-lg border-t-2 border-r-2 border-b-2 border-gray-200 fixed top-[68px] bottom-0 z-50 ${isSidebarOpen ? "w-52" : "w-24"}`}>
        <div className="flex flex-col justify-between">
          <div>
            <nav className="flex flex-col gap-4">
              {sideBarItems.map((item) => (
                <button
                  key={item.id}
                  className={`${buttonsClass} ${buttonSidebarClass}`}
                  onClick={() => { navigate(item.href) }}
                >
                  {React.cloneElement(item.icon, { disabled: item.disabled !== undefined ? item.disabled : false, color: item.disabled ? item.disabledColor : undefined })}
                  <span className={`${isSidebarOpen ? "" : "hidden"}`}>{item.name}</span>
                </button>
              ))}
            </nav>
            <div className={`mt-8 ${location.pathname === "/docs" ? "border-t border-base-content" : null}`}>
              <nav className="flex flex-col gap-4 mt-8 justify-start ">
                {location.pathname === "/docs" && featureSidebar1.map((item) => (
                  <button
                    key={item.id}
                    className={`${buttonsClass} ${buttonSidebarClass}`}
                    onClick={() => document.getElementById('my_modal_3').showModal()}
                  >
                    {React.cloneElement(item.icon, { disabled: item.disabled !== undefined ? item.disabled : false, color: item.disabled ? item.disabledColor : undefined })}
                    <span className={`${isSidebarOpen ? "" : "hidden"}`}>{item.name}</span>
                  </button>
                ))}
              </nav>
            </div>
            <div className={`mt-8 ${location.pathname === "/doc" ? "border-t border-base-content" : null}`}>
              <nav className="flex flex-col gap-4 mt-8 justify-start ">
                {location.pathname === "/doc" && featureSidebar2.map((item) => (
                  <button
                    key={item.id}
                    className={`${buttonsClass} ${buttonSidebarClass}`}
                    onClick={() => { }}
                  >
                    {React.cloneElement(item.icon, { disabled: item.disabled !== undefined ? item.disabled : false, color: item.disabled ? item.disabledColor : undefined })}
                    <span className={`${isSidebarOpen ? "" : "hidden"}`}>{item.name}</span>
                  </button>
                ))}
              </nav>
            </div>
            <div className={`mt-8 ${location.pathname === "/profile" ? "border-t border-base-content" : null}`}>
              <nav className="flex flex-col gap-4 mt-8 justify-start ">
                {location.pathname === "/profile" && featureSidebar3.map((item) => (
                  <button
                    key={item.id}
                    className={`${buttonsClass} ${buttonSidebarClass}`}
                    onClick={() => { }}
                  >
                    {React.cloneElement(item.icon, { disabled: item.disabled !== undefined ? item.disabled : false, color: item.disabled ? item.disabledColor : undefined })}
                    <span className={`${isSidebarOpen ? "" : "hidden"}`}>{item.name}</span>
                  </button>
                ))}
              </nav>
            </div>
            <div className="mt-8 border-t border-base-content">
              <nav className="flex flex-col gap-4 mt-8 justify-start ">
                {bottomItems.map((item) => (
                  <button
                    key={item.id}
                    className={`${buttonsClass} ${buttonSidebarClass}`}
                    onClick={() => { }}
                  >
                    {React.cloneElement(item.icon, { disabled: item.disabled !== undefined ? item.disabled : false, color: item.disabled ? item.disabledColor : undefined })}
                    <span className={`${isSidebarOpen ? "" : "hidden"}`}>{item.name}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>
          <div className={`${buttonsClass} ${buttonSidebarClass}`}>
            {auth?.accessToken && (
              <div className="flex cursor-pointer" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                <IconMenu2 />
                <div className="flex flex-col justify-center">
                  <div className={`pl-2 ${isSidebarOpen ? "" : "hidden"}`}>Minimize</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;