import CollectionPage from './CollectionPage.jsx'

// Codespaces endpoint: https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/users/
export default function Users() {
  return <CollectionPage endpoint="/api/users/" kicker="People / roster" title="Athletes" description="The people who keep the tracker in motion." columns={['Name', 'Email', 'Team']} renderRow={(item) => <><td><strong>{item.name}</strong></td><td>{item.email}</td><td>{item.team}</td></>} />
}