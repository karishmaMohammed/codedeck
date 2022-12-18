import React from "react";

const Home = React.lazy(() => import("./Pages/Home"));
const PlayGround = React.lazy(() => import("./Pages/PlayGround"));
const Page404 = React.lazy(() => import("./Pages/Page404"));

 const routes = [
    {
        path: "/",
        component: <Home />
    },
    {
        path: "/code/:folderID/:playgroundID",
        component: <PlayGround />
    },
    {
        path: "*",
        component: <Page404 />
    }

];
export default routes;