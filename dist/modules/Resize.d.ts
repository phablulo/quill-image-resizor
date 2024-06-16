import { default as ImageResizor } from '../ImageResizor';
import { BaseModule } from './BaseModule';

export declare class Resize extends BaseModule {
    boxes: HTMLDivElement[];
    dragBox: HTMLDivElement | null;
    dragStartX: number;
    dragStartY: number;
    preDragWidth: number;
    preDragHeight: number;
    preDragARatio: number;
    constructor(imageResizor: ImageResizor);
    onCreate: () => void;
    onDestroy: () => void;
    positionBoxes: () => void;
    addBox: (cursor: any) => void;
    handleMousedown: (evt: MouseEvent) => void;
    handleMouseup: () => void;
    handleDrag: (evt: any) => void;
    setCursor: (value: any) => void;
}
