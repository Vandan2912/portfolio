/* eslint-disable react-hooks/rules-of-hooks */
"use client"

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import emailjs from '@emailjs/browser';
import { useRef } from "react";


const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    description: '+91 9157121138'
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: 'vandanp2912@gmail.com'
  },
]

const page = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current)
    emailjs
      .sendForm('service_tyb1svb', 'template_r0hdjzx', form.current, {
        publicKey: '0194zDyf8QM5g2GOF',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return <motion.section
    initial={{ opacity: 0 }}
    animate={{
      opacity: 1,
      transition: {
        delay: 2.4,
        duration: 0.4,
        ease: "easeIn",
      }
    }}
    className="py-6"
  >
    <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row gap-[30px]">
        <div className="xl:w-[54%] order-2 xl:order-none">
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
            <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
            <p className="text-white/60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores eos libero, eius, repudiandae sunt adipisci nostrum molestias veniam, eum natus expedita minus tenetur impedit est quas doloremque! Nihil, hic quo?</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input required name="first_name" type="firstname" placeholder="Firstname" />
              <Input required name="last_name" type="lastname" placeholder="Lastname" />
              <Input required name="email" type="email" placeholder="Email Address" />
              <Input required name="number" type="phone" placeholder="Phone number" />
            </div>
            <Select name="service" required>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Select a service</SelectLabel>
                  <SelectItem value="Frontend Development">Frontend Development</SelectItem>
                  <SelectItem value="Backend Development">Backend Development</SelectItem>
                  <SelectItem value="Full-Stack Development">Full-Stack Development</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Textarea required name="message" className="h-[200px]" placeholder="Type your message here." />
            <Button type="submit" size="md" className="max-w-40">Send message</Button>
          </form>
        </div>
        <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
          <ul className="flex flex-col gap-10">
            {info.map((item, index) => (
              <li key={index} className="flex items-center gap-6">
                <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex justify-center items-center">
                  <div className="text-[28px]">{item.icon}</div>
                </div>
                <div className="flex-1">
                  <p className="text-white/60">{item.title}</p>
                  <h3 className="text-xl">{item.description}</h3>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </motion.section>;
};

export default page;
