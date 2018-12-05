

export class User {
  UserId: number;
  UserName: string;
  Password?: string;
  Firstname: string;
  Lastname: string;
  Email: string;
  DateOfBirth?: string;
  Mobile?: string;
  Phone?: string;

 
}


export class UserDetailViewModel {
  data: User;
  mode: string
}