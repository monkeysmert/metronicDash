export const defaultSettings = {
  setupEmailNotifications: {
    emailNotifications: true,
    sendCopyToPersonalEmail: false
  },
  activityRelatedEmail: {
    whenToEmail: {
      youHaveNewNotifications: true,
      youAreADirectMessage: false,
      someoneAddsYouAsAConnection: false
    },
    whenToEscalateEmails: {
      uponNewOrder: true,
      newMembershipApproval: false,
      memberRegistration: false
    }
  },
  updatesFromKeenthemes: {
    newsAboutKTProducts: false,
    tipsOnGettingMore: false,
    thingsYouMissed: false,
    newsAboutKTPartners: false
  }
}
