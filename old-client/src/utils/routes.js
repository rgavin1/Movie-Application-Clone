import * as pages from "../pages/index";

const routes = [
    { component: pages.Profile, pathname: "", exact: true },
    { component: pages.Movies, pathname: "/movie", },
    { component: pages.Shows, pathname: "/tv", },
    { component: pages.Search, pathname: "/search", },
    { component: pages.Film, pathname: "/movie-profile/", },
    { component: pages.Program, pathname: "/tv-profile/:id", },
]

export default routes;