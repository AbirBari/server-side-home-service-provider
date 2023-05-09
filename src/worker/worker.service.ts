import { MailerService } from '@nestjs-modules/mailer';
import {
  Injectable,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Service } from 'src/entity/service.entity';
import { ServiceProvider } from 'src/entity/serviceProvider.entity';
import { Repository } from 'typeorm';

@Injectable()
export class WorkerService {
  constructor(
  
    @InjectRepository(ServiceProvider)
    private serviceProviderRepository : Repository<ServiceProvider>,

    @InjectRepository(Service)
    private serviceRepository: Repository<Service>,

    private mailerService: MailerService
    
  ) {}

  // Create Worker
  async createWorker(createWorkerdto) {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(createWorkerdto.password, salt);
    createWorkerdto.password = hashedPassword;
    return await this.serviceProviderRepository.save(createWorkerdto);

    // try {
    // } catch (error) {
    //   if (error.code === '23505') {
    //     throw new ConflictException('Username already exist');
    //   }
    // }
  }

  // Login Worker
  // async loginWorker(signInDto) {
  //   const { userName, password } = signInDto;

  //   const user = await this.serviceProviderRepository.findOneBy({ userName });
  //   if (user && (await bcrypt.compare(password, user.password))) {
  //     return user.userName;
  //   } 
  // }

  async signIn(signInDto){
    const {userName, password} = signInDto;
    const user = await this.serviceProviderRepository.findOneBy({userName})

    if(user && (await bcrypt.compare(password, user.password))) {
      return user
    }
    else{
      return "Enter Valid Data";
    }
  }

  // View Profile
  async getOneWorker(workerId) {
    const found = await this.serviceProviderRepository.findOneBy({ workerId });
    return found;
  }

  // Edit Profile
  async editWorkerProfile(id, updateWorkerDto) {
    return await this.serviceProviderRepository.update(id, updateWorkerDto);
  }

  // Delete Profile
  async deleteWorker(id) {
    return await this.serviceProviderRepository.delete(id);
  }

  // Wokker Can create service
  createServie(id, createServiceDto) {
    createServiceDto.serviceProvider = id;
    return this.serviceRepository.save(createServiceDto);
  }


  // Woker can view her/his own service
  async viewService(id) {
    return await this.serviceRepository.findOneBy({ serviceId: id });
  }

  // Woker can view her/his own services
  async viewServices(id) {
    return await this.serviceRepository.findBy({ serviceProvider: id });
  }

  // Worker Can  delete service
  async deleteService(id) {
    return await this.serviceRepository.delete(id);
  }

  // Worker Can  update service
  async updateService(id, updateServiceDto) {
    return await this.serviceRepository.update(id, updateServiceDto);
  }

  // // Worker Can  view orders
  // async viewOrders(id) {
  //   return await this.orderRepository.find();
  // }

  // // Worker Can  view order details
  // async viewOrderDetails(id) {
  //   return await this.orderRepository.findOneBy({ orderId: id });
  // }

  // Worker Can  view order details
  // async sendEmail(mydata) {
  //   return await this.mailerService.sendMail({
  //     to: mydata.to,
  //     subject: mydata.subject,
  //     text: mydata.text,
  //   });
  // }

  // send Mail

  async sendEmail(mydata){
    return await this.mailerService.sendMail({
        to: mydata.to,
        subject: mydata.subject,
        text: mydata.text,
    })
  }

  // worker can view all the the services
  async viewAllServices() {
    return await this.serviceRepository.find();
  }
}
