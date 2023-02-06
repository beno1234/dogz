import { Box, Button, Card, CardActions, CardContent, TextField, Typography } from "@mui/material";
import { FieldArray, Formik, Form, Field } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { AuthContext } from "../../contexts/auth";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import PetForm from "../form/PetForm"
import { getTutorEx } from "../../services/api";
import { NumericFormat } from 'react-number-format';
import ListForm from "./ListForm";

const Lista = () => {
    const isNonMobile = useMediaQuery("(min-width:600px)");
    const { tutor, pets, service } = useContext(AuthContext)

    // const [nome, setNome] = useState('');
    /*   const [cpf, setCpf] = useState('');
      const [instagram, setInstagram] = useState('');
      const [emergency, setEmergency] = useState('');
      const [endereco, setEndereco] = useState('');
      const [complemento, setComplemento] = useState('');
      const [email, setEmail] = useState('');
      const [cidade, setCidade] = useState('');
      const [cep, setCep] = useState('');
      const [contact, setContact] = useState('');
    
      const [nomePets, setNomePets] = useState('')
      const [apelido, setApelido] = useState('')
      const [raca, setRaca] = useState('')
      const [cor, setCor] = useState('')
      const [nascimento, setNascimento] = useState('') */




    /*
    
    
    submit values.
  
    Tutor
      id {pk}
  
    Pets
      totor => Tutor.id {fk}
  
  
    /tutor
      { ... }
  
  
    /pets
      { ..., tutor_id }
    */

    const [idTutor, setIdTutor] = useState('');





    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState([]);


    useEffect(() => {
        (async () => {
            const response = await getTutorEx();
            setUsers(response.data);
            setLoading(false);
        })();
    }, [])

    const handleFormSubmit = async (values) => {
        const ServiceResponse = await service(values);
        console.log(values)

    };

    const [forms, setForms] = useState([
        { recorrencia: '', valor: 0 }
    ]);

    const addNewForm = () => {
        setForms([...forms, { recorrencia: '', valor: 0 }]);
    };


    // const handlePetSubmit = async (e) => {
    //   e.preventDefault();
    //   pets(nomePets, apelido, raca, cor, nascimento, idTutor);
    // }



    return (


        <Box m="20px">
            <Header title="Cadastro de Planos" subtitle="Cadastre serviços e planos necessarios." />

            <Formik
                initialValues={initialValues}
                validationSchema={checkoutSchema}
                onSubmit={handleFormSubmit}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleBlur,
                    handleChange
                }) => (
                    <Form>
                        <Box
                            display="grid"
                            gap="30px"
                            gridTemplateColumns="repeat(2, minmax(0, 1fr))"
                            sx={{
                                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                            }}
                        >
                            <TextField
                                fullWidth
                                onBlur={handleBlur}
                                variant="filled"
                                type="text"
                                label="Nome do Plano"
                                value={values.servicos}
                                // onChangeCapture={handleChange}
                                onChange={handleChange}
                                name="servicos"
                                error={!!touched.servicos && !!errors.servicos}
                                helperText={touched.servicos && errors.servicos}
                                sx={{ gridColumn: "span 2" }}
                            />

                            <NumericFormat
                                label="Valor"
                                value={values.valor}
                                onValueChange={(values) => {
                                    handleChange({
                                        target: {
                                            name: 'valor',
                                            value: values.floatValue
                                        }
                                    })
                                }}
                                displayType={'input'}
                                customInput={TextField}
                                variant="filled"
                                thousandSeparator={true}
                                prefix={'R$ '}
                                onChange={handleChange}
                                sx={{ gridColumn: "span 2" }}
                                error={errors.valor && touched.valor && <div className="error-message">{errors.valor}</div>}
                                helperText={touched.valor && errors.valor}
                                decimalScale={2}
                                fixedDecimalScale={true}
                                renderText={(values) => <TextField
                                    fullWidth
                                    onBlur={handleBlur}
                                    variant="filled"
                                    type="number"
                                    label="valor"
                                    onChange={handleChange}
                                    value={values.valor}
                                    name="valor"
                                    error={errors.valor && touched.valor && <div className="error-message">{errors.valor}</div>}
                                    helperText={touched.valor && errors.valor}
                                />}
                            />

                            <FieldArray
                                name="list"
                                render={(arrayHelpers) => values.list ? values.list.length > 0 ?
                                    values.list.map((list, index) => (
                                        <Box key={index}>
                                            <ListForm name={`list.${index}`} />
                                            <Box display="flex" justifyContent="start" mt="20px">
                                                <Button color="secondary" sx={{ margin: "1rem" }} variant="contained" onClick={() => arrayHelpers.push({
                                                    servicos: "",
                                                    recorrencia: "",
                                                    valor: '',
                                                })}>
                                                    Adicionar item
                                                </Button>
                                                <Button
                                                    color="secondary"
                                                    variant="contained"
                                                    onClick={() => arrayHelpers.remove(index)}
                                                    disabled={values.list.length === 1}
                                                    sx={{ margin: "1rem" }}
                                                >
                                                    Remover item
                                                </Button>
                                            </Box>
                                        </Box>
                                    )
                                    ) : <p>Nenhuma item nessa lista</p> : <p>Lista não está definida</p>
                                }
                            />



                        </Box>

                        <Box display="flex" justifyContent="end" mt="20px">
                            <Button type="submit" color="secondary" variant="contained">
                                Cadastrar
                            </Button>
                        </Box>
                    </Form>
                )}
            </Formik>


        </Box>
    );
}

const currencyRegExp = /^\d+(.\d{1,2})?$/;

const checkoutSchema = yup.object().shape({
    servicos: yup.string().required("required"),
    recorrencia: yup.string().required("required"),
    valor: yup.string().required("required"),

});
const initialValues = {
    list: [{
        servicos: "",
        recorrencia: "",
        valor: "",
    }]
};

export default Lista;