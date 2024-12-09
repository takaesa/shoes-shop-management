import React from 'react';

function Layout({ children }){
    return (
        <div className="container-fluid">
            <div className="content">
                {children}
            </div>
        </div>
    );
}

export default Layout;