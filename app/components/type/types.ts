export enum ETypes {
  design = 0,
  develop = 1,
}

export interface IButtonData {
  label: string;
  type: ETypes;
}
