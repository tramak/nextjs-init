import { ILang } from '@/translate/interfaces';
import { IAction } from '@/types/action';

export interface ISettingsState {
  lang: ILang;
}

// slice
export type ISetLangAction = IAction<ILang>;
