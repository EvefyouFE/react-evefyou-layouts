import { BasicFooterProps } from "@/BasicFooter/src/props"
import { PropsWithChildrenCls } from "react-evefyou-common";

export type CommonLayoutProps = PropsWithChildrenCls & {
  footerProps?: BasicFooterProps;
}