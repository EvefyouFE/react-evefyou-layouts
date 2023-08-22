import { BasicFooterProps } from '../BasicFooter/props';
import { PropsWithChildren } from "react";
export type CommonLayoutProps = PropsWithChildren & {
    footerProps?: BasicFooterProps;
};
