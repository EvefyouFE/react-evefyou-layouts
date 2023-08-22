/// <reference types="react" />
import { BasicProps } from "antd/es/layout/layout";
export type BasicFooterProps = BasicProps & React.RefAttributes<HTMLElement> & {
    content?: React.ReactNode;
};
