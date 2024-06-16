import { BaseModule } from './BaseModule';
import { default as ImageResizor } from '../ImageResizor';

export declare class Toolbar extends BaseModule {
    toolbar?: HTMLDivElement;
    alignments: {
        icon: string;
        apply: () => void;
        remove: () => void;
        isApplied: () => boolean;
    }[];
    constructor(resizer: ImageResizor);
    onCreate: () => void;
    onDestroy: () => void;
    onUpdate: () => void;
    _defineAlignments: () => void;
    _addToolbarButtons: () => void;
    _selectButton: (button: any) => void;
}
