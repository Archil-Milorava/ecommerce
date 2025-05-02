import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

// const menuItemsBeta = [
//   {
//     title: "Perfumes",
//     link: "#",
//   },
//   {
//     title: "The Set",
//     link: "#",
//   },
//   {
//     title: "Discovery Board",
//     link: "#",
//   },
//   {
//     title: "Contact Us",
//     link: "#",
//   },
// ];

const SidebarNav = () => {
  return (
    <div className="bg-red-400">
      <Sidebar>
        <Menu>
          <SubMenu label="Charts">
            <MenuItem> Pie charts </MenuItem>
            <MenuItem> Line charts </MenuItem>
          </SubMenu>
          <MenuItem> Documentation </MenuItem>
          <MenuItem> Calendar </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default SidebarNav;
