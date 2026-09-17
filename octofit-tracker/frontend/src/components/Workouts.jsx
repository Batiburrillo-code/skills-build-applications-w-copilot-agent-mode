import CollectionPage from './CollectionPage.jsx'

// Codespaces endpoint: https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/workouts/
export default function Workouts() {
  return <CollectionPage endpoint="/api/workouts/" kicker="Training / library" title="Workouts" description="A focused menu of ways to put the next mark on the board." columns={['Workout', 'Difficulty', 'Duration']} renderRow={(item) => <><td><strong>{item.name}</strong></td><td><span className="difficulty">{item.difficulty}</span></td><td>{item.duration} min</td></>} />
}