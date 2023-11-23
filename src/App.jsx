import HomePage from "./pages/HomePage.jsx";
import DocsPage from "./pages/DocsPage.jsx";
import BlogPage from "./pages/BlogPage.jsx";

import {
    createRoutesFromElements,
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom";
import RouteLayout from "./components/RouteLayout.jsx";


const App = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<RouteLayout/>}>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/docs" element={<DocsPage/>}/>
                <Route path="/blog" element={<BlogPage/>}/>
            </Route>
        )
    );
    return (
        <>
            <RouterProvider
                router={router}
            />
        </>
    );
};

export default App;