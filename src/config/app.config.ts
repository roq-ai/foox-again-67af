interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Admin'],
  customerRoles: ['Freelancer'],
  tenantRoles: ['Admin', 'Recruiter'],
  tenantName: 'Company',
  applicationName: 'Foox again',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Manage freelance profile', 'Apply for jobs', 'Update application status', 'View jobs'],
  ownerAbilities: [
    'Manage country data',
    'Manage freelance profiles',
    'Manage job postings',
    'Manage applications',
    'Manage hiring process',
    'Manage user accounts',
    'Manage company profiles',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/2f21bf1d-bd14-4284-9aca-8fb87cebcca6',
};
