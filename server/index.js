const express = require("express");
const app = express();
const router = express.Router();
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')
const saltRounds = 10;

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Ae@1254453",
    database: "dogz",
});

app.use(express.json());
app.use(cors());

app.post("/register", (req, res) => {

    const { email, password } = req.body

    db.query("SELECT * FROM user WHERE email = ?", [email], (err, result) => {
        if (err) {
            res.send(err);
        }
        if (result.length == 0) {
            bcrypt.hash(password, saltRounds, (err, hash) => {
                db.query(
                    "INSERT INTO user (email, password) VALUE (?,?)",
                    [email, hash],
                    (error, response) => {
                        if (err) {
                            res.send(err);
                        }

                        res.send({ msg: "Usuário cadastrado com sucesso" });
                    }
                );
            });
        } else {
            res.send({ msg: "Email já cadastrado" });
        }
    });
});


app.post("/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    db.query("SELECT * FROM user WHERE email = ?", [email], (err, result) => {
        if (err) {
            res.send(err);
        }
        if (result.length > 0) {
            bcrypt.compare(password, result[0].password, (error, response) => {
                if (error) {
                    res.send(error);
                }
                if (response) {
                    // Gerando o token JWT
                    const token = jwt.sign({ email: email }, 'secretkey', { expiresIn: '1h' });
                    res.json({ token });
                } else {
                    res.send({ msg: "Senha incorreta" });
                }
            });
        } else {
            res.send({ msg: "Usuário não registrado!" });
        }
    });
});

app.get('/list-users', async (req, res) => {
    try {
        db.query("SELECT * FROM user", (err, results, fields) => {
            if (err) {
                return res.status(500).json({ message: err })
            }
            console.log(results)
            if (results.length > 0) {
                return res.status(200).json(results)
            } else {
                return res.status(401).json({ message: err })
            }
        })

    } catch (error) {
        console.log(error)
    }

})


app.post("/tutor", (req, res) => {
    const { nome, cpf, email, instagram, emergency, endereco, complemento, cidade, cep, contact, pets } = req.body;

    db.query("INSERT INTO tutor (nome, cpf, email, instagram, emergency, endereco, complemento, cidade, cep, contact) VALUES (?,?,?,?,?,?,?,?,?,?)",
        [nome, cpf, email, instagram, emergency, endereco, complemento, cidade, cep, contact],
        (err, result) => {
            if (err) {
                res.send(err);
            }
            const id_tutor = result.insertId;
            pets.forEach((pet) => {
                db.query("INSERT INTO pets (nomePets, apelido, raca, cor, nascimento, id_tutor) VALUES (?,?,?,?,?,?)",
                    [pet.nomePets, pet.apelido, pet.raca, pet.cor, pet.nascimento, id_tutor],
                    (error, response) => {
                        if (error) {
                            res.send(error);
                        }
                    });
            });
            res.send({ msg: "Tutor e pets cadastrados com sucesso" });
        });
});



app.get("/tutor", (req, res) => {
    db.query("SELECT * FROM tutor", (err, result) => {
        if (err) {
            res.send(err);
        }

        res.send(result);
    });
});


/* app.post("/pets", (req, res) => {
    const { nome, apelido, raca, cor, nascimento, id_tutor } = req.body;

    db.query("SELECT * FROM tutor WHERE id = ?", [id_tutor], (err, result) => {
        if (err) {
            res.send(err);
        }
        if (result.length > 0) {
            db.query(
                "INSERT INTO pets (nome, apelido, raca, cor, nascimento, id_tutor) VALUES (?,?,?,?,?,?)",
                [nome, apelido, raca, cor, nascimento, id_tutor],
                (error, response) => {
                    if (error) {
                        res.send(error);
                    }

                    res.send({ msg: "Pet cadastrado com sucesso" });
                }
            );
        } else {
            res.send({ msg: "Tutor não encontrado" });
        }
    });
}); */




app.get("/pets", (req, res) => {
    db.query("SELECT * FROM pets", (err, result) => {
        if (err) {
            res.send(err);
        }
        res.send(result);
    });
});

app.get("/tutor/:id", (req, res) => {
    const id = req.params.id;
    db.query("SELECT * FROM tutor INNER JOIN pets ON tutor.id = pets.id_tutor WHERE tutor.id = ?", [id], (err, result) => {
        if (err) {
            res.send(err);
        }
        res.json(result);
    });
});


app.post('/planos', (req, res) => {
    const { valor, recorrencia, servicos, valor_mensal, servicos_avulsos, id_tutor } = req.body;

    const query = `INSERT INTO planos (valor, recorrencia, servicos, valor_mensal, servicos_avulsos, id_tutor) VALUES (?, ?, ?, ?, ?, ?)`;
    db.query(query, [valor, recorrencia, servicos, valor_mensal, servicos_avulsos, id_tutor], (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        } else {
            res.status(201).send(`Plano adicionado com o ID: ${results.insertId}`);
        }
    });
});

app.get("/planos", (req, res) => {
    const id = req.params.id;
    db.query("SELECT * FROM planos INNER JOIN tutor ON planos.id_tutor = tutor.id", (err, result) => {
        if (err) {
            res.send(err);
        }
        res.json(result);
    });
});




/* app.get("/pets/:id_tutor", (req, res) => {
    const { id_tutor } = req.params;
    db.query("SELECT * FROM pets WHERE id_tutor = ?", [id_tutor], (err, result) => {
        if (err) {
            res.send(err);
        }
        res.send(result);
    });
}); */




app.listen(3001, () => {
    console.log("rodando na porta 3001");
});