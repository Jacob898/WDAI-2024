import React from "react";

const Logowanie = () => {
    const [password, setPassword] = React.useState("");
    const [repeatPassword, setRepeatPassword] = React.useState("");
    const [username, setUsername] = React.useState("");

    const allValid = username && password && repeatPassword;

    const passwordsValid = password === repeatPassword;

    const onClick = () => {
        if (!passwordsValid) {
            alert("Hasła nie są zgodne")
        } else {
            alert("Zalogowano poprawnie")
        }

    }


    return (
        <div>
            <input type="text" placeholder="Nazwa Użytkownika" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Hasło" value={password} onChange={(e) => setPassword(e.target.value)} />
            <input type="password" placeholder="Powtórz Hasło" value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} />
            <div>
                <button disabled={!allValid} onClick={onClick}>Logowanie</button>
            </div>

        </div>
    )
}

export default Logowanie;