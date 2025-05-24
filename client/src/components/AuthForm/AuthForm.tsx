import React, { useState } from "react";
import type { IAuthFormData } from "./types";
import { Input } from "../UI/Input/Input";
import { Button } from "../UI/Button/Button";

const initialState: IAuthFormData = {
  username: "",
  password: "",
};

interface IAuthFormProps {
  onSubmit: (formData: IAuthFormData) => void;
}

export const AuthForm: React.FC<IAuthFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<IAuthFormData>(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    onSubmit(formData);
    setFormData(initialState);
  };

  return (
    <form>
      <Input
        lebelText="Логин"
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
      />
      <Input
        lebelText="Пароль"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />

      <Button
        onClick={handleSubmit}
        buttonText="Отправить"
        type="submit"
        disabled={!formData.username || !formData.password}
      />
    </form>
  );
};
