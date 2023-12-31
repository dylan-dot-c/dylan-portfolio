"use client";

import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { Button } from "./ui/button";

function Contact() {
    const form = useRef<HTMLFormElement>(null);

    const submitForm = (e: React.FormEvent) => {
        e.preventDefault();

        if (form.current) {
            emailjs
                .sendForm(
                    "default_service",
                    "template_8tulrro",
                    form.current,
                    "XGImQZcPk-majwAvS"
                )
                .then(
                    (result) => {
                        console.log(result.text);
                        alert(result.text);
                    },
                    (error) => {
                        console.log(error.text);
                    }
                );
        }
    };
    return (
        <div className='flex gap-4 text-white text-lg'>
            <div className='w-1/2'>
                <h1>Contact Me</h1>
                <p>
                    If you would like to know more about me. Please send an
                    email and I'll respond as soon as possible. email:
                    heslopd23@gmail.com
                </p>
            </div>

            <form id='form' ref={form} onSubmit={submitForm}>
                <div className='field'>
                    <label htmlFor='subject'>subject</label>
                    <input type='text' name='subject' id='subject' />
                </div>
                <div className='field'>
                    <label htmlFor='message'>message</label>
                    <input type='text' name='message' id='message' />
                </div>
                <div className='field'>
                    <label htmlFor='name'>name</label>
                    <input type='text' name='name' id='name' />
                </div>
                <div className='field'>
                    <label htmlFor='reply_to'>reply_to</label>
                    <input type='text' name='reply_to' id='reply_to' />
                </div>

                <Button type='submit' id='button' value='Send Email'>
                    Submit Form
                </Button>
            </form>
        </div>
    );
}

export default Contact;
