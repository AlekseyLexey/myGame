import { AuthForm, Button } from "@/components";
import { CLIENT_ROUTES } from "@/types/enums";
import { useNavigate } from "react-router-dom";
import type { IAuthFormData } from "@/components/AuthForm/types";
import { useUser } from "@/app/store/UserStore/hooks/useUser";
import { logIn } from "@/services/api/userApi";

export const SignInPage = () => {
  const { setUser } = useUser();
  const navigate = useNavigate();

  const handleSubmit = async (formData: IAuthFormData) => {
    const { user } = await logIn(formData);
    setUser(user);
    navigate(CLIENT_ROUTES.MAIN);
  };

  return (
    <div>
      <h2>Форма входа в систему</h2>
      <Button
        onClick={() => navigate(CLIENT_ROUTES.SIGN_UP)}
        buttonText="Зарегистрироваться"
      />
      <AuthForm onSubmit={handleSubmit} />
    </div>
  );
};
