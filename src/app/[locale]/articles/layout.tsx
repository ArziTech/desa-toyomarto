import React from 'react'
import PackageList from "@/components/sections/package-list";

const Layout = ({children}:{children: React.ReactNode}) => {
  return (
      <>
        {children}
        <PackageList />
      </>
  )
}
export default Layout
