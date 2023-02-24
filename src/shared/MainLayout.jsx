import React from 'react'
import { Outlet } from 'react-router-dom'

import Footer from './Footer'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const MainLayout = () => {
  return (
    <div className="container-scroller">
        <div className="row p-0 m-0 proBanner" id="proBanner">
            <div className="col-md-12 p-0 m-0">
            <div className="card-body card-body-padding d-flex align-items-center justify-content-between">
                <div className="ps-lg-1">
                <div className="d-flex align-items-center justify-content-between">
                    <p className="mb-0 font-weight-medium me-3 buy-now-text">Free 24/7 customer support, updates, and more with this template!</p>
                    <a href="https://www.bootstrapdash.com/product/purple-bootstrap-admin-template/?utm_source=organic&utm_medium=banner&utm_campaign=buynow_demo" target="_blank" className="btn me-2 buy-now-btn border-0">Get Pro</a>
                </div>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                <a href="https://www.bootstrapdash.com/product/purple-bootstrap-admin-template/"><i className="mdi mdi-home me-3 text-white" /></a>
                <button id="bannerClose" className="btn border-0 p-0">
                    <i className="mdi mdi-close text-white me-0" />
                </button>
                </div>
            </div>
            </div>
        </div>
        {/* partial:partials/_navbar.html */}
        <Navbar />
        {/* partial */}
        <div className="container-fluid page-body-wrapper">
            {/* partial:partials/_sidebar.html */}
            <Sidebar />

            {/* partial */}
            <div className="main-panel">
                <Outlet />
            {/* content-wrapper ends */}
            {/* partial:partials/_footer.html */}
                <Footer />
            {/* partial */}
            </div>
            {/* main-panel ends */}
        </div>
        {/* page-body-wrapper ends */}
    </div>
  )
}

export default MainLayout