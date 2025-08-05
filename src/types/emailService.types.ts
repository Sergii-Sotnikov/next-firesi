export interface EmailTemplateParams {
  name: string;
  phone: string;
  type: string;
  time: string;
  product?: string;
  message?: string;
  consent?: boolean;
  "g-recaptcha-response": string;
}
