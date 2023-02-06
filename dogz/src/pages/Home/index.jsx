import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import { FormLogin, HomeContainer, Input, Label } from "./styles";
import { getUser } from "../../services/api";
import axios from "axios";

export function Home() {
    const { authenticated, login } = useContext(AuthContext)

    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('submit', { email, password });
        login(email, password)
    }


    return (
        <HomeContainer>
            <h1>Dogz</h1>
            <p>{String(authenticated)}</p>
            <FormLogin onSubmit={handleSubmit}>
                <Label htmlFor="email">Email</Label>
                <Input type="email" name="email" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <Label htmlFor="password">Senha</Label>
                <Input type="password" name="password" id="password" placeholder="Senha" value={password} onChange={(e) => setpassword(e.target.value)} />
                <button>Login</button>
                <button>Esqueci minha Senha</button>
            </FormLogin>
        </HomeContainer>
    )
}