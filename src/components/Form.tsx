import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  requiredInput: string,
};

export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);
  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("requiredInput", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.requiredInput && <span>This field is required</span>}
      <input type="submit" />
    </form>
  );
}