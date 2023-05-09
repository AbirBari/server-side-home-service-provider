import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Order {
  @PrimaryColumn()
  orderId: number;

  @Column()
  serviceId: number;

  @Column()
  workerId: number;

  @Column()
  customerId: number;
}
