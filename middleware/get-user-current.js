export default async ({ store, params }) => {
  return await store.dispatch('getCurrentUser', params)
}
