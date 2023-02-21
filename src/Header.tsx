import React, { ReactComponentElement, ReactNode } from "react"

export const Header = (title?: string): ReactNode =>{
  return <h1 style={{
    height: '100%', width: '100%'
  }}>{title}</h1>
}
export default Header