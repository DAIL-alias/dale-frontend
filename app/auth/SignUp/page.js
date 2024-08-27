"use client";

import React, { useState } from "react";
import * as Form from "@radix-ui/react-form";
import { Button, Heading, Text, Switch } from "@radix-ui/themes";
import { EyeOpenIcon, EyeClosedIcon } from "@radix-ui/react-icons";

const SignUpComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Sign Up attempted with:", { email, password, rememberMe });
  };

  return (
    <div className="w-full max-w-md mx-auto p-6">
      <Heading size="8" className="mb-6 text-center">
        Welcome to <span className="font-light">DALÈ</span>.
      </Heading>
      <Text size="3" weight="medium">
        Sign Up
      </Text>
      <Form.Root onSubmit={handleSubmit} className="space-y-4">
        <Form.Field name="email">
          <Form.Control asChild>
            <input
              className="w-full px-4 py-3 mt-2 rounded-lg bg-gray-100 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Email or phone number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Control>
        </Form.Field>

        <Form.Field name="password" className="relative">
          <Form.Control asChild>
            <input
              className="w-full px-4 py-3 rounded-lg bg-gray-100 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Control>
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          >
            {showPassword ? <EyeClosedIcon /> : <EyeOpenIcon />}
          </button>
        </Form.Field>

        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Switch checked={rememberMe} onCheckedChange={setRememberMe} />
            <Text size="2">Remember me</Text>
          </div>
          <Button
            variant="ghost"
            className="text-blue-500 hover:underline hover:cursor-pointer"
          >
            Forgot password?
          </Button>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Sign in
        </button>
      </Form.Root>
    </div>
  );
};

export default SignUpComponent;
