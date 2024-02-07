import React from 'react';
import { useForm } from 'react-hook-form';
import {
  FormContainer,
  Input,
  Button,
  ErrorMessage,
} from '../../users/style/user.style';

interface FormInputs {
  productName: string;
  description: string;
  height: number;
  width: number;
  depth: number;
  length: number;
  categories: string;
  interiorMaterial: string;
  exteriorMaterial: string;
  targetAmount: number;
  daysValid: number;
  dealManagerId: string;
  status: string;
  img_url: string;
  location: string;
}

const CreateDealform: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit = (data: FormInputs) => {
    // Handle the form submission, you can send the data to your API or perform any other action here
    console.log(data);
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <h2>טופס יצירת דיל</h2>
      <Input
        {...register('productName', {
          required: 'שדה חובה',
          minLength: {
            value: 4,
            message: 'מינימום 4 תווים',
          },
        })}
        placeholder="שם המוצר"
      />
      {errors.productName && (
        <ErrorMessage>{errors.productName.message}</ErrorMessage>
      )}

      <Input type="number" {...register('height')} placeholder="גובה" />

      <Input type="number" {...register('width')} placeholder="רוחב" />

      <Input type="number" {...register('depth')} placeholder="עומק" />

      <Input type="number" {...register('length')} placeholder="אורך" />

      <Input {...register('categories')} placeholder="קטגוריה" />

      <Input {...register('interiorMaterial')} placeholder="חומר פנימי" />

      <Input {...register('exteriorMaterial')} placeholder="חומר חיצוני" />

      <Input
        type="number"
        {...register('targetAmount')}
        placeholder="סכום יעד"
      />

      <Input
        type="number"
        {...register('daysValid')}
        placeholder="כמה ימים העסקה באוויר"
      />

      <Input {...register('dealManagerId')} placeholder="מזהה מנהל עסקה" />

      <Input {...register('status')} placeholder="סטטוס" />

      <Input {...register('img_url')} placeholder="קישור לתמונה" />

      <Input {...register('location')} placeholder="מיקום" />

      <textarea {...register('description')} placeholder="תיאור המוצר" />
      <Button type="submit">שלח</Button>
    </FormContainer>
  );
};

export default CreateDealform;
