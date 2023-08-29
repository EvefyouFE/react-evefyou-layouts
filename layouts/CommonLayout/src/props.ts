import { BasicFooterProps } from "@/BasicFooter/src/props"
import { PropsWithChildren } from "react";

export type CommonLayoutProps = PropsWithChildren & {
  footerProps?: BasicFooterProps;
}