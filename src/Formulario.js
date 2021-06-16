import React from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import {
    Container,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Card,
    CardBody,
    CardHeader,
    FormFeedback,
} from "reactstrap";

const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    bio: "",
};

const validaciones = {
    name: Yup.string()
        .matches(/^[a-zA-ZÀ-ÿ\s]{1,40}$/, "Is not in correct format")
        .required("Required"),
    email: Yup.string()
        .matches(
            /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            "Invalid email"
        )
        .required("Required"),
    password: Yup.string()
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)([A-Za-z\d$@$!%*?&]|[^ ]){8,}$/,
            "La contraseña debe de tener un tamaño de almenos 8 caracteres, contener almenos una letra minuscula, una letra mayuscula, un digito y sin espacios en blanco"
        )
        .required("Required"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords don't match.")
        .required("Required"),
};

const Formulario = () => {
    return (
        <Container className="p-5">
            <Card>
                <CardHeader></CardHeader>
                <CardBody>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={Yup.object().shape(validaciones)}
                        onSubmit={(values, { setSubmitting }) => {
                            console.log(values);
                            setSubmitting(false);
                        }}
                    >
                        {(props) => {
                            const {
                                errors,
                                touched,
                                handleSubmit,
                                isSubmitting,
                            } = props;
                            return (
                                <Form onSubmit={handleSubmit}>
                                    <h1>Form</h1>
                                    <FormGroup>
                                        <Label for="name">Name</Label>
                                        <Input
                                            type="text"
                                            name="name"
                                            placeholder="Woody Allen"
                                            invalid={
                                                errors.name && touched.name
                                            }
                                            valid={!errors.name && touched.name}
                                            tag={Field}
                                        />
                                        <FormFeedback>
                                            {errors.name}
                                        </FormFeedback>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="email">Email</Label>
                                        <Input
                                            type="email"
                                            name="email"
                                            placeholder="contoso@domain.com"
                                            invalid={
                                                errors.email && touched.email
                                            }
                                            valid={
                                                !errors.email && touched.email
                                            }
                                            tag={Field}
                                        />
                                        <FormFeedback>
                                            {errors.email}
                                        </FormFeedback>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="password">Password</Label>
                                        <Input
                                            type="text"
                                            name="password"
                                            placeholder="Provide a password"
                                            invalid={
                                                errors.password &&
                                                touched.password
                                            }
                                            valid={
                                                !errors.password &&
                                                touched.password
                                            }
                                            tag={Field}
                                        />
                                        <FormFeedback>
                                            {errors.password}
                                        </FormFeedback>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="confirmPassword">
                                            Confirm Password
                                        </Label>
                                        <Input
                                            type="text"
                                            name="confirmPassword"
                                            placeholder="Confirm your password"
                                            invalid={
                                                errors.confirmPassword &&
                                                touched.confirmPassword
                                            }
                                            valid={
                                                !errors.confirmPassword &&
                                                touched.confirmPassword
                                            }
                                            tag={Field}
                                        />
                                        <FormFeedback>
                                            {errors.confirmPassword}
                                        </FormFeedback>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="bio">Text Area</Label>
                                        <Input
                                            type="textarea"
                                            name="bio"
                                            tag={Field}
                                        />
                                    </FormGroup>

                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? `Loading` : `Submit`}
                                    </Button>
                                </Form>
                            );
                        }}
                    </Formik>
                </CardBody>
            </Card>
        </Container>
    );
};

export default Formulario;
