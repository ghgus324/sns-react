import { StringSchema } from "yup";
import iconv from "iconv-lite";

function isValidChar(str: string): boolean {
  const buffer_eucjp = iconv.encode(str, "eucjp");
  const string_utf8 = iconv.decode(buffer_eucjp, "eucjp");
  return str === string_utf8;
}

export function validCharactors(this: StringSchema, msg?: string, emSizeChar?: boolean): StringSchema {
  return this.test({
    name: "validCharactors",
    message: msg || "invalid charactor",
    test: (value: string | undefined) => {
      if (value === undefined) {
        return true;
      }

      if (isValidChar(value) === false) {
        return false;
      }

      //그외 처리

      //반각문자 체크
      if (emSizeChar !== true) {
        if (!value.match(/^[\x20-\x7e]+$/)) {
          return false;
        }
      }

      //특수문자 처리
      const specialPattern = /[<>{}]/g;

      if (specialPattern.test(value) === true) {
        return false;
      }

      return true;
    },
  });
}
