export type ButtonFactory = (img: HTMLImageElement, marginStyle: any, // eslint-disable-line @typescript-eslint/no-explicit-any
displayStyle: any, // eslint-disable-line @typescript-eslint/no-explicit-any
floatStyle: any) => {
    icon: string;
    apply: () => void;
    remove: () => void;
    isApplied: () => boolean;
};
export interface ImageResizorOptions {
    modules?: string[];
    overlayStyles?: Record<string, string | number>;
    handleStyles?: Record<string, string | number>;
    displayStyles?: Record<string, string | number>;
    toolbarStyles?: Record<string, string | number>;
    toolbarButtons?: Record<string, boolean | ButtonFactory>;
    toolbarButtonStyles?: Record<string, string | number>;
    toolbarButtonSvgStyles?: Record<string, string | number>;
}
declare const _default: ImageResizorOptions;
export default _default;
