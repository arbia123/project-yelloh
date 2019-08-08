 export interface WidgetList {
  col: number;
  row: number;
  sizeY: number;
  sizeX: number;
  name: string;
  rawTemplateName: string;
  screenId: number;
  templateId: number;
  widgetTypeId: number;
  wTemplateData: string;
  dataTarget: string;
  screenTarget: string;
  wTemplateTypeId: number;
  widgetConfig?:any;
  component?: any;
  widgetContent: WidgetContent;
}

export interface WidgetContent {
  data?: Datum[];
  cardItems?: CardItem[];
  cssClass?: string;
  iconCssClass?: string;
  type: string;
  cardTypeId?: number;
  options?: any;
}

export interface Options {
  axisLabelY?: string;
  axisLabelX?: string;
  axisTypeX?: string;
  axisTypeY?: string;
  params: Params;
}

 export interface Params {
  filterY?: string;
  ticks?: string;
  fractionY?: string;
  timeFormatX? :Date;
  filterX?: string;
  fractionX?: string;
  timeFormatY? :Date
}

export interface Datum {
  key?: string;
  values?: Value[];
  xLabels?: XLabels;
  type?: string;
  yAxis?: number;
  color?:string;
  order?:string;
  y?:string
}

export interface XLabels {
  '0'?: any;
  '1'?:any;
  '2'?:any;
  '3'?:any;
  '4'?:any;
  '5'?:any;
  '6'?:any;
  '7'?:any;
  '8'?:any;
  '9'?:any;
  '10'?:any;
  '11'?:any;

}

export interface Value {
  x: number;
  y: number;
}
interface CardItem {
  positionStyle: string;
  value: number;
  valueStyle?: any;
  valueColorStyle?: any;
  hasValueColorStyle?: any;
  toolTip: string;
  toolTipPlacement: string;
  unit: string;
  unitStyle?: any;
  style: string;
  hasIcon: boolean;
  icon?: any;
  comments?: any;
  position: string;
  fractionSize: number;
  filter: string;
  trend: string;
  formulaJs?: any;
  trendFormulaJs?: any;
  templateName?: any;
  rawTemplateName?: any;
}