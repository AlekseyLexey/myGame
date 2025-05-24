import { useUser } from "@/app/store/UserStore/hooks/useUser";
import { AuthForm, Button } from "@/components";
import type { IAuthFormData } from "@/components/AuthForm/types";
import { registration } from "@/services/api/userApi";
import { CLIENT_ROUTES } from "@/types/enums";
import { useNavigate } from "react-router-dom";

export const SignUpPage = () => {
  const { setUser } = useUser();
  const navigate = useNavigate();

  const handleSubmit = async (formData: IAuthFormData) => {
    const { user } = await registration(formData);
    setUser(user);
    navigate(CLIENT_ROUTES.MAIN);
  };

  return (
    <div>
      <h2>Форма регистрации</h2>
      <Button
        onClick={() => navigate(CLIENT_ROUTES.SIGN_IN)}
        buttonText="Войти"
      />
      <AuthForm onSubmit={handleSubmit} />
    </div>
  );
};
