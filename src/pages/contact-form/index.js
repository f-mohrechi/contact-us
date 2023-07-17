import React from "react";
import { Button, Input, TextArea } from "../../components";
import { useFormik } from "formik";
import { useMutation } from "react-query";
import axios from "axios";
import { toast } from "react-toastify";
import * as yup from "yup";

const url = "http://localhost:3000/forms";

const validation = yup.object({
  name: yup.string().required(),
  email: yup.string().required(),
  phone: yup.string().required(),
  text: yup.string().required(),
});

export const ContactForm = () => {
  const { values, handleSubmit, handleChange, errors } = useFormik({
    initialValues: { email: "", name: "", phone: "", text: "" },
    onSubmit: () => {
      postApi.mutate(values);
    },
    validationSchema: validation,
  });

  const postApi = useMutation(async (values) => {
    const res = await axios.post(url, values);
    toast.success("message sent!");
    toast.error("something went wrong!");
    return res;
  });

  return (
    <>
      <div className="container mx-auto my-20 py-5 h-[600px] w-[550px] bg-neutral-300 rounded-xl">
        <div className="flex justify-center items-center h-full">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-between h-full  w-96 py-5 rounded-lg bg-stone-50"
          >
            <div>
              <p className="text-2xl font-bold text-center text-slate-900 pb-5">
                Contact Us!
              </p>
              <div className="my-5">
                <Input
                  label={"email"}
                  name={"email"}
                  type={"text"}
                  icon={"./img/mail.svg"}
                  value={values.email}
                  error={errors.email}
                  onChange={handleChange("email")}
                />
              </div>

              <div className="my-5">
                <Input
                  label={"name"}
                  name={"name"}
                  type={"text"}
                  icon={"./img/user.svg"}
                  value={values.name}
                  error={errors.name}
                  onChange={handleChange("name")}
                />
              </div>

              <div className="my-5">
                <Input
                  label={"phone"}
                  name={"phone"}
                  type={"text"}
                  icon={"./img/phone.svg"}
                  value={values.phone}
                  error={errors.phone}
                  onChange={handleChange("phone")}
                />
              </div>

              <div className="my-5">
                <TextArea
                  label={"text"}
                  name={"text"}
                  type={"text"}
                  value={values.text}
                  error={errors.text}
                  onChange={handleChange("text")}
                />
              </div>
            </div>

            <Button type="submit" label="submit" />
          </form>
        </div>
      </div>
    </>
  );
};
