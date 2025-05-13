import React from "react";

export type ObjectType = { [key: string]: any };
export type ReactChangeEventType<T = HTMLInputElement> = React.ChangeEvent<T>;
export type ReactSubmitEventType = React.FormEvent<HTMLFormElement>;
