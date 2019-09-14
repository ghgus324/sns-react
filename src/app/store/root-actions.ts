import {IUIAction} from "./ui/ui-actions";
import {IAPiAction} from "./api/api-actions";

export type IRootAction = IUIAction | IAPiAction;