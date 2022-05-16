export interface NavigationItem {
    id: string;
    title: string;
    type: 'item' | 'group' | 'collapsable';
    translate?: string;
    svg?: boolean;
    icon?: string;
    iconActive?: string;
    active?: boolean;
    hidden?: boolean;
    url?: string;
    queryParams?: any;
    classes?: string;
    children?: NavigationItem[];
}
