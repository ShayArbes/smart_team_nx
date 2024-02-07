import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserService } from './user.service';
import { Users } from './entities/user.entity';
import { CACHE_MANAGER } from '@nestjs/cache-manager';

describe('UserService', () => {
  let service: UserService;
  let repo: Repository<Users>;
  let userMoke: Users;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getRepositoryToken(Users),
          useClass: Repository,
        },
        {
          provide: CACHE_MANAGER,
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
    repo = module.get<Repository<Users>>(getRepositoryToken(Users));

    userMoke = new Users();

    (userMoke.id = 'd8d523ca-e664-4b15-b4f0-f3817b045335'),
      (userMoke.username = 'shay'),
      (userMoke.email = 'shay@gmail.com'),
      (userMoke.password = 'asdA1!AS243'),
      (userMoke.phone = '05559930199'),
      (userMoke.roles = 'user');

    repo.find = jest.fn().mockResolvedValue([userMoke]);
  });

  it('should return an array of users', async () => {
    const users = await service.findAll();

    expect(users).toEqual([userMoke]);
    expect(Array.isArray(users)).toBe(true);
    expect(users[0]).toBeInstanceOf(Users);
  });
});
// import { Test, TestingModule } from '@nestjs/testing';
// import { getRepositoryToken } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { CACHE_MANAGER } from '@nestjs/cache-manager';
// import { Cache } from 'cache-manager';
// import { UserService } from './user.service';
// import { UpdateUserInput } from './dto/update-user.input';
// import { Users } from './entities/user.entity';
// import { CreateUserInput } from './dto/create-user.input';

// describe('UserService', () => {
//   let service: UserService;
//   let repo: Repository<Users>;
//   let cache: Cache;

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       providers: [
//         UserService,
//         {
//           provide: getRepositoryToken(Users),
//           useClass: Repository,
//         },
//         {
//           provide: CACHE_MANAGER,
//           useValue: {},
//         },
//       ],
//     }).compile();

//     service = module.get<UserService>(UserService);
//     repo = module.get<Repository<Users>>(getRepositoryToken(Users));
//     cache = module.get(CACHE_MANAGER);

//     repo.find = jest.fn().mockResolvedValue([]);
//     repo.findOne = jest.fn().mockResolvedValue(null);
//     repo.create = jest.fn().mockResolvedValue({});
//     repo.save = jest.fn().mockResolvedValue({});
//     repo.update = jest.fn().mockResolvedValue({});
//     repo.delete = jest.fn().mockResolvedValue({});
//     cache.reset = jest.fn();
//   });

//   it('create user', async () => {
//     const userInput: CreateUserInput = {
//       username: 'testUser',
//       email: 'test@example.com',
//       password: 'password123',
//       roles: 'user',
//       find all users', async () => {
//     let result = await service.findAll();
//     expect(result).toEqual([]);
//     expect(Array.isArray(result)).toBe(true);
//     expect(result[0]).toBeInstanceOf(Users);
//   });

//   it('find user by id', async () => {
//     let result = await service.findOne('12345');

//     expect(result).toBeNull();
//   });

//   it('delete user', async () => {
//     let result = await service.remove('12345');
//     expect(result).toBeNull();
//   });
// });
// phone: '05559930199',
//     };

//     let result = await service.create(userInput);
//     expect(repo.create).toHaveBeenCalledWith(userInput);
//     expect(result).toEqual({});
//   });

//   it('
