import { PropsWithChildren } from "react";
import { BasicSiderProps } from "@/BasicSider";
import { BasicFooterProps } from "@/BasicFooter";
import { BasicHeaderProps } from "@/BasicHeader";

export type AdminLayoutProps = PropsWithChildren & {
  siderProps?: BasicSiderProps;
  footerProps?: BasicFooterProps;
  headerProps?: BasicHeaderProps;
  onContentClick?: () => void;
}