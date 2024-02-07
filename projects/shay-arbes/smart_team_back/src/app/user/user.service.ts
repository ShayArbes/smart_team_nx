import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { Users } from './entities/user.entity';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>,
    @Inject(CACHE_MANAGER) private cacheManger: Cache,
  ) {}

  async create(createUserInput: CreateUserInput): Promise<Users> {
    const user = this.userRepository.create(createUserInput);
    await this.cacheManger.reset();
    console.log(user, '1//////////////');
    return this.userRepository.save(user);
  }

  async findAll(): Promise<Users[]> {
    console.log('from db 😒');
    const users = await this.userRepository.find();
    return users;
  }

  async findOne(user_id: string): Promise<Users | null> {
    const user = await this.userRepository.findOne({ where: { user_id } });
    return user || null;
  }

  async findOneByEmail(email: string): Promise<Users | null> {
    const user = await this.userRepository.findOne({ where: { email } });
    return user || null;
  }

  async update(
    user_id: string,
    updateUserInput: UpdateUserInput,
  ): Promise<Users | null> {
    const user = await this.userRepository.findOne({ where: { user_id } });

    if (!user) {
      return null;
    }

    await this.userRepository.update(user_id, updateUserInput);
    await this.cacheManger.reset();
    return this.findOne(user_id);
  }

  async remove(id: string): Promise<Users> {
    const user = await this.findOne(id);
    if (user) {
      await this.userRepository.delete(id);
    }
    await this.cacheManger.reset();
    return user;
  }
}
// import { Inject, Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { CreateUserInput } from './dto/create-user.input';
// import { UpdateUserInput } from './dto/update-user.input';
// import { Users } from './entities/user.entity';
// import { CACHE_MANAGER } from '@nestjs/cache-manager';
// import { Cache } from 'cache-manager';

// @Injectable()
// export class UserService {
//   constructor(
//     @InjectRepository(Users)
//     private readonly userRepository: Repository<Users>,
//     @Inject(CACHE_MANAGER) private cacheManager: Cache,
//   ) {}

//   async create(createUserInput: CreateUserInput): Promise<Users> {
//     try {
//       const user = this.userRepository.create(createUserInput);
//       await this.cacheManager.reset();
//       return await this.userRepository.save(user);
//     } catch (error) {
//       throw new Error(`Error creating user: ${error.message}`);
//     }
//   }

//   async findAll(): Promise<Users[]> {
//     try {
//       console.log('from db 😒');
//       return await this.userRepository.find();
//     } catch (error) {
//       throw new Error(`Error fetching users: ${error.message}`);
//     }
//   }

//   async findOne(id: string): Promise<Users | null> {
//     try {
//       return (await this.userRepository.findOne({ where: { id } })) || null;
//     } catch (error) {
//       throw new Error(`Error fetching user by id: ${error.message}`);
//     }
//   }

//   async findOneByEmail(email: string): Promise<Users | null> {
//     try {
//       return (await this.userRepository.findOne({ where: { email } })) || null;
//     } catch (error) {
//       throw new Error(`Error fetching user by email: ${error.message}`);
//     }
//   }

//     async update(id: string, updateUserInput: UpdateUserInput) {
//       const user = await this.userRepository.findOne({ where: { id } });

//       if (!user) {
//         return {}; // Return an empty object if the user is not found
//       }

//       await this.userRepository.update(id, updateUserInput);
//       await this.cacheManger.reset();
//       return this.findOne(id);
//     }

//   async remove(id: string): Promise<Users | null> {
//     try {
//       const user = await this.findOne(id);

//       if (user) {
//         await this.userRepository.delete(id);
//       }

//       await this.cacheManager.reset();

//       return user;
//     } catch (error) {
//       throw new Error(`Error removing user: ${error.message}`);
//     }
//   }
// }
