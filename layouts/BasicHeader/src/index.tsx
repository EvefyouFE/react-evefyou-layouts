/*
 * @Author: EvefyouFE
 * @Date: 2023-08-23 01:22:27
 * @FilePath: \react-evefyou-layouts\layouts\BasicHeader\index.tsx
 * @Description: 
 * Everyone is coming to the world i live in, as i am going to the world lives for you. 人人皆往我世界，我为世界中人人。
 * Copyright (c) 2023 by EvefyouFE/evef, All Rights Reserved. 
 */
import { Header } from 'antd/es/layout/layout';
import React from 'react';
import { BasicHeaderLeft } from './components/BasicHeaderLeft';
import { BasicHeaderProps } from "./props";
import classNames from "classnames";
import 'virtual:windi.css';

export const BasicHeader: React.FC<BasicHeaderProps> = ({ className, style, headerLeft, headerAction }) => {
  const clsName = classNames('flex items-center p-0 bg-white sticky top-0 z-10', className)
  const HeaderLeft = headerLeft ? headerLeft : <BasicHeaderLeft />
  return (
    <Header
      className={clsName}
      style={style}
    >
      {HeaderLeft}
      {headerAction}
    </Header>
  )
}
