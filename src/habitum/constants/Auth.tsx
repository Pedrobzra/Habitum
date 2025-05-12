import { useState } from "react";

export function useAuthConsts() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPass, setConfirmPass] = useState<string>("");
  return {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    confirmPass,
    setConfirmPass,
  };
}

type FormData = {
  name: string;
  email: string;
  password: string;
  confirmPass: string;
};
