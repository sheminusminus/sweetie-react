// @flow

export type Color = { red: number, green: number, blue: number, alpha?: number };
export type Frame = { x: number, y: number, width: number, height: number };

export type ChildrenProps = {
  children?: any,
};

export type TargetEventProps = {
  target?: [Function, any],
};

export type TargetFunctionProps = {
  target?: Function,
};

export type BaseProps = {
  baseTypes?: string[],
  type?: string,
};

export type BaseViewProps = {
  backgroundColor?: Color,
  frame?: Frame,
  layer?: Object,
};

export type ViewProps = BaseProps & ChildrenProps & BaseViewProps;

export type ControlProps = ViewProps & TargetEventProps;

export type GestureRecognizerProps = BaseProps & TargetFunctionProps;

export type ViewControllerProps = BaseProps & ChildrenProps;
