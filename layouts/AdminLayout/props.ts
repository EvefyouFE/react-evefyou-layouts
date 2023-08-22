import { PropsWithChildren } from "react";
import { BasicSiderProps } from "../BasicSider/props";
import { BasicFooterProps } from "@/BasicFooter/props";
import { BasicHeaderProps } from "..";

export type AdminLayoutProps = PropsWithChildren & {
  siderProps?: BasicSiderProps;
  footerProps?: BasicFooterProps;
  headerProps?: BasicHeaderProps;
  onContentClick?: () => void;
}