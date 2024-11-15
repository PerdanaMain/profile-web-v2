import { Button, Card, CardBody, Input } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import Stars from "../../components/Stars";
import MainLayout from "../../containers/MainLayout";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data, errors);

  return (
    <MainLayout>
      <div className="flex items-center justify-center min-h-screen p-4">
        <Stars />
        <Card className="w-full max-w-md mx-auto">
          <CardBody className="overflow-hidden">
            <h5 className="text-xl font-semibold text-center mb-5">
              Admin CMS
            </h5>

            <form
              className="flex flex-col gap-4"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Input
                isRequired
                label="Username"
                placeholder="Enter username"
                type="text"
                {...register("username", { required: true })}
              />

              {errors.username && (
                <span className="text-red-700 italic text-sm ms-2">
                  *This field is required
                </span>
              )}

              <Input
                isRequired
                label="Password"
                placeholder="Enter your password"
                type="password"
                {...register("password", { required: true })}
              />

              {errors.password && (
                <span className="text-red-700 italic text-sm ms-2">
                  *This field is required
                </span>
              )}
              <div className="flex gap-2 justify-end">
                <Button fullWidth className="bg-main" type="submit">
                  Login
                </Button>
              </div>
            </form>
          </CardBody>
        </Card>
      </div>
    </MainLayout>
  );
};

export default Login;
