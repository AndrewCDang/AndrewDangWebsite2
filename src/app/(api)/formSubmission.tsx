import { FormEvent } from "react";

export const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;
    const formData = new FormData(form);

    formData.append(
        "access_key",
        process.env.NEXT_PUBLIC_WEB3FORM_KEY as string
    );

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: json,
    }).then((res) => res.json());

    if (res.success) {
        return { Success: res };
    }
};
