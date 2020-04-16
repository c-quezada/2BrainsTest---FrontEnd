export default function({ store, redirect }) {
  const isGuest = store.getters['firebase/isAuthenticated']

  // eslint-disable-next-line no-console
  console.log('isGuest', isGuest)

  if (isGuest) redirect({ name: '/' })
}
