import { useFormik } from 'formik';
import React from 'react'
import Input from '@src/components/input/Input';
import { ReactComponent as SignInImage } from '@src/assets/images/sign-in.svg';
import Button from '@src/components/button/Button';


const SignIn = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: values => {
            alert("email: " + values.email + " password: " + values.password)
        },
    });
    return (
        <main>
            <section className="container mx-auto mt-12 mb-12">
                <div className="flex gap-20 justify-center items-center">
                    <div className="w-6/12">
                        <SignInImage className="w-full" />
                    </div>
                    <div className="w-6/12">
                        <h1 className="text-4xl font-bold my-5">Sign In</h1>
                        <form onSubmit={formik.handleSubmit}>
                            <div className="flex flex-col gap-4">
                                <Input
                                    name="email"
                                    id="email"
                                    placeholder="typing.."
                                    label="Email"
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                />
                            </div>
                            <div className="flex flex-col gap-4">
                                <Input
                                    name="password"
                                    id="password"
                                    placeholder="typing.."
                                    label="Password"
                                    onChange={formik.handleChange}
                                    value={formik.values.password}
                                />
                            </div>
                            <div className="flex justify-end mt-4">
                                <Button type="submit" variant={"primary"} rounded size="md">
                                    Sign In
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default SignIn