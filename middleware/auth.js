export default function({ store, redirect }) {
  const isGuest = store.getters['firebase/isAuthenticated']
  if (isGuest) redirect({ name: '/' })
}
