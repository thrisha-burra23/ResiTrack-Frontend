import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/validations/auth.schema";
import { useLogin } from "@/hooks/auth.hooks";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";

const LoginPage = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(loginSchema) });

  const { mutate: loginMutate, isPending } = useLogin();

  const onSubmit = async (data) => {
    try {
      const res = loginMutate(data);
      toast.success("Login Successful!!")
      navigate("/dashboard");
    } catch (error) {
      toast.error(error.response?.data?.message || "Login Failed. ")
    }
    
  };

  return (
    <div className="min-h-screen flex items-center justify-center  px-4">
      <Card className="w-full max-w-md shadow-xl backdrop-blur bg-white/90">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">
            Login to ResiTrack
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Input placeholder="Email" {...register("email")} />

              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            <div>
              <Input
                type="password"
                placeholder="Password"
                {...register("password")}
              />

              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>

            <Button className="w-full" disabled={isPending}>
              {isPending ? "Logging in..." : "Login"}
            </Button>

            <p className="text-sm text-center">
              Don't have an account?{" "}
              <Link to="/register" className="text-indigo-600 hover:underline">
                Register
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
