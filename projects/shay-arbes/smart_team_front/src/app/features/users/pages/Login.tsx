import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
export const FormContainer = styled.form`
  max-width: 400px;
  margin: 10% auto;
  direction: rtl;
  border: 1px solid;
  padding: 20px;
  border-radius: 10px;
  box-shadow: inset;
  background: #ffffff6e;
`;
export const Input = styled.input`
  width: 100%;
  margin-bottom: 30px;
  padding: 8px;
`;

export const ErrorMessage = styled.p`
  color: red;
  margin-top: 5px;
`;

export const Select = styled.select`
  width: 100%;
  margin-bottom: 10px;
  padding: 8px;
`;

export const Button = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  border: none;
  cursor: pointer;
  width: 100%;
  &:hover {
    background-color: #45a049;
  }
`;
const Img = styled.img`
  position: absolute;
  top: 172px;
  left: 6%;
  width: 38%;
  z-index: -1;
  @media (max-width: 768px) {
    display: none;
  }
`;


// Adjust the import path based on your project structure
const createUserMutation = `
mutation SignIn($email: String!, $password: String!) {
  signIn(email: $email, password: $password)
}
`;

interface IFormInput {
  email: string;
  password: string;
}

function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit = async (data: IFormInput) => {
    console.log(data);

    try {
      const response = await fetch("http://localhost:3000/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: createUserMutation,
          variables: {
            email: data.email,
            password: data.password,
          },
        }),
      });

      const result = await response.json();
      const token = result.data.signIn;
      localStorage.setItem("token", token);
      navigate("/");
      // Handle the result as needed
    } catch (error) {
      console.error("Error sending GraphQL mutation:", error);
      // Handle errors
    }
  };

  return (
    <div>
      {/* Uncomment and fix the image source path if needed */}
      <Img src="../../../../public/img/signUp.svg"></Img>

      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <h2>התחבר</h2>
        <Input
          {...register("email", {
            required: "שדה חובה",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "מייל לא תקין",
            },
          })}
          placeholder="מייל"
        />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

        <Input
          {...register("password", {
            required: "שדה חובה",
            minLength: {
              value: 6,
              message: "מינימום 6 תווים",
            },
          })}
          type="password"
          placeholder="סיסמה"
        />
        {errors.password && (
          <ErrorMessage>{errors.password.message}</ErrorMessage>
        )}

        <Button type="submit">הרשם</Button>
      </FormContainer>
    </div>
  );
}

export default Login;
