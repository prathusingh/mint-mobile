export interface AuthModel {
  userId: string | null
  userAccessToken: string | null
  userTokenExpiresIn: string | null
  userEmail: string | null
}

export const getAuthModel = (): AuthModel => ({
  userId: null,
  userAccessToken: null,
  userTokenExpiresIn: null,
  userEmail: null,
})
