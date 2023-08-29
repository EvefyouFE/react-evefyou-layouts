import { BasicFooter } from "@/BasicFooter/src";
import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import React from 'react';
import 'virtual:windi.css';
import { CommonLayoutProps } from "./props";

export const CommonLayout: React.FC<CommonLayoutProps> = ({
  children,
  footerProps
}) => {
  const { className, content } = footerProps ?? {}
  return (
    < Layout >
      <Content className="flex justify-center items-center">
        {children}
      </Content>
      <BasicFooter content={content} className={className} />
    </Layout >
  )
}