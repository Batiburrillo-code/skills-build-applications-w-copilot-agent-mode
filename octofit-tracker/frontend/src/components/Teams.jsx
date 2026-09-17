import CollectionPage from './CollectionPage.jsx'

// Codespaces endpoint: https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/teams/
export default function Teams() {
  return <CollectionPage endpoint="/api/teams/" kicker="Collective / together" title="Teams" description="See who is moving together and how the groups stack up." columns={['Team', 'Members', 'Ranking']} renderRow={(item) => <><td><strong>{item.name}</strong></td><td>{item.members} people</td><td><span className="rank">#{item.ranking}</span></td></>} />
}