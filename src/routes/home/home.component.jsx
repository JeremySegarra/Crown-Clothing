import { Outlet } from "react-router-dom";

import CategoryMenu from "../../components/directory/directory.component.jsx";

const Home = () => {
  return (
    <div>
      <Outlet></Outlet>
      <CategoryMenu></CategoryMenu>);
    </div>
  );
};

export default Home;
