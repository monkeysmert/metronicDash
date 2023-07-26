export const profileDetailsInitValues = {
  avatar: "/media/avatars/300-1.jpg",
  fName: "Max",
  lName: "Smith",
  company: "Keenthemes",
  contactPhone: "044 3276 454 935",
  companySite: "keenthemes.com",
  country: "",
  language: "",
  timeZone: "",
  currency: "",
  communications: {
    email: false,
    phone: false
  },
  allowMarketing: false
}

export const updateEmail = {
  newEmail: "support@keenthemes.com",
  confirmPassword: ""
}

export const updatePassword = {
  currentPassword: "",
  newPassword: "",
  passwordConfirmation: ""
}

export const connectedAccounts = {
  google: true,
  github: true,
  stack: false
}

export const emailPreferences = {
  successfulPayments: false,
  payouts: true,
  freeCollections: false,
  customerPaymentDispute: true,
  refundAlert: false,
  invoicePayments: true,
  webhookAPIEndpoints: false
}

export const notifications = {
  notifications: {
    email: true,
    phone: true
  },
  billingUpdates: {
    email: true,
    phone: true
  },
  newTeamMembers: {
    email: true,
    phone: false
  },
  completeProjects: {
    email: false,
    phone: true
  },
  newsletters: {
    email: false,
    phone: false
  }
}

export const deactivateAccount = {
  confirm: false
}
