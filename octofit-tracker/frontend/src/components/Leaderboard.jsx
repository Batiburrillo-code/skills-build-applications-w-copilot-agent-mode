import CollectionPage from './CollectionPage.jsx'

export default function Leaderboard() {
  return <CollectionPage endpoint="/api/leaderboard/" kicker="Competition / standing" title="Leaderboard" description="A little friendly pressure, measured in points." columns={['Rank', 'Athlete', 'Points']} renderRow={(item) => <><td><span className="rank">{String(item.rank).padStart(2, '0')}</span></td><td><strong>{item.user}</strong></td><td>{item.points} pts</td></>} />
}