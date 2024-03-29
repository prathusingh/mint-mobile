type OnboardingState = "none" | "incomplete" | "complete"

export interface AuthModel {
  userId: string | null
  userAccessToken: string | null
  userTokenExpiresIn: string | null
  userEmail: string | null
  onboardingState: OnboardingState
}

export const getAuthModel = (): AuthModel => ({
  userId: null,
  userAccessToken: null,
  userTokenExpiresIn: null,
  userEmail: null,
  onboardingState: "none",
})
