import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Category } from './../enum/category.enum';
import { ServiceProvider } from './serviceProvider.entity';

@Entity()
export class Service extends BaseEntity {
  @PrimaryGeneratedColumn()
  serviceId: number;

  @Column()
  serviceName: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  serviceType: Category;

  @Column({ nullable: true })
  serviceImage: string;

  // @ManyToOne(() => Seller, (seller) => seller.products)
  // @JoinColumn({ name: 'FK_SellerId' })
  // seller: Seller;

  // @ManyToOne(() => Worker, (worker) => worker.services)
  // @JoinColumn({ name: 'FK_workerId' })
  // worker: Worker;

  @ManyToOne(()=> ServiceProvider, (serviceProvider) => serviceProvider.services)
  @JoinColumn({name: 'FK_workerId' })
  serviceProvider : ServiceProvider;
}
