import { LoginForm } from "@/components/login/form";
import { LoginBg } from "@/components/login/bg";
import { PageContainer } from "@/components/pageContainer";

export function LoginPage() {
  return (
    <PageContainer maxWidth="lg">
      <LoginBg>
        <LoginForm />
      </LoginBg>
    </PageContainer>
  );
}
