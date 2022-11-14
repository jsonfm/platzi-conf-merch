import { useForm } from "react-hook-form";
import { CreditCard } from "@/components/CreditCard";
import "./styles.css";


export const Information = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */

    <form className="information-form" onSubmit={handleSubmit(onSubmit)}>
      <CreditCard/>
      {/* register your input into the hook by invoking the "register" function */}
      <input placeholder="Name" {...register("fullname", { required: true })} />
      {errors.fullname && <b className="text-danger">This field is required</b>}

      <button class="btn btn-secondary">
        Pay
      </button>
    </form>
  );
};
