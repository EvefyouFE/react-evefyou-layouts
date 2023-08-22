import classnames from "classnames";
import { Footer } from "antd/es/layout/layout";
import React from "react";
import { BasicFooterProps } from "./props";
import 'virtual:windi.css';

export const BasicFooter: React.FC<BasicFooterProps> = ({ className, style, content }) => {
  const clsName = classnames('flex justify-center items-center', className)
  return (
    <Footer
      className={clsName}
      style={style}
    >
      <span>{content}</span>
    </Footer>
  )
} 