import { IErrorResult} from "../../models/pagedata";

export interface IAPICommonState<T>{
    isloading: boolean;
    status: number;
    data: T | null;
    error: IErrorResult | null;
}