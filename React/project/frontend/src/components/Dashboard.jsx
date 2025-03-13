import React from 'react'
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const Dashboard = () => {
  return (
    <main>
      <NavBar />
      <section>
        <Outlet />
      </section>
    </main>
  )
}

export default Dashboard