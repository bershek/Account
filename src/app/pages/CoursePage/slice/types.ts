export interface IPassed {
  [key: string]: Array<string>
}

export interface IComment {
  [key: string]: string
}

export interface  CoursesState {
  active: Array<string>,
  passed: IPassed,
  comments: IComment
}
