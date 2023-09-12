import classnames from "classnames";
import { Footer } from "antd/es/layout/layout";
import React from "react";
import { BasicFooterProps } from "./props";
import 'virtual:windi.css';
import { useDesign } from "react-evefyou-hooks/useDesign";

export const BasicFooter: React.FC<BasicFooterProps> = ({ className, style, content }) => {
  const { prefixCls } = useDesign('basic-footer')
  const clsName = classnames(prefixCls, className, 'flex justify-center items-center')
  return (
    <Footer
      className={clsName}
      style={style}
    >
      <span>{content}</span>
    </Footer>
  )
} 