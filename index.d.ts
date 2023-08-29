/// <reference types="react" />

import { BasicMenuProps } from 'react-evefyou-components';
import { BasicProps } from 'antd/es/layout/layout';
import { PropsWithChildren } from 'react';
import { default as React_2 } from 'react';
import { SiderProps } from 'antd';

export declare const AdminLayout: React_2.FC<AdminLayoutProps>;

export declare type AdminLayoutProps = PropsWithChildren & {
    siderProps?: BasicSiderProps;
    footerProps?: BasicFooterProps;
    headerProps?: BasicHeaderProps;
    onContentClick?: () => void;
};

export declare const BasicFooter: React_2.FC<BasicFooterProps>;

export declare type BasicFooterProps = BasicProps & React.RefAttributes<HTMLElement> & {
    content?: React.ReactNode;
};

export declare const BasicHeader: React_2.FC<BasicHeaderProps>;

export declare const BasicHeaderLeft: React_2.FC<BasicHeaderLeftProps>;

export declare type BasicHeaderLeftProps = {
    logo?: React_2.ReactNode;
    showBreadcrumb?: boolean;
    collapsed?: boolean;
    onCollapsed?: () => void;
};

export declare type BasicHeaderProps = BasicProps & React_2.RefAttributes<HTMLElement> & {
    headerLeft?: React_2.ReactNode;
    headerAction?: React_2.ReactNode;
};

export declare const BasicSider: React_2.FC<BasicSiderProps>;

export declare type BasicSiderProps = SiderProps & React.RefAttributes<HTMLDivElement> & {
    logo?: React.ReactNode;
    menuProps?: BasicMenuProps;
};

export declare const CommonLayout: React_2.FC<CommonLayoutProps>;

export declare type CommonLayoutProps = PropsWithChildren & {
    footerProps?: BasicFooterProps;
};

export { }
