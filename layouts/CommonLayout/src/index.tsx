import { BasicFooter } from "@/BasicFooter/src";
import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import React from 'react';
import 'virtual:windi.css';
import { CommonLayoutProps } from "./props";
import { useDesign } from "react-evefyou-hooks/useDesign";
import classNames from "classnames";

export const CommonLayout: React.FC<CommonLayoutProps> = ({
  children,
  className,
  footerProps
}) => {
  const { prefixCls } = useDesign('common-layout');
  const { className: footerCls, content } = footerProps ?? {}
  const clsName = classNames(prefixCls, className)
  return (
    <Layout className={clsName}>
      <Content className="flex justify-center items-center">
        {children}
      </Content>
      <BasicFooter content={content} className={footerCls} />
    </Layout >
  )
}