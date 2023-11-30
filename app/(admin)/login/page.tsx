import Logo from '@components/Logo'
import {Button} from '@nextui-org/button'
import {Card, CardBody, CardFooter} from '@nextui-org/card'
import LoginForm from './components/LoginForm'

export interface LoginPageProps {}

export default function LoginPage(props: LoginPageProps) {
  return (
    <div
      className="bg-login-bg max-h-screen min-h-screen text-white flex justify-center items-center
      bg-ima
    "
    >
      <div>
        <Card className="bg-background-600 w-[360px] border border-secondary-700">
          <CardBody className="flex flex-col justify-center items-center p-6 gap-6 w-full">
            <div className="w-full p-6">
              <Logo className="mix-blend-lighten" />
            </div>

            <p className="">Reballing games - CMS Login</p>
            <LoginForm />
          </CardBody>
          <CardFooter className="p-6">
            <Button
              variant="solid"
              color="primary"
              href="/admin/dashboard"
              className="w-full"
              type="submit"
              form="login-form"
            >
              Iniciar sesión
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
