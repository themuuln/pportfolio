export enum ETypes {
  design = 0,
  develop = 1,
  default = -1,
}

export interface IButtonData {
  label: string;
  type: ETypes;
}
