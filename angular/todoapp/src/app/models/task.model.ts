export interface task {
  id: number;
  title: string;
  completed: boolean;
  editing?:boolean;
}

export enum Filters {
  All = 'All',
  Completed = 'Completed',
  Pending = 'Pending',
}
