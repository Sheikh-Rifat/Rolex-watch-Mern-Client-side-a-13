import React from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "./Contact.css";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
  };
  return (
    <div id="contact" className="mt-5">
      <div className="bg pt-5">
        <h2 className="mb-4 section-titles">Have a Question? Just Ask</h2>
        <Container>
          <div className="bg-2">
            <form
              className="d-flex flex-column form-contact "
              onSubmit={handleSubmit(onSubmit)}
            >
              <textarea
                type="text"
                placeholder="Ask your question"
                className="my-2 p-4"
                {...register("question", { required: true })}
              />
              {errors.question && (
                <span className="text-light">This field is required</span>
              )}
              <input
                type="email"
                placeholder="Email"
                className="custom-form my-2"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-light">
                  Email is Required for queries!
                </span>
              )}

              <input
                className="my-2 p-2 custom-form-btn text-light text-uppercase"
                type="submit"
              />
              <ToastContainer />
            </form>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Contact;
