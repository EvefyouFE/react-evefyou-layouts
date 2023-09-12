import { BasicSiderProps } from "@/BasicSider";
import { BasicFooterProps } from "@/BasicFooter";
import { BasicHeaderProps } from "@/BasicHeader";
import { PropsWithChildrenCls } from "react-evefyou-common";

export type AdminLayoutProps = PropsWithChildrenCls & {
  siderProps?: BasicSiderProps;
  footerProps?: BasicFooterProps;
  headerProps?: BasicHeaderProps;
  onContentClick?: () => void;
}