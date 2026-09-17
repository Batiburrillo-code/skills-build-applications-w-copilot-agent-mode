import CollectionPage from './CollectionPage.jsx'

export default function Users() {
  return <CollectionPage endpoint="users" kicker="People / roster" title="Athletes" description="The people who keep the tracker in motion." columns={['Name', 'Email', 'Team']} renderRow={(item) => <><td><strong>{item.name}</strong></td><td>{item.email}</td><td>{item.team}</td></>} />
}