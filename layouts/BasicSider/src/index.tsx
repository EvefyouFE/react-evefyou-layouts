/*
 * @Author: EvefyouFE
 * @Date: 2023-07-15 00:49:33
 * @FilePath: \react-evefyou-layouts\layouts\components\BasicSider\index.tsx
 * @Description: 
 * Everyone is coming to the world i live in, as i am going to the world lives for you. 人人皆往我世界，我为世界中人人。
 * Copyright (c) 2023 by EvefyouFE/evef, All Rights Reserved. 
 */
import { ConfigProvider } from 'antd';
import React, { useMemo } from 'react';
import Sider from 'antd/es/layout/Sider';
import { BasicScroll } from 'react-evefyou-components/BasicScroll';
import { BasicMenu } from 'react-evefyou-components/BasicMenu';
import { useDesign } from 'react-evefyou-hooks/useDesign';
import { BasicSiderProps } from "./props";
import './BasicSider.less'
import 'virtual:windi.css';
import classNames from "classnames";

export const BasicSider: React.FC<BasicSiderProps> = ({
  logo,
  width,
  collapsed,
  hidden,
  menuProps
}) => {
  const { prefixCls } = useDesign('basic-sider');
  const { menuTreeList = [] } = menuProps ?? {}
  const mode = useMemo(() => (collapsed ? 'vertical' : 'inline'), [collapsed]);
  const clsName = classNames(prefixCls, 'h-screen')
  return (
    <Sider
      hidden={hidden}
      collapsible
      trigger={null}
      collapsed={collapsed}
      collapsedWidth="4rem"
      width={width}
      className={clsName}
    >
      {logo}
      <ConfigProvider
        theme={{
          token: {
            borderRadius: 0,
          },
        }}
      >
        <BasicScroll className={`${prefixCls}-content`}>
          <BasicMenu menuTreeList={menuTreeList} mode={mode} />
        </BasicScroll>
      </ConfigProvider>
    </Sider>
  );
};
