export interface RowPropsType {
  children: JSX.ButtonPayload[];
}

export const Row = ({ children }: RowPropsType): JSX.ButtonPayload[] =>
  children;
