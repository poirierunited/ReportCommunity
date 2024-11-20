import { Icons } from "@/components/Icons";
import UserAuthForm from "@/components/UserAuthForm";
import Link from "next/link";

const SignIn = () => {
  return (
    <div className="container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
      <div className="flex flex-col space-y-2 text-center">
        {/* <Icons.logo className="mx-auto h-6 w-6" /> */}
        <img src="/favicon.ico" alt="Logo" className="h-8 w-8 sm:h-6 sm:w-6" />
        <h1 className="text-2xl font-semibold tracking-tight">
          Bienvenido de nuevo
        </h1>
        <p className="text-sm max-w-xs mx-auto">
          Al continuar, estás configurando una cuenta de Report Community y
          aceptas nuestro Acuerdo de Usuario y Política de Privacidad.
        </p>
      </div>
      <UserAuthForm />
      <p className="px-8 text-center text-sm text-muted-foreground">
        Nuevo en <b>Report Community</b>?{" "}
        <Link
          href="/sign-up"
          className="hover:text-brand text-sm underline underline-offset-4"
        >
          Crear cuenta
        </Link>
      </p>
    </div>
  );
};

export default SignIn;
