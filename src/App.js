import Layout from "./Layout/Layout";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';
import { webRoutes } from "./Routes/Route";

function App(){
    return (
        <Router>
            <div>
                <Routes>
                    {
                        webRoutes.map((route, index) => {
                            const Page = route.component;
                            let _Layout = Layout;
                            if(route.layout){
                                _Layout = route.layout;
                            }
                            else if( route.layout === null){
                                _Layout = Fragment;
                            }
                            return (
                                <Route  key={index}
                                        path={route.path}
                                        element={
                                            <_Layout>
                                                <Page />
                                            </_Layout>
                                        }
                                />
                            );
                        }
                        )
                    }
                </Routes>
            </div>
        </Router>
    )
}
export default App;