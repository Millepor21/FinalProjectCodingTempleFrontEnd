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
  readonly date?: string
  customer_name?: string;
  employee_id?: string;
};
export type LoggedUser = {
  token: string;
  username: string;
};
export type Employee = {
  readonly id?: string;
  username: string;
  password: string;
  first_name?: string;
  last_name?: string;
  manager_id?: string;
}
export type UpdateUser = {
  readonly id?: string;
  username: string;
  password: string;
  new_username?: string;
  new_password?: string;
  first_name?: string;
  last_name?: string;
}