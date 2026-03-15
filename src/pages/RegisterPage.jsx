import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useRegister } from "@/hooks/auth.hooks";
import { registerSchema } from "@/validations/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const RegisterPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(registerSchema) });

  const { mutate: registerMutate, isPending } = useRegister();

  const onSubmit = async (data) => {
    try {
      const res = registerMutate(data);
      console.log(res);
      toast.success("Registration Successful! Please Login");
      navigate("/login");
    } catch (error) {
      toast.error(error.response?.data?.message || "Login Failed. ");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center  px-4">
      <Card className="w-full max-w-md shadow-xl backdrop-blur bg-white/90">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Create Account</CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Input placeholder="Full Name" {...register("name")} />

              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>

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
              {isPending ? "Creating..." : "Register"}
            </Button>

            <p className="text-sm text-center">
              Already have an account?{" "}
              <Link to="/login" className="text-indigo-600 hover:underline">
                Login
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default RegisterPage;
