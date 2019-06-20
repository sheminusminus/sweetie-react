// @flow

export type Color = { red: number, green: number, blue: number, alpha?: number };
export type Frame = { x: number, y: number, width: number, height: number };
export type Layer = {
  cornerRadius?: number,
  borderColor?: Color,
  borderWidth?: number,
  shadowColor?: Color,
  shadowOpacity?: number,
  shadowRadius?: number,
};
export type TargetTuple = [Function, number];
