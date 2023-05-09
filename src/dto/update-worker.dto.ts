import { IsNotEmpty } from 'class-validator';
export class UpdateWorkerDto {
  @IsNotEmpty()
  userName: string;

  photo: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  phoneNumber: number;

  @IsNotEmpty()
  address: string;

  @IsNotEmpty()
  city: string;
}
