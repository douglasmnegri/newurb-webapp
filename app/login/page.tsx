"use client";
import * as React from "react";
import { login } from "./login";
import { useRouter } from "next/navigation";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface LoginState {
  password: string;
  email: string;
  isLoading: boolean;
  error: string;
}

type LoginAction =
  | { type: "login" | "success" | "error" | "logout" }
  | { type: "field"; fieldName: string; payload: string };

const loginReducer = (state: LoginState, action: LoginAction): LoginState => {
  switch (action.type) {
    case "field":
      return { ...state, [action.fieldName]: action.payload };
    case "login":
      return { ...state, error: "", isLoading: true };
    case "success":
      return { ...state, error: "", isLoading: false };
    case "error":
      return {
        ...state,
        isLoading: false,
        email: "",
        password: "",
        error: "Incorrect email or password!",
      };
    case "logout":
      return { ...state };
    default:
      return state;
  }
};

const initialState: LoginState = {
  password: "",
  email: "",
  isLoading: false,
  error: "",
};

function LoginPage() {
  const [state, dispatch] = React.useReducer(loginReducer, initialState);
  const { email, password, isLoading, error } = state;
  const router = useRouter();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: "login" });

    try {
      await login({ email, password });
      dispatch({ type: "success" });

      router.push("/dashboard");
    } catch (error) {
      dispatch({ type: "error" });
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Login</CardTitle>
          <CardDescription>Access your account</CardDescription>
        </CardHeader>
        <CardContent>
          {/* ✅ Add onSubmit here */}
          <form className="space-y-4" onSubmit={onSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="mailing_address@email.com"
                onChange={(e) =>
                  dispatch({
                    type: "field",
                    fieldName: "email",
                    payload: e.currentTarget.value,
                  })
                }
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="********"
                onChange={(e) =>
                  dispatch({
                    type: "field",
                    fieldName: "password",
                    payload: e.currentTarget.value,
                  })
                }
                required
              />
            </div>

            {error && <p className="text-sm text-red-600">{error}</p>}

            <CardFooter>
              <button
                type="submit"
                className="w-full rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                disabled={isLoading}
              >
                {isLoading ? "Loading..." : "Login"}
              </button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default LoginPage;
