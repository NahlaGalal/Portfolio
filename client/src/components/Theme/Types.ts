export interface ITheme {
  theme: "light" | "dark";
  setTheme: (theme: ITheme["theme"]) => void;
}