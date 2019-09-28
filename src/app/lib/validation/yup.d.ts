import { StringSchema } from "yup";

declare module "yup" {
  interface StringSchema {
    //문자체크
    validCharactors(this: StringSchema, msg?: string, emSizeChar?: boolean): StringSchema;
    //자기가 따로 체크할 부분 입력
  }
}
