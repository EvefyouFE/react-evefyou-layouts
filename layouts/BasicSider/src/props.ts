import { SiderProps } from "antd";
import { BasicMenuProps } from "react-evefyou-components/BasicMenu";

export type BasicSiderProps = SiderProps & React.RefAttributes<HTMLDivElement> & {
  logo?: React.ReactNode;
  menuProps?: BasicMenuProps;
}