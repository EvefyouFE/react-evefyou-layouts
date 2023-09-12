/*
 * @Author: EvefyouFE
 * @Date: 2023-08-22 01:02:47
 * @FilePath: \react-evefyou-layouts\layouts\AdminLayout\index.tsx
 * @Description: 
 * Everyone is coming to the world i live in, as i am going to the world lives for you. 人人皆往我世界，我为世界中人人。
 * Copyright (c) 2023 by EvefyouFE/evef, All Rights Reserved. 
 */
import 'virtual:windi.css';
import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import React from 'react';
import { BasicSider } from "../../BasicSider/src";
import { BasicHeader } from "../../BasicHeader";
import { AdminLayoutProps } from "./props";
import { BasicFooter } from "@/BasicFooter/src";
import { useDesign } from "react-evefyou-hooks/useDesign";
import classNames from "classnames";

export const AdminLayout: React.FC<AdminLayoutProps> = ({
  children,
  className,
  siderProps,
  footerProps,
  headerProps,
  onContentClick
}) => {
  const { menuProps, logo } = siderProps ?? {}
  const { className: headerClassName, style, headerLeft, headerAction, showBreadcrumb } = headerProps ?? {}
  const { content, className: footerClassName, show = true } = footerProps ?? {}
  const { prefixCls } = useDesign('admin-layout')
  const clsName = classNames(prefixCls, className)
  return (
    <Layout hasSider className={clsName}>
      <BasicSider menuProps={menuProps} logo={logo} />
      <Layout className="h-screen">
        <BasicHeader
          className={headerClassName}
          style={style}
          headerLeft={headerLeft}
          headerAction={headerAction}
          showBreadcrumb={showBreadcrumb}
        />
        <Content
          className="h-full"
          onClick={onContentClick}
        >
          {children}
        </Content>
        {
          show && <BasicFooter content={content} className={footerClassName} />
        }
      </Layout>
    </Layout>
  );
};

