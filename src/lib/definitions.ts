export interface ErrorObject {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
}

export interface CheckBoxProps {
  id: string;
  action: any;
}

export interface dashboardCardProps {
  title: string;
  data: number;
  percentage: number;
}

export type buttonProps = {
  buttonStyle: string;
  buttonSize: string;
  type: "submit" | "button";
  onClick?: any;
  text: any;
};
