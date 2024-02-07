import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import {
  FormContainer,
  Input,
  Img,
  ErrorMessage,
  Select,
  Button,
} from '../style/user.style';
// Adjust the import path based on your project structure

const createUserMutation = `
  mutation CreateUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      username
      email
      password
      phone
      roles
    }
  }
`;

interface IFormInput {
  username: string;
  email: string;
  password: string;
  phone: string;
  roles: string;
}

function SignUp() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit = async (data: IFormInput) => {
    console.log(data);

    try {
      // Make a GraphQL request to your server
      const response = await fetch('http://localhost:3000/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Include any authorization headers or tokens as needed
        },
        body: JSON.stringify({
          query: createUserMutation,
          variables: {
            createUserInput: data,
          },
        }),
      });

      const result = await response.json();
      console.log('Server response:', result);
      navigate('/');
    } catch (error) {
      console.error('Error sending GraphQL mutation:', error);
      // Handle errors
    }
  };

  return (
    <div>
      <Img src="../../../../public/img/signUp.svg"></Img>

      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <h2>הירשם</h2>
        <Input
          {...register('username', {
            required: 'שדה חובה',
            minLength: {
              value: 4,
              message: 'מינימום 4 תווים',
            },
          })}
          placeholder="שם משתמש"
        />
        {errors.username && (
          <ErrorMessage>{errors.username.message}</ErrorMessage>
        )}

        <Input
          {...register('email', {
            required: 'שדה חובה',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'מייל לא תקין',
            },
          })}
          placeholder="מייל"
        />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

        <Input
          {...register('password', {
            required: 'שדה חובה',
            minLength: {
              value: 6,
              message: 'מינימום 6 תווים',
            },
          })}
          type="password"
          placeholder="סיסמה"
        />
        {errors.password && (
          <ErrorMessage>{errors.password.message}</ErrorMessage>
        )}

        <Input
          {...register('phone', {
            required: 'שדה חובה',
            pattern: {
              value: /^0\d{1,2}(-?\d{3})(-?\d{4})$/,
              message: 'מספר טלפון לא תקין',
            },
          })}
          placeholder="פלאפון"
        />
        {errors.phone && <ErrorMessage>{errors.phone.message}</ErrorMessage>}

        <Select {...register('roles')}>
          <option value="customer">קונה</option>
          <option value="seller">מוכר</option>
        </Select>

        <Button type="submit">הרשם</Button>
      </FormContainer>
    </div>
  );
}

export default SignUp;
