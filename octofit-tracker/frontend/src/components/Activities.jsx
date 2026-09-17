import CollectionPage from './CollectionPage.jsx'

// Codespaces endpoint: https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/activities/
export default function Activities() {
  return <CollectionPage endpoint="/api/activities/" kicker="Movement / latest" title="Activity log" description="Every session adds another mark to the shared rhythm." columns={['Type', 'Athlete ID', 'Duration', 'Calories']} renderRow={(item) => <><td><strong>{item.type}</strong></td><td>{item.userId}</td><td>{item.duration} min</td><td>{item.calories} kcal</td></>} />
}