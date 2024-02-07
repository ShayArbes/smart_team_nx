import { InputType, Int, Field } from '@nestjs/graphql';
import { IsEmail, IsString, Matches } from 'class-validator';

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
const phoneNumberRegex =
  /^(?:\+972|0)([23489]|5[012345689]|77|78|79|80|81|82|83|84|85|87|88|89|50[012345689]|51[23456789]|52[0123456789]|53[0123456789]|54[0123456789]|55[0123456789]|56[0123456789]|57[0123456789]|58[0123456789]|59[0123456789])-?\d{1,7}$/;

@InputType()
export class CreateUserInput {
  @Field()
  @IsString()
  username: string;

  @Field()
  email: string;

  @Field()
  @Matches(passwordRegex, {
    message: 'Password must meet the specified criteria.',
  })
  password: string;

  @Field()
  @IsString()
  @Matches(phoneNumberRegex, { message: 'Invalid phone number format.' })
  phone: string;

  @Field()
  roles: string;
}

// import { InputType, Int, Field } from '@nestjs/graphql';
// import { IsEmail, IsString, Matches } from 'class-validator';

// const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
// const phoneNumberRegex =
//   /^(?:\+972|0)([23489]|5[012345689]|77|78|79|80|81|82|83|84|85|87|88|89|50[012345689]|51[23456789]|52[0123456789]|53[0123456789]|54[0123456789]|55[0123456789]|56[0123456789]|57[0123456789]|58[0123456789]|59[0123456789])-?\d{1,7}$/;

// @InputType()
// export class CreateUserInput {
//   @Field()
//   @IsString()
//   username: string;

//   @Field()
//   email: string;

//   @Field()
//   @Matches(passwordRegex, {
//     message: 'Password must meet the specified criteria.',
//   })
//   password: string;

//   @Field()
//   @IsString()
//   @Matches(phoneNumberRegex, { message: 'Invalid phone number format.' })
//   phone: string;

//   @Field()
//   roles: string;
// }
