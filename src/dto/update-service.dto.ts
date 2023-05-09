import { IsString } from 'class-validator';
import { Category } from 'src/enum/category.enum';
export class UpdateServiceDto {
  @IsString()
  serviceName: string;

  @IsString()
  description: string;

  @IsString()
  price: number;

  @IsString()
  serviceType: Category;

  @IsString()
  serviceImage: string;
}
