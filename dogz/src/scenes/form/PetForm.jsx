import { TextField } from "@mui/material"
import { useField } from "formik";
import Header from "../../components/Header";

export default function PetForm(name) {
    const [field, meta, helpers] = useField(name);
    /*
    {
      a, b, c
    }

    {
      a, b, c
    }
    */

    return (
        <>
            <TextField
                fullWidth
                onBlur={helpers.handleBlur}
                variant="filled"
                type="text"
                label="Nome Pets"
                value={field.value.nomePets}
                onChange={(e) =>
                    helpers.setValue({ ...meta.value, nomePets: e.target.value })
                }
                name="nomePets"
                error={!!meta.touched && !!meta.errors}
                helperText={meta.touched && meta.errors}
                sx={{ gridColumn: "span 2" }}
            />
            <TextField
                fullWidth
                onBlur={helpers.handleBlur}
                variant="filled"
                type="text"
                label="apelido"
                value={field.value.apelido}
                onChange={(e) =>
                    helpers.setValue({ ...meta.value, apelido: e.target.value })
                }
                name="apelido"
                error={!!meta.touched && !!meta.errors}
                helperText={meta.touched && meta.errors}
                sx={{ gridColumn: "span 2" }}
            />
            <TextField
                fullWidth
                onBlur={helpers.handleBlur}
                variant="filled"
                type="text"
                label="Raca"
                value={field.value.raca}
                onChange={(e) =>
                    helpers.setValue({ ...meta.value, raca: e.target.value })
                }
                name="raca"
                error={!!meta.touched && !!meta.errors}
                helperText={meta.touched && meta.errors}
                sx={{ gridColumn: "span 4" }}
            />
            <TextField
                fullWidth
                onBlur={helpers.handleBlur}
                variant="filled"
                type="text"
                label="Cor"
                value={field.value.cor}
                name="cor"
                onChange={(e) =>
                    helpers.setValue({ ...meta.value, cor: e.target.value })
                }
                error={!!meta.touched && !!meta.errors}
                helperText={meta.touched && meta.errors}
                sx={{ gridColumn: "span 4" }}
            />
            <TextField
                fullWidth
                onBlur={helpers.handleBlur}
                variant="filled"
                type="text"
                label="Nascimento"
                value={field.value.nascimento}
                name="nascimento"
                onChange={(e) =>
                    helpers.setValue({ ...meta.value, nascimento: e.target.value })
                }
                error={!!meta.touched && !!meta.errors}
                helperText={meta.touched && meta.errors}
                sx={{ gridColumn: "span 2" }}
            />
            <Header subtitle="informa????es m??dicas:" />
            <TextField
                fullWidth
                onBlur={helpers.handleBlur}
                variant="filled"
                type="text"
                label="Tem alguma alergia?"
                value={field.value.nascimento}
                name="nascimento"
                onChange={(e) =>
                    helpers.setValue({ ...meta.value, nascimento: e.target.value })
                }
                error={!!meta.touched && !!meta.errors}
                helperText={meta.touched && meta.errors}
                sx={{ gridColumn: "span 2" }}
            />
            <TextField
                fullWidth
                onBlur={helpers.handleBlur}
                variant="filled"
                type="text"
                label="Alguma limita????es f??sicas? (displasia, artite, artrose, etc):"
                value={field.value.nascimento}
                name="nascimento"
                onChange={(e) =>
                    helpers.setValue({ ...meta.value, nascimento: e.target.value })
                }
                error={!!meta.touched && !!meta.errors}
                helperText={meta.touched && meta.errors}
                sx={{ gridColumn: "span 2" }}
            />
            <TextField
                fullWidth
                onBlur={helpers.handleBlur}
                variant="filled"
                type="text"
                label="Tem algum problema card??aco?"
                value={field.value.nascimento}
                name="nascimento"
                onChange={(e) =>
                    helpers.setValue({ ...meta.value, nascimento: e.target.value })
                }
                error={!!meta.touched && !!meta.errors}
                helperText={meta.touched && meta.errors}
                sx={{ gridColumn: "span 2" }}
            />
            <TextField
                fullWidth
                onBlur={helpers.handleBlur}
                variant="filled"
                type="text"
                label="Tem algum problema respirat??rio?"
                value={field.value.nascimento}
                name="nascimento"
                onChange={(e) =>
                    helpers.setValue({ ...meta.value, nascimento: e.target.value })
                }
                error={!!meta.touched && !!meta.errors}
                helperText={meta.touched && meta.errors}
                sx={{ gridColumn: "span 2" }}
            />
            <TextField
                fullWidth
                onBlur={helpers.handleBlur}
                variant="filled"
                type="text"
                label="Outros?"
                value={field.value.nascimento}
                name="nascimento"
                onChange={(e) =>
                    helpers.setValue({ ...meta.value, nascimento: e.target.value })
                }
                error={!!meta.touched && !!meta.errors}
                helperText={meta.touched && meta.errors}
                sx={{ gridColumn: "span 2" }}
            />
            <Header subtitle="Insira a data das vacinas:" />
            <TextField
                fullWidth
                onBlur={helpers.handleBlur}
                variant="filled"
                type="text"
                label="Polivalente (ex: v8, v10, etc)"
                value={field.value.nascimento}
                name="nascimento"
                onChange={(e) =>
                    helpers.setValue({ ...meta.value, nascimento: e.target.value })
                }
                error={!!meta.touched && !!meta.errors}
                helperText={meta.touched && meta.errors}
                sx={{ gridColumn: "span 2" }}
            />
            <TextField
                fullWidth
                onBlur={helpers.handleBlur}
                variant="filled"
                type="text"
                label="Raiva"
                value={field.value.nascimento}
                name="nascimento"
                onChange={(e) =>
                    helpers.setValue({ ...meta.value, nascimento: e.target.value })
                }
                error={!!meta.touched && !!meta.errors}
                helperText={meta.touched && meta.errors}
                sx={{ gridColumn: "span 2" }}
            />

            <TextField
                fullWidth
                onBlur={helpers.handleBlur}
                variant="filled"
                type="text"
                label="Gripe"
                value={field.value.nascimento}
                name="nascimento"
                onChange={(e) =>
                    helpers.setValue({ ...meta.value, nascimento: e.target.value })
                }
                error={!!meta.touched && !!meta.errors}
                helperText={meta.touched && meta.errors}
                sx={{ gridColumn: "span 2" }}
            />

            <TextField
                fullWidth
                onBlur={helpers.handleBlur}
                variant="filled"
                type="text"
                label="Gi??rdia"
                value={field.value.nascimento}
                name="nascimento"
                onChange={(e) =>
                    helpers.setValue({ ...meta.value, nascimento: e.target.value })
                }
                error={!!meta.touched && !!meta.errors}
                helperText={meta.touched && meta.errors}
                sx={{ gridColumn: "span 2" }}
            />
            <TextField
                fullWidth
                onBlur={helpers.handleBlur}
                variant="filled"
                type="text"
                label="Vermifuga????o (marca do produto)"
                value={field.value.nascimento}
                name="Vermifuga????o"
                onChange={(e) =>
                    helpers.setValue({ ...meta.value, nascimento: e.target.value })
                }
                error={!!meta.touched && !!meta.errors}
                helperText={meta.touched && meta.errors}
                sx={{ gridColumn: "span 2" }}
            />
            <TextField
                fullWidth
                onBlur={helpers.handleBlur}
                variant="filled"
                type="text"
                label="Anti-pulgas/Anti-carrapatos (marca do produto)"
                value={field.value.nascimento}
                name="pulga"
                onChange={(e) =>
                    helpers.setValue({ ...meta.value, nascimento: e.target.value })
                }
                error={!!meta.touched && !!meta.errors}
                helperText={meta.touched && meta.errors}
                sx={{ gridColumn: "span 2" }}
            />

        </>
    )
}