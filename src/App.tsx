import { useRef, useCallback, useEffect, useState } from "react";

import Card from "../src/components/Card";

const App = (): JSX.Element => {
  const fullNameInputElement = useRef<HTMLInputElement | null>(null);
  const emailInputElement = useRef<HTMLInputElement | null>(null);
  const passwordInputElement = useRef<HTMLInputElement | null>(null);

  const prevFullName = useRef<any>();

  const onSubmitHandler = useCallback(
    () => (event: React.ChangeEvent<HTMLFormElement>) => {
      event.preventDefault();
      const data = {
        fullName: fullNameInputElement.current?.value,
        email: emailInputElement.current?.value,
        password: passwordInputElement.current?.value,
      };
      checkFullName(prevFullName.current, data.fullName);
      prevFullName.current = data.fullName;
    },
    [
      fullNameInputElement,
      emailInputElement,
      passwordInputElement,
      prevFullName,
    ]
  );

  const checkFullName = (prev: string, current: string | undefined) => {
    if (prev === current) alert("nome ja registrado");
  };

  return (
    <div>
      <Card>
        <h1>Signup</h1>
        <form onSubmit={onSubmitHandler()}>
          <div>
            <label htmlFor="full_name">Full name</label>
            <input
              autoComplete="off"
              ref={fullNameInputElement}
              id="full_name"
              placeholder="Full name"
              type="text"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              autoComplete="off"
              ref={emailInputElement}
              id="email"
              placeholder="Email"
              type="text"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              autoComplete="off"
              ref={passwordInputElement}
              id="password"
              placeholder="Password"
              type="password"
            />
          </div>
          <button type="submit">Register</button>
        </form>
      </Card>
    </div>
  );
};
export default App;
