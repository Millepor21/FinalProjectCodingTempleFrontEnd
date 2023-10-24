export type Manager = {
  readonly id?: string;
  username: string;
  password: string;
  first_name?: string;
  last_name?: string;
};
export type Transaction = {
  readonly id?: string;
  amount?: string;
  date: string;
  customer_name?: string;
  employee_id?: string;
};
export type LoggedUser = {
  token: string;
  username: string;
};
