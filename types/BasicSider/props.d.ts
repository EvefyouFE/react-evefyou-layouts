/// <reference types="react" />
import { SiderProps } from "antd";
import { BasicMenuProps } from "react-evefyou-components";
export type BasicSiderProps = SiderProps & React.RefAttributes<HTMLDivElement> & {
    logo?: React.ReactNode;
    menuProps?: BasicMenuProps;
};
