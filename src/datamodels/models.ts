export enum ButtonVariation {outline, filled}
export enum Orientation {left, right}

export type Process = {
  number: string
  title: string
  description: string
}


export type Service = {
  number: string
  title: string
  description: string
  image: string
  orientation: Orientation,
  link: string
}