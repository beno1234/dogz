import { TextField } from "@mui/material"
import { Field, useField, useFormikContext } from "formik";
import { NumericFormat } from "react-number-format";
import Header from "../../components/Header";


export default function ListForm(name) {
    const [field, meta, helpers] = useField(name);
    const { touched } = useFormikContext();
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
            <div style={{ display: "flex" }}>
                <Field component="select"
                    name="servicos"
                    className={`custom-select-1 ${touched.id_tutor && errors.id_tutor ? "error-field" : ""}`}
                >
                    <option>Banho</option>
                    <option>Tosa</option>
                    <option>Transporte</option>
                </Field>
                <Field
                    component="select"
                    name="recorrencia"
                    className={`custom-select-1 ${touched.id_tutor && errors.id_tutor ? "error-field" : ""}`}

                >
                    <option>Semanal</option>
                    <option>Mensal</option>
                    <option>Anual</option>
                </Field>
                <NumericFormat
                    type="number"
                    name="valor"
                    className={`custom-select-1 ${touched.id_tutor && errors.id_tutor ? "error-field" : ""}`}

                />

            </div>

        </>
    )
}