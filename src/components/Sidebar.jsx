import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SvgHome, SvgDocuments, SvgUser, SvgCopy, SvgUpdate, SvgRename, SvgDelete, SvgDeleteUser, SvgRenameUser } from "./Svgcomp";
import { IconFolderPlus, IconEdit, IconLogout } from "@tabler/icons-react";
import { useRecoilState, useRecoilValue } from "recoil";
import { authAtom } from "../store/atoms/authAtom";
import { sidebarAtom } from "../store/atoms/sidebarAtom";
import { IconMenu2 } from "@tabler/icons-react";

const Sidebar = () => {
  const navigate = useNavigate();

  const auth = useRecoilValue(authAtom); 
  const [isSidebarOpen, setIsSideOpen] = useRecoilState(sidebarAtom); 

  const sideBarItems = [
    { id: 1, name: "Home", href: "/", icon: <SvgHome /> },
    { id: 2, name: "Docs", href: "/mydocuments", icon: <SvgDocuments /> },
  ];

  const featureSidebar1 = [
    { id: 3, name: "Add Document", href: "/add", icon: <IconFolderPlus color="red" />, disabledColor: "gray"}
  ]

  const featureSidebar2 = [
    { id: 4, name: "Copy Public Link", href: '/doc/copy', icon: <SvgCopy />},
    { id: 5, name: "Update Doc", href: '/doc/update', icon: <SvgUpdate />},
    { id: 6, name: "Rename Doc", href: '/doc/rename', icon: <SvgRename />},
    { id: 7, name: "Delete Connection", href: '/doc/delete', icon: <SvgDelete />},
  ]

  const featureSidebar3 = [
    { id: 8, name: "Rename User", href: '/user/rename', icon: <SvgRenameUser />},
    { id: 9, name: "Delete User", href: '/user/delete', icon: <SvgDeleteUser />}
  ]

  const bottomItems = [
    { id: 10, name: "User", href: "/profile", icon: <SvgUser /> },
    { id: 11, name: "Logout", href: "/logout", icon: <IconLogout color="red" /> }
  ];


  const buttonsClass = `inline-flex text-center items-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors py-2 gap-2 text-black hover:font-bold hover:shadow-lg hover:bg-[#dcf8d7] hover:font-bold hover:shadow-lg  hover:bg-[#dcf8d7]`
  const buttonSidebarClass = `${ isSidebarOpen? "px-4 justify-start" : "h-8 w-8 justify-center"}`

  return (
    <>
      <aside className={`bg-[#fbfff5] py-8 px-6 flex felx-col rounded-lg border-r border-t fixed top-[68px] bottom-0 z-50 shadow-md ${ isSidebarOpen ? "w-52" : "w-24"}`} >
        <div className="flex flex-col justify-between">
          <div>
            <nav className="flex flex-col gap-4">
              {sideBarItems.map((item) => (
                <button
                  key={item.id}
                  className={`${buttonsClass} ${buttonSidebarClass}`}
                  onClick={() => {}}>
                  {React.cloneElement(item.icon, { disabled: item.disabled !== undefined ? item.disabled : false, color: item.disabled ? item.disabledColor : undefined })}
                  <span className={` ${isSidebarOpen ? "" : "hidden"}`}> {item.name} </span>
                </button>
                ))
              }
            </nav>
            <div className={`mt-8 ${window.Location.href == "/doc"? "border-t" : null}`}>
              <nav className="flex flex-col gap-4 mt-8 justify-start ">
                {window.Location.href == "/doc" && featureSidebar1.map((item) => (
                  <button
                    key={item.id}
                    className={`${buttonsClass} ${buttonSidebarClass}`}
                    onClick={() => {}}>
                    {React.cloneElement(item.icon, { disabled: item.disabled !== undefined ? item.disabled : false, color: item.disabled ? item.disabledColor : undefined })}
                    <span className={` ${isSidebarOpen ? "" : "hidden"}`}> {item.name} </span>
                  </button>
                ))
              }
              </nav>
            </div>
            <div className={`mt-8 ${window.Location.href == "/doc"? "border-t" : null}`}>
              <nav className="flex flex-col gap-4 mt-8 justify-start ">
                {window.Location.href == "/doc" && featureSidebar2.map((item) => (
                  <button
                    key={item.id}
                    className={`${buttonsClass} ${buttonSidebarClass}`}
                    onClick={() => {}}>
                    {React.cloneElement(item.icon, { disabled: item.disabled !== undefined ? item.disabled : false, color: item.disabled ? item.disabledColor : undefined })}
                    <span className={` ${isSidebarOpen ? "" : "hidden"}`}> {item.name} </span>
                  </button>
                ))
              }
              </nav>
            </div>
            <div className={`mt-8 ${"border-t"}`}>
              <nav className="flex flex-col gap-4 mt-8 justify-start ">
                {featureSidebar3.map((item) => (
                  <button
                    key={item.id}
                    className={`${buttonsClass} ${buttonSidebarClass}`}
                    onClick={() => {}}>
                    {React.cloneElement(item.icon, { disabled: item.disabled !== undefined ? item.disabled : false, color: item.disabled ? item.disabledColor : undefined })}
                    <span className={` ${isSidebarOpen ? "" : "hidden"}`}> {item.name} </span>
                  </button>
                ))
              }
              </nav>
            </div>
            <div className="mt-8 border-t">
              <nav className="flex flex-col gap-4 mt-8 justify-start ">
                {bottomItems.map((item) => (
                  <button
                    key={item.id}
                    className={`${buttonsClass} ${buttonSidebarClass}`}
                    onClick={() => {}}>
                    {React.cloneElement(item.icon, { disabled: item.disabled !== undefined ? item.disabled : false, color: item.disabled ? item.disabledColor : undefined })}
                    <span className={` ${isSidebarOpen ? "" : "hidden"}`}> {item.name} </span>
                  </button>
                ))
              }
              </nav>
            </div>
          </div>
          <div className={`${buttonsClass} ${buttonSidebarClass}`}>
            {auth?.accessToken && (
              <div className="flex cursor-pointer" onClick={()=>(setIsSideOpen(!isSidebarOpen))}>
                <IconMenu2 />
                <div className="flex flex-col justify-center">
                  <div className={`pl-2 ${isSidebarOpen?"":"hidden"}`}>Minimize</div>
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