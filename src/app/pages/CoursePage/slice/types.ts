export interface IPassed {
  [key: string]: Array<string>
}

export interface  CoursesState {
  active: Array<string>,
  passed: IPassed,
  comments: any
}
