import { BasicProps } from "antd/es/layout/layout";
import React from "react";

export type BasicHeaderLeftProps = {
  logo?: React.ReactNode;
  showBreadcrumb?: boolean;
  collapsed?: boolean;
  onCollapsed?: () => void;
}

export type BasicHeaderProps = BasicProps & React.RefAttributes<HTMLElement> & {
  headerLeft?: React.ReactNode;
  headerAction?: React.ReactNode;
  showBreadcrumb?: boolean;
  collapsed?: boolean;
  onCollapsed?: () => void;
}