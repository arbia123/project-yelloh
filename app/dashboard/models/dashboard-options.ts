import { GridsterItem } from 'angular-gridster2/lib/gridsterItem.interface';
export interface Handles {
  s: boolean;
  e: boolean;
  n: boolean;
  w: boolean;
  se: boolean;
  ne: boolean;
  sw: boolean;
  nw: boolean;
}
export interface DashboardOptions {
    gridType: any;
    compactType: any;
    margin: number;
    outerMargin: boolean;
    outerMarginTop: null;
    outerMarginRight: null;
    outerMarginBottom: null;
    outerMarginLeft: null;
    mobileBreakpoint: number;
    minCols: number;
    maxCols: number;
    minRows: number;
    maxRows: number;
    maxItemCols: number;
    minItemCols: number;
    maxItemRows: number;
    minItemRows: number;
    maxItemArea: number;
    minItemArea: number;
    defaultItemCols: number;
    defaultItemRows: number;
    fixedColWidth: number;
    fixedRowHeight: number;
    keepFixedHeightInMobile: boolean;
    keepFixedWidthInMobile: boolean;
    scrollSensitivity: number;
    scrollSpeed: number;
    enableEmptyCellClick: boolean;
    enableEmptyCellContextMenu: boolean;
    enableEmptyCellDrop: boolean;
    enableEmptyCellDrag: boolean;
    emptyCellDragMaxCols: number;
    emptyCellDragMaxRows: number;
    ignoreMarginInRow: boolean;
    draggable: any;
    resizable: {
      enabled: boolean; 
      handles: Handles;
    };
    swap: boolean;
    pushItems: boolean;
    disablePushOnDrag: boolean;
    disablePushOnResize: boolean;
    pushDirections: { north: true, east: true, south: true, west: true };
    pushResizeItems: boolean;
    displayGrid: any;
    disableWindowResize: boolean;
    disableWarnings: boolean;
    scrollToNewItems: boolean;
    itemChangeCallback: any;
    itemResizeCallback: any;
    api?: {
      resize?: () => void;
      optionsChanged?: () => void;
      getNextPossiblePosition?: (newItem: GridsterItem) => boolean;
      getFirstPossiblePosition?: (item: GridsterItem) => GridsterItem;
      getLastPossiblePosition?: (item: GridsterItem) => GridsterItem;
  };


}
