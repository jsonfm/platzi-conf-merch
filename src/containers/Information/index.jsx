import { useForm } from "react-hook-form";
import "./styles.css";


export const Information = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form className="information-form" onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input placeholder="Full Name" {...register("example")} />

      {/* include validation with required or other standard HTML validation rules */}
      <input placeholder="Email" type="email" {...register("exampleRequired", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <b className="text-danger">This field is required</b>}

      <button class="btn btn-secondary">
        Pay
      </button>
    </form>
  );
};
