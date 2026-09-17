import CollectionPage from './CollectionPage.jsx'

export default function Activities() {
  return <CollectionPage endpoint="/api/activities/" kicker="Movement / latest" title="Activity log" description="Every session adds another mark to the shared rhythm." columns={['Type', 'Athlete ID', 'Duration', 'Calories']} renderRow={(item) => <><td><strong>{item.type}</strong></td><td>{item.userId}</td><td>{item.duration} min</td><td>{item.calories} kcal</td></>} />
}