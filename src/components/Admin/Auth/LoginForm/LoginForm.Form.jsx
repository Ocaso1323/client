import * as Yup from "yup";


export function initialValues() {
    return {
        email: "",
        password: "",
    }
}

export function validationSchema() {
    return Yup.object({
        email: Yup.string().email("el email no es valido").required("campo obligatorio"),
        password: Yup.string().required("campo obligatorio"),

    })

}

