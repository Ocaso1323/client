import React from 'react'
import { Routes, Route, Router } from "react-router-dom"
import { map } from "lodash"
import { AdminLayout } from "../layouts"
import {Courses , Auth, Users, Blog, Menu, Newsletter  } from "../pages/admin/"

const user = null

export function AdminRouter() {

  const loadLayout = (Layout, Page) => {
    return (
      <Layout>
        <Page />
      </Layout>
    )
  }

  return (
    <Routes>
      {!user ? (
        <Route path="/admin/*" element={<Auth/>}/>
      ) : (
        <>
          {["/admin", "/admin/Blog"].map((path) => (
            <Route key={path} path={path} element={loadLayout(AdminLayout, Blog)} />
          ))}
          <Route path='/admin/users' element={loadLayout(AdminLayout, Users)} />
          <Route path='/admin/courses' element={loadLayout(AdminLayout, Courses)} />
          <Route path='/admin/Menu' element={loadLayout(AdminLayout, Menu)} />
          <Route path='/admin/Newsletter' element={loadLayout(AdminLayout, Newsletter)} />
          
          
        </>
      )}
    </Routes>
  )
}
