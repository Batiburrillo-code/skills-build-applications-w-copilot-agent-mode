import { useEffect, useState } from 'react'
import { fetchCollection } from '../api.js'

export default function CollectionPage({ endpoint, title, kicker, description, columns, renderRow }) {
  const [items, setItems] = useState([])
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    let active = true
    fetchCollection(endpoint).then((data) => {
      if (active) { setItems(data); setStatus('ready') }
    }).catch(() => active && setStatus('error'))
    return () => { active = false }
  }, [endpoint])

  return (
    <section className="page-section">
      <div className="page-heading">
        <div>
          <span className="eyebrow">{kicker}</span>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <div className="record-count"><strong>{String(items.length).padStart(2, '0')}</strong><span>records</span></div>
      </div>
      {status === 'loading' && <div className="state-message">Syncing with the activity log...</div>}
      {status === 'error' && <div className="state-message error">Could not reach the API. Check that the backend is running on port 8000.</div>}
      {status === 'ready' && <div className="table-wrap">
        <table><thead><tr>{columns.map((column) => <th key={column}>{column}</th>)}</tr></thead>
          <tbody>{items.map((item, index) => <tr key={item._id || item.id || index}>{renderRow(item, index)}</tr>)}</tbody>
        </table>
        {!items.length && <div className="state-message">No records yet.</div>}
      </div>}
    </section>
  )
}