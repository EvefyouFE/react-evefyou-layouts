/*
 * @Author: EvefyouFE
 * @Date: 2023-07-15 00:49:33
 * @FilePath: \react-evefyou-layouts\layouts\components\BasicHeader\components\BasicHeaderLeft.tsx
 * @Description: 
 * Everyone is coming to the world i live in, as i am going to the world lives for you. 人人皆往我世界，我为世界中人人。
 * Copyright (c) 2023 by EvefyouFE/evef, All Rights Reserved. 
 */
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { BasicBreadcrumb } from 'react-evefyou-components/BasicBreadcrumb';
import { BasicHeaderLeftProps } from "../props";
import 'virtual:windi.css';
import React from "react";

export const BasicHeaderLeft: React.FC<BasicHeaderLeftProps> = ({
  logo,
  showBreadcrumb,
  collapsed = false,
  onCollapsed
}) => {
  return (
    <div className="flex justify-start items-center h-full w-full">
      {logo}
      <div
        className="flex items-center h-full px-3 cursor-pointer transition-colors duration-300 hover:text-primary hover:bg-headerLeftTiggerHover "
        onClick={onCollapsed}
        onKeyUp={onCollapsed}
        tabIndex={0}
        role="button"
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </div>
      {showBreadcrumb && <BasicBreadcrumb className="pl-2" />}
    </div>
  )
}
