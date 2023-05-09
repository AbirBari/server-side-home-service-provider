import {
    Column,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    Unique,
  } from 'typeorm';
  import { Service } from './service.entity';
  
  @Entity()
  @Unique(['userName'])
  export class ServiceProvider {
    @PrimaryGeneratedColumn()
    workerId: number;
  
    @Column()
    userName: string;
  
    @Column({ nullable: true })
    photo: string;
  
    @Column()
    password: string;
  
    @Column()
    firstName: string;
  
    @Column()
    lastName: string;
  
    @Column()
    email: string;
  
    @Column()
    phoneNumber: number;
  
    @Column()
    address: string;
  
    @Column()
    city: string;
  
    // Worker has many services
    // @OneToMany(() => Service, (service) => service.serviceProvider)
    // services: Service[];

    @OneToMany(()=> Service, (service) => service.serviceProvider)
    services: Service[]

    
  }
  