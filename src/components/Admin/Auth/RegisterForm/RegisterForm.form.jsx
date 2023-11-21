import * as yup from "yup"

export function initiaValues() {
    return {
        email: "",
        password: "",
        repeatPassword: "",
        conditionsAccepted: false,
    }
}
export function validationSchem(){
    return yup.object({
       firstname: yup.string().required("campo obligatorio") ,
       lastname: yup.string().required("campo obligatorio"),
       email: yup.string().email("el mail no es valido").required("campo obligatorio"),
       password:yup.string().required("campo oblifatorio"),
       repeatPassword:yup.string().required("campo obligatorio").oneOf([yup.ref("password")], "las contraseñas deben ser iguales"),
       conditionsAccepted: yup.bool().isTrue(true),
    })
}