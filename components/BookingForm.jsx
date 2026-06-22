'use client'
import { useState } from 'react'

const SOFA_SEATS = ['1-seater','2-seater','3-seater','4-seater','5-seater','6-seater','Sectional / other']
const SOFA_MATERIALS = ['Fabric','Microfibre','Leather','Faux leather','Linen','Suede','Velvet','Other / unsure']
const MATTRESS_SIZES = ['Single','King single','Double','Queen','King','Super king','Cot','Other']

function SofaList({ items, setItems }) {
  const add = () => setItems(prev => [...prev, { seats: '3-seater', material: 'Fabric' }])
  const remove = i => setItems(prev => prev.filter((_, idx) => idx !== i))
  const update = (i, key, val) => setItems(prev => prev.map((it, idx) => idx === i ? { ...it, [key]: val } : it))
  return (
    <div>
      <div style={{ display: 'grid', gap: 12, marginTop: 10 }}>
        {items.map((item, i) => (
          <div key={i} style={{ display: 'grid', gap: 8, gridTemplateColumns: 'repeat(auto-fit,minmax(140px,1fr))', alignItems: 'flex-end' }}>
            <label>Seats<select value={item.seats} onChange={e => update(i, 'seats', e.target.value)}>{SOFA_SEATS.map(s => <option key={s}>{s}</option>)}</select></label>
            <label>Material<select value={item.material} onChange={e => update(i, 'material', e.target.value)}>{SOFA_MATERIALS.map(m => <option key={m}>{m}</option>)}</select></label>
            {items.length > 1 && <button type="button" className="btn btn-outline btn-sm" onClick={() => remove(i)}>Remove</button>}
          </div>
        ))}
      </div>
      <button type="button" className="btn btn-secondary btn-sm" onClick={add} style={{ marginTop: 10 }}>+ Add another couch</button>
      <input type="hidden" name="upholstery_summary" value={items.map(it => `${it.seats} ${it.material}`).join(', ')} />
    </div>
  )
}

function MattressList({ items, setItems }) {
  const add = () => setItems(prev => [...prev, { size: 'Queen', qty: 1 }])
  const remove = i => setItems(prev => prev.filter((_, idx) => idx !== i))
  const update = (i, key, val) => setItems(prev => prev.map((it, idx) => idx === i ? { ...it, [key]: val } : it))
  return (
    <div>
      <div style={{ display: 'grid', gap: 12, marginTop: 10 }}>
        {items.map((item, i) => (
          <div key={i} style={{ display: 'grid', gap: 8, gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', alignItems: 'flex-end' }}>
            <label>Size<select value={item.size} onChange={e => update(i, 'size', e.target.value)}>{MATTRESS_SIZES.map(s => <option key={s}>{s}</option>)}</select></label>
            <label>Qty<input type="number" min="1" value={item.qty} onChange={e => update(i, 'qty', e.target.value)} /></label>
            {items.length > 1 && <button type="button" className="btn btn-outline btn-sm" onClick={() => remove(i)}>Remove</button>}
          </div>
        ))}
      </div>
      <button type="button" className="btn btn-secondary btn-sm" onClick={add} style={{ marginTop: 10 }}>+ Add another size</button>
      <input type="hidden" name="mattress_summary" value={items.map(it => `${it.qty}× ${it.size}`).join(', ')} />
    </div>
  )
}

function RugList({ items, setItems }) {
  const add = () => setItems(prev => [...prev, { width: '', length: '' }])
  const remove = i => setItems(prev => prev.filter((_, idx) => idx !== i))
  const update = (i, key, val) => setItems(prev => prev.map((it, idx) => idx === i ? { ...it, [key]: val } : it))
  return (
    <div>
      <div style={{ display: 'grid', gap: 12, marginTop: 10 }}>
        {items.map((item, i) => (
          <div key={i} style={{ display: 'grid', gap: 8, gridTemplateColumns: 'repeat(auto-fit,minmax(140px,1fr))', alignItems: 'flex-end' }}>
            <label>Width (m)<input type="number" min="0" step="0.1" value={item.width} onChange={e => update(i, 'width', e.target.value)} /></label>
            <label>Length (m)<input type="number" min="0" step="0.1" value={item.length} onChange={e => update(i, 'length', e.target.value)} /></label>
            {items.length > 1 && <button type="button" className="btn btn-outline btn-sm" onClick={() => remove(i)}>Remove</button>}
          </div>
        ))}
      </div>
      <button type="button" className="btn btn-secondary btn-sm" onClick={add} style={{ marginTop: 10 }}>+ Add another rug</button>
      <input type="hidden" name="rugs_summary" value={items.filter(it => it.width || it.length).map(it => `${it.width}m × ${it.length}m`).join(', ')} />
    </div>
  )
}

export default function BookingForm() {
  const [services, setServices] = useState([])
  const [sofas, setSofas]       = useState([{ seats: '3-seater', material: 'Fabric' }])
  const [mattresses, setMattresses] = useState([{ size: 'Queen', qty: 1 }])
  const [rugs, setRugs]         = useState([{ width: '', length: '' }])
  const [submitted, setSubmitted] = useState(false)
  const [error, setError]       = useState(false)

  const toggle = val => setServices(prev => prev.includes(val) ? prev.filter(s => s !== val) : [...prev, val])
  const has = val => services.includes(val)

  async function handleSubmit(e) {
    e.preventDefault()
    setError(false)
    const data = Object.fromEntries(new FormData(e.target))
    data.services = services
    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error()
      setSubmitted(true)
    } catch {
      setError(true)
    }
  }

  if (submitted) return <p className="notice">Thanks! A TidyRoo coordinator will confirm your booking shortly.</p>

  return (
    <form className="form-grid" id="quote-form" onSubmit={handleSubmit} style={{ marginTop: 24 }}>
      <label className="full">Full name *<input name="name" type="text" autoComplete="name" required /></label>
      <label>Phone *<input name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="04xx xxx xxx" required /></label>
      <label>Email *<input name="email" type="email" autoComplete="email" required /></label>
      <label className="full">Address / suburb *<input name="address" placeholder="e.g. 123 Boundary Rd, Carlton" autoComplete="street-address" required /></label>

      <fieldset className="full" style={{ display: 'grid', gap: 10 }}>
        <legend style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: 4 }}>Services required *</legend>
        <p className="helper-text">Select all that apply.</p>
        {[['carpet','Carpet steam cleaning'],['upholstery','Upholstery / couch cleaning'],['rugs','Rug cleaning'],['mattress','Mattress sanitising'],['tiles','Tile & grout cleaning']].map(([val, label]) => (
          <label key={val}><input type="checkbox" checked={has(val)} onChange={() => toggle(val)} />{label}</label>
        ))}
      </fieldset>

      {has('carpet') && <div className="full"><h3 style={{ marginBottom: 12 }}>Carpet details</h3><label>Number of carpeted rooms<input name="carpet_rooms" type="number" min="1" step="1" /></label></div>}
      {has('tiles')  && <div className="full"><h3 style={{ marginBottom: 12 }}>Tile &amp; grout details</h3><label>Number of tiled areas<input name="tile_areas" type="number" min="1" step="1" /></label></div>}
      {has('upholstery') && <div className="full"><h3 style={{ marginBottom: 12 }}>Upholstery details</h3><p className="helper-text">Add each couch with seat count and material.</p><SofaList items={sofas} setItems={setSofas} /></div>}
      {has('mattress')   && <div className="full"><h3 style={{ marginBottom: 12 }}>Mattress details</h3><MattressList items={mattresses} setItems={setMattresses} /></div>}
      {has('rugs')       && <div className="full"><h3 style={{ marginBottom: 12 }}>Rug details</h3><p className="helper-text">Approximate width and length in metres.</p><RugList items={rugs} setItems={setRugs} /></div>}

      <fieldset className="full" style={{ display: 'grid', gap: 10 }}>
        <legend style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: 4 }}>Extras</legend>
        <label><input type="checkbox" name="extras" value="stain-guard" />Stain guard protection</label>
        <label><input type="checkbox" name="extras" value="deodorise" defaultChecked />Deodorising</label>
        <label><input type="checkbox" name="extras" value="flood" />Flood extraction / emergency dry</label>
      </fieldset>

      <label>Preferred date<input name="date" type="date" /></label>
      <label>Preferred time window
        <select name="time">
          <option value="morning">Morning (7am–11am)</option>
          <option value="midday">Midday (11am–2pm)</option>
          <option value="afternoon">Afternoon (2pm–6pm)</option>
          <option value="after-hours">After hours (on request)</option>
        </select>
      </label>
      <label className="full">Notes<textarea name="notes" rows="4" placeholder="Room sizes, stains, parking access, pets, or special requests" /></label>

      <div className="full" style={{ display: 'flex', flexWrap: 'wrap', gap: 14, alignItems: 'center' }}>
        <button className="btn btn-primary btn-lg" type="submit">Submit booking request</button>
        <a className="btn btn-outline" href="tel:+61493100989">Call instead</a>
        <span className="helper-text">We respond within one business hour during opening times.</span>
      </div>
      {error && <p className="notice full" style={{ borderColor: '#dc2626', background: '#fef2f2', color: '#dc2626' }}>Something went wrong. Please call us on 0493 100 989.</p>}
    </form>
  )
}
